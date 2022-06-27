import abstract from '../assets/abstract.jpg';
import wave from '../assets/wave.png'
import avatar from '../assets/avatar.svg'
import unlock from '../assets/unlock.svg'


  const Signin = () =>{
  return (
<div>
<div className='w-full h-screen  flex flex-col justify-center items-center lg:grid lg:grid-cols-2'>
       <img className='fixed hidden lg:block inset-0 h-screen object-cover  z-[-1]' src={wave} />
       <img className='hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto ' src={unlock} />

<div className="w-1/2 h-screen flex flex-col justify-center items-center " >
   
  <form className='flex flex-col justify-center items-center'>
    <div className='flex justify-center'>
  <img className='w-md h-[125px] mb-5' src={avatar} />
    </div>
    
    <div class="mb-6">
    
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-7 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-7 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p class="text-red-500 text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between relative flex flex-col">
      <button class="bg-[#f9a826] hover:bg-white hover:text-[#f9a826] font-bold w-full px-20 py-2 mr-5 mb-4 rounded-full focus:outline-none focus:shadow-outline border-[#f9a826] text-xl" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
    
    
  </form>
  <p class="text-center text-gray-500 text-xs mt-5">
    &copy;2020 Acme Corp. All rights reserved.
  </p>
  </div>
 
  </div>
  </div>
    
  )
}
export default Signin;