import React, { Component } from 'react'

class ClassTimer extends Component {
    interval
    constructor(props) {
      super(props)
    
      this.state = {
         timer:0
      }
    }
    // componentDidMount(){
    //  this.interval =   setInterval(()=>{
    //         this.setState(prevState => ({timer:prevState.timer + 1}))
    //     },2000)
    // }

    startTimeHandler=()=>{
             this.interval =  setInterval(()=>{
            this.setState(prevState => ({timer:prevState.timer + 1}))
        },1000)
    }

    resetHandler = ()=>{
        this.setState({
            timer:0
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    
  render() {
    return (
      <div>
      {this.state.timer}
      <button onClick={this.startTimeHandler}>Start Timer</button>
        <button onClick={()=>clearInterval(this.interval)}>Stop Class timer</button>
        <button onClick={this.resetHandler}>Reset Class timer</button>
      </div>
    )
  }
}

export default ClassTimer
