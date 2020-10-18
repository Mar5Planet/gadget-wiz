import React from 'react'
import Icon from '../Components/Icon'
function IconContainer(props) {


    return (
      <div>
          {props.baseGadgets.map(baseGadget => <Icon key={baseGadget.id} gadget={baseGadget} /> )}

      </div>  

    )
        
    

};

export default IconContainer;