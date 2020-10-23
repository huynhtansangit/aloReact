import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {querystring as qs} from 'query-string';


class Login extends Component {
    constructor (props) {
        super(props);
        this.state = {
            defaultHeaders: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36',
                'Accept-Encoding': 'gzip, deflate',
                'Accept': '*/*',
                'Connection': 'keep-alive'
            }
        };
    }

    convertToObject (arr){
        let result= {};
        arr.forEach(element => {
            let temp = element.split('; ');
            for (let i = 0; i < temp.length; i++) {
                var cur = temp[i].split('=');
                result[cur[0]] = cur[1];
            }
        });
        return result;
    };

    async getSetCookie(){
        let setCookie = {};
        let response = await axios.get('https://www.instagram.com/web/__mid/');
        this.convertToObject(response.headers['set-cookie'])
        console.log(setCookie);
        return setCookie;
    };

    async loginHandle (){
        let setCookie = await this.getSetCookie();
        let csrftoken = setCookie['csrftoken'] 
        this.state.defaultHeaders['X-CSRFToken'] = csrftoken;
        let axiosConfigs = {
            headers: this.state.defaultHeaders,
            cookie: setCookie
        }
        
        let user = "sangcutevkl";
        let passwd = "sangqwe123";
        
        let enc_password = `#PWD_INSTAGRAM_BROWSER:0:${parseInt(Date.now())}:${passwd}`

        let loginForm = {
            username: "sangcutevkl",
            enc_password: enc_password  
        };
    
        var formData = qs.stringify(loginForm);

        let responseLogin = await axios.post('https://www.instagram.com/accounts/login/ajax/',formData, axiosConfigs);
        let sessionid = (await this.convertToObject(responseLogin.headers['set-cookie']))['sessionid'];
        console.log(sessionid);
        alert(sessionid)
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
                    </form>
                    <button className="fadeIn fourth" defaultValue="Log In" onClick={()=>{this.loginHandle()} }>Login</button>
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
