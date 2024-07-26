import { db } from '@/service/firebaseConfig'
import { collection, getDocs, query, where , doc} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserTripCardItem from './components/UserTripCardItem'

const MyTrips = () => {

  const navigate=useNavigate()
 const [userTrips, setUserTrips]= useState([]);

  useEffect( ()=> {
    GetUserTrips()
  },[])

  const GetUserTrips= async() => {
    const user= JSON.parse(localStorage.getItem('user'));
   
    if(!user){
      navigate('/');
      return;
    }

    
    const q= query(collection(db, 'AITrips'), where ('userEmail', '==', user?.email));
    const querySnapshot = await getDocs(q);
    setUserTrips([]);
    console.log("Number of trips",querySnapshot );
querySnapshot.forEach((doc) => {
       setUserTrips( prevVal => [ doc.data(), ...prevVal])
  })
}
  

  return (
    <div className='flex flex-col items-center w-11/12 sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10  mx-auto'>
      <h2 className='font-bold text-3xl mb-3'>My Trips</h2>

      <div className='grid grid-cols-2 md:grid-cols-3 gap-5' >
        {userTrips.map((trip, index) => (
      <UserTripCardItem  key={index}   trip={trip}/>
        ))}
      </div>
    </div>
  )
}

export default MyTrips
