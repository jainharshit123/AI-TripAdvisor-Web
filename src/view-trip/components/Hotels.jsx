import React from "react";

import HotelCardItem from "./HotelCardItem";

const Hotels = ({ trip }) => {
  return (
    <div>
      <h2 className="font-bold text-xl mt-3">Hotels Recommendation</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 mt-3">
        {trip?.tripData?.hotelOptions?.map((hotel, index) => (
            <HotelCardItem key={index} hotel={hotel}/>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
