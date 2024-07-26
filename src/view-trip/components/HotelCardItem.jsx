import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const HotelCardItem = ({hotel}) => {
 
  const [photoUrl, setPhotoUrl]= useState()

  useEffect( () => {
    hotel && GetPlacePhoto()
  }, [hotel])

  
  
 const GetPlacePhoto= async() => {
  const data= {
    textQuery:hotel?.hotelName,

  }

  const result = await GetPlaceDetails(data).then( resp => {
    console.log(resp.data.places[0].photos[3].name)
    const PhotoUrl= PHOTO_REF_URL.replace('{NAME}', resp.data.places[0].photos[3].name);
    setPhotoUrl(PhotoUrl);
  })
 }
 

  return (
    <div>
              <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName + ',' + hotel?.hotelAddress} target="_blank">
            <div className="hover:scale-110 transition-all">
              <img src={photoUrl? photoUrl: '/hotels.jpg'}className="rounded-xl h-[180px] w-full object-cover" />

              <div className="my-2 flex flex-col">
                <h2 className="font-medium">📍{hotel?.hotelName} </h2>
                <h2 className="text-xs text-gray-500 ">{hotel?.hotelAddress}</h2>
                <h2 className="text-xm ">💸{hotel?.price}</h2>
                <h2 className="font-medium">⭐{hotel?.rating}</h2>
              </div>
            </div>
            </Link>
    </div>
  )
}

export default HotelCardItem
