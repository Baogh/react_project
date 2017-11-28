import React from 'react'
import './header.css'
import { BrowserRouter as Router, Redirect, Route, Link, NavLink } from 'react-router-dom'


class Header extends React.Component {

    render() {

        return (
            <div className='header'>
            <Router>
            <div>
				<div className='header_top'>

				
					<NavLink to='/home'><div className='logo'></div></NavLink>
					<NavLink to='/dl'><div className='dl'><i>下载App</i></div></NavLink>
					<NavLink to='/search'><div className='search'></div></NavLink>
				</div>		
				<div className='header_bottom'>
					<NavLink activeClassName="active" to='/home'><div className='recommended'><i>推荐</i></div></NavLink>
					 <NavLink activeClassName="active" to='/ranking'><div className='ranking'><i>排行</i></div></NavLink>
					 <NavLink activeClassName="active" to='/type'><div className='type'><i>分类</i></div></NavLink>
				</div>
			</div>

			</Router>
			</div>
        )
    }
}

export default Header