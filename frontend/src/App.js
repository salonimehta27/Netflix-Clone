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
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} categoryLink="/netflix_originals" isLargeRow />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} categoryLink="/trending" />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} categoryLink="/top_rated" />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} categoryLink="/action" />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} categoryLink="/comedy" />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} categoryLink="/horror" />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} categoryLink="/romance" />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} categoryLink="/documentaries" />
          </Route>
          <Route path="netflix_originals/:id">
            <MovieView fetchURL={requests.fetchNetflixOriginals} />
          </Route>
          <Route path="/trending/:id">

          </Route>
          <Route path="*">
            <h1 style={{ marginTop: "50px", backgroundColor: "white" }}>404 page not found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
