import React, { Component } from 'react';

class TodoElementDone extends Component {
    render(){
    const {todoData} = this.props;
        
        return (
          <div className="todoElement">
            <a class='f-todoElement-id'>{this.props.id}.</a>
            <div class='todoElementDone-nameDate-cont'>
                <a class='f-todoElement-date'>{todoData.date}</a>
                <a onClick={() => {this.props.toggleFoo(todoData.id)}} class='f-todoElement-name'>{todoData.name}</a>
            </div>

            <div class='todo-remove-btn' onClick={() => {this.props.removeFoo(todoData.id)}}></div>
          </div>
        );
  }
}

export default TodoElementDone;
