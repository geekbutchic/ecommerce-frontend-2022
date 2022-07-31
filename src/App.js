import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
//imd script - import destructuring

//rafce
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="py-2">
        <Container>
          <h1>MAIN</h1>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
