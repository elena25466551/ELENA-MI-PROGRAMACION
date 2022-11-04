import React from 'react'

export default function Button(props) {
  const {texto,color}=props
    return (
    
    <button style={{backgroundColor: color}}>{texto} </button>
  )
}
