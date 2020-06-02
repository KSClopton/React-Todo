import React from 'react'
import styled from 'styled-components'

const Task = props => {
    console.log(props.task.id)
    console.log(props.task.taskTitle)
    return (
    
        <TaskCard>
            <TaskList
                
                onClick={() => props.toggleTask(props.task.id)}
                className={`task${props.task.completed ? "Completed": ""}`}
                >
                <p className={`task${props.task.completed ? "Completed": ""}`}>{props.task.taskTitle}</p>
            </TaskList>
        </TaskCard>
      

    )
}

const TaskCard = styled.div`
    /* padding: 3% 4%; */
    border: white solid 2px;
    height: 75px;
    width: 200px;
    background-color: rgb(213, 85, 76);
    color: white;
    display: flex;
    flex-wrap: wrap;
    margin-top: 2%;
    margin-left: 2%;
    justify-content: center;
    
    p{
       font-size: 1.25rem; 
    }
`
const TaskList = styled.div`

    
    .taskCompleted {
        background-color: rgb(198, 129, 126);
        text-decoration: line-through;
    }  
    

`
export default Task;