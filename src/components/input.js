import React, { Component } from 'react';

class Input extends Component {
    constructor(){
        super();
        
        this.state = {
            inputVal: 'What should be done...'
        }
        
        this.inputValChandle = this.inputValChandle.bind(this)
        this.sendData = this.sendData.bind(this)
    }
    
    inputValChandle(e){
        var text = e.target.value;
        this.setState({
            inputVal: text
        });
    }
    
    sendData(e){
        e.preventDefault();
        if(this.state.inputVal.length > 0 && this.state.inputVal.length < 100 && this.state.inputVal !== ' '){
            this.props.text(this.state.inputVal);
            this.setState({
                inputVal: ''
            });    
        }else{
            console.log('Write something down...')
        }
        
    }
    
  render() {
    const {inputVal} = this.state
    return (
      <div class="input">
        <form class='form' onSubmit={this.sendData}>
            <input class='input-box' onChange={this.inputValChandle} value={inputVal}/>
            <button type="submit" class='form-button'><a class='form-button-txt'>ADD</a></button>
        </form>
      </div>
    );
  }
}

export default Input;
