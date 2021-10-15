import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { useLocation } from 'react-router-dom';
import Reviews from './Reviews';

function MovieDetails({ category }) {
    console.log(category)

    const usePathname = () => {
        const location = useLocation();
        return location.pathname;
    }
    // debugger
    // const getPath = usePathname()
    const getPath = window.location.pathname
    const getPathId = parseInt(getPath.split("/").pop())


    // debugger
    console.log(getPath)
    const [getMovie, setGetMovie] = useState([])
    // console.log(window.location.pathname)
    useEffect(() => {
        fetch(`http://localhost:9292${getPath}`)
            .then(resp => resp.json())
            .then(data => setGetMovie(data))
    }, [])


    // const { id } = useParams()
    // console.log(id);
    // console.log(props.location)
    const baseImageUrl = "https://image.tmdb.org/t/p/original/"
    return (
        <>
            <div style={{ marginTop: "3rem", backgroundColor: "white", position: "relative" }}>
                <img src={`${baseImageUrl}${getMovie.poster_path}`} style={{ width: "300px", height: "400px" }}></img>
                <img src={`${baseImageUrl}${getMovie.backdrop_path}`} style={{ width: "300px", height: "400px" }}></img>
                <h2>{getMovie?.name || getMovie?.title || getMovie?.original_name}</h2>
                <p>{getMovie.overview}</p>
            </div>
            <div>
                <Reviews movieId={getPathId} category={category} />
            </div>
        </>
    )
}

export default MovieDetails

