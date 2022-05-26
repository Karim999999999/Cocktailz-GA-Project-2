import React from 'react';
import { getRandom } from '../lib/api';



const Random = () => {

  const [random, setRandom] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getRandom();
        setRandom(data.drinks[0])
      } catch (err) {
        console.log('hi', err);
      }
    };
    getData();
  }, []);


  return (
    <section className='hero is-fullheight-with-navbar mt-6'>
      <div className='hero-body'>
        <div className='container'>
          {!random ? (
            <p>Loading...</p>
          ) : (
            <div>
              <h2 className='title has-text-centered'>{random.strDrink}</h2>
              <hr />
              <div className='columns'>
                <div className='column is-half'>
                  <figure className='image'>
                    <img src={random.strDrinkThumb} alt={random.strDrink} />
                  </figure>
                </div>
                <div className='column is-half'>
                  <h4 className='title is-4'>Ingredients</h4>
                  <hr />
                  <ul>
                    <li>
                      <i>{random.strMeasure1} </i>
                      <b> {random.strIngredient1} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure2}</i>
                      <b> {random.strIngredient2} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure3}</i>
                      <b> {random.strIngredient3} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure4}</i>
                      <b> {random.strIngredient4} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure5}</i>
                      <b> {random.strIngredient5} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure6}</i>
                      <b> {random.strIngredient6} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure7}</i>
                      <b> {random.strIngredient7} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure8}</i>
                      <b>{random.strIngredient8} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure9} </i>
                      <b>{random.strIngredient9} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure10}</i>
                      <b>{random.strIngredient10} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure11}</i>
                      <b>{random.strIngredient11} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure12}</i>
                      <b>{random.strIngredient12} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure13}</i>
                      <b>{random.strIngredient13} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure14}</i>
                      <b>{random.strIngredient14} </b>
                    </li>
                    <li>
                      <i>{random.strMeasure15}</i>
                      <b>{random.strIngredient15} </b>
                    </li>
                  </ul>
                  <hr />
                  <h6 className='title is-4'>Glass Type:</h6>
                  <hr />
                  <p>{random.strGlass}</p>
                  <hr />
                  <h3><b>How to Prepare:</b></h3>
                  <hr />
                  <div>
                    {!random.strInstructions ? (
                      <></>
                    ) : (
                      <div>
                        <p>Instructions: {random.strInstructions}</p>
                        <hr />
                      </div>
                    )}
                    {!random.strInstructionsFR ? (
                      <></>
                    ) : (
                      <div>
                        <p>Instructions: {random.strInstructionsFR}</p>
                        <hr />
                      </div>
                    )}
                    {!random.strInstructionsIT ? (
                      <></>
                    ) : (
                      <div>
                        <p>Istruzioni: {random.strInstructionsIT}</p>
                        <hr />
                      </div>
                    )}
                    {!random.strInstructionsES ? (
                      <></>
                    ) : (
                      <div>
                        <p>Instrucciones: {random.strInstructionsES}</p>
                        <hr />
                      </div>
                    )}
                    {!random.strInstructionsDE ? (
                      <></>
                    ) : (
                      <div>
                        <p>Anweisungen: {random.strInstructionsDE}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}


export default Random;