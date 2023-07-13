"use client";

import Link from "next/link";
import Logo from "../Header/Logo";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <div className="mt-auto px-4 bg-gray-100 text-secondary w-full py-12 flex flex-col gap-6 lg:gap-8 justify-center items-center">
      <Logo></Logo>

      <div className="flex gap-4 text-center">
        <Link href="/tos">
          <h6>Terms of Service</h6>
        </Link>
        <Link href="/about">
          <h6>About</h6>
        </Link>
        <Link href="/privacy-policy">
          <h6>Privacy Policy</h6>
        </Link>
      </div>

      <div className="flex gap-6">
        {/* todo: add links */}
        <FontAwesomeIcon
          icon={faGithub}
          size="lg"
          style={{ color: "rgb(156 163 175)" }}
        />
        <FontAwesomeIcon
          icon={faInstagram}
          size="lg"
          style={{ color: "rgb(156 163 175)" }}
        />
        <FontAwesomeIcon
          icon={faTwitter}
          size="lg"
          style={{ color: "rgb(156 163 175)" }}
        />
      </div>

      <p className="font-light text-gray-400 text-center">
        <FontAwesomeIcon icon={faCopyright} className="mr-2" />
        2023 Plastic Past LLC. All rights reserved
      </p>
    </div>
  );
}