import React from 'react'
import DesktopNav from '../Components/DesktopNav'
import IconContainer from './IconContainer'


function DesktopContainer(props) {
    console.log(props.baseGadgets)
    return (
        <div id="desktop">
            <DesktopNav />
            <IconContainer baseGadgets={props.baseGadgets} />
        </div>
    )
}

export default DesktopContainer;