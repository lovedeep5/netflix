import React from "react";
import requests from "./requests";
import Row from "./Row";
import Banner from "./Banner";
import Footer from "./Footer";
import Header from "./Header"
import './App.css';

function App() {
  return (
    <div className="App">
    <Header />
      <Banner />      
      <Row title="NETFLIX" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated Movies" fetchURL={requests.fetchOriginals} landscape/>
      <Row title="Populars" fetchURL={requests.fetchPopular} landscape />
      <Footer />
    </div>
  );
}

export default App;
