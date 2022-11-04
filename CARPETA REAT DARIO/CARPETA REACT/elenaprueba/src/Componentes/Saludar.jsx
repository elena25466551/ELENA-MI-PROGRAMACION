import React from 'react'

export default function Saludar(props) {
    const {name,apellido,children} = props
  return (
    <div>Hola, {name} {apellido}
    <div> {children}</div>
    </div>
  )
}