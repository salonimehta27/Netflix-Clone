import './App.css';
import { useEffect, useState } from 'react'
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {


  return (
    <div className="app">
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title="Trending now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

    </div>
  );
}

export default App;
