import React from 'react';
import './App.css';
import Footer from './Footer';
import About from './Product_UI/About';
import Navbar from './Product_UI/Navbar';
import ProductSlider from './Product_UI/ProductSlider';
import './Product_UI/product_ui.css'
import SummerComponent from './Product_UI/SummerComponent';
function App() {
  return (
    <div className='container'>
       <Navbar/>
       {/* slider trending */}
       <ProductSlider heading="Trending Now"/>
       {/* summer */}
       <SummerComponent/>
      {/* product slider */}
       <ProductSlider heading="Recommended For You"/>
       <About/>
       <ProductSlider heading="New in Accessories"/>
       {/*Footer */}
       <Footer/>
    </div>
   
  );
}

export default App;
