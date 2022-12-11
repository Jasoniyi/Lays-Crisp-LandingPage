import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import About from "./components/About";
import Category from "./components/Category";
import Testimonials from "./components/testimonials";
import FindStore from "./components/findStore";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Banner />
      <About />
      <Category />
      <Testimonials />
      <FindStore />
      <Footer />
    </div>
  );
}

export default App;
