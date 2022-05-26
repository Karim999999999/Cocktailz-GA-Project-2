import { useParams } from 'react-router-dom';
import React from 'react';
import { getSearchById } from '../lib/api';

const CocktailShow = () => {
  const { idDrink } = useParams();

  
  const [cocktail, setCocktail] = React.useState(null);
  React.useEffect(() => {

    const getData = async () => {
      try {
        const { data } = await getSearchById(idDrink);
        setCocktail(data.drinks[0]);
      } catch (err) {
        console.error(err);
      }
    };
    getData();
  }, [idDrink]);


  return (
    <section className='hero is-fullheight-with-navbar mt-6'>
      <div className='hero-body'>
        <div className="container">
          {!cocktail ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2 className='title has-text-centered'>{cocktail.strDrink}</h2>
              <hr />
              <div className='columns'>
                <div className='column is-half'>
                  <figure className='image'>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                  </figure>
                </div>
                <div className='column is-half'>
                  <h4 className='title is-4'>
                    <span role='img' aria-label='plate'>
                      🍽
                    </span>
                    Ingredients
                  </h4>
                  <hr />
                  <ul>
                    <li>
                      <i>{cocktail.strMeasure1} </i>
                      <b>{cocktail.strIngredient1} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure2}</i>
                      <b>{cocktail.strIngredient2} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure3}</i>
                      <b>{cocktail.strIngredient3} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure4}</i>
                      <b> {cocktail.strIngredient4} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure5}</i>
                      <b>{cocktail.strIngredient5} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure6}</i>
                      <b>{cocktail.strIngredient6} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure7}</i>
                      <b>{cocktail.strIngredient7} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure8}</i>
                      <b>{cocktail.strIngredient8} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure9} </i>
                      <b>{cocktail.strIngredient9} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure10}</i>
                      <b>{cocktail.strIngredient10} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure11}</i>
                      <b>{cocktail.strIngredient11} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure12}</i>
                      <b>{cocktail.strIngredient12} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure13}</i>
                      <b>{cocktail.strIngredient13} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure14}</i>
                      <b>{cocktail.strIngredient14} </b>
                    </li>
                    <li>
                      <i>{cocktail.strMeasure15}</i>
                      <b>{cocktail.strIngredient15} </b>
                    </li>
                  </ul>
                  <hr />
                  <h4 className='title is-4'>
                    <span role='img' aria-label='wave'>
                      🍸
                    </span>
                    Directions
                  </h4>
                  <hr />
                  <p>{cocktail.strInstructions}</p>
                  <p>
                    <b>Recomended Glass:</b> {cocktail.strGlass}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CocktailShow;
