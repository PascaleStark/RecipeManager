import { timeout } from "./helper";
import regeneratorRuntime, { async } from "regenerator-runtime";

export const addRecipe = async function (url, uploadData) {
  try {
    console.log(url);
    console.log(uploadData);
    const fetchPro = fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(uploadData),
    });
    const resp = await Promise.race([fetchPro, timeout(10)]);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
    return data;
  } catch (err) {
    throw new Error(`Something went wrong, please try again later! ${err}`);
  }
};

export const loadRecipe = async function (url) {
  try {
    //load recipe object
    const fetchPro = fetch(url, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
    console.log(resp);
    const data = await resp.json();
    console.log(data);

    //refactoring the recipe object
    const recipeObject = data[0];
    console.log(recipeObject);
    const recipe = {
      id: recipeObject.id,
      title: recipeObject.name,
      publisher: recipeObject.addedBy,
      category: recipeObject.category,
      prepartionTime: recipeObject.prepTime,
      cookingTime: recipeObject.cookingTime,
      servings: recipeObject.servings,
      url: recipeObject.url,
      ingredients: recipeObject.ingredients,
      directions: recipeObject.directions,
      favourites: recipeObject.favourites,
      featured: recipeObject.featured,
    };
    return recipe;
  } catch (err) {
    console.log(err);
  }
};

export const searchRecipe = async function (url) {
  try {
    //load recipe object
    const fetchPro = fetch(url, {
      method: "GET",
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
    console.log(resp);
    // const headersRead = resp.headers;
    // headersRead.forEach((header) => console.log(header));
    // console.log(headers);
    const data = await resp.json();
    console.log(data);

    // if (!data) throw new Error(`No recipe is found`);

    //refactoring the recipe object
    const recipes = data.map((res) => ({
      id: res.id,
      title: res.name,
      publisher: res.addedBy,
      category: res.category,
      prepartionTime: res.prepTime,
      cookingTime: res.cookingTime,
      servings: res.servings,
      url: res.url,
      ingredients: res.ingredients,
      directions: res.directions,
      favourites: res.favourites,
      featured: res.featured,
    }));
    return recipes;
  } catch (err) {
    console.log(err);
  }
};

export const editFavourites = async function (url) {
  try {
    console.log(url);
    const fetchPro = fetch(url, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
    });
    const resp = await Promise.race([fetchPro, timeout(10)]);
    console.log(resp);
    const data = await resp.json();
    console.log(data);
    if (!resp.ok) throw new Error(`${data.message} (${resp.status})`);
    return data;
  } catch (err) {
    throw new Error(`Something went wrong, please try again later! ${err}`);
  }
};

/////FETCH HEADERS FOR PAGINATION//////
export const getHeaders = async function (url) {
  try {
    //get response
    const fetchPro = fetch(url, {
      method: "GET",
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
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
