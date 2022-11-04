import React from 'react'
import { useState } from 'react'

export default function () {
    const [incre, setCount] = useState(0)
    const [decre,setCount1]=useState(0)
    const [count,setCount2]=useState(0)
  return (

    <>
    <button onClick={() => setCount((incre) => incre + 1)}>
          incremento is {incre}
        </button>
        <button onClick={() => setCount1((decre) => decre - 1)}>
        decremento is {decre}
    </button>
    contador:{count}
    <button onClick={()=> setCount2((count)=>count+1)}>Aumenta
    </button>
    <button onClick={()=> setCount2((count)=>count-1)}>Disminuye
    </button>

    </>

  )
}
