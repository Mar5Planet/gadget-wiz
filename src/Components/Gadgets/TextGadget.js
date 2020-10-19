import React, { useState } from 'react'

function TextGadget(props) {
    const[textContent, setTextContent] = useState(props.gadget.content);

    const changeText = e => {
        setTextContent(e.target.value)
    }

    return(
        <textarea onMouseDown={() => props.patchGadget(props.gadget, textContent)} className="gadget-textarea" value={textContent} onChange={(e) => changeText(e)} />

    )

}

export default TextGadget;