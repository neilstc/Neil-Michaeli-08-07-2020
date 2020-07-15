
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
import moment from 'moment';
import { Formik, Field, FormikValues } from 'formik';
import DataServices from './DataServices';
import { History, LocationState } from "history";
interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> { history: History<LocationState>; }

interface State {
    id: string,
    text: string,
    targetDate: string
};
class Todo extends Component<Props, State>{
    constructor(props: Props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            text: " ",
            targetDate: moment(new Date()).format("DD.MM.YYYY")
        };
    }
    validate(values: FormikValues) {
        let errors = {};
        if (!values.description) {
            errors = "Enter a decription";
        }
        return errors;
    }


    componentDidMount() {

        if (parseInt(this.state.id) === -1) {
            return;
        }
        DataServices.getTodo("neil", this.state.id)
            .then(response => {
                console.log(response.data.targetDate);
                console.log(response.data.text);

                this.setState({
                    targetDate: response.data.targetDate,
                    text: response.data.text
                });
            });
    }
    render() {
        let { text, targetDate } = this.state;
        return (
            <div>
                

                <Formik
                    initialValues={{ text: text, targetDate: targetDate }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    enableReinitialize={true}
                    onSubmit={(values, actions) => {
                        let todo: TodoObj = { id: (parseInt(this.state.id, 10)), text: values.text, targetDate: moment(values.targetDate)
                                                    .format("DD.MM.YYYY"), completed: false };
                        console.log(parseInt(this.state.targetDate));
                        if (parseInt(this.state.id) === -1) {
                            DataServices.createTodo("neil", todo)
                                .then((response) => {
                                    console.log(response.data);
                                    this.props.history.push("/todos")
                                });
                        }
                        else {
                            DataServices.updateTodo("neil", this.state.id, todo)
                                .then(() => this.props.history.push("/todos"))
                        }
                    }
                    }

                >

                    {(props) => (

                        <form onSubmit={props.handleSubmit}>
                            {/* <ErrorMessage name = "description" component ="div" className ="alert alert-warning"/> */}
                            <fieldset className="form-group">
                                <label>Target Date</label>
                                <Field className="form-control" type="date" name="targetDate" />
                            </fieldset>

                            <fieldset className="form-group">
                                <label> Description </label>
                                <Field className="form-control" type="text" name="text" />
                            </fieldset>


                            {props.errors.text && <div id="feedback">{props.errors.text}</div>}

                            <button className="btn btn-success" type="submit">Save</button>

                        </form>

                    )}

                </Formik>

            </div>

            //);
        );
    }
}
export default Todo;