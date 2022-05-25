import React, { useState, useCallback } from 'react'
import Button1 from './Button1'
import Count1 from './Count1'
import Title1 from './Title1'

function Parent1() {
    const [age, setAge] = useState(0)
    const [salary, setSalary] = useState(0)

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1)
    }, [salary])
    return (
        <div>
            <Title1 />
            <Count1 text='age' count={age} />
            <Button1 handleClick={incrementAge}>incrementAge</Button1>
            <Count1 text='salary' count={salary} />
            <Button1 handleClick={incrementSalary}> incrementSalary</Button1>
        </div>
    )
}

export default Parent1
