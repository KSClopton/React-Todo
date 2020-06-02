import React from 'react'
import styled from 'styled-components'

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        };
    }

    handleChanges = e => {
        this.setState({
            task: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({
            task: ''
        });
    };
    render() {
        return (
            <FormDiv>
            <form onSubmit={this.handleSubmit}>
                <input 
                type='text'
                name='task'
                value={this.state.task}
                onChange={this.handleChanges}
                />
                <button>Add Task</button>
            </form>
            </FormDiv>
        )
    }
}
const FormDiv = styled.div`


    input {
        background-color: rgb(45, 45, 54);
        font-size: 1.5rem;
        border: none;
        border-bottom: solid red 1px; 
        align-items: center;
        justify-content: center;
    }

    button{
        background-color: rgb(213, 85, 76);
        border: none;
        font-size: 1.25rem;
        
    }

`

export default TodoForm;
