import React, { useEffect, useState } from 'react'

function HookMove() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const logMousePosition = (e) => {
    setX(e.clientX)
    setY(e.clientY)
  }
  useEffect(() => {
    console.log('useEffect executed')
    window.addEventListener('mousemove', logMousePosition)
    return (
      () => {
        window.removeEventListener('mousemove', logMousePosition)
      }
    )
  }, [])
  return (
    <div>
      Position X: {x} Y: {y}
    </div>
  )
}

export default HookMove
