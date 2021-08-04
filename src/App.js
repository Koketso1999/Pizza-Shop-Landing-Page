import React from "react";
import { BrowserRouter as Router} from "react-router-dom";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import { productData, productDataTwo } from "./components/Products/data";

import { GlobalStyle } from "./globalstyles";

function App() {
  return (
    <Router>
      <GlobalStyle/>
     <Hero />
     <Products heading='Choose Your Favourite' data={productData} />
  <Feature />
  <Products heading='Sweet Treat for You' data={productDataTwo} />
<Footer />
    </Router>
  );
}

export default App;
