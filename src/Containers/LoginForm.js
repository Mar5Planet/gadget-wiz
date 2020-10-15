import React from 'react';

function LoginForm(props) {
    return(
        <form onSubmit={(e) => {
            e.preventDefault()
            props.login()
        }}>
            <div className="form-group">
                <label for="exampleInputEmail1">User</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="form-group form-check">
            </div>
            <button type="submit" className="btn btn-primary">Ok</button>
        </form>
       
    )
}

export default LoginForm