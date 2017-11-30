import React from "react"
import axios from 'axios'


class Regist extends React.Component {
    constructor() {
        super();
        // this.regist = this.regist.bind(this)

    }
    regist(name, psw) {
        var that = this
        axios.post('user/regist', {
            username: name,
            psw: psw
        })
            .then(
                (res) => {
                    console.log(res)
                    that.props.history.push("/login")
                }
        )
    }
    render() {

        return (
            <div>
        	
        		<input type='text' ref='username' />
        		<input type='text' ref='psw' />
        		<button onClick={
            () => {
                this.regist(
                    this.refs.username.value,
                    this.refs.psw.value
                )
            }
            }>注册</button>
        	</div>)
    }
}

export default Regist;
