import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Row from './Row';
import { requests, categoryComments } from './requests';
import Banner from './Banner';
import MovieView from './MovieView';
import Nav from './Nav';
import MovieDetails from './MovieDetails';

function App() {
  return (
    <div className="app">
      <Nav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/netflix_originals/:id">
            <MovieDetails />
          </Route>
          <Route exact path="/">
            <Banner fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} categoryLink="/netflix_originals" categoryComment={categoryComments.netflixOriginalComments} isLargeRow />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} categoryLink="/trending" categoryComment={categoryComments.trendingComments} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} categoryLink="/top_rated" categoryComment={categoryComments.topRatedComments} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} categoryLink="/action" categoryComment={categoryComments.actionComments} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} categoryLink="/comedy" categoryComment={categoryComments.comedyComments} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} categoryLink="/horror" categoryComment={categoryComments.horrorComments} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} categoryLink="/romance" categoryComment={categoryComments.romanceComments} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} categoryLink="/documentaries" categoryComment={categoryComments.documentaryComments} />
          </Route>

          <Route path="/top_rated/:id">
            <MovieDetails />
          </Route>
          <Route path="/romance/:id">
            <MovieDetails />
          </Route>
          <Route path="/trending/:id">
            <MovieDetails />
          </Route>
          <Route path="/comedy/:id">
            <MovieDetails />
          </Route>
          <Route path="/horror/:id">
            <MovieDetails />
          </Route>
          <Route path="/action/:id">
            <MovieDetails />
          </Route>
          <Route path="/documentaries/:id">
            <MovieDetails />
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
