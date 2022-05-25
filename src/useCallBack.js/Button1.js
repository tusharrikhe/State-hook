import React from 'react'

function Button1({ handleClick, children }) {
    console.log(`Rendering ${children}`)
    return (
        <div>
            <button onClick={handleClick}>{children}</button>
        </div>
    )
}

export default React.memo(Button1)  
