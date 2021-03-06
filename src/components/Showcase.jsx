import React from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Card from './Card';


import raptor from '../assets/ford-raptor.jpg'
import prado from '../assets/prado.jpg'
import bmw from '../assets/bmw.jpg'
import scorpio from '../assets/scorpio.jpeg'
import mustangy from '../assets/mustangy.png'

function ShowCase() {
  const [value] = React.useState();
  return (

    <div className=' mt-56 mx-4'>
      <div className='flex flex-row justify-between'>
        <h2 className='text-3xl font-medium'>Book Your Suitable Vehicle</h2>
        <a className='text-xl flex flex-row' href='#'>View All
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </a>
      </div>
      <div className=' flex grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-x-8 gap-y-28 px-4 pt-12 sm:pt-20 '>
    
        <Card
          img={raptor}
          title="Ford Raptor"
          price='Rs.80,000/Day'
          reviews="1.1k Reviews"
          value= {5} 
        />

        <Card

        img={mustangy}
          title="Ford Raptor"
          price='Rs.80,000/Day'
          reviews="1.1k Reviews"
          value= {5}
        
        />
        <Card
        

        
        />
        <Card
        

        
        />
       
        
        
      </div>
      
    </div>
    
   
    

  )
}

export default ShowCase