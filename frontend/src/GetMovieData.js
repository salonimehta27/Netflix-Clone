import React from 'react'
import { useEffect } from 'react'

export default function GetMovieData() {

    baseURL = "https://api.themoviedb.org/3"
    useEffect(() => {
        fetch(`${baseURL}`)
            .then(resp => resp.json())
            .then(console.log)
    }, [])


    return (
        <div>

        </div>
    )
}

