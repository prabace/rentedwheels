import React from 'react'

import Carcard from '../components/Carcard';
import Categories from '../components/Categories';
import raptor from '../assets/ford-raptor.jpg'
import prado from '../assets/prado.jpg'

import scorpio from '../assets/scorpio.jpeg'
import mustangy from '../assets/mustangy.png'
import { useState, useEffect } from 'react';
import { useFormControlUnstyledContext } from '@mui/base';
import { keys } from '@mui/system';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import { Modal } from '../components/Modal';


function Addcars({history}) {
  const [value] = React.useState();
  const [vehicleData, setvehicleData] = useState([])



  //For  pop-up form

  const [openForm, setOpenForm] = useState(false)

  

  useEffect(() => {
    async function getVehicles() {
      const access_token = window.localStorage.getItem('user_token')
      const response = await fetch(`http://localhost:8080/getVehicles`, {
        method: "GET",
        headers:{
          'Authorization':`Bearer ${access_token}`
        }
      });
      const data = await response.json();

      setvehicleData(data)

    }
    getVehicles()
  }, [])

  console.log(vehicleData);

  //const [ data, setData ] = useState('')

  const display = Object.keys(
    vehicleData
  ).map(keys => <Carcard price={vehicleData[keys].vehiclePrice}
    type={vehicleData[keys].vehicleType}
    title={vehicleData[keys].vehicleName}
    reviews={vehicleData[keys].vehicleReview}
    value={vehicleData[keys].vehicleRating}
    id={vehicleData[keys].id}
    img={vehicleData[keys].vehicleImage}
    vehicleRating={vehicleData[keys].vehicleRating}
    vehicleReview={vehicleData[keys].vehicleReview}
    seats= {vehicleData[keys].seats}
      ac= {vehicleData[keys].ac}
      source= {vehicleData[keys].fuelElectric}
      transmission= {vehicleData[keys].autoManual}
    user='admin'
    history= {history}
  /> )


  /*Categories.map(el =>
  
       <Card price={el.price}
              type={el.type}
              title={el.title}
              img={el.img}

                 /> 
  )
  */

  const [select, setSelect] = useState("default")

  const filteredData = Object.keys(vehicleData).filter(function(el){
    return vehicleData[el].vehicleType==select
  })
  const filteredCard = filteredData.map(keys=>
    <Carcard price={vehicleData[keys].vehiclePrice}
      type={vehicleData[keys].vehicleType}
      title={vehicleData[keys].vehicleName}
      img={vehicleData[keys].vehicleImage}
      id={vehicleData[keys].id}
      vehicleRating={vehicleData[keys].vehicleRating}
      vehicleReview={vehicleData[keys].vehicleReview}
      seats= {vehicleData[keys].seats}
      ac= {vehicleData[keys].ac}
      source= {vehicleData[keys].fuelElectric}
      transmission= {vehicleData[keys].autoManual}
      user='admin'
      history= {history}
    />

  )
  console.log(filteredData)

  const filteredDisplay = select != 'default' ? filteredCard : display

  return (
    <div className='mx-20 my-20 '>
      <div className='flex flex-row justify-between'>
        <div className=''>
          <h1 className='text-2xl'>Categories</h1>
        </div>


        <div className='flex flex-row mx-4 gap-x-2'>
          <div className='border-2 px-2 py-2 flex flex-col justify justify-center'>
            <div>
              <ElectricCarIcon sx={{ fontSize: 40 }} onClick={() => setSelect((prev) => {  return prev == 'Electric' ? 'default' : 'Electric'  })} />
            </div>
            <div>
              <h3> Electric</h3>
            </div>
          </div>

          <div className='border-2 px-2 py-2 flex flex-col justify justify-center'>
          <div>
            <AirportShuttleIcon sx={{ fontSize: 40 }} onClick={() => setSelect((prev) => { return prev == 'Sports' ? 'default' : 'Sports' })}  />
          </div>
          <div>
              <h3> Sports </h3>
          </div>
          </div>
          <div className='border-2 px-2 py-2 flex flex-col justify justify-center'>
          <div>
          <TwoWheelerIcon sx={{ fontSize: 40 }} onClick={() => setSelect((prev) => { return prev == 'Two-Wheelers' ? 'default' : 'Two-Wheelers' })} />
          </div>
          <div>
              <h3> Bikes </h3>
          </div>
          </div>

          <div className='border-2 px-2 py-2 flex flex-col justify justify-center'>
          <div>
          <AirlineSeatReclineExtraIcon sx={{ fontSize: 40 }} onClick={() => setSelect((prev) => { return prev == 'Luxury' ? 'default' : 'Luxury' })}/>
          </div>
          <div>
              <h3> Luxury </h3>
          </div>
          </div>

          <div className='border-2 px-2 py-2 flex flex-col justify justify-center'>
          <div>
          <RemoveRoadIcon sx={{ fontSize: 40 }} onClick={() => setSelect((prev) => { return prev == 'Off-road' ? 'default' : 'Off-road' })} />
          </div>
          <div>
              <h3>Off-road</h3>
          </div>
          </div>

        </div>

      
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative gap-x-8 gap-y-28 px-4 pt-12 sm:pt-20 '>
       
        <div>
            <div className='border-2 shadow-2xl  h-[100%] flex justify-center'>
                <div className='py-52'> 
              <button onClick={() => setOpenForm(true)} className='border-none hover:text-black text-black bg-white'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </button>
               
                </div>

            </div>
        </div>
        
        {filteredDisplay}

      </div>
      
      {openForm&&
      <div>
      <Modal onClose={() => setOpenForm(false)} />
      </div>
      
      }
      
    </div>
  )
}

export default Addcars