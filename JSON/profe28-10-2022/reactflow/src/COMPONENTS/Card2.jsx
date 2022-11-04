import React from 'react'
import{useState} from 'react'
export default function () {
    const [vof,mensaje] = useState(false)
  return (

     <>
<button class="btn btn-primary" onClick={()=> mensaje(!vof)}>
          {vof === true ? "true" : "false"}
        </button>
     </>
     )
   

}
