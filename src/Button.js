import React, { useState } from 'react'



const Button = () => {
    const handle=()=>{
        setclick(click+1);
    }
    const [click,setclick]=useState(0);

  return (
    <div>
      <button onClick={handle}> clicked {click} times</button>
    </div>
  )
}

export default Button
