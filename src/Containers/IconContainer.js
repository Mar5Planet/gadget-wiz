import React from 'react'
import Icon from '../Components/Icon'
function IconContainer(props) {
    const desktopGadgets = props.customGadgets.filter(gadg => gadg.folder_id === 1)
    console.log(desktopGadgets)
    const gadgetsArr = [...props.baseGadgets, ...desktopGadgets, ...props.folderGadgets]
    return (
      <div className="icons-container">
          {gadgetsArr.map((gadget, index)  => <Icon key={index} gadget={gadget} renderGadget={props.renderGadget}/> )}
      </div>  

    )
        
    

};

export default IconContainer;