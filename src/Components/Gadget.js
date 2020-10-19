import React from 'react'
import TextGadget from './TextGadget'
function Gadget(props) {

    return(
        <div className="gadget">
            <div className="gadget-icons">
                <button onClick= {props.remove}> X </button>
            </div>
            <TextGadget gadget={props.gadget}/>
            {/* this will be a useState const depending on content type. */}
        </div>
    )

}

export default Gadget;