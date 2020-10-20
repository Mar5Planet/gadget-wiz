import React, { useState } from 'react'
import Draggable from 'react-draggable'

function Icon(props) {
    const [activeIcon, setActiveIcon] = useState(false);

    return (
        <Draggable
        bounds="parent">
        <div className="icon handle" onClick={() => {setActiveIcon(!activeIcon)}} onDoubleClick={() => props.renderGadget(props.gadget)}>
            <img className={activeIcon? "active-icon icon-img" : "icon-img"} src={props.gadget.icon_image} alt="icon-img"/>
            <p className={activeIcon? "active-icon" : ""} >{props.gadget.name}</p>
        </div>
        </Draggable>
    )
}

export default Icon;