import React, { useState } from 'react'
function HookHover(){
    const [count, hoverHandler] = useState(0)
    return (
        <div>
          <h1 onMouseOver={()=>hoverHandler(count+1)}>You moved over the text {count} times</h1>
        </div>
    )
}

export default HookHover