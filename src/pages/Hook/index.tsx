import React, { useState,useEffect } from 'react'
import { Button, WhiteSpace } from 'antd-mobile'
import './index.scss'
function Hook() {
    const [count, setCount ] = useState(0)
   
    const [todos, setTodos ] = useState({current:'learn hooks'})
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    const [age, setAge] = useState(22)

    useEffect(() => {
        // AddCount()
    })

    function AddCount() {
        setAge(age + 1)
    }
    
    return(
        <div className="hook">
            <p>You clicked {count} times 312321213</p>
            <Button type="primary" onClick={() => setCount(count+1)}>
                Click Me
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={() => AddCount()}>
                Click Me age ++{age}
            </Button>
            <WhiteSpace />
            <Button type="primary" onClick={() => setTodos({current:'ddddd'})}>
                {todos.current}
            </Button>
        </div>
    )
}
export default Hook