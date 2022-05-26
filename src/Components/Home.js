import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <section className='hero is-fullheight-with-navbar is-warning'>
        <div id='head-of-page' className='hero-body'>
          <div className='container' id='hero-text'>
            <p className='title has-text-centered'>
              <span>🍸</span> Cocktailz
            </p>
            <p className='subtitle has-text-centered'><b> The #1 stop for all your drink recipies!</b></p>
            <div className='buttons is-centered'>
              <Link to='/random' className='button is-danger'>
                <strong>Fetch Me A Drink</strong>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container mt-5'>
          <h2 id='title-of-section' className='title has-text-centered is-danger'>About Us</h2>
          <hr />
          <p className='has-text-centered mb-6'>Everyone loves drinks, whether you drink them with alcohol or not, cocktails are tasty treats which generations of bartenders have worked on to perfect. As two professional mixers, we have combined our knowledge of years in industry to bring you the most ellaborate menu of drink options with over 1000 choices.</p>
        </div>
      </section>
      <section>
        <div className='container mt-5 mb-6'>
          <h2 id='title-of-section' className='title has-text-centered is-danger'>Instructions</h2>
          <hr />
          <p className='has-text-centered mb-3'><b>We try to make finding a good drink as easy as possible:</b></p>
          <p className='has-text-centered'>1. Use the Fetch me a Drink button to grab a random drink from our options</p>
          <p className='has-text-centered'>2. Our All The Cocktails page will give you a list of cocktails by the most common alcohol types</p>
          <p className='has-text-centered'>3. Already know what you are looking for? Use the search field in the nav bar to get shown even more drink recpies</p>
          <p className='has-text-centered'>4. Remember to drink Responsibly! Alcoholism is not fun..</p>

        </div>
      </section>
    </>
  );
};

export default Home;
