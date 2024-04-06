import React from 'react'
import {data} from "../../data"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
      <div>
          Home
          
          {data.map((el) => (
              <div key={el.id}> 
                  <Link to={`/${el.id}`}>{el.name}</Link>
              </div>
          ))}

      </div>
      
  )
}
