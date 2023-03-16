import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [name, setName] = useState('')
  const [headingText, setheadingText] = useState('')

  const handleChange = (e) =>{
    
    setName(e.target.value)
  }

  const clickedButton = (e) =>{
    setheadingText(name)
    e.preventDefault()
  }

  return (
   
    <div className="container">
    <h1>Hello {headingText} </h1>
    <form onSubmit={clickedButton}>
    <input onChange={handleChange} type="text" placeholder="What's your name?" value={name}/>
    <button type='submit'>Submit</button>
    </form>
  </div> 
    
  )
}

export default App