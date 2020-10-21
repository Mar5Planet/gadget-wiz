import React, { useState } from 'react'
import TextGadget from './Gadgets/TextGadget'
import EmailGadget from './Gadgets/Email'
import ImageGadget from './Gadgets/Image'
import FolderGadget from './Gadgets/FolderGadget'
import { render } from 'react-dom'
import SnakeGame from './Gadgets/SnakeGame'
import PaintGadget from './Gadgets/PaintGadget'

function Gadget(props) {

    const renderGadget = (gadget) => {
        if (gadget.content_type ==='base-email') {
            return <EmailGadget user={props.user} patchGadget={props.patchGadget} gadget={props.gadget} />
        } else if (gadget.content_type === 'image') {
            return <ImageGadget patchGadget={props.patchGadget} gadget={props.gadget} />
        } else if (gadget.content_type === 'folder') {
            return <FolderGadget renderGadget={props.renderGadget} gadgets={props.gadgets} patchGadget={props.patchGadget} gadget={props.gadget} />
        } else if (gadget.content_type === 'snake-game') {
            return <SnakeGame />
        } else if (gadget.content_type === 'paint') {
            return <PaintGadget />
        }
        else {
            return <TextGadget user={props.user} patchGadget={props.patchGadget} gadget={props.gadget} />
        }
    }

    
    return(
    <div className={`${props.classN} card card-secondary`}>
        <div className="card-header text-center">
        <button className="close-btn" onClick= {props.remove}> X </button>
         {props.gadget.name}
        </div>
        <div className="card-body bg-white">
            {renderGadget(props.gadget)}
        </div>
    </div>

    )

}

export default Gadget;