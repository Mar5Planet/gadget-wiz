import React, {useState, useEffect} from 'react'
import DesktopNav from '../Components/DesktopNav'
import IconContainer from './IconContainer'


const baseGadgetsUrl = 'http://localhost:3000/base_gadgets/'
const customGadgetsUrl = 'http://localhost:3000/gadgets/'
function DesktopContainer(props) {
    const [baseGadgets, setBaseGadgets] = useState([])
    const [customGadgets, setCustomGadgets] = useState([])

    const fetchGadgets = () => {
      fetch(baseGadgetsUrl)
      .then(res => res.json())
      .then(data => setBaseGadgets(data));

      fetch(customGadgetsUrl)
      .then(res => res.json())
      .then(data => setCustomGadgets(data));
    }

    

    useEffect(() => { fetchGadgets()}, [])
  
    
    return (
        <div id="desktop">
            <DesktopNav />
            <IconContainer baseGadgets={baseGadgets} customGadgets={customGadgets}/>
        </div>
    )
}

export default DesktopContainer;