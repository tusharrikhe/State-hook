import React, { useState } from 'react'
import HookMove from './HookMove'

function HookContainer() {
    const[display,setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle button</button>
      {display?<HookMove/>:null}
    </div>
  )
}

export default HookContainer
