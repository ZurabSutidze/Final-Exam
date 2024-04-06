import React, { useState } from 'react'
import Child from './Child'

function parent() {
    const [count , setCount] = useState(0)
  return (
      <div>
          {count}

          <button onClick={()=>setCount(count + 1)}>+</button>
          <button onClick={()=>setCount(0)}>Reset</button>
          <button onClick={() => setCount(count - 1)}>+</button>
          
          <Child/>
      
      </div>
  )
}

export default parent