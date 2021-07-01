import React, { Component } from 'react'

class Form extends Component {
    state = {
        text: "",
        category: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.handleAddTask(this.state)

        this.setState({
            text: "",
            category: ""
        })

    }

    render() {
        return (
            <form className="new-task-form" onSubmit={this.handleSubmit}>
                <input placeholder="New Task"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                />

                <select name="category" onChange={this.handleChange}>
                    {this.props.categories.map(cat => <option>{cat}</option>)}
                </select>

                <input type="submit" value="add task"/>

            </form>
        )
    }
}

export default Form
