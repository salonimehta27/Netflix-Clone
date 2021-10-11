import React from 'react'

function MovieDetails({ movie }) {

    const image_baseUrl = "https://image.tmdb.org/t/p/original/"
    return (
        <div>
            <img src={`${image_baseUrl}${movie.poster_path}`} alt="movie poster" />
            "Hello"
        </div>
    )
}

export default MovieDetails
