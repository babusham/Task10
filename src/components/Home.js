import React from 'react';
import Banner from './Banner';
import Chennai from '../places/Chennai';
import Rameshwaram from '../places/Rameshwaram';
import Kodaikanal from '../places/Kodaikanal';
import Ooty from '../places/Ooty';
import Kanyakumari from '../places/Kanyakumari';
import Kumbakonam from '../places/Kumbakonam';
import Madurai from '../places/Madurai';
import Yercaud from '../places/Yercaud';
import Theni from '../places/Theni';
import Hogenakkal from '../places/Hogenakkal';
import Navsection from './Navsection';

const Home = () => {
  return (
    <section>
      <Banner />
      <div className="text-container text-center mt-5">
        <h3>Tourist Places To Tamil Nadu</h3>
        <h3>Here Are The Top Places To Visit In Tamil Nadu In 2023</h3>
      </div>
      <Navsection />
      <Chennai />
      <Rameshwaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yercaud />
      <Theni />
      <Hogenakkal />
    </section>
  );
};

export default Home;