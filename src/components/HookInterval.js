import React, {useState, useEffect} from 'react'

function HookInterval() {
    const [count, setCount] = useState(0)

    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return()=>{
            clearInterval(interval)
        }
    },[])
    
    const tick = ()=>{
        setCount(prevCount=>prevCount+1)
    }
    
  return (
    <div>
    <h3>{count}</h3>  
    </div>
  )
}
export default HookInterval
