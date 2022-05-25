import React, { useState, useEffect } from 'react'

function UeffHookCountOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    useEffect(() => {
        console.log('Updating Dom through useEffect')
        document.title = `You Clicked {count}`
    }, [count])


    return (
        <div>

            <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Click {count}</button>
        </div>
    )
}

export default UeffHookCountOne
