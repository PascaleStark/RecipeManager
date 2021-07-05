import { timeout } from "./helper";
import regeneratorRuntime, { async } from "regenerator-runtime";
import { URL } from "./config";

export const state = {
  recipe: {},
  search: {
    query: "",
  },
  url: "",
  pageNum: 1,
  deleteID: "",
  imageFile: [],
};

const renderRecipeObj = function (data) {
  //console.log(data);
  const results = data.map((res) => ({
    id: res.id,
    title: res.name,
    publisher: res.addedBy,
    category: res.category,
    cookingTime: res.cookingTime,
    prepTime: res.prepTime,
    servings: res.servings,
    url: res.url,
    ingredients: res.ingredients,
    directions: res.directions,
    favourites: res.favourites,
    featured: res.featured,
    imageUrl: res.imageUrl,
  }));
  return results;
};

export const addRecipe = async function (url, uploadData) {
  try {
    const fetchOptions = fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const resp = await Promise.race([fetchOptions, timeout(10)]);
    if (!resp.ok)
      throw new Error(`Server responded with a status (${resp.status})`);
    const data = await resp.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const loadRecipe = async function (url) {
  try {
    //load recipe object
    const fetchOptions = fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    if (!resp.ok)
      throw new Error(`Server responded with a status (${resp.status})`);
    const data = await resp.json();
    console.log(data);
    //refactoring the recipe object
    const recipe = renderRecipeObj(data);
    console.log(recipe);
    return recipe[0];
  } catch (err) {
    throw err;
  }
};

export const searchRecipes = async function (url, query) {
  try {
    //load recipe object
    const fetchOptions = fetch(url, {
      method: "GET",
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    if (!resp.ok)
      throw new Error(
        `Something went wrong. Server responded with a status (${resp.status})`
      );
    const data = await resp.json();
    //catch url
    this.state.url = url;
    //update query
    this.state.search.query = query;
    //refactoring the recipe object
    this.state.recipe = renderRecipeObj(data);
    console.log(this.state.recipe);
    return {
      recipes: this.state.recipe,
      query: this.state.search.query,
      url: this.state.url,
    };
  } catch (err) {
    throw err;
  }
};

export const editFavourites = async function (url) {
  try {
    console.log(url);
    const fetchOptions = fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resp = await Promise.race([fetchOptions, timeout(10)]);
    console.log(resp);
    if (!resp.ok)
      throw new Error(
        `Recipe could not be added to your favourites list, please try again later! Server responded with status (${resp.status})`
      );
    const data = await resp.json();
    console.log(data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const searchRecipesByPage = async function (pageNum) {
  try {
    //load recipe object
    const fetchOptions = fetch(`${this.state.url}&page=${pageNum}`, {
      method: "GET",
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    const data = await resp.json();
    // if (!data) throw new Error(`No recipe is found`);
    // //refactoring the recipe object
    this.state.recipe = renderRecipeObj(data);
    console.log(this.state.recipe);
    return {
      recipes: this.state.recipe,
    };
  } catch (err) {
    console.log(err);
  }
};

/////FETCH HEADERS FOR PAGINATION//////
export const getHeaders = async function () {
  try {
    //get response
    const fetchOptions = fetch(`${this.state.url}&page=${this.state.pageNum}`, {
      method: "GET",
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    const headersObj = {};
    for (let pair of resp.headers.entries()) {
      headersObj[pair[0]] = pair[1];
    }
    const pagesCount = headersObj["recipes-pagescount"];
    const totalItems = headersObj["recipes-totalitems"];
    const paginationInfo = [pagesCount, totalItems];
    return paginationInfo;
  } catch (err) {
    console.log(err);
  }
};

export const setDeleteID = function (id) {
  this.state.deleteID = id;
};

export const deleteRecipe = async function () {
  try {
    //send delete request
    const fetchOptions = fetch(`${URL}/delete/${this.state.deleteID}`, {
      method: "DELETE",
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    if (!resp.ok)
      throw new Error(
        `Could not delete this recipe, please try again later! Server responded with status ${resp.status}`
      );
    console.log(resp);
    return resp;
  } catch (err) {
    throw err;
  }
};

export const updateImageFile = function (imageFile) {
  state.imageFile = imageFile;
  console.log(state.imageFile);
};

export const saveImageFile = async function (url) {
  try {
    console.log(url);
    const key = state.imageFile[0];
    const value = state.imageFile[1];
    console.log(key, value);
    let formData = new FormData();
    formData.append(key, value);
    console.log(formData);
    //load recipe object
    const fetchOptions = fetch(url, {
      method: "POST",
      body: formData,
    });
    const resp = await Promise.race([fetchOptions, timeout(30)]);
    console.log(resp);
    if (!resp.ok)
      throw new Error(
        `Something went wrong. Server responded with a status (${resp.status})`
      );
    // const data = await resp.json();
    // console.log(data);
    //refactoring the recipe object
    // this.state.recipe = renderRecipeObj(data);
    // console.log(this.state.recipe);
    return resp;
  } catch (err) {
    throw err;
  }
};
