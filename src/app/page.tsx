"use client";
import Image from "next/image";
import logo from "../../public/logo.png";
import banner from "../../public/model_for_iPhone.png";
import screens from "../../public/multiple_devices.png";
import Link from "next/link";
import { Footer, Modal } from "flowbite-react";
import {
  BsAt,
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

export default function Home() {
  return (
    <main className="px-16">
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
        <WishlistModal />
        <Link href="/">
          <button className="p-3 px-5 rounded-md m-1 bg-[#1e1e1e] text-white">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}

function WishlistModal({ text }: { text?: string }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button
        className={
          text ? "p-3 rounded-md mr-2 bg-[#1e1e1e] text-white" : "p-3 m-1"
        }
        onClick={() => setOpenModal(true)}
      >
        {text || "Waitlist"}
      </button>
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Wishlist Submit</Modal.Header>
        <Modal.Body>
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/106307999336389647231/form/1FAIpQLSejNNBBeuGdBTr0WI-t-iAWD3KZDid4UuIYfwhXbmvMYgDCjw/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log("Form submitted")}
          />
        </Modal.Body>
        <Modal.Footer>
          <button color="gray" onClick={() => setOpenModal(false)}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Banner() {
  return (
    <div className="flex justify-between items-center my-20">
      {/* FIRST SECTION OF BANNER */}
      <div className=" w-1/2">
        <h2 className=" text-8xl font-medium">Connecting food lovers</h2>
        <div className="mt-5">
          <p>Track Restaurants</p>
          <p>Save those you want to see</p>
          <p>Share your favorite restaurants with your friends</p>
        </div>
        <div className="mt-5">
          {/* <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to Android
            </button>
          </Link>
          <Link href="/">
            <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
              Coming soon to IOS
            </button>
          </Link> */}
          <h2 className="font-bold text-lg">
            Coming soon to the App store and Play Store
          </h2>
        </div>
        <div className="mt-5">
          {/* <Link href="/">
            <button className="p-3 rounded-md mr-2 bg-[#1e1e1e] text-white">
              Sign up to Waitlist
            </button>
          </Link> */}
          <WishlistModal text="Sign up to Waitlist" />
        </div>
      </div>
      {/* SECOND SECTION OF BANNER */}
      <div className=" w-1/2 flex justify-center">
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
    {
      title: "Keep track of every restaurant you go to",
      description:
        "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.",
    },
    {
      title: "Connect with your friends from the app",
      description:
        "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.",
    },
    {
      title: "Keep a diary of your dining experiences",
      description:
        "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.",
    },
    {
      title: "Personalized AI recommendations",
      description:
        "Welcome to a world of limitless possibilities, where the journey is as exhilarating as the destination, and where every moment is an opportunity to make your mark on the canvas of existence. The only limit is the extent of your imagination.",
    },
  ];

  return (
    <div className="flex flex-col justify-around items-center my-40">
      {/* SECOND SECTION OF BANNER */}
      <div className="">
        <Image
          src={screens}
          alt="Lunchbox banner: 'The' meeting place for restaurant enthusiasts"
        />
      </div>
      <div className="my-10 flex flex-wrap justify-evenly">
        {features.map((item) => {
          return (
            <div className="p-5 w-80 h-80 m-2 flex items-baseline flex-col rounded-md features-box-shadow">
              <h2 className=" text-xl font-semibold">{item.title}</h2>
              <p className=" text-justify pt-5">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Gallery() {
  const images = [banner, banner, banner, banner];
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className=" text-5xl pb-10 font-semibold">Gallery</h2>
      <span className=" pb-10">
        The only limit is the extent of your imagination.
      </span>
      <div className="grid grid-cols-4 gap-10">
        {images.map((item) => {
          return <Image src={item} alt="Lunchbox App Images snapshots"></Image>;
        })}
      </div>
    </div>
  );
}

function ShowCase() {
  return (
    <div className="flex flex-col items-center py-20">
      <h2 className="text-5xl pb-10 font-semibold">
        Discover a world of possibilities
      </h2>
      <div className=" mt-5">
        {/* <Link href="/">
          <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
            Coming soon to Android
          </button>
        </Link>
        <Link href="/">
          <button className="p-3 mr-2 bg-[#1e1e1e] text-white">
            Coming soon to IOS
          </button>
        </Link> */}
        <h2 className="font-bold text-lg">Coming soon to Android and IOS</h2>
      </div>
    </div>
  );
}

function WebFooter() {
  return (
    <Footer container>
      <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright href="#" by="Lunchbox™" year={2024} />
        <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
          <Footer.Icon href="#" icon={BsAt} />
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
