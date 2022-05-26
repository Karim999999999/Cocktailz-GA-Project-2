import React from 'react';
import { Link } from 'react-router-dom';

const CocktailsCard = ({ strDrink, strDrinkThumb, idDrink }) => {

  return (
    <div className='column is-one-quarter-desktop is-one-third-tablet'>
      <Link to={`/cocktails/${idDrink}`} onClick={<Link to={`/cocktails/${idDrink}`} className='navbar-item'></Link>}>
        <div className='card $card-header-background is-warning'>
          <div className='card-header'>
            <h2 className='card-header-title'>{strDrink}</h2>
          </div>
          <div className='card-image'>
            <figure className='image image-is-1by1'>
              <img src={strDrinkThumb} alt={strDrink} />
            </figure>
          </div>
        </div>
      </Link>
    </div>
  ); 
};

export default CocktailsCard;
