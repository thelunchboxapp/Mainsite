"use client";
import React from "react";
import Link from "next/link";

function Page() {
  return (
    <div className="container mx-auto px-5 py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-5">
        Child Sexual Abuse and Exploitation (CSAE) Prevention Standards
      </h1>
      <p className="mb-8 text-sm text-gray-600">
        Effective Date: March 16th, 2025
      </p>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="mb-3">
          At LunchBox, we are fully committed to protecting the most vulnerable
          members of our community by preventing and combating child sexual
          abuse and exploitation (CSAE). These standards serve as a
          comprehensive guide that outlines our policies, procedures, and
          technological measures designed to detect, prevent, and address any
          CSAE-related issues on our platform.
        </p>
        <p>
          Our zero-tolerance approach to CSAE is embedded in all our practices,
          ensuring that our services remain a safe space for everyone.
        </p>
      </section>

      {/* 2. Our Commitment */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Our Commitment</h2>
        <ul className="list-disc list-inside">
          <li>
            <strong>Zero Tolerance:</strong> We refuse to tolerate any form of
            CSAE.
          </li>
          <li>
            <strong>Safety First:</strong> Our platform integrates robust
            security and monitoring tools to proactively detect and address
            CSAE.
          </li>
          <li>
            <strong>Compliance:</strong> We adhere to international laws,
            regional regulations, and industry best practices.
          </li>
          <li>
            <strong>Transparency:</strong> We pledge ongoing public reporting
            and regular reviews of our standards to improve our approaches.
          </li>
        </ul>
      </section>

      {/* 3. Definitions */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Definitions</h2>
        <p>
          <strong>Child Sexual Abuse and Exploitation (CSAE):</strong> Involves
          any form of sexual abuse, exploitation, or mistreatment of a child,
          including the creation, distribution, or promotion of exploitative
          content.
        </p>
      </section>

      {/* 4. Prevention Measures */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Prevention Measures</h2>
        <ol className="list-decimal list-inside">
          <li>
            <strong>Content Monitoring:</strong> Implementation of advanced
            automated systems and manual review by trained moderators to detect
            CSAE-related content.
          </li>
          <li>
            <strong>User Reporting:</strong> Easy-to-access reporting tools for
            users to flag suspicious or harmful content.
          </li>
          <li>
            <strong>User Verification:</strong> Robust verification procedures
            to minimize anonymity that could be exploited for CSAE.
          </li>
          <li>
            <strong>Third-Party Collaboration:</strong> Regular assessments of
            our partners and integration with trusted child protection
            organizations.
          </li>
          <li>
            <strong>Regular Audits:</strong> Periodic independent audits to
            review the effectiveness of our CSAE detection and response
            measures.
          </li>
        </ol>
      </section>

      {/* 5. Reporting and Response */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          5. Reporting and Response
        </h2>
        <p className="mb-3">
          In the event of any suspected CSAE-related content or behavior, our
          response is prompt and thorough:
        </p>
        <ul className="list-disc list-inside">
          <li>Immediate removal of harmful content from our platform.</li>
          <li>
            Rapid coordination with internal safety teams and external
            authorities, as appropriate.
          </li>
          <li>
            Comprehensive documentation of the incident to continually improve
            our preventive measures.
          </li>
          <li>
            Support and guidance for affected individuals in collaboration with
            relevant support services.
          </li>
        </ul>
      </section>

      {/* 6. Training and Awareness */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          6. Training and Awareness
        </h2>
        <p>
          All LunchBox staff, moderators, and third-party partners receive
          regular training to help them identify, report, and respond to CSAE.
          This ensures that our community is supported by knowledgeable and
          vigilant teams.
        </p>
      </section>

      {/* 7. Legal and Compliance */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Legal and Compliance</h2>
        <p className="mb-3">
          LunchBox fully complies with all applicable local, national, and
          international laws regarding child protection. We:
        </p>
        <ul className="list-disc list-inside">
          <li>Cooperate with law enforcement and child protection agencies.</li>
          <li>
            Periodically update our protocols as laws and best practices evolve.
          </li>
          <li>
            Maintain detailed records of incidents and corrective actions.
          </li>
        </ul>
      </section>

      {/* 8. Contact and Support */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Contact and Support</h2>
        <p className="mb-3">
          For further details, clarifications, or to report any concerns
          regarding CSAE on our platform, please reach out to our dedicated
          support team:
        </p>
        <p className="font-medium">Email: support@thelunchboxapp.com</p>
      </section>

      {/* Navigation Link back to Privacy Policy */}
      <section className="mt-8">
        <Link href="/privacy" className="text-blue-600 hover:underline">
          &larr; Back to Privacy Policy
        </Link>
      </section>
    </div>
  );
}

export default Page;
