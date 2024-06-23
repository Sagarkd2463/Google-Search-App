"use client";

import React, { useEffect, useState } from 'react';

export default function CountryLookup() {

  const [country, setCountry] = useState('India');

  useEffect(() => {
    const getCountry = async () => {
      const response = await fetch('http://ip-api.com/json/')
        .then((res) => res.json())
        .then((data) => data.country);

      if (!response) return;
      setCountry(response);
    };

    getCountry();
  }, []);

  return (
    <div>{country}</div>
  );
};
