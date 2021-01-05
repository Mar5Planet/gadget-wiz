import React from 'react'

function ImageGadget(props) {
 
    return (
        <img alt="img" className="gadget-img" src={props.gadget.content}/>
    )
    
}

export default ImageGadget