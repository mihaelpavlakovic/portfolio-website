import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </React.Fragment>
  );
}

export default App;
