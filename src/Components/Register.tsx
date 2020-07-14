import React, { Component } from 'react';
import { History, LocationState } from "history";
import AuthenticationServices from './AuthenticationService'

interface Props {
    history: History<LocationState>;
}

interface State {
    email ?: string,
    password?: string,
};

class Register extends Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.handlerOnChange = this.handlerOnChange.bind(this);
        this.onSubmitClicked = this.onSubmitClicked.bind(this); 
    }
    onSubmitClicked(event: React.MouseEvent<HTMLElement>) {
        console.log("clicked");
        console.log(this.state);
           // send to backend and send to database;
           AuthenticationServices.registerUser(this.state.email, this.state.password);
            this.props.history.push("/todos");
    }

    handlerOnChange(event: React.FormEvent<HTMLInputElement>) {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value
        });
    }


    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-3 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0"> Register </legend>
              <div className="mv3">
                <label className="db fw6 lh-copy f6">Name</label>
                <input className="b pa2 input-reset ba bg-transparent w-100" type="text" name="name" id="name"
                onChange ={this.handlerOnChange} />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" >Email</label>
                <input className="pa2 input-reset ba bg-transparent   w-100" type="email" name="email" id="email-address" 
                onChange={this.handlerOnChange}/>
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" >Password</label>
                <input className="b pa2 input-reset ba bg-transparent  w-100" type="password" name="password" id="password" 
                onChange ={this.handlerOnChange}/>
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={this.onSubmitClicked} />
            </div>
            {/* <div className="lh-copy mt3">
                    <p onClick = {() => onRouteChange('register')}  className="f2 link dim black db"> Register</p>
      
                  </div> */}
          </div>
        </main>
      </article>
        )
    }


}
export default Register;