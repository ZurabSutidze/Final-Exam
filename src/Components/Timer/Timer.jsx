import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [time , setTime] = useState(10)
    const [start, setStart] = useState(false)
    
    useEffect(() => {
        let interval = 0 

        if (start && time > 0) {
            interval = setInterval(() => {
                setTime(prev => prev - 1)
            }, 1000)
        } else {
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    })
  return (
      <div>
          {time}
      <button onClick={() => setStart(true)}>start</button>
      <button onClick={() => setStart(false)}>stop</button>
          <button onClick={() => {setStart(false), setTime(10)} }>reset</button>
      </div>
  )
}
