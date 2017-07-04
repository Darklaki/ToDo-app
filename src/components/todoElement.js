import React, { Component } from 'react';

class TodoElement extends Component {
    
    render(){
        const {todoData} = this.props;
        
        return (
          <div className="todoElement">
            <a class='f-todoElement-id'>{this.props.id}.</a>
            <a onClick={() => {this.props.toggleFoo(todoData.id)}} class='f-todoElement-name margin-fx'>{todoData.name}</a>
            <div class='todo-remove-btn' onClick={() => {this.props.removeFoo(todoData.id)}}></div>
          </div>
        );
  }
}

export default TodoElement;
