import React, { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import MovieDetails from './MovieDetails';

function MovieView({ fetchURL }) {
    console.log(fetchURL)
    const { id } = useParams();
    const [getMovie, setMovie] = useState([]);

    useEffect(() => {
        fetch(`${fetchURL}/${id}`)
            .then((resp) => resp.json())
            .then((data) => setMovie(data))
    }, [])
    return (
        <div>
            {/* <MovieDetails movie={getMovie} /> */}
        </div>
    )
}

export default MovieView
