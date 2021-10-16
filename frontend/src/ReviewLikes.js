import React, { useState } from 'react'

function ReviewLikes({ comment, onUpdate, category }) {
    const [likes, setLikes] = useState(comment.likes)

    function handleLikes(comment) {
        fetch(`http://localhost:9292${category}/${comment.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                likes: comment.likes + 1
            })
        }).then(resp => resp.json())
            .then(updatedObj => onUpdate(updatedObj))
        setLikes(() => comment.likes + 1)
    }
    return (
        <div>
            <p >{likes}</p>
            <button onClick={() => handleLikes(comment)}>Like</button>
        </div>
    )
}

export default ReviewLikes
