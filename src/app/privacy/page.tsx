"use client";
import React, { useState } from "react";
import FormfacadeEmbed from "@formfacade/embed-react";

function PrivacyPolicyPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleDeleteRequest = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend to process the delete request
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setMessage("Your request to delete your account has been submitted.");
    } catch (error) {
      setMessage(
        "There was an error submitting your request. Please try again later."
      );
    }
  };

  return (
    <div className="sm:px-32 px-5 relative">
      <h2 className="hidden sm:block text-center text-2xl md:text-5xl font-semibold py-5">
        Connecting food lovers
      </h2>
      <h2 className="sm:hidden text-center text-2xl md:text-5xl font-semibold py-5">
        LunchBox Features
      </h2>
      <div className="">
        {/* <Card />
        <Features /> */}
        <FormfacadeEmbed
          formFacadeURL="https://formfacade.com/include/106307999336389647231/form/1FAIpQLSdqQjMX-0WrqbcQrYNvLcRPOnr4P7eefsTpLu6MVFG0v2nJNA/classic.js/?div=ff-compose"
          onSubmitForm={() => console.log("Form submitted")}
        />
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
