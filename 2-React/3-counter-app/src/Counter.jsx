import React from 'react'
import { useState } from 'react'

export const Counter = () => {



  const [count,setCount] = useState(0)
  const aumentar = () => {
    setCount(count+1)
  }
  return <>
      <h2>Contador {count}</h2>
      <button onClick={aumentar}>Incrementar Contador +1</button>
    </>
  
}
