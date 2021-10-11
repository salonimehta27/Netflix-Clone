import React, { useState, useEffect } from 'react'
import "./Banner.css"
function Banner({ fetchUrl }) {
    const [movie, setMovie] = useState([])
    // const baseURL = "https://api.themoviedb.org/3"
    useEffect(() => {
        fetch(`${fetchUrl}`)
            .then(resp => resp.json())
            .then(data => setMovie(() => {
                return data[Math.floor(Math.random() * data.length - 1)]
            }))
    }, [])
    // console.log(movie)
    return (
        <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">{movie?.overview}</h1>
            </div>
        </header>
    )
}

export default Banner
