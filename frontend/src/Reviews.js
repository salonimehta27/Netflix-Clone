import React from 'react'
import { useEffect, useState } from 'react'
import ReviewLikes from './ReviewLikes'
import moment from 'moment'
import './Review.css'

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
        <div className="shadow" style={{ backgroundColor: "white" }}>
            {/* <button onClick={handleReviews}>see more</button> */}
            <h2 className="centerText">Comments</h2>
            <hr style={{ height: "5px", color: "black", backgroundColor: "black", width: "50%", marginLeft: "25%", marginRight: "25% !important" }}></hr>
            <br />
            {commentFilter.length === 0 && <h3 className="centerText">No comments on this yet!!! </h3>}
            {commentFilter.map((x) => {
                return <div className="shadow">
                    <p className="centerText" key={x.id}><h5>Anonymous-</h5> <i>{x.comment}</i></p>
                    <h5 className="centerText">{moment(x.created_at).format('MMMM Do YYYY')}{" "}</h5>
                    <ReviewLikes comment={x} onUpdate={handleUpdate} category={category} />
                </div>
            })}
        </div>
    )
}

export default Reviews
