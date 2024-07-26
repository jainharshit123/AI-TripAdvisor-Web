import { getDoc,doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'sonner';
import { db } from "@/service/firebaseConfig";
import InfoSection from '../components/InfoSection';
import Hotels from '../components/Hotels';
import PlacesToVisit from '../components/PlacesToVisit';
import Footer from '../components/Footer';
const ViewTrip = () => {
  
    const {tripId}= useParams();
  
    const [trip, setTrip] = useState();


    useEffect( () => {
    tripId &&  GetTripData();
    }, [tripId])

    //use to get information from firebase
    const GetTripData= async()=> {
      const docRef=doc(db, 'AITrips', tripId);
      const docSnap= await getDoc(docRef)

      if(docSnap.exists()){
        console.log("Doc", docSnap.data());
        setTrip(docSnap.data());
        // console.log("Printing trip in viewTrip: ", trip);
       
      }else{
        console.log("No such Doc");
        toast('No Trip Found')
      }
      console.log("Printing trip in viewTrip: ", trip);
    
    }
  
  return (

    <div className='p-10 md:px-20 lg:px-44 xl:px-56'>
      {/* Information section
       */}
        <InfoSection trip={trip}/>

       {/* Recommanded hotel */}.
          <Hotels trip={trip}/>

       {/* Daily plan */}
        <PlacesToVisit trip={trip}/>

       {/* Footer */}
       <Footer trip={trip}/>
    </div>
  )
}
export default ViewTrip
