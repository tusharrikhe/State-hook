import React, { Component } from 'react'

class ClassMove extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0,
         display:true

      }
    }
    logMousePosition=(e)=>{
        this.setState({
            x : e.clientX,
            y : e.clientY
        })
    }
    componentDidMount(){
        console.log('componentDidMount executed')
        window.addEventListener('mousemove',this.logMousePosition)
    }
    componentWillUnmount(){
        console.log('Component will update executed')
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    toggleUpdate = ()=>{
        this.setState({
            display:!this.state.display
        })
    }
  render() {
    return (
      <div>
      <button onClick={this.toggleUpdate}>ToggleUpdate</button>
      {
       this.state.display?` Position X : ${this.state.x} Y ${this.state.y}`: null 
      }
        
        
      </div>
    )
  }
}

export default ClassMove
