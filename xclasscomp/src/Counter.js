import React, { Component } from 'react'

export default class Counter extends Component {

    constructor(props){
        super(props);
        this.state = {count:0}
    }

    increase = ()=>{
        this.setState({count: this.state.count+1});
    }
    
    decrease = ()=>{
        this.setState({count: this.state.count-1});
    }
  render() {
    return (
      <>
      <h1>Counter App</h1>
      <p>Count: {this.state.count}</p>
      <button onClick={this.increase}>Increment</button>
      <button onClick={this.decrease}>Decrement</button>
      </>
    )
  }
}
