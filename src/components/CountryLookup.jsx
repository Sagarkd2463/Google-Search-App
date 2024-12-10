"use client";

import React, { useEffect, useState } from "react";

export default function CountryLookup() {
  const [location, setLocation] = useState({ country: "India", city: "Mumbai" });

  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        if (data) {
          setLocation({ country: data.country, city: data.city });
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    };

    getLocation();
  }, []);

  return (
    <div>
      <p className="text-lg text-gray-700">{location.city}, {location.country}</p>
    </div>
  );
};
