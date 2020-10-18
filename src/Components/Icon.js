import React from 'react'

function Icon(props) {
    return (
        <div className="icon">
            <img src={props.gadget.icon_image} alt="icon-img"/>
            <p>{props.gadget.name}</p>
        </div>
    )
}

export default Icon;