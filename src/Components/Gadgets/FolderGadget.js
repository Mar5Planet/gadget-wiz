import React from 'react'
import Icon from '../Icon'

function FolderGadget(props) {

    const findFolderGadgets = () => {
        let gadgetsArr = props.gadgets.filter(gadg => gadg.folder_id === props.gadget.id)
        return gadgetsArr.map((gadget, index) => <Icon key={index} gadget={gadget} renderGadget={props.renderGadget}/>)
        
    }

    
    return(
        <div className="folder-container">
            {findFolderGadgets()}
        </div>
    )
}

export default FolderGadget;