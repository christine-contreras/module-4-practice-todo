import React, { Component } from 'react'
import Task from './Task'
import Form from './Form'

class TaskList extends Component {
    render() {
        return (
            <div className="tasks">
                <h5>Tasks</h5>
                <Form categories={this.props.categories} handleAddTask={this.props.handleAddTask}/>
                <div>
                    {this.props.tasks.map(task => <Task key={task.text} task={task} handleDeleteTask={this.props.handleDeleteTask} />)}
                </div>


            </div>
        )
    }
}

export default TaskList
