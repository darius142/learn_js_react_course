import React from 'react'

function Comment({comment}) {
    return (
        <div>
            <p><b> {comment.user}</b><br></br>{comment.text} </p>
        </div>
    )
}

export default Comment
