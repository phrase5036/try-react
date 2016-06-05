import React from 'react';

var TodoInput = React.createClass({
  getInitialState(){
    return {
      done: false,
      description: ''
    }
  },
  // 防止每次change都會抓預設的value = getInitialState, 必須每次都要set
  handleChange(input){
    this.setState(
      {
        description: input.target.value
      }
    )
  },
  handleClick(input){
    this.props.handleAddTodo(this.state)
    this.setState({description: "", done: false })
  },
  render(){
    return (
      <div>
        <input
          value= { this.state.description }
          onChange={ this.handleChange }
        />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    )
  }
})

module.exports = TodoInput
