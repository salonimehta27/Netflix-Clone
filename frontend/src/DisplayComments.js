import React from 'react'

function DisplayComments({ comments }) {
    return (
        <div>
            {comments.map((c) => {
                <p>{`${c.comment} - created_at: ${c.created_at}`}</p>
            })}
        </div>
    )
}

export default DisplayComments
