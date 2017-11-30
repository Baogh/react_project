import React from 'react'
import './header.css'
import { BrowserRouter as Router, Redirect, Route, Link, NavLink, Switch, } from 'react-router-dom'
import Ranking from '../ranking'
import Home from '../home'



class Header extends React.Component {

    render() {

        return (
            <div className='header'>
<div className='header_top'>
           <NavLink to='/home'><div className='logo'></div></NavLink>
           <NavLink to='/login'><div className='dl'><i>登陆</i></div></NavLink>
            <NavLink to='/regist'><div className='dl'><i>注册</i></div></NavLink>
           <NavLink to='/search'><div className='search'></div></NavLink>
        </div>
        <div className='header_bottom'>
          <NavLink activeClassName="active" to='/home'><div className='recommended'><i>推荐</i></div></NavLink>
           <NavLink activeClassName="active" to='/ranking'><div className='ranking' ><i>排行</i></div></NavLink>
           <NavLink activeClassName="active" to='/type'><div className='type'><i>分类</i></div></NavLink>
        </div>
            
            </div>
        )
    }
}

export default Header