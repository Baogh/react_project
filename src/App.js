import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, NavLink, Switch } from 'react-router-dom'

import './App.css';
import './components/header/header.css'
import Home from './components/home'
import Header from './components/header'
import Main from './components/main'
import Main_lazy from './components/main_lazy'
import Ranking from './components/ranking'
import Search from './components/search'
import Login from './components/login'
import Regist from './components/regist'


// class App extends Component {
//     render() {
//         return (
//             <div className="App">
//              <Home></Home>
//          </div>
//         );
//     }
// }
const App = () => (
    <Router>
    <div>
      
      <Switch>
        <Redirect exact from="/" to="/home" />
        <Route path="/home" render={() => (
        <div>
        <Header>
        </Header>
        <Home></Home>
        </div>
    )} />
        <Route path="/ranking"
    render={() => (
        <div>
        <Header>
        </Header>
        <Ranking></Ranking>
        </div>
    )}
    />
        <Route path="/search" component={Search}/>
        <Route path="/login" component={Login}/>
        <Route path="/regist" component={Regist}/>
      </Switch>
    </div>
  </Router>
)

export default App;
