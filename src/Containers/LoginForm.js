import React from 'react';
import { NavLink, Link } from 'react-router-dom'


function LoginForm(props) {

    const logUserIn = (user) => {
        props.loginUser(user)
        console.log('mar')
    }

    console.log(props.user)
    
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">User</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <NavLink onMouseDown={() => logUserIn('mar')} to={props.user? "/desktop" : "/"} >
                <button type="submit" className="btn btn-primary">Ok</button>
            </NavLink>  
        </form>
    )
}

export default LoginForm