import React, { Component } from 'react';

class DoneTodos extends Component {

    render(){
        const {children} = this.props;
      
    return (
      <div class="todos-container">
        <a class='todos-cont-header'>DONE</a>
        <div class='todos-split-line-done'></div>
        <div class='todos-todos-list'>
        {children}
        </div>
      </div>
    );
  }
}

export default DoneTodos;
