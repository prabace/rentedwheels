import React from 'react'

import Carcard from '../components/Carcard';


import { useFormControlUnstyledContext } from '@mui/base';
import { keys } from '@mui/system';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ElectricCarIcon from '@mui/icons-material/ElectricCar';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import AirlineSeatReclineExtraIcon from '@mui/icons-material/AirlineSeatReclineExtra';
import RemoveRoadIcon from '@mui/icons-material/RemoveRoad';
import Review from '../components/Review';
import profile from '../assets/profile.svg'
import Rating from '@mui/material/Rating';
import { useState, useEffect } from 'react';

const Adminreview = (props) => {

    const [submitted, setSubmitted] = useState(false)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')
    const [reviews, setReviews] = useState([])

    async function getReviews() {
        const access_token = window.localStorage.getItem('user_token')
        const response = await fetch(`http://localhost:8080/ratings/${props.id}`, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${access_token}`
            }
        });
        const data = await response.json();
        setReviews(data)
        return
    }

    useEffect(() => {
        getReviews()
    }, [props.id])

    const handleSubmit = async (evt) => {
        const userID = parseInt(window.localStorage.getItem('id'))
        const vehicleID = parseInt(props.id)
        evt.preventDefault()
        const sendData = {
            rating: rating,
            comment: comment
        }

        const access_token = window.localStorage.getItem('user_token')

        const response = await fetch(`http://localhost:8080/rate/${userID}/${vehicleID}?comment=${comment}&rating=${rating}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${access_token}`
            },
        })
        const data = await response.text()
        console.log(data)
        setRating(0)
        setComment('')
        await getReviews()
        return
    }

    return (
        <div className='mx-40 mt-20'>
            <div className='shadow-2xl mx-4'>
                <div className='mx-4 flex flex-row justify justify-between mt-4'>
                    <p className='text-2xl font-semibold'>{props.vehicleName}</p>
                    
                </div>
                <div className='mx-4'>
                    <Rating name="half-rating" defaultValue={5} readOnly />
                </div>
                <div className='flex justify justify-center'>

                    <img className='w-auto h-[250px] lg:h-[350px]' src={props.vehicleImage} />
                </div>
               
                <div className='flex flex-row'>


                    <div className='flex flex-row border-2 mx-2 my-4 px-4 py-2 w-1/3 rounded-2xl'>
                        <div className='flex flex-col '>

                            <div className='text-gray-600 text-lg '>
                                Max. Power
                            </div>
                            <div className='mt-3 font-bold text-xl text-[#f9a826]'>
                                {props.maxPower}
                            </div>
                            <div className='text-gray-500'>
                                hp
                            </div>

                        </div>
                        <div className='mx-10 my-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto hidden lg:block text-[#f9a826]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                        </div>
                    </div>
                    <div className='flex flex-row border-2 mx-2 my-4 px-4 py-2 w-1/3 rounded-2xl'>
                        <div className='flex flex-col '>

                            <div className='text-gray-600 text-lg'>
                                0-60 mph
                            </div>
                            <div className='mt-3 font-bold text-xl text-[#f9a826]'>
                                {props.accelerationTime}
                            </div>
                            <div className='text-gray-500'>
                                sec
                            </div>

                        </div>
                        <div className='mx-10 my-10'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-auto hidden lg:block text-[#f9a826]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    </div>

                    <div className='flex flex-row border-2 mx-2 my-4 px-4 py-2 w-1/3 rounded-2xl'>
                        <div className='flex flex-col '>

                            <div className='text-gray-600 text-lg'>
                                Top Speed
                            </div>
                            <div className='mt-3 font-bold text-xl text-[#f9a826]'>
                                {props.topSpeed}
                            </div>
                            <div className='text-gray-500'>
                                mph
                            </div>

                        </div>
                        <div className='mx-10 my-10 '>
                            <svg xmlns="http://www.w3.org/2000/svg" class=" h-10 w-auto hidden lg:block text-[#f9a826]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                    </div>

                </div>
                
                <div>
                    <div className=' mx-2 my-5'>
                        <h1 className='text-3xl font-medium px-4 my-8'>Reviews</h1>
                        {
                           
                            Object.keys(reviews).map((key) =>
                            <div className='flex grid-cols-2 justify justify-between'>
                                <div>

                                <Review ratings={reviews[key].ratings} comment={reviews[key].comment} />
                                </div>
                                <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-[#f9a826]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                            </div>
                                )
                            
                        }
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Adminreview