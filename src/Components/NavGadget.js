import React from 'react'

function NavGadget(props) {
    return (
        <div className="nav-gadg">
            <p>{props.name}</p>
            <img alt="navGag" src={props.icon_image}/>
        </div>
    )
}

export default NavGadget