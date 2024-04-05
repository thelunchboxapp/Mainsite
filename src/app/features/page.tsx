import Image from "next/image";
import React from "react";
import bannerImage from "../../../public/Features_banner.svg";
import { features } from "../../../data/data";
import { ShowCase } from "../page";

function Page() {
  return (
    <div className="sm:px-32 px-5 relative">
      <h2 className="hidden sm:block text-center text-2xl md:text-5xl font-semibold py-5">Connecting food lovers</h2>
      <h2 className="sm:hidden text-center text-2xl md:text-5xl font-semibold py-5">Lunchbox Features</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <Card />
        <Features />
      </div>
      <ShowCase />
    </div>
  );
}

function Card() {
  return (
    <div className="py-5 col-span-2">
      <div className="sticky top-32">
        <Image src={bannerImage} alt="Lunchbox features" />
      </div>
    </div>
  );
}

function Features() {
  return (
    <div className="py-10">
      {features.map((item) => {
        return (
          <div className="mb-10" id={item.id}>
            <h2 className="pb-5 md:text-xl font-bold">{item.title}</h2>
            <p className="md:text-lg"> {item.description} </p>
          </div>
        );
      })}
    </div>
  );
}

export default Page;
