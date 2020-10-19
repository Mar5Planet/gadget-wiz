import React, { useState } from 'react'

function ImageGadget(props) {
 
    return (
        <img className="gadget-img" src={props.gadget.content}/>
    )
    
}

export default ImageGadget