"use client";
import React, { useState } from "react";
// const FormfacadeEmbed = require("@formfacade/embed-react/dist/index");

function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-5 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-5">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-600">
        Effective Date: March 16th, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          Welcome to LunchBox. Whether you are using our app as a food discovery
          tool or to connect with fellow food lovers, your privacy is important
          to us. This Privacy Policy explains how we collect, use, and safeguard
          your information when you use our application.
        </p>
        <p>
          This policy applies to all versions of the app and governs data
          collection, processing, and usage practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Data We Collect</h2>
        <p className="mb-3">
          To provide you with the best experience, LunchBox collects various
          types of information:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>
            <strong>Personal Information:</strong> When you sign in with Google
            or other authentication services, we may collect your name, email
            address, and profile information.
          </li>
          <li>
            <strong>Photos:</strong> With your permission, the app accesses your
            photos to let you share them with friends.
          </li>
          <li>
            <strong>Location Data:</strong> We request permission to access your
            location (both while using the app and in the background) to help
            provide location-based services and enhance your experience.
          </li>
          <li>
            <strong>Usage Data:</strong> Information about how you use the app,
            including interaction data, crash logs, and performance metrics.
          </li>
        </ul>
        <p>
          We ensure that the data we collect is handled securely and used only
          for the purposes described in this policy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          3. How We Use Your Information
        </h2>
        <p className="mb-3">
          Your information is used for the following purposes:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>Enhancing and personalizing your experience within the app.</li>
          <li>Facilitating social interactions and food-sharing features.</li>
          <li>Providing customer support and app maintenance.</li>
          <li>Monitoring app usage and performance to improve our services.</li>
          <li>Enabling features that require location and photo access.</li>
        </ul>
        <p>
          We take great care to ensure that your personal data is only used in
          ways that you have consented to and in accordance with applicable
          laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          4. Data Sharing and Disclosure
        </h2>
        <p className="mb-3">
          LunchBox does not sell or rent your personal information to third
          parties. We may share your data with trusted service providers who
          help us operate and maintain our services, but only to the extent
          necessary for them to perform their functions.
        </p>
        <p>
          We may also disclose your information if required by law or to protect
          our rights, your safety, or the safety of others.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Security</h2>
        <p className="mb-3">
          We implement industry-standard security measures to protect your data
          against unauthorized access, alteration, disclosure, or destruction.
          While we strive to secure your personal information, please be aware
          that no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          6. Permissions and Third-Party Services
        </h2>
        <p className="mb-3">
          LunchBox relies on several third-party services and plugins to enhance
          functionality:
        </p>
        <ul className="list-disc list-inside mb-3">
          <li>
            <strong>Google Sign-In:</strong> Used for authentication and to
            retrieve basic profile information.
          </li>
          <li>
            <strong>Mapbox:</strong> These services help provide location-based
            features and mapping services.
          </li>
          <li>
            <strong>Expo Image Picker:</strong> Allows the app to access your
            photos so you can share images with friends.
          </li>
          <li>
            <strong>Expo Location:</strong> Grants the app access to your
            location data to provide relevant local services.
          </li>
        </ul>
        <p>
          Each of these permissions is requested with a clear explanation at the
          time of use, and your consent is always required.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          7. Changes to This Privacy Policy
        </h2>
        <p className="mb-3">
          We may update this Privacy Policy periodically to reflect changes in
          our practices or applicable law. Any updates will be posted on this
          page with a new effective date.
        </p>
        <p>
          We encourage you to review this page regularly to stay informed about
          how we protect your information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <p className="mb-3">
          If you have any questions, concerns, or requests regarding this
          Privacy Policy or our data practices, please contact us at:
        </p>
        <p className="font-medium">Email: support@thelunchboxapp.com</p>
      </section>
    </div>
  );
}

export default PrivacyPolicyPage;

// Account Deletion form page

// return (
//     <div className="sm:px-32 px-5 relative">
//       <h2 className="hidden sm:block text-center text-2xl md:text-5xl font-semibold py-5">
//         Connecting food lovers
//       </h2>
//       <h2 className="sm:hidden text-center text-2xl md:text-5xl font-semibold py-5">
//         LunchBox Features
//       </h2>
//       <div className="">
//         {/* <Card />
//         <Features /> */}
//         <FormfacadeEmbed
//           formFacadeURL="https://formfacade.com/include/106307999336389647231/form/1FAIpQLSdqQjMX-0WrqbcQrYNvLcRPOnr4P7eefsTpLu6MVFG0v2nJNA/classic.js/?div=ff-compose"
//           onSubmitForm={() => console.log("Form submitted")}
//         />
//       </div>
//     </div>
//   );
