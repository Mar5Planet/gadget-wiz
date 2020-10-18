import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom'


function LoginForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logUserIn = (user, pass) => {
        props.loginUser(user, pass)
    };

    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">User</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" />
            </div>
            <NavLink onMouseDown={() => logUserIn(username, password)} to={props.user? "/desktop" : "/"} >
                <button type="submit" className="btn btn-primary">Ok</button>
            </NavLink>  
        </form>
    )
}

export default LoginForm