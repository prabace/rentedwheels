import React from 'react'
import sane from '../assets/sane.png'

function Home() {
  return (
    /*<div className='w-full h-full bg-zinc-200 flex flex-col justify-between py-80'>
     <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'> 
        <h1 className='text-5xl font-bold'>Easy and fast way<br/> to rent your car</h1>
        </div>   
    </div>
    </div>
    */
    <div className=' w-full h-screen relative hidden lg:block flex flex-col'>
       <img className=' w-full h-full object-cover' src={sane} />
    </div>
   
  )
}

export default Home;