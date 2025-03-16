"use client";
import React from "react";
const FormfacadeEmbed = require("@formfacade/embed-react/dist/index");

function Page() {
  return (
    <div className="sm:px-32 px-4 py-10 flex flex-col space-y-4">
      <h1 className="text-3xl font-bold text-center">Contact Us</h1>

      <section className="bg-white shadow rounded-lg p-6 text-center">
        {/* <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2> */}
        <p>
          <span className="font-medium">Email:</span> support@thelunchboxapp.com
        </p>
      </section>

      <section className="bg-white shadow rounded-lg p-6">
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/106307999336389647231/form/1FAIpQLScUh1kbiiDsJEmeNvpaH2RrFWZyicnGCcBEkivosF6EJbp0WA/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </section>
    </div>
  );
}

export default Page;
