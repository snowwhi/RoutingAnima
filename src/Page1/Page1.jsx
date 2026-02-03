import { useState } from 'react'
import '../App.css'
import Header from './Header/Header'
import UpperDiv from './UpperDiv/UpperDiv'
import LowerDiv from './LowerDiv/LowerDiv'
import Animation from './Animation/Animation'
function Page1() {
  return (
    <>
    <Header/>
    <div className='bg-gray-300 h-screen'> 
    <UpperDiv/>
    <Animation/>
    <LowerDiv/>
   </div>
    </>
  )
}

export default Page1
