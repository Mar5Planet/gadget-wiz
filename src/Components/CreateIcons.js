import React, { createElement } from 'react'

function CreateIcon(props) {
    return (
        <button className="create-icons"onClick={() => props.setIcon(props.image_url)}>
            <img src={props.image_url} />
        </button>
    )
}

export default CreateIcon