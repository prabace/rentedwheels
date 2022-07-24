import React from 'react'

import Card from '../components/Card';
import Categories from '../components/Categories';
import raptor from '../assets/ford-raptor.jpg'
import prado from '../assets/prado.jpg'
import bmw from '../assets/bmw.jpg'
import scorpio from '../assets/scorpio.jpeg'
import mustangy from '../assets/mustangy.png'
import { useState, useEffect } from 'react';
import { useFormControlUnstyledContext } from '@mui/base';

function Cars() {
  
  useEffect(()=>{
    async function getData(){}
  })

  const [ select, setSelect] = useState ('default');

  


  const display = Categories.map(el =>
  
       <Card price={el.price}
              type={el.type}
              title={el.title}
              img={el.img}

                 /> 
  )

    const filteredData = Categories.filter(el => el.type == select)
    const filteredCard = filteredData.map(el =>
      <Card price={el.price}
      type={el.type}
      title={el.title}
      img={el.img}

         /> 
    )
    console.log(filteredData)

    const filteredDisplay = select!='default'?filteredCard:display

  return (
      <div className='flex flex-row'>
        <svg onClick={()=>setSelect((prev) =>
          {return prev=='SUV'?'default':'SUV'})}
           xmlns="http://www.w3.org/2000/svg" 
           class="h-6 w-6"
            fill="none"
             viewBox="0 0 24 24" 
             stroke="currentColor" 
             stroke-width="2">
  <path d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
</svg>


<svg onClick={()=>setSelect('Sports')} xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
</svg>
      
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 relative gap-x-8 gap-y-28 px-4 pt-12 sm:pt-20 '>
        
      {filteredDisplay}
      

       
        


      </div>
  
      </div>
  )
}

export default Cars