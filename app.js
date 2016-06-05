import React from 'react';
import TodoList from './todo_list.js';
import TodoInput from './todo_input.js';

var todos = [
  { id: "todo1", done: true, description: "以做完"},
  { id: "todo2", done: false, description: "未做完"},
  { id: "todo3", done: false, description: "卡住了"}
]

var App = React.createClass({
  // 初始化 State值
  getInitialState(){
    return { todos: todos }
  },
  handleAddTodo(todo){
    this.setState({ todos: this.state.todos.concat(todo) })
  },
  render(){
    return <div>
      <h3>Hello todos!!!</h3>
      <TodoList todos={this.state.todos}/>
      <TodoInput handleAddTodo={ this.handleAddTodo }/>
    </div>
  }
})

module.exports = App
