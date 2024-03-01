'use client'
import Image from "next/image";
import logo from "../../public/logo.png";
import banner from "../../public/banner.jpg";
import Link from "next/link";
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function Home() {
  return (
    <main className="px-16">
      {/* HEADER */}
      <Header />
      <Banner />
      <Features />
      <Gallery />
      <ShowCase />
      <WebFooter />
    </main>
  );
}

function Header() {
  return (
    <nav className="flex justify-between py-10">
      <div className="flex items-center">
        <Image
          src={logo}
          width={50}
          height={50}
          alt="Lunchbox, 'THE' meeting place for restaurant lovers"
        />
        <span className="text-xl font-semibold">Lunchbox</span>
      </div>
      <div>
        <Link href="/">
          <button className="p-3 m-1">About</button>
        </Link>
        <Link href="/">
          <button className="p-3 m-1 bg-[#1e1e1e] text-white">Download</button>
        </Link>
      </div>
    </nav>
  );
}

function Banner() {
  return (
    <div className="flex justify-between items-center py-10">
      {/* FIRST SECTION OF BANNER */}
      <div className=" w-1/2">
        <h2 className=" text-8xl font-medium">Connecting food lovers</h2>
        <div className=" mt-5">
          <p>Track Restaurants</p>
          <p>Save those you want to see</p>
          <p>Tell your friends what’s good.</p>
        </div>
        <div className=" mt-5">
          <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to Android
            </button>
          </Link>
          <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to IOS
            </button>
          </Link>
        </div>
      </div>
      {/* SECOND SECTION OF BANNER */}
      <div className=" w-1/2">
        <Image
          src={banner}
          alt="Lunchbox banner: 'The' meeting place for restaurant enthusiasts"
        />
      </div>
    </div>
  );
}

function Features() {
  const features = [
    { title: "Create anything", description: "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination." },
    { title: "Create anything", description: "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination." },
    { title: "Create anything", description: "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination." },
  ];

  return (
    <div className="grid grid-cols-3 gap-20 py-20">
      {features.map((item) => {
        return (
          <div className=" min-w-60">
            <h2 className=" text-xl font-semibold">{item.title}</h2>
            <p className=" text-justify pt-5">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}

function Gallery () {
  const images = [banner, banner, banner, banner]
  return (
    <div className="flex flex-col items-center py-20">
        <h2 className=" text-5xl pb-10 font-semibold">Gallery</h2>
        <span className=" pb-10">The only limit is the extent of your imagination.</span>
        <div className="grid grid-cols-4 gap-10">
          { images.map(
            item => {
              return (
                <Image src={item} alt="Lunchbox App Images snapshots"></Image>
              )
            }
          ) }
        </div>
    </div>
  )
}

function ShowCase () {
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className="text-5xl pb-10 font-semibold">Discover a world of possibilities</h2>
      <div className=" mt-5">
          <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to Android
            </button>
          </Link>
          <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to IOS
            </button>
          </Link>
        </div>
    </div>
  )
}

function WebFooter() {
  return (
    <Footer container>
      <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Lunchbox™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
      </div>
    </Footer>
  );
}