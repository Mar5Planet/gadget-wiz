import React, {useState, useEffect} from 'react'
import DesktopNav from '../Components/DesktopNav'
import IconContainer from './IconContainer'
import TextGadget from '../Components/TextGadget'

const baseGadgetsUrl = 'http://localhost:3000/base_gadgets/'
const customGadgetsUrl = 'http://localhost:3000/gadgets/'

function DesktopContainer(props) {
    const [baseGadgets, setBaseGadgets] = useState([])
    const [customGadgets, setCustomGadgets] = useState([])
    const [renderedGadget, setRenderedGadget] = useState('')

    const fetchGadgets = () => {
      fetch(baseGadgetsUrl)
      .then(res => res.json())
      .then(data => setBaseGadgets(data));

      fetch(customGadgetsUrl)
      .then(res => res.json())
      .then(data => customGadgetFilter(data));
    }

    const customGadgetFilter = (gadgetArr) => {
        let userGadgets = gadgetArr.filter(gadget => gadget.user_id === props.loggedinUser.id)
        setCustomGadgets(userGadgets)
    }
    

    useEffect(() => { fetchGadgets()}, [])
    
    const renderGadget = (gadget) => {
        if (gadget.content_type === "base") {
            console.log('base')
        }    
       else if (gadget.content_type === "test") {
            setRenderedGadget(<TextGadget gadget={gadget}/>)               
       }
    } 

    
    return (
        <div id="desktop">
            <DesktopNav />
            {renderedGadget}
            <IconContainer baseGadgets={baseGadgets} customGadgets={customGadgets} renderGadget={renderGadget}/>
        </div>
    )
}

export default DesktopContainer;