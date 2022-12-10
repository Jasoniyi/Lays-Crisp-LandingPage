import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBellSlash } from "@fortawesome/free-regular-svg-icons";
import Banner from "./components/Banner";
import About from "./components/About";
import Category from "./components/Category";
import Testimonials from "./components/testimonials";

function App() {
  return (
    <div className="">
      <Banner />
      <About />
      <Category />
      <Testimonials />
    </div>
  );
}

export default App;
