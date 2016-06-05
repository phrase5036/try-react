import React from 'react';

//code style by ES6
var TodoItem = React.createClass({
  render(){
    return (
      <div classname={ this.props.done ? 'done' : ''}>
      { this.props.item.description }
      </div>
    )
  }
})

module.exports = TodoItem
