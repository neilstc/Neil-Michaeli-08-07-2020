

//import { Component } from 'react';  // just put it here until vsc stop bugging me about it

import DataServices from "./DataServices";

class AuthenticationService{

registerSuccessfulLogin(email:string, password:string){   
    DataServices.getUser(email, password);
    sessionStorage.setItem("authenticatedUser", email);   
}

registerUser(email?:string, password?:string){
    DataServices.registerUser(email, password);
}

logout(){
    console.log("user logged out");
    sessionStorage.removeItem("authenticatedUser");
}
isUserLogged(){
    const user = sessionStorage.getItem("authenticatedUser");
    if(!user) return false;
    else return true;
}

}

export default new AuthenticationService();