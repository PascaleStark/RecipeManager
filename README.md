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

# More details about the project and How to use it

- Project's Design and responsiveness: <br>
The project is responsive. It is built with a Desktop-first strategy that accounts for bigger and for smaller screens using media queries. Breakpoints selection is based on average sizes of groups of devices in portrait and landscape modes as well as following the points where the design breaks. 

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
  - layout with Flexbox and CSS grids
  - CSS positioning
  - Other CSS properties (backdrop-filter, transform, [background-image](https://github.com/PascaleStark/RecipeManager/blob/295922a1eab1f27e6ebd32537958a5fdcdd22482/src/sass/layout/_main-section.scss#L8) to create a filter of an image , center divs with [position absolute](https://github.com/PascaleStark/RecipeManager/blob/480379ddfd7b362183e961612a269821f76970f5/src/sass/components/_search.scss#L2) and margin: x auto 


# Credits
- APIs: [Dani Stark](https://github.com/danistark1)
- Logo: [hatchful](https://www.hatchful.shopify.com)
- Main picture: [unsplash](https://unsplash.com/@priscilladupreez)
- Other recipe cards pictures: [unsplash](https://www.unsplash.com)
- SVG icons: [icomoon](https://www.icomoon.io)
