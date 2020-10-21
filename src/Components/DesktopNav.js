import React, {useState, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
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

  import IgLogo from '../Assets/Images/ig.gif'
  
function DesktopNav(props) {

    const [open, setOpen] = React.useState(false);
    const date = new Date();
    // const createForm = () => {
    //   return <CreateForm />
    // }
        
    return (
      <AppBar style={{zIndex: '1400', backgroundColor: 'silver', position: 'fixed', bottom: 0, top: 'auto'}}>
        <Toolbar style={{ justifyContent: 'space-between left'}}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button onClick={() => setOpen(!open)} active={open} style={{ backgroundColor: 'silver', fontWeight: 'bold', width: '95px', height: '38px', marginRight: '10px'}}>
            <img src={"https://win98icons.alexmeub.com/icons/png/windows-0.png"} alt='React95' style={{ height: '20px', marginRight: 4 }}/>Start</Button>
            {open && (<List style={{zIndex: 100000, backgroundColor: 'white', position: 'absolute', left: '0', top: '-140px' }} onClick={() => setOpen(false)}>
                <ListItem className="navg-item">
                <span className="navg-item-icon" role='img' aria-label='📂'>📂</span>Profile
                </ListItem>
                <ListItem className="navg-item" onClick={props.renderComponentForm}>
                  <span className="navg-item-icon" role='img' aria-label='📦'> 📦</span>Create Gadget
                </ListItem>
                <Divider />

                <NavLink to={"/"}>
                    <ListItem className="navg-item">
                    <span className="navg-item-icon" role='img' aria-label='🚀'>🚀</span>Log Out
                    </ListItem>
                </NavLink>  
              </List>
            )}



        </div>
       {props.renderedGadget ? <NavGadget name={props.renderedGadget.props.gadget.name} icon_image={props.renderedGadget.props.gadget.icon_image} /> : ''}
       {props.renderedGadgetTwo ? <NavGadget name={props.renderedGadgetTwo.props.gadget.name} icon_image={props.renderedGadgetTwo.props.gadget.icon_image} /> : ''}

       <div className="nav-timer">
           <a href="#"><img className="nav-timer-logo" src="https://win98icons.alexmeub.com/icons/png/check-1.png" /></ a>
           <a href=""><img className="nav-timer-logo" src="https://win98icons.alexmeub.com/icons/png/loudspeaker_rays-0.png"  /></a>
           <a href="https://github.com/Mar5Planet/gadget-wiz/"><img className="nav-timer-logo" src="https://github.githubassets.com/images/modules/logos_page/Octocat.png" /></a>
           <a href=""><img className="nav-timer-logo" src={IgLogo} /></a>
         <span>{date.toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3")}</span>
        </div>
        </Toolbar>
      </AppBar>
      
      
    );
}

export default DesktopNav;