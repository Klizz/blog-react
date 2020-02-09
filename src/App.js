import React from "react";
import MainBlog from "./components/MainBlog";
import Footer from "../src/components/Footer";
import Navbar from "../src/components/Navbar";
import ShowGreeting from "./components/Greeting";
import ShowDate from "./components/ShowDate";
import Section from './components/Section';
import "./materialize/css/materialize.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <ShowDate />
        <ShowGreeting />
        <MainBlog
          image={
            <img
              src="https://ichef.bbci.co.uk/news/660/cpsprodpb/C3E5/production/_110794105_a4324281-d473-4819-bac8-a3bcdb8b433f.jpg"
              alt="Not found"
              width="100%"
            />
          }
          title="Seven female scientists you may not have heard of - but should know about"
          author="Deborah A. Hughes"
          post="Teach First has launched the STEMinism camapign, calling to close gender gaps in science and maths careers.
          It says no female scientists were mentioned in the GCSE science curriculum, while just two were referred to in three double science GCSE specifications from 
          the major exam boards. In comparison, more than 40 male scientists or their discoveries were mentioned."
        />

        < Section />

        < Section />

        < Section />

      </div>
      <Footer />
    </div>
  );
}

export default App;
