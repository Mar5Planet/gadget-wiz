import React from "react";
import DesktopContainer from './DesktopContainer'
import LoginForm from './LoginForm.js'

class Login extends React.Component {
   
    state= {
        loggedIn: false
    }

    login = () => {
        this.setState({
            loggedIn: true
        })
    }
    
    render() {
        return(
            <>  
            {this.state.loggedIn ? <DesktopContainer /> : <LoginForm login={this.login}/>}
            </>
        )
    }
};

export default Login
