'use client'

import styled from 'styled-components';
import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import './globals.css';

// Create a styled wrapper for the image
const StyledImage = styled(Image)`
  width: 200px;
  height: 100px;

  /* For 2560px and below */
  @media only screen and (max-width: 2560px) {
    width: 180px;
    height: 90px;
  }

  /* For 1440px and below */
  @media only screen and (max-width: 1440px) {
    width: 160px;
    height: 80px;
  }

  /* For 1024px and below */
  @media only screen and (max-width: 1024px) {
    width: 140px;
    height: 70px;
  }

  /* For 768px and below (Tablets) */
  @media only screen and (max-width: 768px) {
    width: 120px;
    height: 60px;
  }

  /* For 425px and below (Large Phones) */
  @media only screen and (max-width: 425px) {
    width: 100px;
    height: 50px;
  }
  
  /* For 375px and below (Small Phones) */
  @media only screen and (max-width: 375px) {
    width: 80px;
    height: 40px;
  }
  
  /* For 320px and below (Very Small Phones) */
  @media only screen and (max-width: 320px) {
    width: 60px;
    height: 30px;
  }
`;

export default function Home() {
  return (
    <>
      <HomeHeader />
      <StyledImage
        alt="Google Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
        width={200}
        height={100}
        priority="true"
        className="logo-img"
      />
      <HomeSearch />
    </>
  );
};
