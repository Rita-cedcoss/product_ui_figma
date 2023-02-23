import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./components/components.css";
import SummerComponent from "./components/Product";
import Carousel from "./components/Carousel";
import Banner from "./components/Banner";
import Product from "./components/Product";
function App() {
  return (
    <div className="container">
      <Navbar />
      {/* carousel for trending */}
      <Carousel heading="Trending Now" />
      {/* summer product */}
      <Product />
      {/* carousel for recommended */}
      <Carousel heading="Recommended For You" />
      <Banner />
      {/* carousel for accessories */}
      <Carousel heading="New in Accessories" />
      {/*Footer */}
      <Footer />
    </div>
  );
}

export default App;
