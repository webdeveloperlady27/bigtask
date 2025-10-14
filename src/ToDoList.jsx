import { Component } from "react";
import icon from './icon.png';

export class ToDoList extends Component {
    state = {
        userInput: '',
        toDoList: []
    }

    onChangeEvent(e) {
        this.setState({ userInput: e })
    }

    addItem(input) {
        if (input === '') {
            alert("Please, write your task");
        }
        else {
            let listArray = this.state.toDoList;
            listArray.push(input);
            this.setState({toDoList: listArray, userInput: ''})
        }
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItem() {
        let listArray = this.state.toDoList;
        listArray = [];
        this.setState({toDoList: listArray})
    }

    render() {
        return <div>
            <form onSubmit={this.onFormSubmit}>
                <div className="container">
            <input type="text" placeholder="Write your task..." 
            onChange = {(e) =>{this.onChangeEvent(e.target.value)}} 
            value={this.state.userInput} />
            </div>
                <div className="container">
                <button className="add" onClick={() => this.addItem(this.state.userInput)}>ADD
                </button>
                </div>
            <ul>
               {this.state.toDoList.map((item, index) =>
                 (<li onClick={this.crossedWord} key={index}><img src={icon} width="50px" />{item}</li>))}
            </ul>
            <div className="container">
            <button className="delete" onClick={() => this.deleteItem()}>DELETE</button>
            </div>
            </form>
        </div>
    }
}