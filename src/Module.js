import React from 'react'

export default function Module() {
  let stylehandle={
     color:"red",
     backgroundColor:"green",
  }
  return (
    <div className="container" rows="9" style={stylehandle}>
        <label htmlFor="my box" >Email</label><br></br>
    <input type="text"/>
    </div>
  )
}
