import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from './screens/HomeScreen'
//imd script - import destructuring

//rafce
const App = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="py-2">
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
