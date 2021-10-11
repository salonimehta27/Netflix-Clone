import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    var history = useHistory();
    // const baseURL = "https://api.themoviedb.org/3"
    const baseImageUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        fetch(`${fetchUrl}`)
            .then(resp => resp.json())
            .then(data => setMovies(data))
    }, [fetchUrl])
    function handleImageClick(id) {
        history.push(`/trending/${id}`)
    }
    console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name}
                        onClick={handleImageClick(movie.id)} />
                ))}
            </div>
        </div>
    )
}

export default Row

