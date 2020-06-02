import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Task from './components/Task'
import styled from 'styled-components'

const theList = []

class App extends React.Component {
  // you will need a place to store your state in this component.
  constructor() {
    super()
    this.state = {
      theList: theList,
    }
  }
  addTask = (taskName) => {
    const newTask = {
      taskTitle: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      theList: [...this.state.theList, newTask]
    })
  }
// GO OVER THIS
clearCompleted = taskCompleted => {
  this.setState({theList: theList.filter(task => task.completed === false)})
}
  toggleTask = taskId => {
    this.setState({
      theList: this.state.theList.map(task => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return {
            task
          }
        }
      })
    })
  }
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <MainDiv className='App'> 
        <Heading>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm addTask={this.addTask}/>
        </Heading>
        <TodoList 
          toggleTask={this.toggleTask}
          theList={this.state.theList}
          clearCompleted={this.clearCompleted}
        />
      </MainDiv>
    );
  }
}
const MainDiv = styled.div`
  background-color: rgb(45, 45, 54);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: 1%;
`
const Heading = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: auto;
  align-items: center;

  h2{ 
    color: white;
  }

`
export default App;
