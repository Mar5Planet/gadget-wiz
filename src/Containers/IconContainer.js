import React from 'react'
import Icon from '../Components/Icon'
function IconContainer(props) {

    return (
      <div className="icons-container">
          {props.baseGadgets.map(baseGadget => <Icon key={baseGadget.id} gadget={baseGadget} renderGadget={props.renderGadget}/> )}
          {props.customGadgets.map(customGadget => <Icon key={customGadget.id} gadget={customGadget} renderGadget={props.renderGadget}/>)}
      </div>  

    )
        
    

};

export default IconContainer;