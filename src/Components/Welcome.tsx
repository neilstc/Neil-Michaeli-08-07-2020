import React, {Component} from 'react'
import { RouteComponentProps } from 'react-router'
import {Link} from 'react-router-dom';


interface MatchParams {
    username: string;
}

interface Props extends RouteComponentProps<MatchParams> {}

class Welcome extends Component<Props>{

    render(){

        return(
            <>
            <h1> WELCOME </h1>
            <div className = "container">
                Hi {this.props.match.params.username+ " ,"}
                Here's your list:  <Link to="/todos">HERE</Link>
                
                </div>
                </>
        )
    }
}
export default Welcome 