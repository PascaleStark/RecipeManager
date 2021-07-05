# RecipeManager

# Description of the project
As the title suggests, this is an application that allows the user to organize recipes. The application was designed from scratch (a blank HTML page). It was build using HTML5, SASS (CSS preprocessor), and for the biggest part, Vanilla JavaScript. The JS code is managed according to a Model-View-Controller (#MVC) architecture pattern to account for scalability, maintainability and expandability. To bundle scripts, the application uses Webpack module bundler.

# Features
To organize recipes in a flexible and practical way, many features were built in this project where the user can:

- Search a recipe using one or more keywords
- Render search results in pages of six recipes each
- Filter search results per catogory
- View a recipe
- Add a recipe to a favourites list
- Add a recipe to a featured list
- Add a new recipe
- Edit a recipe
- Delete a recipe
 

| User Stories  | Features      |
| ------------- | ------------- |
| As a user, I want to be able to search recipes using one or more keywords to find new and multiple ideas  | Implement a **search** functionality that sends an API request to get the data on submit. Display the search results in a results section using **cards** components and add pagination for a better organization |
| As a user, I want to be able to filter searched recipes by category  | Implement a **filter** search functionality that filters search results according to a selected category |
| As a user, I want to be able to view the entire recipe when I click on it | Implement a **View recipe** button on each card to render the recipe in a scrollable modal section by inserting a dynamic html element  |
| As a user, I want to be able to add a recipe to the dataBase of the existing recipes | Implement an **add recipe** functionality to open a form, enter the details, validate form on the client's side and send an API request on submit to add the recipe details to the database |
| As a user, I want to be able to edit a recipe I added whenever I make improvements (add new ingredients, change the directions etc.) | Implement an options functionality with an **edit** button to edit a recipe by feeding its data and ID back to the form (ID is returned in a hidden input tag), perform changes, and re-submit the form using the same API endpoint with a PATCH method |
| As a user, I want to be able to delete a recipe | Add a delete button to the options functionality in order to **delete** a recipe. Alert user before deletion |
| As a user, I want to be able to bookmark my favorite recipes for easy access later | Implement the **heart icon** functionality on each card component that, on click, sends a request to the backend in order to change the boolean value of a favourites' property. | 
| As a user, I want to be able to find the recipes I added and to see my favourites list whenever I use the app | Display the list of **favourites** in the results section in the form of card components and add pagination for a better organization |
| As a user, I want to see my featured recipes whenever i open (load) the application | Implement the **star icon** functionality on each card component that, on click, sends a request to the backend in order to change the boolean value of a featured property |
 
# Features FlowChart
<p align="center">
    <img src="https://github.com/PascaleStark/RecipeManager/blob/main/src/img/Architecture/RecipeManageFlowChart.cmap.jpg" />
</p>

# API Endpoints
To implement the features above, the application sends HTTP requests to the backend (or uses APIs). In all cases, the sent data and the received data is in the JSON Format. The backend part of the project is done by Dani Stark https://github.com/danistark1/recipesAPI.

# More details about the project's design and architecture

1. Project's Design and responsiveness: <br>
- Desktop-first approach<br>
The project is responsive. It is built with a Desktop-first strategy that accounts for bigger and for smaller screens using media queries. [Breakpoints](https://github.com/PascaleStark/RecipeManager/blob/8d3fec97a68268840962459509aa417859bc7f2d/src/sass/abstracts/_mixins.scss#L54) selection is based on average sizes of groups of devices in portrait and landscape modes as well as following the points where the design breaks. 

See the below example for responsiveness of the header section that transforms to a burger menu for devices with a screen size smaller than 600px.

<p align="center">
    <img src="https://github.com/PascaleStark/RecipeManager/blob/main/src/img/screenshot-howToUseProject/resp-Header1.png" />
</p>

<p align="center">
    <img src="https://github.com/PascaleStark/RecipeManager/blob/main/src/img/screenshot-howToUseProject/resp-Header2.png" />
</p>

<p align="center">
    <img src="https://github.com/PascaleStark/RecipeManager/blob/main/src/img/screenshot-howToUseProject/resp-Header3.png" />
</p>
<br>
<br>

- 7-1 CSS architechture with SASS <br>
CSS styling is based on the 7-1 CSS architecture with SASS where 7 folders are created in the same SASS folder (Abstracts, base, components, layout, pages, thems, and vendors). Not all of them are required for this project. See the src folder for more details https://github.com/PascaleStark/RecipeManager/tree/main/src/sass

- CSS concepts and featured used in this project: <br>
  - layout with [Flexbox](https://github.com/PascaleStark/RecipeManager/blob/b919ec735bd387e54ae3fd7733946350a341d512/src/sass/layout/_results-section.scss#L1) and CSS [grids](https://github.com/PascaleStark/RecipeManager/blob/d604d9a3b253daaaccffef1757c157feffe540fe/src/sass/components/_recipeCard.scss#L3)
  - CSS [positioning](https://github.com/PascaleStark/RecipeManager/blob/e8c45d0473bfbae0b63712d00c84014b6c047f02/src/sass/components/_recipeCard.scss#L23)
  - Other CSS properties (backdrop-filter, transform, [background-image](https://github.com/PascaleStark/RecipeManager/blob/295922a1eab1f27e6ebd32537958a5fdcdd22482/src/sass/layout/_main-section.scss#L8) to create a filter of an image , center divs with [position absolute](https://github.com/PascaleStark/RecipeManager/blob/480379ddfd7b362183e961612a269821f76970f5/src/sass/components/_search.scss#L2) and margin: x auto, [webkit-input-placeholder](https://github.com/PascaleStark/RecipeManager/blob/480379ddfd7b362183e961612a269821f76970f5/src/sass/components/_search.scss#L2), [::after](https://github.com/PascaleStark/RecipeManager/blob/e8c45d0473bfbae0b63712d00c84014b6c047f02/src/sass/components/_recipeCard.scss#L27) pseudo-element to maintain a fixed image aspect ratio etc.) 

2. Project's architecture and patterns <br>
- MVC architecture <br>
In this project, we use Vanilla JS in a [Model](https://github.com/PascaleStark/RecipeManager/blob/main/src/JS/model.js#L1)-[View](https://github.com/PascaleStark/RecipeManager/tree/main/src/JS/view)-[Controller](https://github.com/PascaleStark/RecipeManager/blob/main/src/JS/index.js) architecture pattern structure. One [model](https://github.com/PascaleStark/RecipeManager/blob/main/src/JS/model.js#L1) js file (module) takes care of the communication with the backend by sending http request using ES6 async/await. One [controller](https://github.com/PascaleStark/RecipeManager/blob/main/src/JS/index.js) index.js file that controls communication with the model and the view. A publisher-subscriber pattern is used to invoke a handler function in the view in order to send the data from the UI to the controller.  


 ```js //In controller:
  
//Add a recipe
const controlAddRecipe = async function (url, uploadData) {
  try {
    //1. render spinner
    addRecipeView.renderSpinner();
    //1. Add Recipe
    const result = await model.addRecipe(url, uploadData);
    //2. Render Success Message
    addRecipeView.renderSuccessMessage();
    //3. close Success Message
    setTimeout(function () {
      addRecipeView.closeMessage();
      //location.reload();
    }, TIMEOUT);
    //4. send imageFile
    controlImageFile();
    //5. post the image
    model.saveImageFile(`${URL}/upload/${result[0].id}`);
    //6. reload page
    location.reload();
  } catch (err) {
    //Render fail message
    console.log(err);
    addRecipeView.renderFailMessage(err);
  }
};

//Event handlers using Publisher-Subscriber pattern
  const init = function () {
  addRecipeView.addFormEventHandler(controlAddRecipe);
};
init();

//In addRecipeView:
 addFormEventHandler(handler) {
    var self = this;
    this._form.addEventListener("submit", function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      self.extractImageFile(dataArr);
      const postData = dataArr.filter((pair) => pair[0] !== "file");
      const postData2 = postData.filter(
        (pair) => !(pair[0] === "id" && pair[1] === "")
      );
      const data = Object.fromEntries(postData2);
      this.reset();
      handler(URL, data);
    });
```
The [view](https://github.com/PascaleStark/RecipeManager/tree/main/src/JS/view)  is a folder that contains the different views of the different functionalities of the project. Each view is an ES6 class (parent or child that extends the parent). Children classes use prototypal inheritance to access props or methods of a parent class. 

# More details about how to use the project
  
# Credits
- APIs: [Dani Stark](https://github.com/danistark1)
- Logo: [hatchful](https://www.hatchful.shopify.com)
- Main picture: [unsplash](https://unsplash.com/@priscilladupreez)
- Other recipe cards pictures: [unsplash](https://www.unsplash.com)
- SVG icons: [icomoon](https://www.icomoon.io)
