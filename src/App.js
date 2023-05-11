// import logo from "./logo.svg";
import "./App.css";
import Nav from "./Nav";
import Header from "./header";
import Gallery from "./sectionGallery";
import Team from "./srctionTeam";
import Testimonials from "./sectionteTimonials";
import Blog from "./sectionBlog";
import Video from "./sectionVideo";
import Counter from "./sectionCounter";
import Footer from "./footer";
import Cart from "./Cart";
import { useState } from "react";
import { CartProvider } from "react-use-cart";
import { BrowserRouter, Route } from "react-router-dom";
import { useRef } from "react";

function App() {
  const [opencart, setOpenCart] = useState(false);
  const openCart = () => setOpenCart(!opencart);
  const goToFooter = useRef(null);

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Nav openCart={openCart} goToFooter={goToFooter} />
          <Header />
          <Gallery />
          <Route path="team" component={Team} />

          <Testimonials />
          <Blog />
          <Video />
          <Counter />
          <Cart opencart={opencart} />
          <Footer goToFooter={goToFooter} />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
