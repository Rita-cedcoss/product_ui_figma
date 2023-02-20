import React from 'react';
import './App.css';
import Footer from './Footer';
import About from './Product_UI/About';
import Navbar from './Product_UI/Navbar';
import ProductSlider from './Product_UI/ProductSlider';
import './Product_UI/product_ui.css'
import SummerComponent from './Product_UI/SummerComponent';
// import Carousel1 from './Product_UI/Carousel1';
function App() {
  return (
    <div className='container'>
       <Navbar/>
       {/* slider trending */}
       <ProductSlider heading="Trending Now"/>
       {/* about */}
       {/* summer */}
       <SummerComponent/>
       <ProductSlider heading="Recommended For You"/>
       <About/>
       <ProductSlider heading="New in Accessories"/>
       {/* */}
       <Footer/>
    </div>
   
  );
}

export default App;
