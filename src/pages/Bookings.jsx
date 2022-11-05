import {React, useEffect, useState} from 'react'

import raptor from '../assets/ford-raptor.jpg'




const Bookings = () => {


    const [bookingData, setbookingData]= useState()
    
    useEffect(() => {
        async function getbookingData() {
            
            const id = window.localStorage.getItem('id')
            const access_token = window.localStorage.getItem('user_token')
        const response=  await fetch(`http://localhost:8080/getBookings`, {
            method: "GET",
            headers: {
              'Authorization': `Bearer ${access_token}`,
          },
          
          
          
          })
          
          const data = await response.json()
          const bookingData = []
          data.forEach(element => {
            if (element.bookedBy.id == id){
                bookingData.append(element)
            }
          });
        }
    },[])
    

    return (
        <div className='h-screen mx-80 my-10'>
            <div className=' border-2  '>
                <div className='mx-6 my-8 '>

                    <h1 className='font-semi-bold text-4xl'>Your Orders</h1>
                    <div className='text-lg mt-3'>
                        <h5>Check the status of your bookings and manage orders.</h5>
                    </div>

                </div>
                <div className='grid grid-cols-3'>
                    <div className='mx-6 my-8 flex flex-row gap-x-80'>
                        <div className=''>
                            <h1 className='text-xl'>Vehicle</h1>
                            <div className='mt-4'>
                                <img className='object-contain h-50 w-auto' src={raptor} />
                            </div>

                            <div className='grid grid-cols-2 gap-x-80 mt-10'>
                                <div className='flex flex-row gap-x-80'>
                                    <div>
                                        <h1 className='text-3xl'>Total</h1>
                                    </div>

                                    <div className=''>
                                        <h1 className='text-3xl'>25000</h1>
                                    </div>
                                    <div className='flex flex-row gap-x-10'>
                                    <div className=''>
                                        <button className='px-10 py-2 rounded-full'>Cancel Booking</button>
                                    </div>
                                    <div className=''>
                                    <button className='px-10 py-2 rounded-full'>Change Booking</button>
                                    </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl'>Booked Date</h1>
                            <div className='mt-4'>
                                2022/10/1 - 2022/10/3
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl'>Status</h1>
                            <div className='mt-4'>
                                On progress
                            </div>
                        </div>




                    </div>

                </div>

            </div>
        </div>
    )
}

export default Bookings