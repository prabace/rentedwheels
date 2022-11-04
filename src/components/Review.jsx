import React from 'react'
import profile from '../assets/profile.svg'
import Rating from '@mui/material/Rating';
import { useEffect, useState } from 'react';

function Review(props) {

    const [reviews, setReviews] = useState([])
    const [test, setTest] = useState(props.submit)
    
    

    useEffect(() => {
        async function getReviews() {
          const access_token = window.localStorage.getItem('user_token')
          const response = await fetch(`http://localhost:8080/ratings/${props.vehicleId}`, {
            method: "GET",
            headers:{
              'Authorization':`Bearer ${access_token}`
            }
          });
          const data = await response.json();
    
          setReviews(data)
    
        }
        getReviews()
      }, [props.vehicleId, props.submit])
      console.log(reviews,props.vehicleId)
      const display = Object.keys(reviews).map(key=>
        <div className='flex grid-cols-2 my-5'>
        <div className='flex flex-row'>
           <img className='w-20 h-12' src={profile}/>
        </div>
        <div className='flex flex-col'>
            <div>
           <h1> Peter Mckinnon </h1>
           </div>
            <div className='text-sm text-slate-500'>
            <h3>July 16,2022</h3>
            </div>
            <div className='mt-4'>
            <Rating name="read-only" value={parseInt(reviews[key].ratings)} readOnly />
            </div>
            <div className='mt-4'>
            <h3>
               {reviews[key].comment}
            </h3>
            </div>
        </div>
    </div>    
    )

    return (
        <div className=' mx-2 my-5'>
            <h1 className='text-3xl font-medium px-4 my-8'>Reviews</h1>
        <div className=' grid-cols-5 divide-y'>
           
          {display}

        </div>
        </div>
    )
}

export default Review