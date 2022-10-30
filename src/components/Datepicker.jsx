import React from 'react'

const Datepicker = () => {
  return (
     
     <div className='w-full -mt-20 flex flex-row justify justify-center absolute '>
      <div className='justify flex flex-col  md:flex-row justify-start bg-slate-100 py-10 px-10 rounded-xl border border-b-2 '>
        
     <div className='py-2 ml-2'>
     <label className='mr-2'>Pick Up Date</label>
     <input type="date" />
     </div>
     <div className='py-2 ml-2'>
     <label className='mr-2'>Return Date</label>
     <input type="date" />
     </div>
     <div className='py-1'>
      <button className='px-3 py-3 mx-6 rounded-full'>Search Vehicle</button>
     </div>
     </div>
   </div>
  )
}

export default Datepicker;