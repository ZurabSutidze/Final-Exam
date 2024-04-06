import React, { createContext, useContext, useState } from 'react'
import ContextPNT from './GrandChild'

export const Context = createContext(null)

export default function Parent() {
   
  const [input , setInput] = useState("Parent")

  return (
    <div>
      <Context.Provider value={{input, setInput}}>
          {input}
         <ContextPNT/>
      </Context.Provider>
    </div>
  )
}

