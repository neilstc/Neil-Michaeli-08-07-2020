import React, {Component} from 'react';
// Components 
import Header from './Header';
import Login from './Login';
import TodoList from './TodoList';
import Todo from './Todo';
import Register from './Register';
import Logout from './Logout';
import Footer from './Footer';
import Error from './Error';

// Utilities 
import AuthenticationService from './AuthenticationService';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


class TodoApp extends Component{
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLogged();
        console.log(isUserLoggedIn);
        return(
        <div className= "TodoApp">
            <Router>
                <Header/>
                <Switch>
                <Route path = "/" exact component = {Login}/>
                <Route path = "/login" component = {Login}/>
                <Route path ="/register" component = {Register}/>
                {isUserLoggedIn && <Route path = "/welcome/:username" component = {TodoList}/>}
                {isUserLoggedIn && <Route path = "/todos/:id" component={Todo}/>}
                {isUserLoggedIn && <Route path = "/todos" component = {TodoList}/>}
                {isUserLoggedIn && <Route path = "/logout" onClick={AuthenticationService.logout} component = {Logout}/>}
                <Route path = "/error" component = {Error} />   
                </Switch>
                <Footer/>
            </Router>
        </div>
        )
        }
}

 export default TodoApp;



