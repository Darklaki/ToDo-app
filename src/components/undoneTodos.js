import React, { Component } from 'react';

class UndoneTodos extends Component {

    render(){
        const {children} = this.props;
      
        return (
          <div class="todos-container">
            <a class='todos-cont-header'>TO DO</a>
            <div class='todos-split-line'></div>
            <div class='todos-todos-list'>
                {children}
            </div>
          </div>
        );
  }
}

export default UndoneTodos;
