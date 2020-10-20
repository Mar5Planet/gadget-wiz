import React, {useState, useEffect} from 'react'
import {
    AppBar,
    Toolbar,
    TextField,
    Button,
    List,
    ListItem,
    Divider
  } from 'react95';
  
  import  NavGadget from './NavGadget.js'
  import Clock from './Gadgets/Clock.js'

function DesktopNav(props) {

    const [open, setOpen] = React.useState(false);

    // const createForm = () => {
    //   return <CreateForm />
    // }
        
    return (
      <AppBar style={{backgroundColor: 'silver', position: 'fixed', bottom: 0, top: 'auto'}}>
        <Toolbar style={{ justifyContent: 'space-between left' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button onClick={() => setOpen(!open)} active={open} style={{ backgroundColor: 'silver', fontWeight: 'bold', width: '95px', height: '38px', marginRight: '10px'}}>
            <img src={"https://win98icons.alexmeub.com/icons/png/windows-0.png"} alt='React95' style={{ height: '20px', marginRight: 4 }}/>Start</Button>
            {open && (<List style={{zIndex: 100000, backgroundColor: 'white', position: 'absolute', left: '0', top: '-140px' }} onClick={() => setOpen(false)}>
                <ListItem className="navg-item">
                <span role='img' aria-label='📂'>📂</span>Profile
                </ListItem>
                <ListItem className="navg-item" onClick={props.renderComponentForm}>
                  <span role='img' aria-label='📦'> 📦</span>Create Gadget
                </ListItem>
                <Divider />
                <ListItem className="navg-item">
                  <span role='img' aria-label='🚀'>🚀</span>Log Out
                </ListItem>
              </List>
            )}
            
        </div>
       {props.renderedGadget ? <NavGadget name={props.renderedGadget.props.gadget.name} icon_image={props.renderedGadget.props.gadget.icon_image} /> : ''}
       {props.renderedGadgetTwo ? <NavGadget name={props.renderedGadgetTwo.props.gadget.name} icon_image={props.renderedGadgetTwo.props.gadget.icon_image} /> : ''}
        </Toolbar>
      </AppBar>
      
    );
}

export default DesktopNav;