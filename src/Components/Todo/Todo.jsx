import React, { useState } from 'react'

export default function Todo() {
    const [Todo, setTodo] = useState([])
    const [Text, setText] = useState('')
    const HandleSumbit = (e) => {
        e.preventDefault()

        const newtodo = {
            id: Math.random(),
            title: Text
        }

        setTodo([newtodo, ...Todo])
        setText("")
    }
  return (
      <div>
          <form onSubmit={HandleSumbit}>
              
              <input type="text" value={Text} onChange={(e) => setText(e.target.value)} /> 
              <button onClick={HandleSumbit}>Add</button>

          </form>

    {
        Todo.map(el => (
            <div key={el.id}>
                <h1>{el.title}</h1>
            </div>
        ))
    }

    </div>
  )
}

