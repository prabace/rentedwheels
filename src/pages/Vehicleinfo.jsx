import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Info from '../components/Info'
import raptor from '../assets/raptor.jpg'

const Vehicleinfo = ({ location, history }) => {

  const [vehicleData, setvehicleData] = useState([])


  useEffect(() => {
    async function getVehicles() {
      const access_token = window.localStorage.getItem('user_token')
      const response = await fetch(`http://localhost:8080/getVehicle/${location.search.slice(4)}/`, {
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



console.log(vehicleData)

  return (
    <div className='px-20 py-20'>
      
    <Info {...vehicleData}/>
    
    </div>
  )
}

export default Vehicleinfo