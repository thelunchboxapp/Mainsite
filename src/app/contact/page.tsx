"use client";
import React from "react";
import { ShowCase } from "../page";
const FormfacadeEmbed = require("@formfacade/embed-react/dist/index");

function Page() {
  return (
    <div className="sm:px-32 px-4 flex justify-center flex-col">
      <div>
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/106307999336389647231/form/1FAIpQLScUh1kbiiDsJEmeNvpaH2RrFWZyicnGCcBEkivosF6EJbp0WA/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
      <ShowCase />
    </div>
  );
}

export default Page;
