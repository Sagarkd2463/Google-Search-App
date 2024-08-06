import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';
import './globals.css';

export default function Home() {
  return (
    <>
      <HomeHeader />
        <Image
          alt="Google Logo"
          src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}
          width={300}
          height={100}
          priority
          className="logo-img"
        />
      <HomeSearch />
    </>
  );
};

