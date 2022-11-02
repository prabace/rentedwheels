import abstract from '../assets/abstract.jpg';
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import unlock from '../assets/unlock.svg'
import signup from '../assets/signup.svg'
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { useRef } from 'react';
import { equalsTo } from 'khalti-checkout-web';





const Signup = ({ history }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const comparePassword=useRef(null)
  const { register, handleSubmit, formState: { errors },watch} = useForm();

  comparePassword.current=watch("password","")
 
  

  const handleChange = (evt, placeholder) => {
    switch (placeholder) {
      case 'firstName':
        setFirstName(evt.target.value);
        break;
      case 'lastName':
        setLastName(evt.target.value);
        break;
      case 'email':
        setEmail(evt.target.value);
        break;
      case 'dob':
        setDob(evt.target.value);
        break;
      case 'password':
        setPassword(evt.target.value);
        break;
      case 'confirmPassword':
        setConfirmPassword(evt.target.value);
        break;
      default: break;
    }
  }

  const registerUser = async (data,evt) => {
    evt.preventDefault();
    const sendData =
    {
      address: '',
      emailAddress: data.email,
      fullName: `${data.firstName} ${data.lastName}`,
      password: data.password,
      phoneNumber: '',
      pickupOutlet: '',
      citizenshipAttachment: '',
      admin: false,
      deleted: false,

    }



    const response = await fetch('http://localhost:8080/addUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData)
    })
    

    const fetchData = await response.json()
    history.push('/app/signin')
  }



  return (
    <div className='my-20'> 

      <div className='w-full h-screen  flex flex-col justify-center items-center  lg:grid  lg:grid-cols-2'>
        <img className='fixed hidden lg:block inset-0 h-screen object-cover  z-[-1]' src={wave} />
        <img className='hidden w-[350px] lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto ' src={signup} />

        <div className="w-1/2 h-screen flex flex-col justify-center items-center" >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>Sign Up</h1>
          <h2 className='mb-20 text-gray-500 text-sm md:text-lg lg:text-lg'>Already have an account? <a className='text-[#f9a826]' href='/app/signin'>LogIn</a></h2>
          <form onSubmit={handleSubmit(registerUser)} id="signUp" className='w-full flex flex-col justify-center items-center '>
            <div className='flex justify-center'>
              <img className='w-md h-[125px] mb-5' src={avatar} />
            </div>
            <div class="w-full mb-2 border-b border-[#f9a826]">



              <label class="block text-gray-700 text-sm font-bold mb-2 relative" for="username"></label>

              <input class="appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                type="text"
                placeholder="First Name"
                onChange={(evt) => handleChange(evt, 'firstName')}
                {...register("firstName",
                  { required: true })} />

            </div>
            <div className='mb-6'>
              {errors.firstName && <p className='text-red-500 italic'>Enter the first name</p>}
            </div>




            <div class="w-full mb-2 border-b border-[#f9a826]">



              <label class="block text-gray-700 text-sm font-bold mb-2 relative" for="username"></label>

              <input class="appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                type="text"
                placeholder="Last Name"
                onChange={(evt) => handleChange(evt, 'lastName')}
                {...register("lastName",
                  { required: true })} />

            </div>
            <div className='mb-6'>
              {errors.lastName && <p className='text-red-500 italic'>Enter the last name</p>}
            </div>


            <div class="w-full mb-2 border-b border-[#f9a826]">



              <label class="block text-gray-700 text-sm font-bold mb-2 relative" for="username"></label>

              <input class="appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
                onChange={(evt) => handleChange(evt, 'email')}
                {...register("email",
                  {
                    required: true,
                    pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  })} />


            </div>
            <div className='mb-6'>
              {errors.email && <p className='text-red-500 italic'>Please check the Email</p>}
            </div>

            <div class="w-full mb-2 border-b border-[#f9a826]">

              <label class="block text-gray-700 text-sm font-bold mb-2 relative" for="dob">
                DOB
              </label>
              <input class=" appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dob"
                type="date"
                onChange={(evt) => handleChange(evt, 'dob')}
                {...register("dob",
                  { required: true })}
              />
            </div>
            <div className='mb-6'>
              {errors.dob && <p className='text-red-500 italic'>Please check your DOB</p>}
            </div>

            <div class="w-full mb-2 border-b border-[#f9a826]">

              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">

              </label>
              <input class=" appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                onChange={(evt) => handleChange(evt, 'password')}
                {...register("password",
                  {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/
                  })} />
            </div>
            <div className='mb-6'>
            {errors.password && <p className='text-red-500 italic'>Enter your password</p>}
            </div>

            <div class="w-full mb-2 border-b border-[#f9a826]">

              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">

              </label>
              <input class=" appearance-none bg-transparent border-none rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Enter your password again"
                onChange={(evt) => handleChange(evt, 'confirmPassword')}
                {...register("confirmPassword",
                  {
                    required: true,
                    pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
                    validate: (value)=>{
                      console.log(value, comparePassword.current,"Check")
                      return value===comparePassword.current
                    }
                  })} />
            </div>
            <div className='mb-6'>
              {errors.confirmPassword && <p className='text-red-500 italic'>Please check the Password</p>}
            </div>

            <div class="flex items-center justify-between relative flex flex-col">
              <button form='signUp' class="bg-[#f9a826] hover:bg-white hover:text-[#f9a826] font-bold w-full  py-2 mr-5 mb-4 rounded-full focus:outline-none focus:shadow-outline border-[#f9a826] text-xl lg:px-20" type="submit">
                Sign Up
              </button>

            </div>


          </form>
          <p class="text-center text-gray-500 text-xs mt-5">
            &copy;2022 Rented Wheels. All rights reserved.
          </p>
        </div>

      </div>
    </div>

  )
}
export default Signup;