import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'



const Hero = () => {
  return (
    <div className='flex flex-col items-center mx-56 gap-9'> 
      <h1 
      className='font-extrabold text-[50px] text-center mt-10'>
        <span className='text-[#258027]'>Discover Your Next Adventure with <span className='text-[#ef6808]'>AI:</span></span>  <br></br>Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>

        <Link to= {'/create-trip'}>
        <Button>Get Started, It's Free</Button>
        </Link>
        <div className="container mx-auto p-4">
        <div className="container mx-auto p-4">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <img 
      src='/bag.jpg' 
      className="object-cover w-full h-64 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" 
      alt="Bag" 
    />
    <img 
      src='/world.jpg' 
      className="object-cover w-full h-64 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" 
      alt="World" 
    />
    <img 
      src='/home.jpg' 
      className="object-cover w-full h-75 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105" 
      alt="Home" 
    />
  </div>
</div>

</div>

        {/* <img src='https://www.quizexpo.com/wp-content/uploads/2020/10/q17-2.jpg' className="w-full -mt-20"/> */}


    </div>
  )
}

export default Hero