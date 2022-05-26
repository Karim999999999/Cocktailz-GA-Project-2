import React from 'react';
import { getSearchByName } from '../lib/api'
import CocktailsCard from './CocktailsCard';


const AlcoholType = ({ userSearches }) => {

  
  const [cocktails, setCocktails] = React.useState(null);
  
  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getSearchByName(userSearches);
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

  
  

  return (
    <section className="section">
      <div className="container">
        <div className="columns is-multiline">
          {!cocktails ? (
            <></>
          ) : (
            
            filterCocktails().map((item) =>  {
              return (
                <CocktailsCard key={item.strDrink} {...item}/>    
              )
            }
            ))}
        </div>
      </div>
    </section>
  );

}


export default AlcoholType;