import './App.css';
import { useEffect, useState } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import MovieView from './MovieView';
import Nav from './Nav';

function App() {


  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Banner fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
          </Route>
          <Route path="netflix_originals/:id">
            <MovieView fetchURL={requests.fetchNetflixOriginals} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
