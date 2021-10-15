import React from 'react'
import { useEffect, useState } from 'react'

function Reviews({ movieId, category }) {

    const [comment, setComment] = useState([])
    const [showComments, setShowComments] = useState(false)

    console.log(movieId)
    console.log(category)

    useEffect(() => {
        fetch(`http://localhost:9292${category}`)
            .then(resp => resp.json())
            .then(data => setComment(data))
        setShowComments(!showComments)
    }, [])
    // function handleReviews() {
    //     fetch(`http://localhost:9292${category}`)
    //         .then(resp => resp.json())
    //         .then(data => setComment(data))
    //     setShowComments(!showComments)
    // }
    console.log(comment)
    const commentFilter = comment.filter(x => x.netflix_original_id == movieId)
    // debugger

    return (
        <div style={{ backgroundColor: "white" }}>
            {/* <button onClick={handleReviews}>see more</button> */}
            <h2>Reviews</h2>
            {showComments && commentFilter.map(x => <p key={x.id}>{x.comment}</p>)}
        </div>
    )
}

export default Reviews
