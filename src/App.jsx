import { useState } from 'react'
import './App.css'
import Header from './Page1/Header/Header'
import UpperDiv from './Page1/UpperDiv/UpperDiv'
import LowerDiv from './Page1/LowerDiv/LowerDiv'
import Animation from './Page1/Animation/Animation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <div className='bg-white h-screen w-full'>
    <Header/>
    <div className='w-full h-screen bg-gray-300'> 
      <Animation/>
    <UpperDiv/>
    <LowerDiv/>
    </div>
   </div>
    </>
  )
}

export default App
