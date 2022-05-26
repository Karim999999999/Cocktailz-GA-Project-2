import React from 'react';

const Warning = () => {
  return (
    <>
      <section className='hero is-full-height-with-navbar' >
        <div className="hero-body">
          <div className='container mt-5'>
            <h2 className='title has-text-centered is-danger' id='hello'>
              Drink Responsibly
            </h2>
            <hr />
            <p className='has-text-centered mb-2'>
              1. Understand both how much alcohol you are having and how much you
              should have
              <hr />
              2. Eat before (and during) drinking sessions
              <hr />
              3. Count your drinks
              <hr />
              4. Slow your intake with alcohol-free drinks
              <hr />
              5. Skip the drinking games and shots
              <hr />
              <p>
                6. Do <b>NOT</b> drink and drive
              </p>
              <hr />
              7. Just say NO if you are...
              <ul>
                <li>Pregnant or planning a pregnancy</li>
                <li>On meds or feeling depressed</li>
                <li>Breastfeeding</li>
                <li>Underage</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Warning;
