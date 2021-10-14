import React from 'react'
import { useParams } from 'react-router-dom'

function MovieDetails() {

    const { id } = useParams()
    console.log(id);
    // console.log(props.location)
    return (
        <div style={{ marginTop: "3rem", backgroundColor: "white" }}>
            "Hello"
            {/* <img src={`${baseImageUrl}${movie.poster_path}`}></img> */}
        </div>
    )
}

export default MovieDetails

