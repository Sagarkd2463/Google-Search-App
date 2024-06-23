import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <HomeHeader />
      <div className="">
        <Image
          alt="Google Logo"
          src={''}
          width={300}
          height={100}
          priority
          style={{ width: 'auto' }}
        />

        <HomeSearch />
      </div>
    </>
  );
};

