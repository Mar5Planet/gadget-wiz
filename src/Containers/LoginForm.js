import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'
import styled from 'styled-components'
import { TextField, Button, Cutout } from 'react95'


function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    return (
        <div style={{ width: 400, backgroundColor: '#C6C6C6', margin: '60px', border: 'solid', borderWidth: '3px'}}>
            <div style={{ display: 'flex' }}>
                <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form-group" style={{ marginLeft: '20px', marginTop: '18px'}}>
                        <label htmlFor="exampleInputEmail1">User</label>
                        {/* <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" /> */}
                        <TextField type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" fullWidth />
                    </div>
                    <div className="form-group" style={{ marginLeft: '20px'}}>
                        <label htmlFor="exampleInputPassword1">Password</label>
                        {/* <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" /> */}
                        <TextField type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" fullWidth />
                    </div>
                    <NavLink onMouseDown={() => props.loginUser(username, password)} to={props.user? "/desktop" : "/"} >
                        {/* <button type="submit" className="btn btn-primary">Ok</button> */}
                        <Button type="submit" className="btn btn-primary" style={{ marginLeft: '20px', marginBottom: '20px', backgroundColor: '#C6C6C6' }}>Ok</Button>
                    </NavLink>  
                </form>

            </div>

        </div>
    )
}

export default LoginForm
