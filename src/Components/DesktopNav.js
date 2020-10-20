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

function DesktopNav() {

    const [open, setOpen] = React.useState(false);

   
        
    return (
      <AppBar style={{backgroundColor: 'silver', position: 'fixed'}}>
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <Button onClick={() => setOpen(!open)} active={open} style={{ backgroundColor: 'silver', fontWeight: 'bold', width: '95px', height: '38px' }}>
            <img src={"https://win98icons.alexmeub.com/icons/png/windows-0.png"} alt='React95' style={{ height: '20px', marginRight: 4 }}/>Start</Button>
            {open && (<List style={{ position: 'absolute', left: '0', top: '100%' }} onClick={() => setOpen(false)}>
                <ListItem>
                <span role='img' aria-label='📂'>📂</span>Profile
                </ListItem>
                <ListItem>
                  <span role='img' aria-label='📦'> 📦</span>Another Action
                </ListItem>
                <Divider />
                <ListItem disabled>
                  <span role='img' aria-label='🚀'>🚀</span>Log Out
                </ListItem>
              </List>
            )}
        </div>
        </Toolbar>
      </AppBar>
      
    );
}

export default DesktopNav;