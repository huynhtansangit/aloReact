import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            updatable: false,
            csrf_token: "n",
            password: ""
        };
      }
      
    loginHandle (){
        
    }
    render() {
        
        return (
            <div className="wrapper fadeInDown">
                <div id="formContent">
                    <div className="fadeIn first">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png" id="icon" alt="User Icon" />
                    </div>
                    <form>
                        <input type="text" id="login" className="fadeIn second" name="login" placeholder="login" />
                        <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                        <input type="submit" className="fadeIn fourth" defaultValue="Log In" />
                    </form>
                    <div id="formFooter">
                        <a className="underlineHover" href="#">Forgot Password?</a>
                    </div>
                </div>
            </div>
        );
    }
}


Login.propTypes = {

};


export default Login;
