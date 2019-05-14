## THE MEAL DEAL

### link 
<a href="https://eemontemayor-meal-planner-app.now.sh/">live link </a>


###

You can make your own account by registering OR log in with user name "Demo" and password "q1Q!demopw"
          
Click on the Browser to search for delicious meals and add them to your bookmarks
         
Click on the Planner to open up your calendar then click on a day to add either your own meals OR from the browser
        

### API documentation
    
    GET /meals    
            get all user meals

    GET /meals/:date
            get all user meals for particular day


    POST /meals
            Post a meal as a saved bookmark

    POST /meals/:date
            Post a meal for a particular day


    DELETE /meals/:date
            Delete meal for a particular day


### screenshots
<div align='center'>
    <img src="./appPics/calendar.png" width="400px"/> 
</div>
<div align='center'>
    <img src="./appPics/browseMeals.png" width="400px"/> 
</div>
<div align='center'>
    <img src="./appPics/addMeal.png" width="400px"/> 
</div>


### summary
This is a meal planner app.
    
The user can browse/search for meals on the 'edamam' website 
and bookmark those meals for later.

The user can open up their calendar and click on a day.

After clicking on a day, the user can either add their own 
meals to that day or browse meals from 'edamam' and add the
meal to that particular day.



### future improvements
User will be able to view their meal history when adding a meal.
User will be able to see their meals of the day when hovering over a calendar day.
User will be able to search by either dish-type or cuisine type when using MealBrowser Component
User will be able to add a meal to a day when viewing their bookmarks from the add-Meal page




### technologies
This app utilizes HTML, CSS, React, Node, Express, and PostgreSQL

API used:<a href="https://developer.edamam.com/edamam-docs-recipe-api">  Edamam Recipe Search API </a>