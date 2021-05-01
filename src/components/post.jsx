import React from 'react'

export const Post = (props) => {

    return <div>
        {props.id} {props.title} {props.body}
    </div>
}