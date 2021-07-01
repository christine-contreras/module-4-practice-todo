import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import Filter from './Components/Filter'
import TaskList from './Components/TaskList'

class App extends React.Component {

  state = {
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    categories: CATEGORIES,
    selectedCategory: "All"
  }

  handleCategoryChange = (category) => {
    this.setState({
      selectedCategory: category
    })
  }

  handleDeleteTask = (selectedTask) => {
    const newTasks = this.state.tasks.filter(task => task !== selectedTask)

    this.setState({tasks: newTasks})
  }

  handleAddTask = (newTask) => {
    this.setState(previousState => {
      return {
        tasks: [...previousState.tasks, newTask]
      }
    })
  }

  render() {
    const filteredTasks = () => {
      if(this.state.selectedCategory !== "All") {
        return this.state.tasks.filter(task => task.category === this.state.selectedCategory)
      } else {
        return this.state.tasks
      }
    }

    return (
      <div className="App">
        <h2>My tasks</h2>

        <Filter
        categories={this.state.categories}
        selectedCategory={this.state.selectedCategory}
        handleCategoryChange={this.handleCategoryChange}
        />

        <TaskList
        tasks={filteredTasks()}
        categories={this.state.categories.filter(cat => cat !== "All")}
        handleDeleteTask={this.handleDeleteTask}
        handleAddTask={this.handleAddTask}
        />
      </div>


    );
  }
}


export default App;
