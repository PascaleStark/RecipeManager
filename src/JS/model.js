import { timeout } from "./helper";
import regeneratorRuntime from "regenerator-runtime";

export const loadRecipe = async function (url) {
  try {
    //load recipe object
    const fetchPro = fetch(url, {
      method: "GET",
    });
    const resp = await Promise.race([fetchPro, timeout(30)]);
    const data = await resp.json();
    console.log(data);

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
