import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

//rafce
const App = () => {
  return (
    <React.Fragment>
      <main>
        <Header />
        <h1>Dolce Vita</h1>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
