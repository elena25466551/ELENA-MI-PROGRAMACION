import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Saludar from './Componentes/Saludar'
import Button from './Componentes/Button'

function App() {
  // const [count, setCount] = useState(0)
  // return (
  //   //llamo funcion y creo una propiedad name
  //   <>
  //   <Saludar name="Elena" apellido="Castro"/>
  //   <Button texto="Somos programadores" color="red"/>
  //   <Button texto="Somos Matemáticos" color="green"/>
  //   </>

  // )
  const [text,setText]=useState("Ok")
  const [color,setColor]=useState("success")
  const changeButton=()=>{
    if(text){
      setText("OFF")
      setColor("danger")
    }
    else{
      setText("ON")
      setColor("sucess")
    }
     }
     const [datainput,setdatainput]=useState("")

 return( 
  <div classname="App">
    <button classname={`btn btn-${color}`} onClick={changeButton}>{text}</button>
</div>
  // return(
  //   <div className={'btn btn ${color}'}onClick={()=>console.log("prueba")}
  
  // )
  
)}


export default App
