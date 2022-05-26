import React from 'react';

import AlcoholType from './AlcoholType';



const alcoholTypes = ['Light_rum', 'Applejack', 'Gin', 'Dark_rum', 'Sweet_Vermouth', 'Scotch', 'Strawberry_schnapps', 'Apricot_brandy', 'Triple_sec', 'Southern_Comfort', 'Tequila', 'Vodka', 'Red_wine', 'Rum', 'Cider']
function Cocktails(){

  const [whatUserTypes, setWhatUserTypes] = React.useState('')

  function handleChange(event){
    setWhatUserTypes(event.target.value)
  } 


  return (
    <section className='hero is-fullheight-with-navbar'>
      <div className="hero-body">
        <div className="container mt-6">
          <div className="field">
            <input
              className="input"
              placeholder='Search Cocktailz'
              name='search'
              onChange={handleChange}
              value={whatUserTypes}
            ></input>
          </div>
          <div className='columns is-multiline'>
            {alcoholTypes.map((alcohol) => {
              return <AlcoholType key={alcohol} alcohol={alcohol} userSearches={whatUserTypes}/>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cocktails;
