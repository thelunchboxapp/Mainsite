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
import { usePathname } from "next/navigation";
import { features } from "../../data/data";
import { AnimatePresence, motion } from "framer-motion";

const FormfacadeEmbed = require("@formfacade/embed-react/dist/index");

export default function Home() {
  return (
    <main className="sm:px-32">
      <Banner />
      <Features />
      <ShowCase />
    </main>
  );
}

export function Header() {
  const pathname = usePathname();
  const active = "py-3 px-5 rounded-md m-1 bg-[#1e1e1e] text-white";
  const notActive = "py-3 px-5 rounded-md m-1 text-[#1e1e1e] bg-white";

  const Navbar = () => {
    const [isToggled, setToggle] = useState(false);

    const navContainer = {
      visible: {
        //x: 0,
        opacity: 1,
        transition: {
          x: { velocity: 100 },
          duration: 0.3,
        },
      },
      hidden: {
        //x: -250,
        opacity: 0,
        transition: {
          x: { velocity: 100 },
          duration: 0.3,
        },
      },
    };

    return (
      <>
        <button className="btn" onClick={() => setToggle(!isToggled)}>
          =
        </button>
        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="navbar"
              initial="hidden"
              animate={isToggled ? "visible" : "hidden"}
              exit="hidden"
              variants={navContainer}
            >
              <NavbarItems isToggled={isToggled} />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  };

  const navigation = [
    { name: "Home", href: "" },
    { name: "Features", href: "features" },
    { name: "Contact us", href: "contact" },
  ];

  const NavbarItems = ({ isToggled }: any) => {
    const navList = {
      visible: {
        opacity: 1,
        transition: {
          delayChildren: 0.2,
          staggerChildren: 0.07,
        },
      },
      hidden: {
        opacity: 0,
        transition: {
          staggerChildren: 0.05,
          staggerDirection: -1,
        },
      },
    };

    const navItem = {
      visible: {
        y: 0,
        opacity: 1,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
      hidden: {
        y: 50,
        opacity: 0,
        transition: {
          y: { stiffness: 1000, velocity: -100 },
        },
      },
    };

    return (
      <>
        <motion.ul
          className="navList"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={navList}
        >
          {navigation.map((item) => (
            <Link href={'/' + item.href}>
              <motion.li
                className="nav-item"
                variants={navItem}
                key={item.name}
              >
                <p>{item.name}</p>
              </motion.li>
            </Link>
          ))}
        </motion.ul>
      </>
    );
  };

  return (
    <nav className="flex items-center md:justify-between m-2 py-3 sticky top-0 bg-white z-10 px-4 lg:px-32 border-b-[1px]">
      <div className="block md:hidden pr-10">
        <Navbar />
      </div>
      <div className="flex items-center">
        {/* <Image
          src={logo}
          width={80}
          height={80}
          alt="Lunchbox logo"
          className="hidden sm:block"
        /> */}
        <span className="text-3xl font-semibold">Lunchbox</span>
      </div>
      <div className="hidden md:flex items-center">
        <WishlistModal />

        {navigation.map((item) => {
          return (
            <Link href={"/" + item.href}>
              <button
                className={pathname === "/" + item.href ? active : notActive}
              >
                {item.name}
              </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

function WishlistModal({ text }: { text?: string }) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="flex items-center justify-center">
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
    </div>
  );
}

function Banner() {
  return (
    <div className="flex flex-col m-2 justify-between items-center my-20">
      {/* FIRST SECTION OF BANNER */}
      <div className="flex justify-center w-52">
        <Image
          src={banner}
          alt="Lunchbox banner: 'The' meeting place for restaurant enthusiasts"
        />
      </div>
      {/* FIRST SECTION OF BANNER */}
      <div>
        {/* <h2 className=" text-8xl font-medium">Connecting food lovers</h2> */}
        <div className="mt-5 flex text-center items-center flex-col">
          <p className=" md:text-2xl text-sm font-semibold">Track restaurants</p>
          <p className=" md:text-2xl text-sm font-semibold">
            Save those you want to experience
          </p>
          <p className=" md:text-2xl text-sm font-semibold">
            Share your favorite restaurants with your friends
          </p>
        </div>
        <div className="mt-5"></div>
        <div className="mt-5">
          <WishlistModal text="Join the Waitlist" />
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="flex flex-col justify-around items-center py-10">
      <div className="">
        <Image
          src={screens}
          alt="Lunchbox banner: 'The' meeting place for restaurant enthusiasts"
        />
      </div>
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map((item) => {
          return (
            <Link
              href={"/features/#" + item.id}
              key={item.id}
              className="features-card p-5 m-2 flex items-baseline flex-col rounded-md features-box-shadow cursor-pointer hover:scale-105 transition-all relative"
            >
              <div>
                <h2 className=" text-xl font-semibold">{item.title}</h2>
              </div>
              <p className=" text-justify pt-5">{item.shortDescription}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// function Gallery() {
//   const images = [banner, banner, banner, banner];
//   return (
//     <div className="flex flex-col items-center py-20">
//       <h2 className=" text-5xl pb-10 font-semibold">Gallery</h2>
//       <span className=" pb-10">
//         The only limit is the extent of your imagination.
//       </span>
//       <div className="grid grid-cols-4 gap-10">
//         {images.map((item) => {
//           return <Image src={item} alt="Lunchbox App Images snapshots"></Image>;
//         })}
//       </div>
//     </div>
//   );
// }

export function ShowCase() {
  return (
    <div className="flex flex-col items-center">
      {/* <h2 className="text-5xl pb-10 font-semibold">
        Discover a world of possibilities
      </h2> */}
      <div className="mb-20 mt-5">
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
        <h2 className="font-bold text-lg py-10">
          Coming soon to Android and IOS
        </h2>
        <WishlistModal text="Join the Waitlist" />
      </div>
    </div>
  );
}

export function WebFooter() {
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
