import React from 'react'

const Task = (props) => {
    return (
        <div className="task">
            <div className="label">{props.task.category}</div>
            <div className="text">{props.task.text}</div>
            <button className="delete" onClick={() => props.handleDeleteTask(props.task)}>X</button>
        </div>
    )
}

export default Task





