import { useState } from 'react'
import './App.css'
import Header from './Page1/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='bg-white h-screen w-full'>
    <Header/>
   </div>
    </>
  )
}

export default App
