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
To implement the features above, the application sends HTTP requests to the backend (or uses REST APIs). In all cases, the sent data and the received data is in the JSON Format. The backend part of the project is done by Dani Stark https://github.com/danistark1/recipesAPI.


