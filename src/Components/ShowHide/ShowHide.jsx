import React, { useState } from 'react'

export default function ShowHide() {
    const [show, setShow] = useState(true)
    
    const NotShow = () => {
        setShow(!show)
    }
  return (
      <div>
          {show && <h1>Gachnda</h1>}
          <button onClick={NotShow}>Click</button>
      </div>
  )
}