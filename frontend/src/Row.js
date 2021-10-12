import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer'
import Comments from "./Comments"
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [movieClick, setMovieClick] = useState(false)
    const [movieId, setMovieId] = useState(0);
    // const [getMovie, setGetMovie] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("")
    // let history = useHistory();
    // const baseURL = "https://api.themoviedb.org/3"
    const baseImageUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        fetch(`${fetchUrl}`)
            .then(resp => resp.json())
            .then(data => setMovies(data))
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    }

    function handleClick(moviename) {
        if (trailerUrl) {
            setTrailerUrl("")
        }
        else {
            movieTrailer(moviename || "")
                .then(url => {
                    const urlParams = new URLSearchParams(new URL(url).search)
                    setTrailerUrl(urlParams.get("v"))
                }).catch((error) => console.log(error));
        }
    }

    function handleReview(movieId) {
        console.log(movieId)
    }
    function handleImageClick(movie_id) {
        setMovieId(movie_id)
        setMovieClick(!movieClick)
    }

    // console.log(getMovie)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <><img key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={() => handleImageClick(movie.id)}
                    /> {movieId === movie.id && movieClick && <><button className="mov__button" onClick={() => handleClick(movie?.original_name || movie?.title || movie?.name)}>Play Trailer</button>
                        <button className="mov__button" onClick={() => handleReview(movie.id)}>Leave Review</button>
                        <button className="mov__button">View Movie Details</button> </>}</>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row

