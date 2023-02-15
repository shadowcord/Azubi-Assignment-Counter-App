import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        counter:0         
      }
    }

    reset(){
      this.setState({
        counter: 0
      })

    }

    increment(){
      let inc = Number(this.state.counter) + Number(5)
      this.setState({
        counter: inc
      })

    }

    decrement(){
      let dec = Number(this.state.counter) - Number(5)
      this.setState({
        counter: dec
      })
    }
    

  render() {
    return (
        <div className="counterCard">
        <div >
          <span className="headText">Simple Counter App</span>
            <div >
        
        <div className="panel-body"><span className="panel-text">Counter -  {this.state.counter}</span></div>
            <div className="buttonDiv">
            <button className="resetButton" onClick={()=>this.reset()}>Reset</button>
            <button className="incrementButton" onClick={()=>this.increment()}>Increment</button>
            <button className="decrementButton" onClick={()=>this.decrement()}>Decrement</button>
            
            </div>
        </div>
        </div>
        </div>
    )
  }
}
