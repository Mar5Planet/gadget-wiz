import React, { useState } from 'react'

function Icon(props) {
    const [activeIcon, setActiveIcon] = useState(false);

    return (
        <div className="icon" onClick={() => {setActiveIcon(!activeIcon)}} onDoubleClick={() => props.renderGadget(props.gadget)}>
            <img className={activeIcon? "active-icon icon-img" : "icon-img"} src={props.gadget.icon_image} alt="icon-img"/>
            <p className={activeIcon? "active-icon" : ""} >{props.gadget.name}</p>
        </div>
    )
}

export default Icon;