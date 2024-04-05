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

const FormfacadeEmbed = require("@formfacade/embed-react/dist/index");

export default function Home() {
  return (
    <main className="px-16">
      {/* <Header /> */}
      <Banner />
      <Features />
      {/* <Gallery /> */}
      <ShowCase />
      {/* <WebFooter /> */}
    </main>
  );
}

export function Header() {
  const pathname = usePathname();
  const active = 'p-3 px-5 rounded-md m-1 bg-[#1e1e1e] text-white'
  const notActive = 'p-3 px-5 rounded-md m-1 text-[#1e1e1e] bg-white'
  
  return (
    <nav className="flex justify-between py-10">
      <div className="flex items-center">
        <Image
          src={logo}
          width={80}
          height={80}
          alt="Lunchbox, 'THE' meeting place for restaurant lovers"
        />
        <span className="text-3xl font-semibold">Lunchbox</span>
      </div>
      <div>
        <WishlistModal />
        <Link href="/">
          <button className={ pathname === '/' ? active : notActive }>
            Home
          </button>
        </Link>
        <Link href="/features">
          <button className={pathname === '/features' ? active : notActive}>
            Features
          </button>
        </Link>
        <Link href="/about">
          <button className={pathname === '/about' ? active : notActive}>
            About
          </button>
        </Link>
        <Link href="/contact">
          <button className={pathname === '/contact' ? active : notActive}>
            Contact us
          </button>
        </Link>
      </div>
    </nav>
  );
}

export function WishlistModal({ text }: { text?: string }) {
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
          <p>Track restaurants</p>
          <p>Save those you want to experience</p>
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
          <WishlistModal text="Join the Waitlist" />
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
      title: "Track Every Visit",
      description:
        "Never Miss a Beat of Your Culinary Adventures! Rate your meals, snap and share photos, and jot down those unforgettable flavors. With each visit logged, watch your culinary journey unfold, a treasure trove of memories at your fingertips, urging you to explore and relive every delicious moment.",
    },
    {
      title: "Connect with Friends",
      description:
        "Share the Joy of Discovery with Friends! Follow your friends to see their culinary escapades, exchange recommendations, and plan your next group outing with ease. It's not just about eating; it's about connecting, sharing, and celebrating the world of food together. Join the community where every shared dish is a recipe for stronger bonds.",
    },
    {
      title: "Keep a Dining Diary",
      description:
        "Your Personal Culinary Chronicle Awaits! Cultivate a collection of personal stories and cherished memories.  Our intuitive logging system transforms your dining experiences into a beautifully curated collection of memories, helping you revisit those special moments with just a tap.",
    },
    {
      title: "AI-Personalized recommendations",
      description:
        "Discover Your Next Favorite Dish with AI! Our cutting-edge 'Personalized Recommendations' feature is like having a gourmet guide at your side, always ready to suggest the next great restaurant tailored specifically to you. Powered by sophisticated AI algorithms, we analyze your preferences, past experiences, and even your friends' favorites to recommend places you'll love. Tell us what you’re in the mood for and embark on a culinary exploration fine-tuned to your tastes!",
    },
    {
      title: "Curate Your Culinary Journey",
      description:
        "Craft Your Ultimate Dining Experience! With LunchBox, organizing your dining preferences has never been easier. From bookmarking your all-time favorite eateries to creating bespoke lists like “City's Best Coffee Shops” or “Seafood Must-Visits,” our platform is your canvas. Curate lists that reflect your culinary ambitions, making every dining decision an informed choice. Start shaping your unique culinary journey today, one list at a time.",
    },
    {
      title: "Eco-Friendly Dining",
      description:
        "Dine with a Conscience. In a world where sustainability is key, LunchBox champions the choice to dine responsibly. Our dedicated section for eco-friendly dining options highlights restaurants committed to sustainability, from sourcing ingredients locally to innovative practices reducing their carbon footprint. Support eateries that care for the planet as much as they do for their food. With LunchBox, making green dining choices is easy, helping you contribute to a healthier planet with every meal.",
    },
  ];

  return (
    <div className="flex flex-col justify-around items-center">
      {/* SECOND SECTION OF BANNER */}
      <div className="">
        <Image
          src={screens}
          alt="Lunchbox banner: 'The' meeting place for restaurant enthusiasts"
        />
      </div>
      <div className="my-10 grid grid-cols-1 gap-5 md:grid-cols-3">
        {features.map((item) => {
          return (
            <div className="p-5 min-w-80 min-h-80 m-2 flex items-baseline flex-col rounded-md features-box-shadow">
              <h2 className=" text-xl font-semibold">{item.title}</h2>
              <p className=" text-justify pt-5">{item.description}</p>
            </div>
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

function ShowCase() {
  return (
    <div className="flex flex-col items-center">
      {/* <h2 className="text-5xl pb-10 font-semibold">
        Discover a world of possibilities
      </h2> */}
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
