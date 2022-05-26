import React from 'react';
import { Link } from 'react-router-dom';
import SearchByName from './SearchByName';

const alcoholTypes = ['Light_rum', 'Applejack', 'Gin', 'Dark_rum', 'Sweet_Vermouth', 'Scotch', 'Strawberry_schnapps', 'Apricot_brandy', 'Triple_sec', 'Southern_Comfort', 'Tequila', 'Vodka', 'Red_wine', 'Rum', 'Cider']

function NavBar() {
   
  const [whatUserTypes, setWhatUserTypes] = React.useState('')

  function handleChange(event){
    setWhatUserTypes(event.target.value)
  } 

  document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  });
  return (
    <>
      <header>
        <nav className='navbar is-danger is-fixed-top'>
          <div className='container'>
            <div className='navbar-brand'>
              {/* this is the logo */}
              <div className='navbar-item'>
                <Link to='/' className='navbar-item' onClick={<Link to='/' className='navbar-item'></Link>}>
                  <p className='logo'>
                    🍸 <b>Cocktailz</b>
                  </p>
                </Link>
                <a
                  role='button'
                  className='navbar-burger'
                  aria-label='menu'
                  aria-expanded='false'
                >
                  <span aria-hidden='true'></span>
                  <span aria-hidden='true'></span>
                  <span aria-hidden='true'></span>
                </a>
              </div>
            </div>
            {/* here are the links */}
            <div className='navbar-menu'>
              <div className='navbar-start'>
                <Link to='/cocktails' className='navbar-item' onClick={<Link to='/cocktails' className='navbar-item'></Link>}>
                  All The Cocktailz
                </Link>
                <Link to='/drinkresponsibly' className='navbar-item' onClick={<Link to='/drinkresponsibly' className='navbar-item'></Link>}>
                  Drink Responsibly
                </Link>
              </div>
            </div>
            {/* this is the search bar */}
            <div className='navbar-end is-hidden-touch'>
              <div className='field'>
                <input
                  className='input is-normal is-warning'
                  placeholder='Search Cocktail'
                  name='search'
                  onChange={handleChange}
                  value={whatUserTypes}
                ></input>
              </div>
              <div className='navbar-item' onClick={<Link to='/random' className='button is-warning'></Link>}>
                <div className='buttons' id='randomise'>
                  <Link to='/random' className='button is-warning'>
                    <strong>Fetch Me A Drink</strong>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {!whatUserTypes ? (
        <></>
      ) : (
        <section className='hero is-fullheight-with-navbar mt-6'>
          <div className="hero-body">
            <div className='container'>
              <div className='columns is-multiline'>
                <SearchByName key={whatUserTypes} userSearches={whatUserTypes} />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default NavBar;
