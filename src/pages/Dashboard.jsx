import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Chart from '../components/Chart'

function Dashboard() {
    const [bookings,setBookings]=useState('')
    const [userCount, setuserCount]=useState(0)
    const [vehicleCount, setvehicleCount]=useState(0)

    useEffect(() => {

        const access_token = window.localStorage.getItem('user_token')

        async function getBookings(access_token) {

           

          const response = await fetch(`http://localhost:8080/getBookings`, {
            method: "GET",
            headers:{
                "Authorization": `Bearer ${access_token}`
            }
          });
          const data = await response.json();
    
          setBookings(data)
    
        }
        async function getallUsers(access_token){
    
            
    const response2= await fetch('http://localhost:8080/getUsers',{
      method:'GET',
      headers:{
        'Authorization':`Bearer ${access_token}`
      }
})
    const result2= await response2.json()
    setuserCount(result2.length)
        }
        async function getallVehicles(access_token){
    
            
            const response = await fetch(`http://localhost:8080/getVehicles`, {
                method: "GET",
                headers:{
                  'Authorization':`Bearer ${access_token}`
                }
              });
              const data = await response.json();
    setvehicleCount(data.length)
        }
        getBookings(access_token)
        getallUsers(access_token)
        getallVehicles(access_token)
      }, [])
      console.log(bookings)
    
    const display= Object.keys(bookings).map(keys=>
        <div className='my-5 mx-4 grid grid-cols-7 justify-items-center'>
                        <div className=''>
                            <h2>{parseInt(keys)+parseInt(1)}</h2>
                        </div>
                        <div>
                            <h2>{bookings[keys].bookedBy.username}</h2>
                        </div>
                        <div>
                            <h2>{bookings[keys].vprice}</h2>
                        </div>
                        <div>
                            <h2>{bookings[keys].paymentMethod}</h2>
                        </div>
                        <div>
                            <h2>{bookings[keys].vname}</h2>
                        </div>
                        <div>
                            <a href={bookings[keys].citizenshipAttachment} target="_blank"><h2 className='underline text-blue-500'>Click Here</h2></a>
                        </div>
                        <div>
                            <h2>{bookings[keys].vnumber}</h2>
                        </div>
                       

                    </div>
        )
    return (
        <div className=' mx-20 my-20 h-screen'>

            <div className='mx-20'>
                <div className='grid grid-cols-3 gap-x-20 '>
                    <div className=' bg-gradient-to-r from-cyan-500 to-blue-500border-2  mx-4 px-2 my-3 h-20 flex flex-row gap-x-5 justify-center items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14  ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                        </svg>
                        <div className='flex flex-col'>
                            <div className=' '>
                                <h2 className='text-2xl'>  Products </h2>
                            </div>
                            <div>
                                <h2 className='text-lg'>+{vehicleCount}</h2>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gradient-to-r from-indigo-500 to-pink-500border-0  mx-4 px-2 my-3 h-20 flex flex-row gap-x-5 justify-center items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>

                        <div className='flex flex-col'>
                            <div className=' '>
                                <h2 className='text-2xl'>Users</h2>
                            </div>
                            <div>
                                <h2 className='text-lg'>+{userCount}</h2>
                            </div>
                        </div>

                    </div>
                    <div className='bg-gradient-to-r from-yellow-100 via-yellow-300 to-yellow-500border-2  mx-4 px-2 my-3 h-20 flex flex-row gap-x-5 justify-center items-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>

                        <div className='flex flex-col'>
                            <div className=' '>
                                <h2 className='text-2xl'>Orders</h2>
                            </div>
                            <div>
                                <h2 className='text-lg'>+{bookings.length}</h2>
                            </div>
                        </div>

                    </div>


                </div>

                <div className=' bg-white py-10'>
                    <Chart />
                </div>

                <div className=' bg-white'>
                    <div className='my-5 mx-4'>
                        <h1 className='text-2xl font-semibold'>Orders</h1>
                    </div>
                    <div className='border-2 bg-slate-200 my-5 mx-4 grid grid-cols-7 justify-items-center'>
                        <div className=''>
                            <h1 className='font-semibold'>Id</h1>
                        </div>
                        <div className=''>
                            <h1 className='font-semibold'>Username</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Price</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Payment</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>Vehicle Name</h1>
                        </div>
                        
                        <div>
                            <h1 className='font-semibold'>Citizenship</h1>
                        </div>
                        <div>
                            <h1 className='font-semibold'>V.Number</h1>
                        </div>

                    </div>
                    {display}

                </div>

            </div>
        </div>
    )
}

export default Dashboard