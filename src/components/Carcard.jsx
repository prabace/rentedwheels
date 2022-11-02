import React, { useState, useEffect } from 'react'
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Categories from './Categories';
import { Link } from 'react-router-dom';


import raptor from '../assets/ford-raptor.jpg'


const Carcard = (props) => {


  const [bookingData, setBookingData] = useState('')


  useEffect(() => {
    async function getVehicleBooking() {
      const response = await fetch(`http://localhost:8080/getBooking/${props.id}`, {
        method: "GET"
      });
      const data = await response.json();
      
      console.log(data)
      setBookingData(data)

    }
    getVehicleBooking()
  }, [])

  console.log(bookingData)
  console.log(props)

  const svg = props.type == "electric" ? <svg xmlns="http://www.w3.org/2000/svg" class="h-12 border rounded-2xl bg-gray-100 text-blue-500 mr-3 px-3 py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg> : <svg xmlns="http://www.w3.org/2000/svg" class="h-12 border rounded-2xl bg-gray-100 text-blue-500 mr-3 px-3 py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
  </svg>

  const handleDelete = () =>{
     fetch(`http://localhost:8080/deleteVehicle/${props.id}`, {
      method: "DELETE"
    }).then(data=>{window.location.reload()
    return
    }
    
)
    
    
  }


  return (


    <div className=''>
      <div className='shadow-2xl rounded-lg px-4 py-2 '>

        <img className='h-[200px] w-auto' src={props.img} />

        <div className='' >
          <h3 className='text-2xl'>{props.title}</h3>
          <div className='flex flex-row py-3 my-2'>
            <h2 className='text-lg font-medium'>Rs.{props.price}/Day</h2>
          </div>
          <div className='-mt-5 flex flex-row justify-between'>
            <Rating name="read-only" value={props.value} readOnly />
            
            <h6 className='ml-4 text-gray-500'>{props.reviews} reviews</h6>
            
            {props.booked&&<h6 className=' px-2 bg-red-500 rounded-full text-white'>Booked</h6>}
            
          </div>
          
          <div className='flex flex-row gap-x-2 mt-2'>
            <div className='flex flex-col '>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 border rounded-2xl bg-gray-100 text-blue-500 mr-3 px-3 py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className=' '>
                4 seats
              </div>
            </div>

            <div className='flex flex-col'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 border rounded-2xl bg-gray-100 text-blue-500 mr-3 px-3 py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <div className='ml-4'>
                AC
              </div>
            </div>

            <div className='flex flex-col'>
              {svg}
              <div>
                {props.type == 'electric' ? 'Electric' : "Fuel"}
              </div>
            </div>

            <div className='flex flex-col'>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-12 border rounded-2xl bg-gray-100 text-blue-500 mr-3 px-3 py-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
              <div>
                Auto
              </div>
            </div>
          </div>
          <div className='my-4'>
            {
              props.user == 'admin' ? <button onClick={handleDelete} className='px-10 py-2 rounded-full w-full bg-[#f9a826] hover:bg-white hover:text-[#f9a826] border-[#f9a826]'>Delete</button> : <Link to={`/app/checkout?id=${props.id}`}>
                {/**passing vehicle id to used in checkout page */}
                <button className='px-10 py-2 rounded-full w-full bg-[#f9a826] hover:bg-white hover:text-[#f9a826] border-[#f9a826]'>Book Now</button>
              </Link>
            }

          </div>
        </div>
      </div>

    </div>



  )
}

export default Carcard