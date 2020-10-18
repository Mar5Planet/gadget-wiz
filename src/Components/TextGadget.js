import React, { useState } from 'react'

function TextGadget(props) {
    const[textContent, setTextContent] = useState(props.gadget.content);

    const changeText = e => {
        setTextContent(e.target.value)
    }

    return(
        <div className="gadget text-gadget">
        <textarea value={textContent} onChange={(e) => changeText(e)} />
        </div>

    )

}

export default TextGadget;