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
  import  helpBook  from '../Assets/Images/help_book_big-0.png'

// const test = {
//     title: 'AppBar',
//   component: AppBar,
//   decorators: [
//     story => (
//       <div
//         style={{
//           padding: '5rem',
//           background: 'teal'
//         }}
//       >
//         {story()}
//       </div>
//     )
//   ]
//   }


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
                  <span role='img' aria-label='📦'>📦</span>Another Action
                </ListItem>
                <Divider />
                <ListItem disabled>
                  <span role='img' aria-label='🚀'>🚀</span>Something Else
                </ListItem>
              </List>
            )}
        </div>
    
        {/* <TextField placeholder='Search...' width={150} style={{backgroundColor: "white"}}/> */}
        </Toolbar>
      </AppBar>
    );
    
    // return (
    //     <div className="navbar">
    //     <div className="btn-group dropup">
    //         <button type="button" className="btn btn-secondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    //             Start
    //         </button>
    //         <div className="dropdown-menu">
    //             <button className="dropdown-item">Shut Down...</button>
    //             <button className="dropdown-item">Another action</button>
    //             <button className="dropdown-item">Something else here</button>
    //         </div>
    //         </div>
    //     </div>
    // )
}

export default DesktopNav;