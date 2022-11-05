import {React, useEffect, useState} from 'react'

import raptor from '../assets/ford-raptor.jpg'




const Bookings = () => {
    const [bookingData, setbookingData]= useState([])
    
    useEffect(() => {
        async function getbookingData() {    
            const id = window.localStorage.getItem('id')
            const access_token = window.localStorage.getItem('user_token')
            const response=  await fetch(`http://localhost:8080/getBookingByUserId/${id}`, {
                method: "GET",
                headers: {
                  'Authorization': `Bearer ${access_token}`,
            },})
            const data = await response.json()
            setbookingData(data)
        }
        getbookingData()
    },[])
    function date_to_day(begin, end) {
        var date1 = new Date(begin);
        var date2 = new Date(end);

        // To calculate the time difference of two dates
        var Difference_In_Time = date2.getTime() - date1.getTime();

        // To calculate the no. of days between two dates
        var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
        return Difference_In_Days
    }
    
    const displayBooking = Object.keys(bookingData).map((key) =>{
    const days= date_to_day(bookingData[key].fromDate, bookingData[key].toDate)
    const today= new Date()
    const bookingEnd= new Date(bookingData[key].toDate)
    return <div className='grid grid-cols-3'>
                    <div className='mx-6 my-8 flex flex-row gap-x-80'>
                        <div className=''>
                            <h1 className='text-xl'>{bookingData[key].vehicle.vehicleName}</h1>
                            <div className='mt-4'>
                                <img className='object-contain h-50 w-auto' src={bookingData[key].vehicle.vehicleImage} />
                            </div>

                            <div className='grid grid-cols-2 gap-x-80 mt-10'>
                                <div className='flex flex-row gap-x-80'>
                                    <div>
                                        <h1 className='text-3xl'>Total</h1>
                                    </div>

                                    <div className=''>
                                        <h1 className='text-3xl'>{parseInt(bookingData[key].vehicle.vehiclePrice)*days}</h1>
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
                                {bookingData[key].fromDate} - {bookingData[key].toDate}
                            </div>
                        </div>

                        <div>
                            <h1 className='text-xl'>Status</h1>
                            <div className='mt-4'>
                                {today > bookingEnd ? 'Completed' : 'Pending'}
                            </div>
                        </div>
                    </div>
                </div>
    
});
    return (
        <div className='h-screen mx-80 my-10'>
            <div className=' border-2  '>
                <div className='mx-6 my-8 '>

                    <h1 className='font-semi-bold text-4xl'>Your Orders</h1>
                    <div className='text-lg mt-3'>
                        <h5>Check the status of your bookings and manage orders.</h5>
                    </div>
                </div>
                {displayBooking}

            </div>
        </div>
    )
}

export default Bookings