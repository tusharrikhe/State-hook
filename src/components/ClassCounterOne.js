import {createPortal} from 'react-dom'
import React, { Component } from 'react'

class ClassCounterOne extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0,
         name:''
      }
    }
    clickHandler = (e)=>{
      this.setState(prevState=>{
          return {count:prevState.count+1}
      })
    }
    componentDidMount(){
        document.title = `You clicked ${this.state.count}`
    }
    componentDidUpdate(prevProps,prevState ){
        if(prevState.count !==this.state.count){
            console.log('Updating the component')
            document.title = `You clicked ${this.state.count}`
        }
        
    }
  render() {
    return (
      <div>
        <input type="text" value={this.state.name} onChange={(e)=>{
            this.setState({
                name:e.target.value
            })
        }}/>
        <button onClick={this.clickHandler}>Click {this.state.count} times</button>
      </div>
    )
  }
}

export default ClassCounterOne
