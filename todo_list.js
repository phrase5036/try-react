import React from 'react';
import TodoItem from './todo_item.js';

var TodoList = React.createClass({
  propTypes(){
    todos: React.PropTypes.array.isRequored
  },
  render(){
    return ( <div>
      { this.props.todos.map(
          (item) => <TodoItem key={item.id} item={item}/>
      )}
    </div>
    )
  }
})

module.exports = TodoList
