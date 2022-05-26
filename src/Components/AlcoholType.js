import React from 'react';
import { getSearchByIngredient } from '../lib/api'
import CocktailsCard from './CocktailsCard';


const AlcoholType = ({ alcohol, userSearches }) => {

  
  const [cocktails, setCocktails] = React.useState(null);
  
  
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

  function filterCocktails(){
    if (userSearches === null){
      return cocktails
    } else {
      return cocktails.filter((drink) => {
        return drink.strDrink.toLowerCase().includes(userSearches)
      })
    }
  }
  console.log(cocktails);

  function formatTitle(){
    if (filterCocktails().length === 0) {
      return <></>
    } else {
      return <h2 className='alcohol-type'> {alcohol}</h2>;
    }
  }
  

  return (
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

}


export default AlcoholType;