import React, { Component } from 'react'

class Filter extends Component {
    render() {
        return (
            <div className="categories">
                <h5>Category Filters</h5>
                {this.props.categories.map(category => {
                    return category === this.props.selectedCategory ? <button className="selected">{category}</button> : <button onClick={() => this.props.handleCategoryChange(category)}>{category}</button>
                })}
            </div>
        )
    }
}

export default Filter


