import React from 'react'

// Shared Tailwind CSS classes
const cardContainerClasses = 'flex '
const titleClasses = 'text-2xl font-extrabold text-black drop-shadow-lg'
const subtitleClasses = 'text-lg text-gray-600 italic'
const logoClasses = 'h-16 w-16 rounded-full'

const Logo = () => {
  return (
    <div className={cardContainerClasses}>
    
        <img src="/logoNew.png" alt="" className={logoClasses}/>
   
   <div flex flex-col>
   <h1 className={titleClasses}>Tripify</h1>
   <p className={subtitleClasses}>Explore the World with Us</p>
   </div>
  
      
    </div>
  )
}

export default Logo