import axios from "axios"
import { useEffect, useState } from "react"

export default function Getdata(Url) {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get(Url)
            .then(res => setData(res.data))
            .catch(er => console.log(er))
    }, [])

    return {data , setData}
}

