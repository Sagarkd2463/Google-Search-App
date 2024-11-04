import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';


export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="flex flex-col items-center mt-20">
        <Image
          alt="Google Logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
          className="h-12 sm:h-12 md:h-20 lg:h-24 xl:h-32 2xl:40"
        />
        <HomeSearch />
      </div>
    </>
  );
};
