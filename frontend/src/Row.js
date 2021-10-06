import React, { useState, useEffect } from 'react'
import "./Row.css";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const baseURL = "https://api.themoviedb.org/3"
    const baseImageUrl = "https://image.tmdb.org/t/p/original/"
    useEffect(() => {
        fetch(`${baseURL}${fetchUrl}`)
            .then(resp => resp.json())
            .then(data => setMovies(data.results))
    }, [fetchUrl])

    // console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie => (
                    <img key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${baseImageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.name} />
                ))}
            </div>
        </div>
    )
}

export default Row

