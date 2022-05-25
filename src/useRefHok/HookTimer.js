import React, { useState, useEffect, useRef } from 'react'

function HookTimer() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
    useEffect(()=>{
        
     intervalRef.current =   setInterval(()=>{
            setTimer(prevCount=>prevCount+1)
        },1000)
        return ()=>{
            clearInterval(intervalRef.current)
        }

    })
    const startTimer = ()=>{
        setInterval(()=>{
            setTimer(prevCount=>prevCount+1)
        },1000)
    }
  return (
    <div>
      Hook Timer : {timer}
      <button onClick={startTimer}>Start Hook Timer</button>
      <button onClick={()=>(clearInterval(intervalRef.current))}> Stop Hook Timer</button>
    </div>
  )
}

export default HookTimer
