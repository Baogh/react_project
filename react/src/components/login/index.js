import React from "react"
import axios from "axios"
import { browserHistory } from 'react-router-dom'

class Login extends React.Component {
    constructor() {
        super();

    }
    login() {
        var that = this;
        var name = document.querySelector("#username").value;
        var psw = document.querySelector("#psw").value;

        axios.post('/user/login', {
            username: name,
            psw: psw
        })
            .then(function(res) {
                console.log(res)
                if (res.data.code === 1) {
                    that.props.history.push("/home")
                } else {
                    console.log(res.data.code)
                }
            })
    }

    render() {
        return (
            <div>
                <input type = "test"  id = "username" placehoder = "用户名" /><br/><br/>
                <input type = "password" id = "psw" placehoder = "密码"/><br/><br/>
                <button onClick={() => {
                this.login()
            }}>登陆</button>
            </div>
        )
    }
}

export default Login;
