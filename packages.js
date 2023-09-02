import React from 'react'
import Chennai from "../components/Packages/chennai";
import Rameshwaram from "../components/Packages/rameshwaram";
import Kodaikanal from "../components/Packages/kodaikanal";
import Ooty from "../components/Packages/ooty";
import Kanyakumari from "../components/Packages/kanyakumari";
import Kumbakonam from "../components/Packages/kumbakonam";
import Madurai from "../components/Packages/madurai";
import Yercaud from "../components/Packages/yercaud";
import Theni from "../components/Packages/theni";
import Hogenakkal from "../components/Packages/hogenakkal";

const Packages = () => {
    return (
      <div className="container">
        <div className="image-wrapper">
            <img 
            src={require('../pics/cover.jpg')} 
            style={{width:"100%",height:"auto"}}
            alt="temple" />
        </div>
            <h1 className='text-center fw-bold mb-5'>Tamilnadu Tour Packages</h1>
            <p className='text-center'>
                Tamil Nadu, the land of 33, 000 temples, is one of the popular Tourist Places in India and it boasts the largest tourism industry in India. Tamil Nadu is renowned for its temple towns and heritage sites, hill stations, waterfalls, national parks, local cuisine and the fabulous wildlife and scenic beauty. Typically, 3-4 days is required to explore best Tamilnadu Tourism Packages. Chennai, Madurai, Trichy, Mahabalipuram, Thanjavur, Vellore, Kanyakumari, Rameshwaram, and Kanchipuram are the top Tamilnadu Tourist Places. Besides, pristine beauty of hill stations like Ooty and Kodaikanal leaves the visitors mesmerized with its irresistible charm.
            <br />
            <br />
                Explore our Tamilnadu Tourism guide for complete details.
            </p>
            <div>
                <h2>01. Chennai To All District</h2>
            </div>
        <div>
          
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
        </div>   
      </div>
    )
  }
  
  export default Packages;