
//import { Component } from 'react';
import axios from 'axios';
import { History, LocationState } from "history";
const URL = "https://pacific-badlands-76024.herokuapp.com"


interface State {
    todos: Array<TodoObj>,
    message: string
};
interface Props {
    history: History<LocationState>;
}
class DataServices<Props> {
      
    getUser(email:string, password:string){
        console.log("send request to backend")
        const user:User = {email: email, password: password}
       //return axios.post("http://localhost:4000/get-users",user)  
       return axios.get(`http://localhost:4000/users/${email}/todos`);
    //    return axios.post(`${URL}/get-users`,user);        
    }

    registerUser(email?:string, password?:string){
        const user:User = {email: email, password};
       return axios.post("http://localhost:4000/register", user);
        //return axios.post(`${URL}/register`, user);
    }


    getTodos(name: string) {
      // return axios.get(`http://localhost:4000/users/${name}/todos`);
     return axios.get(`${URL}/users/${name}/todos`);
    }

    getTodo(name: string, id: string) {

      //  return axios.get(`http://localhost:4000/users/${name}/todos/${id}`);
       //   return axios.get(`${URL}/users/${name}/todos/${id}`);

    }
    deleteTodo(name: string, id: number) {
       // return axios.delete(`http://localhost:4000/users/${name}/todos/${id}`);
        return axios.delete(`${URL}/users/${name}/todos`);
    }


    updateTodo(name: string, id: string, todo: TodoObj) {
     //return axios.put(`http://localhost:4000/users/${name}/todos/${id}`, todo);
     return axios.put(`${URL}/users/${name}/todos/${id}`, todo);
    }

    createTodo(name: string, todo: TodoObj) {
      //  return axios.post(`http://localhost:4000/users/${name}/todos`, todo);
      return axios.post(`${URL}/users/${name}/todos`, todo);
        
    }
}

export default new DataServices();