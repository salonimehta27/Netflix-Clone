import React from 'react'
import { useEffect, useState } from 'react'
import ReviewLikes from './ReviewLikes'

function Reviews({ movieId, category }) {

    const [comment, setComment] = useState([])
    const [showComments, setShowComments] = useState(false)
    const [likes, setLikes] = useState(0)

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
    const commentFilter = comment.filter(x => x.netflix_original_id === movieId)
    // debugger

    function handleUpdate(updatedComment) {
        const updated = comment.filter(x => x.id === updatedComment.id ? updatedComment : x)
        setComment(updated)
    }



    return (
        <div style={{ backgroundColor: "white" }}>
            {/* <button onClick={handleReviews}>see more</button> */}
            <h2>Reviews</h2>
            {commentFilter.map((x) => {
                return <>
                    <p key={x.id}>{x.comment}</p>
                    <ReviewLikes comment={x} onUpdate={handleUpdate} category={category} />
                </>
            })}
        </div>
    )
}

export default Reviews
