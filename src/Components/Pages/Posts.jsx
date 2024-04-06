import React from 'react'
import { useParams } from 'react-router-dom'
import { data } from "../../data"
export default function Posts() {
    const params = useParams()
    console.log(params)
    const newdata = data.find(el => el.id === Number(params.id))
  return (
    <div>
          <p>{newdata.address}</p>
          <p>{newdata.name}</p>
          <p>{newdata.lastname}</p>

    </div>
  )
}
