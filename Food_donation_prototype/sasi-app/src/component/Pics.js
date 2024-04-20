import React, { useState } from 'react';
import './Pics.css';
import { Link } from 'react-router-dom';
// import Navbar from './Navbar';



const Pics= ( ) => {
  
    const images = [
        'https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/420941071_1034390067856265_4261128330458119114_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_ohc=-ZdCsY4gGrgAX_b5xqa&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAStpXr3LV93MXymnZioPJ3lnKBvCdZPfPFEUM19kGQsQ&oe=65B596C1',
        'https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/420955519_1034390421189563_7780165570185157498_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=DpjH0CEDZNIAX9xgEcE&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfAY5y4gkkPByz-KE38JBOT6w0JV5sb0EUmv8WM4O6qP-Q&oe=65B573D7',
        'https://scontent.fhyd5-1.fna.fbcdn.net/v/t39.30808-6/420847191_1034390604522878_7443256373047756077_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=_G29KaTqIEAAX_zUcEP&_nc_ht=scontent.fhyd5-1.fna&oh=00_AfC-dQoaH9CqIv0fYkZPA6VCsHM3_PdBiL6mUhb_JYwyUw&oe=65B553DE',
        // Add more image URLs as needed
      ];
      


  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return ( 
  <>
  {/* <Navbar/> */}
    <div className="carousel">
    
   
      <button onClick={prevSlide} className="carousel__btn carousel__btn--prev">
        &lt;
      </button>
      <img
        src={images[activeIndex]}
        alt={`Slide ${activeIndex}`}
        className="carousel__img"
      />


      <button onClick={nextSlide} className="carousel__btn carousel__btn--next">
        &gt;
      </button> 
      </div>
       <div className="btn1">
      <Link className="neon-button" to='/donar'>Donar</Link> </div>
      
      <div className="btn2">
      <Link className="neon-button" to='/ngo'> Ngo</Link> </div>
      
      
      <div className="head my-4">
        <h1>DONATE FOR THE LIFE OF THE CHILDREN!</h1>
      </div>
      <div className="para">
        <p>Food donation plays a crucial role in addressing the pervasive issue of hunger and food insecurity that persists globally. In many parts of the world, millions of individuals, including children and families, struggle to access sufficient and nutritious food on a daily basis. Food donation serves as a vital mechanism for redistributing surplus or unused food from individuals, businesses, and organizations to those in need. By facilitating the channeling of excess food to food banks, shelters, and community organizations, food donation not only helps alleviate immediate hunger but also contributes to the reduction of food waste, which is a significant environmental and ethical concern. This process creates a symbiotic relationship between those with surplus food resources and those experiencing food shortages, fostering a sense of community and shared responsibility.

Moreover, food donation plays a pivotal role in times of crises and emergencies, such as natural disasters, economic downturns, or global health pandemics. During these challenging periods, vulnerable populations often face exacerbated hardships, making access to food even more precarious. Timely and well-coordinated food donations can be a lifeline for affected communities, providing sustenance and support when traditional food supply chains may be disrupted. Additionally, food donation programs contribute to building resilient communities by encouraging social cohesion, empathy, and a collective commitment to addressing the root causes of food insecurity. As societies become more interconnected, recognizing the importance of food donation not only as a short-term solution but as a sustainable and compassionate response to food inequities is paramount in promoting the well-being of individuals and fostering a more equitable world.</p>
      </div>
     </>
   
  );
};
export default Pics;
