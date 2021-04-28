import { timeout } from "./helper";
import regeneratorRuntime from "regenerator-runtime";

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
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
    //console.log(resp);
    const data = await resp.json();
    //console.log(data);

    //refactoring the recipe object
    const recipeObject = data[0];
    console.log(recipeObject);
    const recipe = {
      title: recipeObject.name,
      publisher: recipeObject.addedBy,
      category: recipeObject.category,
      prepartionTime: recipeObject.prepTime,
      cookingTime: recipeObject.cookingTime,
      servings: recipeObject.servings,
      url: recipeObject.url,
      ingredients: recipeObject.ingredients,
      directions: recipeObject.directions,
    };
    return recipe;
  } catch (err) {
    console.log(err);
  }
};
