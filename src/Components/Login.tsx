import React, { Component } from 'react';
import { History, LocationState } from "history";
import AuthenticationService from './AuthenticationService'

interface Props {
    history: History<LocationState>;
}

interface State {
    email ?: string,
    password?: string,
};

class Login extends Component<Props, State>{

    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.onRegisterClicked = this.onRegisterClicked.bind(this);
    }

    handlerOnChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }

    loginClicked(event: React.MouseEvent<HTMLElement>) {
        console.log("clicked");
        console.log(this.state);

       // if (this.state.email === "neil@gmail.com" && this.state.password === "123") {
        if (typeof this.state.email === "string" && typeof this.state.password === "string") {
      
           AuthenticationService.registerSuccessfulLogin(this.state.email, this.state.password)
  
            this.props.history.push("/welcome/:neil/todos");
     
        }
    }

    onRegisterClicked(event: React.MouseEvent<HTMLElement>){
        this.props.history.push("/register");
    }

    render() {

        return (
            <div>
                <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
                    <main className="pa4 black-80">
                        <div className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <legend className="f4 fw6 ph0 mh0">Sign In</legend>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" >Email</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black  w-100" type="email" name="email" id="email-address"
                                        onChange={this.handlerOnChange} />
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" >Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black w-100" type="password" name="password" id="password"
                                        onChange={this.handlerOnChange} />
                                </div>
                            </fieldset>
                            <div className="">
                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                    type="submit"
                                    value="Sign in"
                                    onClick={this.loginClicked} />
                            </div>
                            <br/>
                            <div className="lh-copy mt3">
                                <p  className="f3 link dim black db" onClick={this.onRegisterClicked}>Register</p>
                            </div>
                        </div>
                    </main>
                </article>
            </div>



        )


    }
}

export default Login

