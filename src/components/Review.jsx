import React from 'react'
import profile from '../assets/profile.svg'
import Rating from '@mui/material/Rating';

function Review() {
    return (
        <div className=' mx-2 my-5'>
            <h1 className='text-3xl font-medium px-4 my-8'>Reviews</h1>
        <div className=' grid-cols-5 divide-y'>
           
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
                    <Rating name="read-only" value={5} readOnly />
                    </div>
                    <div className='mt-4'>
                    <h3>
                        This page is everything I hoped for. Absolutely AMAZING!! They have every sort of vehicle and the service is super reliable!!!
                    </h3>
                    </div>
                </div>
            </div>    

        </div>
        </div>
    )
}

export default Review