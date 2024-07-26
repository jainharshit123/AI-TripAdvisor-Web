import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { GrCloudComputer } from "react-icons/gr";
const Footer = ({trip}) => {
  return (
    <div className='p-3'>
      <h2 className='text-center text-gray-500 border-t-4 mt-5 flex justify-center gap-1 items-center'>AI Powered Trip Planner and Advisor <GrCloudComputer /></h2>
      <p  className='items-center text-gray-500  mt-2 flex justify-center gap-1'>Created by Harshit <VscAccount />
      </p>
    </div>
  )
}

export default Footer
