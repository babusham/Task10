import React from 'react';
import Banner from '../components/Banner';
import Navsection from '../components/Navsection';
import Place from '../components/Place';

const Home = () => {
  return (
    <section>
      <Banner />
      <br />
      <div className="text-container text-center mt-4">
        <h3>Tourist Places To Tamil Nadu</h3>
        <h3>Here Are The Top Places To Visit In Tamil Nadu In 2023</h3>
      </div>
      <br />
      <Navsection />
      <Place />
    </section>
  );
};

export default Home;