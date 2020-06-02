// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Task from './Task'
import styled from 'styled-components'

const TodoList = props => {
    const {clearCompleted} = props
    console.log(props)
    return (
        <div>
            <CardDiv className="todo-list">
                {props.theList.map(task => (
                    <Task toggleTask={props.toggleTask} key={task.id} task={task} />
                ))}
            </CardDiv>
        <ButtonDiv>
            <button className="clear-btn" onClick={clearCompleted}>Clear Completed</button>
        </ButtonDiv>
        </div>
    )
}
const CardDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const ButtonDiv = styled.div`

    button {
        background-color: rgb(213, 85, 76);
        border: none;
        font-size: 1rem;
        color: white;
        margin-top: 2%;
        margin-left: 2%;
    }
    
`
export default TodoList;
