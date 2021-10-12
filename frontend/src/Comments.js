import React, { useState, useEffect } from 'react'

function Comments({ category_comments, mov_id }) {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`http://localhost:9292/${category_comments}`)
            .then(resp => resp.json())
            .then(data => setComments(data))
    }, [])

    function handleAddComment(comment) {
        setComments(...comments, comment)
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`http://localhost:9292/${category_comments}`, {
            method: "post",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                comment: comments,
                mov_id
            })

        }).then(resp => resp.json())
            .then(comment => handleAddComment(comment))
    }
    return (
        <div>
            <input type="text" name="comment" onChange={(e) => setComments(e.target.value)}></input>
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Comments
