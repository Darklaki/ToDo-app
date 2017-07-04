import React, { Component } from 'react';
import {connect} from 'react-redux'
//components
import Input from './components/input'
import TodoElement from './components/todoElement'
import TodoElementDone from './components/todoElementDone'
import UndoneTodos from './components/undoneTodos'
import DoneTodos from './components/doneTodos'
//actions
import {addTodo} from './actions/todoActions'
import {removeTodo} from './actions/todoActions'
import {toggleTodo} from './actions/todoActions'

@connect((store) => {
    return{
        todos: store.todoReducer.todos
    }
})
class App extends Component {
    constructor(){
        super();
        this.dispatchInput = this.dispatchInput.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
    }

    dispatchInput(val){
        this.props.dispatch(addTodo(val));
    }
    
    removeTodo(id){
        this.props.dispatch(removeTodo(id));
    }
    
    toggleTodo(id){
        this.props.dispatch(toggleTodo(id));
    }
    
  render() {
      var todosUndoneArray =[];
      var undoneI = 0;
      
      var todosDoneArray =[];
      var doneI = 0;
      
      this.props.todos.map((todo, i) => {
          if(todo.isDone === false){
              undoneI++;
              todosUndoneArray.push( 
                            <TodoElement key={todo.id} id={undoneI} removeFoo={this.removeTodo} toggleFoo={this.toggleTodo} todoData={todo} />
                            )
          }else{
              doneI++;
              todosDoneArray.push( 
                            <TodoElementDone key={todo.id} id={doneI} removeFoo={this.removeTodo} toggleFoo={this.toggleTodo} todoData={todo} />
                            )
          }
          
      })
      
    return (
      <div className="App">
        <Input text={this.dispatchInput}/>
        <UndoneTodos>
            {todosUndoneArray}
        </UndoneTodos>
        <DoneTodos>
            {todosDoneArray}
        </DoneTodos>
      </div>
    );
  }
}

export default App;
