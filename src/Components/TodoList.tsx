import React, { Component } from 'react'
import { History, LocationState } from "history";
import DataServices from './DataServices';
import { RiDeleteBinLine, RiPencilLine, RiEyeLine } from "react-icons/ri";


import '../css/TodoList.css';
interface State {
    todos: Array<TodoObj>,
    message: string
};
interface Props {
    history: History<LocationState>;
}

class TodoList extends Component<Props, State>{

    constructor(props: Props) {
        super(props)
        this.state = {
            todos: [
            ],
            message: ""
        }
        this.onUpdateClicked = this.onUpdateClicked.bind(this);

        this.refreshTodos = this.refreshTodos.bind(this);
        this.refreshTodos = this.refreshTodos.bind(this);
        this.onAddClicked = this.onAddClicked.bind(this);
        this.onDeletedClick = this.onDeletedClick.bind(this);
        this.onCompletedChecked = this.onCompletedChecked.bind(this)
    }

    onCompletedChecked(todo: TodoObj) {
            console.log("before", todo.completed);
            todo.completed = !todo.completed;
            DataServices.updateTodo("neil",todo.id.toString(), todo);
            console.log("after", todo.completed);
            this.refreshTodos();
    }

    onDeletedClick(id: number) {
        console.log(id);
        // send request to delete fron server
        DataServices.deleteTodo("neil", id)
            .then(response => {
                this.setState({ message: " 😉 המשימה נמחקה לא ראינו כלום" })
                this.refreshTodos();
            })
    }

    onAddClicked() {
        this.props.history.push(`/todos/-1`);
    }

    onUpdateClicked(id: number) {
        this.props.history.push(`/todos/${id}`);

    }

    refreshTodos() {
        DataServices.getTodos(" ")
            .then(response => this.setState({ todos: response.data }));

    }
    
    componentDidMount() {
        this.refreshTodos();
    }
    render() {

        return (
            <div>
                <h1>  ניהול משימות </h1>
                <div className="container">
                    <input className="form-control w-90 input-field fa f-usericon" type="text" placeholder="...חיפוש משימה" aria-label="Search" style={{ width: "1115px" }}
                    />
                </div>

                <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                {this.state.message && <div className=" alert alert-success"> {this.state.message} </div>}
                <div className="container">
                    <tr>
                        <td><button className="btn btn-success " onClick={this.onAddClicked}>משימה חדשה</button></td>
                        <td><p> &nbsp; &nbsp;&nbsp;</p></td>
                        <td> <p> היסטורית הסכמים</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td><p> &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p></td>
                        <td> <p> <strong>:רשימת הלקחות שלך</strong></p></td>
                    </tr>
                    <table className="table shadow-3">
                        <thead>
                            <tr>
                                <th>  </th>
                                <th>   </th>
                                <th> <strong> פעולות</strong></th>
                                <th> <strong>תאריך יצירת משימה</strong>  </th>
                                <th>  <strong>?הושלם </strong></th>
                                <th><strong> תיאור</strong> </th>
                                <th><strong> מס׳</strong> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id} className= "hover-bg-green ">
                                            <td><RiDeleteBinLine className="pointer" onClick={() => this.onDeletedClick(todo.id)} /></td>
                                            <td> <RiPencilLine className="pointer" onClick={(id) => this.onUpdateClicked(todo.id)} /></td>
                                            <td> <RiEyeLine className="pointer  " onClick={(id) => this.onUpdateClicked(todo.id)}
                                            /></td>
                                            <td>{todo.targetDate.toString()} </td>
                                            <td>{<input name="isCompleted" type="checkbox" checked={todo.completed}
                                                onChange={() => this.onCompletedChecked(todo)} />}</td>
                                            <td>{todo.text} </td>
                                            <td>{todo.id} </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>
            </div>

        )
    }
}
export default TodoList;




// import React from 'react';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

// export default function FormControlLabelPosition() {
//   return (
//     <FormControl component="fieldset">
//       <FormLabel component="legend">Label Placement</FormLabel>
//       <FormGroup aria-label="position" row>
//         <FormControlLabel
//           value="top"
//           control={<Checkbox color="primary" />}
//           label="Top"
//           labelPlacement="top"
//         />
//         <FormControlLabel
//           value="start"
//           control={<Checkbox color="primary" />}
//           label="Start"
//           labelPlacement="start"
//         />
//         <FormControlLabel
//           value="bottom"
//           control={<Checkbox color="primary" />}
//           label="Bottom"
//           labelPlacement="bottom"
//         />
//         <FormControlLabel
//           value="end"
//           control={<Checkbox color="primary" />}
//           label="End"
//           labelPlacement="end"
//         />
//       </FormGroup>
//     </FormControl>
//   );
// }
