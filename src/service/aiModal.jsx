

  import { GoogleGenerativeAI } from "@google/generative-ai";

  const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:"Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format. In the JSON format , for key itinerary ,the values should be in the array format"
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};


  export const chatSession = model.startChat({
    generationConfig,
 // safetySettings: Adjust safety settings
 // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format."},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.theDcasino.com/media/images/gallery/exterior-2.jpg\",\n      \"geoCoordinates\": \"36.1681, -115.1421\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a vibrant atmosphere with live entertainment and a casino.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/hotel-images/exterior-day.jpg\",\n      \"geoCoordinates\": \"36.1696, -115.1422\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel known for its impressive aquarium and vibrant casino, offering a variety of dining and entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/gallery/circus-circus-exterior.jpg\",\n      \"geoCoordinates\": \"36.1183, -115.1734\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, featuring a variety of attractions, including a midway and circus shows.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Experience the vibrant atmosphere of Fremont Street with live music, street performers, and dazzling light shows.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/gallery/fremont-street-experience-overview.jpg\",\n          \"geoCoordinates\": \"36.1698, -115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"Explore a collection of iconic Las Vegas neon signs, providing a glimpse into the city's history.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/images/hero/NeonMuseumHero_0.jpg?itok=fW-wG-uW\",\n          \"geoCoordinates\": \"36.1713, -115.1476\",\n          \"ticketPricing\": \"$20 - $25\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The D Casino\",\n          \"placeDetails\": \"Enjoy free live music and entertainment while trying your luck at the casino.\",\n          \"placeImageUrl\": \"https://www.theDcasino.com/media/images/gallery/casino-floor.jpg\",\n          \"geoCoordinates\": \"36.1681, -115.1421\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Late Evening (10:00 PM - 12:00 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      {\n        \"placeName\": \"Red Rock Canyon National Conservation Area\",\n        \"placeDetails\": \"Explore scenic hiking trails and stunning rock formations amidst the desert landscape.\",\n        \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/Red%20Rock%20Canyon%20National%20Conservation%20Area_Joshua_Tree.jpg\",\n        \"geoCoordinates\": \"36.2133, -115.2516\",\n        \"ticketPricing\": \"$15 per vehicle\",\n        \"rating\": 4.5,\n        \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n      },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Enjoy a leisurely stroll along the pedestrian-friendly promenade, offering dining, shopping, and entertainment options.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/linq-promenade-overview.jpg\",\n          \"geoCoordinates\": \"36.1193, -115.1715\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Experience panoramic views of the Las Vegas Strip from the world's tallest observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/high-roller-day-view-from-wheel.jpg\",\n          \"geoCoordinates\": \"36.1189, -115.1711\",\n          \"ticketPricing\": \"$30 - $40\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (7:00 PM - 9:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and artistic installations within this breathtaking botanical garden.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory-botanical-garden/conservatory-botanical-garden-hero.jpg\",\n          \"geoCoordinates\": \"36.1176, -115.1723\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Explore the luxurious indoor shopping mall and enjoy gondola rides through the Grand Canal Shoppes.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-the-palazzo-exterior-16x9.jpg\",\n          \"geoCoordinates\": \"36.1202, -115.1733\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Cosmopolitan of Las Vegas\",\n          \"placeDetails\": \"Enjoy a rooftop pool with stunning views of the Strip or sample unique cocktails at Chandelier Bar.\",\n          \"placeImageUrl\": \"https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/images/hotel/cosmopolitan-exterior.jpg\",\n          \"geoCoordinates\": \"36.1216, -115.1741\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 8:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\n**Notes:**\n\n* This itinerary is a suggestion and can be customized based on your interests and budget.\n* The hotel options listed are just a few examples and there are many more budget-friendly hotels in Las Vegas.\n* Ticket prices and opening hours can change, so it's best to check official websites for the most up-to-date information.\n* Consider using public transportation or ride-sharing services to get around Las Vegas, as parking can be expensive.\n* Remember to bring comfortable walking shoes as you'll be doing a lot of walking.\n\n**Enjoy your trip!** \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "the above generated JSON format having plan in day1, day3 but not in day2. please verify"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "You are absolutely right! There was a missing bracket in the JSON structure for Day 2. Here is the corrected version:\n\n```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.theDcasino.com/media/images/gallery/exterior-2.jpg\",\n      \"geoCoordinates\": \"36.1681, -115.1421\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a vibrant atmosphere with live entertainment and a casino.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/hotel-images/exterior-day.jpg\",\n      \"geoCoordinates\": \"36.1696, -115.1422\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel known for its impressive aquarium and vibrant casino, offering a variety of dining and entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/gallery/circus-circus-exterior.jpg\",\n      \"geoCoordinates\": \"36.1183, -115.1734\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, featuring a variety of attractions, including a midway and circus shows.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Experience the vibrant atmosphere of Fremont Street with live music, street performers, and dazzling light shows.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/gallery/fremont-street-experience-overview.jpg\",\n          \"geoCoordinates\": \"36.1698, -115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"Explore a collection of iconic Las Vegas neon signs, providing a glimpse into the city's history.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/images/hero/NeonMuseumHero_0.jpg?itok=fW-wG-uW\",\n          \"geoCoordinates\": \"36.1713, -115.1476\",\n          \"ticketPricing\": \"$20 - $25\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The D Casino\",\n          \"placeDetails\": \"Enjoy free live music and entertainment while trying your luck at the casino.\",\n          \"placeImageUrl\": \"https://www.theDcasino.com/media/images/gallery/casino-floor.jpg\",\n          \"geoCoordinates\": \"36.1681, -115.1421\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Late Evening (10:00 PM - 12:00 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Explore scenic hiking trails and stunning rock formations amidst the desert landscape.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/Red%20Rock%20Canyon%20National%20Conservation%20Area_Joshua_Tree.jpg\",\n          \"geoCoordinates\": \"36.2133, -115.2516\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Enjoy a leisurely stroll along the pedestrian-friendly promenade, offering dining, shopping, and entertainment options.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/linq-promenade-overview.jpg\",\n          \"geoCoordinates\": \"36.1193, -115.1715\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Experience panoramic views of the Las Vegas Strip from the world's tallest observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/high-roller-day-view-from-wheel.jpg\",\n          \"geoCoordinates\": \"36.1189, -115.1711\",\n          \"ticketPricing\": \"$30 - $40\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (7:00 PM - 9:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and artistic installations within this breathtaking botanical garden.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory-botanical-garden/conservatory-botanical-garden-hero.jpg\",\n          \"geoCoordinates\": \"36.1176, -115.1723\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Explore the luxurious indoor shopping mall and enjoy gondola rides through the Grand Canal Shoppes.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-the-palazzo-exterior-16x9.jpg\",\n          \"geoCoordinates\": \"36.1202, -115.1733\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Cosmopolitan of Las Vegas\",\n          \"placeDetails\": \"Enjoy a rooftop pool with stunning views of the Strip or sample unique cocktails at Chandelier Bar.\",\n          \"placeImageUrl\": \"https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/images/hotel/cosmopolitan-exterior.jpg\",\n          \"geoCoordinates\": \"36.1216, -115.1741\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 8:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\nThe issue was with the opening bracket for the `plan` array within the Day 2 section. It was missing, causing the following items to be incorrectly formatted. Now the JSON structure is complete and consistent! \n"},
        ],
      },
      {
        role: "user",
        parts: [
          {text: "Generate Travel Plan for Location: Las Vegas, for 3 Days for Couple with a Cheap budget ,Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, rating, Time travel each of the location for 3 days with each day plan with best time to visit in JSON format. In the JSON format , for key itinerary ,the values should be in the array format"},
        ],
      },
      {
        role: "model",
        parts: [
          {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"hotelName\": \"The D Las Vegas\",\n      \"hotelAddress\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50 - $100 per night\",\n      \"hotelImageUrl\": \"https://www.theDcasino.com/media/images/gallery/exterior-2.jpg\",\n      \"geoCoordinates\": \"36.1681, -115.1421\",\n      \"rating\": 4.0,\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, offering a vibrant atmosphere with live entertainment and a casino.\"\n    },\n    {\n      \"hotelName\": \"Golden Nugget Las Vegas\",\n      \"hotelAddress\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$70 - $150 per night\",\n      \"hotelImageUrl\": \"https://www.goldennugget.com/las-vegas/media/images/hotel-images/exterior-day.jpg\",\n      \"geoCoordinates\": \"36.1696, -115.1422\",\n      \"rating\": 4.5,\n      \"description\": \"A historic hotel known for its impressive aquarium and vibrant casino, offering a variety of dining and entertainment options.\"\n    },\n    {\n      \"hotelName\": \"Circus Circus Hotel & Casino\",\n      \"hotelAddress\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40 - $80 per night\",\n      \"hotelImageUrl\": \"https://www.circuscircus.com/media/images/gallery/circus-circus-exterior.jpg\",\n      \"geoCoordinates\": \"36.1183, -115.1734\",\n      \"rating\": 3.5,\n      \"description\": \"A family-friendly hotel with a carnival theme, featuring a variety of attractions, including a midway and circus shows.\"\n    }\n  ],\n  \"itinerary\": [\n    {\n      \"day\": \"Day 1\",\n      \"plan\": [\n        {\n          \"placeName\": \"Fremont Street Experience\",\n          \"placeDetails\": \"Experience the vibrant atmosphere of Fremont Street with live music, street performers, and dazzling light shows.\",\n          \"placeImageUrl\": \"https://www.fremontstreetexperience.com/media/images/gallery/fremont-street-experience-overview.jpg\",\n          \"geoCoordinates\": \"36.1698, -115.1423\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 10:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Neon Museum\",\n          \"placeDetails\": \"Explore a collection of iconic Las Vegas neon signs, providing a glimpse into the city's history.\",\n          \"placeImageUrl\": \"https://www.neonmuseum.org/sites/default/files/styles/hero_image/public/images/hero/NeonMuseumHero_0.jpg?itok=fW-wG-uW\",\n          \"geoCoordinates\": \"36.1713, -115.1476\",\n          \"ticketPricing\": \"$20 - $25\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The D Casino\",\n          \"placeDetails\": \"Enjoy free live music and entertainment while trying your luck at the casino.\",\n          \"placeImageUrl\": \"https://www.theDcasino.com/media/images/gallery/casino-floor.jpg\",\n          \"geoCoordinates\": \"36.1681, -115.1421\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Late Evening (10:00 PM - 12:00 AM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 2\",\n      \"plan\": [\n        {\n          \"placeName\": \"Red Rock Canyon National Conservation Area\",\n          \"placeDetails\": \"Explore scenic hiking trails and stunning rock formations amidst the desert landscape.\",\n          \"placeImageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/Red%20Rock%20Canyon%20National%20Conservation%20Area_Joshua_Tree.jpg\",\n          \"geoCoordinates\": \"36.2133, -115.2516\",\n          \"ticketPricing\": \"$15 per vehicle\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (9:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The LINQ Promenade\",\n          \"placeDetails\": \"Enjoy a leisurely stroll along the pedestrian-friendly promenade, offering dining, shopping, and entertainment options.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/linq-promenade-overview.jpg\",\n          \"geoCoordinates\": \"36.1193, -115.1715\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"High Roller Observation Wheel\",\n          \"placeDetails\": \"Experience panoramic views of the Las Vegas Strip from the world's tallest observation wheel.\",\n          \"placeImageUrl\": \"https://www.caesars.com/content/dam/caesars/linq/images/high-roller-day-view-from-wheel.jpg\",\n          \"geoCoordinates\": \"36.1189, -115.1711\",\n          \"ticketPricing\": \"$30 - $40\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (7:00 PM - 9:00 PM)\"\n        }\n      ]\n    },\n    {\n      \"day\": \"Day 3\",\n      \"plan\": [\n        {\n          \"placeName\": \"Bellagio Conservatory & Botanical Garden\",\n          \"placeDetails\": \"Admire stunning floral displays and artistic installations within this breathtaking botanical garden.\",\n          \"placeImageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/conservatory-botanical-garden/conservatory-botanical-garden-hero.jpg\",\n          \"geoCoordinates\": \"36.1176, -115.1723\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Morning (10:00 AM - 12:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Venetian and The Palazzo\",\n          \"placeDetails\": \"Explore the luxurious indoor shopping mall and enjoy gondola rides through the Grand Canal Shoppes.\",\n          \"placeImageUrl\": \"https://www.venetian.com/content/dam/venetian/images/hero-images/venetian-the-palazzo-exterior-16x9.jpg\",\n          \"geoCoordinates\": \"36.1202, -115.1733\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.0,\n          \"time\": \"Afternoon (2:00 PM - 4:00 PM)\"\n        },\n        {\n          \"placeName\": \"The Cosmopolitan of Las Vegas\",\n          \"placeDetails\": \"Enjoy a rooftop pool with stunning views of the Strip or sample unique cocktails at Chandelier Bar.\",\n          \"placeImageUrl\": \"https://www.cosmopolitanlasvegas.com/content/dam/cosmopolitan/images/hotel/cosmopolitan-exterior.jpg\",\n          \"geoCoordinates\": \"36.1216, -115.1741\",\n          \"ticketPricing\": \"Free\",\n          \"rating\": 4.5,\n          \"time\": \"Evening (6:00 PM - 8:00 PM)\"\n        }\n      ]\n    }\n  ]\n}\n```\n\nIn this format, the `itinerary` is an array containing objects for each day. Each day object has a `day` key with the day number and a `plan` key that is an array of places to visit, each with its own details. \n"},
        ],
      },
    ],
  })