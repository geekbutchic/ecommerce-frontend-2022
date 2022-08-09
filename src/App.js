import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

//imd script - import destructuring

//rafce - functional arrow component
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="py-2">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
