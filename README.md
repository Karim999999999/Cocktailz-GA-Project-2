# CockTailz - SEI Project 2

## Introduction:

Cocktailz is a front end application running on a public Cocktail Recipe API. The project was created in 48 hours in a group of two (with [Oscar][(https://support.west-wind.com](https://github.com/SwagapottamusRex))). The front-end app features categorization and search-filter controls to direct users toward the right drink for their occasion.

## The Brief

- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - organise your components in the components folder in your src directory.
- **The app can have a router** - with several "pages", this is up to your disgression and if it makes sense for your project.
- **Include wireframes** - that you designed before building the app.
- **Be deployed online** and accessible to the public - we will deploy the apps together at the end of the project.
- A **working application**, hosted somewhere on the internet
- A **link to your hosted working app** in the URL section of your Github repo
- A **git repository hosted on Github**, with a link to your hosted project, and frequent commits dating back to the _very beginning_ of the project
- **A `readme.md` file** with:
- Explanations of the **technologies** used
  - A couple of paragraphs about the **general approach you took**
  - **Installation instructions** for any dependencies
  - Link to your **wireframes** – sketches of major views / interfaces in your application
- Descriptions of any **unsolved problems** or **major hurdles** your team had to overcome

## Technologies Used

### Back-End

- Public API

### Front-End

- React
- CSS
- Axios
- Bulma
- React-Router-Dom

### Development Tools

- Adobe XD (wireframing)
- Postman
- Git & GitHub
- Heroku (deployment)
- VS Code

## Product Specifications:

1. Home Page, with Hero banner, and text sections utilizing Flexbox - Karim
2. Alcohol Warning Page - Oscar
3. Search Bar For All Drinks: Not just cocktails - Karim
4. All Cocktails Page showing by Liquor Type with a search bar filter. - Karim
5. Random Cocktail button - Oscar
6. NavBar with search panel - Karim

## Approach:

Oscar and I collaborated on this project using a combination of git and code steering. We enjoyed this approach as it allowed us to divide work, while solving more complex coding problems together. We decided on prioritising these features based on the limitations of the API routes querying parameters. Dividing drinks by liquor type, was because there was an API for drinks by category, the random drink was provided by the random drink API, search bar was using the get drink by name API.

## Axios for pulling data:

Axios was used to make server requests to the sites back end.

# Main Components:

## Cocktail Card:

```js
const CocktailsCard = ({ strDrink, strDrinkThumb, idDrink }) => {
  return (
    <div className="column is-one-quarter-desktop is-one-third-tablet">
      <Link
        to={`/cocktails/${idDrink}`}
        onClick={
          <Link to={`/cocktails/${idDrink}`} className="navbar-item"></Link>
        }
      >
        <div className="card $card-header-background is-warning">
          <div className="card-header">
            <h2 className="card-header-title">{strDrink}</h2>
          </div>
          <div className="card-image">
            <figure className="image image-is-1by1">
              <img src={strDrinkThumb} alt={strDrink} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  );
};
```

A cocktail card designed using Bulma class tags. The expression takes key features: the name of the drink, a thumbnail of the drink, and the Id of the drink. The Id is used by the React Router Dom to link each individual card to the Id page for it.

## Cocktail Card Board:

```js
const [cocktails, setCocktails] = React.useState(null);
```

The state is set for the cocktails as this will be the data that needs to be passed to the components.

```js
React.useEffect(() => {
  const getData = async () => {
    try {
      const { data } = await getSearchByIngredient(alcohol);

      setCocktails(data.drinks);
    } catch (err) {
      console.log('hi', err);
    }
  };
  getData();
}, []);
```

The data is pulled from the API via the Axios function getSearchIngredient(alcohol). Here alcohol is fed as a prop into the component.

## Search Bar

```
 function filterCocktails(){
   if (userSearches === null){
     return cocktails
   } else {
     return cocktails.filter((drink) => {
       return drink.strDrink.toLowerCase().includes(userSearches)
     })
   }
 }
```

This function activates the search bar. If the search bar is empty, it returns a list of all the cocktails, if it does contain a drink, then it filters the search field from the userSearch prompt, thereby filtering the drinks list to match the search, and feeding that through to the cards.

## Format Title

```

 function formatTitle(){
   if (filterCocktails().length === 0) {
     return <></>
   } else {
     return <h2 className='alcohol-type'> {alcohol}</h2>;
   }
 }

```

The formal title function returns the title for each cardboard based on the type of alcohol. When no more drinks exist under the liquor type with the search prompt, then nothing is returned thereby removing the liquor type title from the display.
Improvement: Capitalize and remove ‘\_’ from titles using string manipulation techniques.

## Loading Display

```js
   <section className="section">
     {!cocktails ? (<></>) : (
       formatTitle()
     )
     }
     <div className="container">
       <div className="columns is-multiline">
         {!cocktails ? (
           <p>Loading...</p>
         ) : (
           filterCocktails().map((item) =>  {
             return (
               <CocktailsCard key={item.strDrink} {...item}/>
             )
           }
           )
         )}
       </div>
     </div>
   </section>
 );
```

Contained within a tertiary statement the ‘if there are no cocktails to display’, nothing is returned. While the cocktails load “loading…” is displayed. Filter-cocktails is invoked and mapped to display a card for each cocktail in the list. If nothing is in the search bar then all the alcohol types are displayed.

## All Cocktails Sorted by Liquor Type:

This page contains a list of all the drinks divided between each liquor category.

```
const alcoholTypes = ['Light_rum', 'Applejack', 'Gin', 'Dark_rum', 'Sweet_Vermouth', 'Scotch', 'Strawberry_schnapps', 'Apricot_brandy', 'Triple_sec', 'Southern_Comfort', 'Tequila', 'Vodka', 'Red_wine', 'Rum', 'Cider']
```

Alcohol types are placed into an array in order to determine which ones to display on the cocktails page.

```
         <div className='columns is-multiline'>
           {alcoholTypes.map((alcohol) => {
             return <AlcoholType key={alcohol} alcohol={alcohol} userSearches={whatUserTypes}/>;
           })}
         </div>
```

This function maps across each category within the alcohol type array. This displays individual alcohol boards for each liquor type.

```
           <input
             className="input"
             placeholder='Search Cocktailz'
             name='search'
             onChange={handleChange}
             value={whatUserTypes}
           ></input>
```

This input field is used to filter through the cocktails based on the text imputed.

## Individual Cocktail Page:

This page gets the data for a single cocktail by its record ID using Axios and displays the data into a custom page displaying more features like the ingredients list and instructions.

## NavBar:

The navbar was built according to the Dulma documentation for a mobile-optimized navbar with a burger menu. Beyond that the navbar contains a search input, the search input decides whether or not the search panel with all the drinks is displayed or not using the standard card components, however, it is fed through to another card-board component called SearchByNamee which uses the getSearchByName API to return a filtered list. When a drink is clicked, the state is set back to an empty WhatUserTypes.

## Wins, Challenges, Bugs:

### Wins:

Using Bulma was interesting and helped us to piece together the components of the site with a lot more ease.

### Challenges:

Working with git was challenging at first and caused us to waste lots of valuable time on this 2 day project. We were also superbly limited by the constraints of the API which we picked which made building some features more challenging than we were hoping. While Bulma was good for quick formatting, it was fidgety to work with for better customizations. Due to the short build time this left us with a less asthetic design for the product.

### Bugs to fix and improvements:

Fix the dynamic burger menu in the navbar
Use string manipulation to edit the titles of the drink categories in the get drinks by liquor type page.
Add filter by alcohol type buttons to the get drinks by liquor type page.
Improve Styling on the front page
Create a loading animation for the home page.
