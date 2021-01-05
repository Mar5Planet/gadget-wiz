import React, { useState } from 'react';
import { NavLink} from 'react-router-dom'
import { TextField, Button} from 'react95'
import logoImg from '../Assets/Images/gadget-wiz.gif'


function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div> 
            <div className="gadget login-form" style={{ width: 400, backgroundColor: '#C6C6C6', boxShadow: "inset -1px -1px #0a0a0a, inset 1px 1px #fff, inset -2px -2px grey, inset 2px 2px #dfdfdf", borderWidth: '3px'}}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <img alt="logo-img" src={logoImg}/>
                        <div className="form-group" style={{ marginLeft: '20px', marginTop: '18px'}}>
                            <label htmlFor="exampleInputEmail1">User</label>
                            <TextField type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" fullWidth />
                        </div>
                        <div className="form-group" style={{ marginLeft: '20px'}}>
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" fullWidth />
                        </div>
                        <NavLink onMouseDown={() => props.loginUser(username, password)} to={props.user? "/desktop" : "/"} >
                            <Button type="submit" className="btn btn-primary" style={{ marginLeft: '20px', marginBottom: '20px', backgroundColor: '#C6C6C6' }}>Ok</Button>
                        </NavLink>  
                    </form>
            </div>
        </div>
    )
}

export default LoginForm
