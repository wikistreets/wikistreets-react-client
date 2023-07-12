"use client";

import Link from "next/link";
import Logo from "./Logo";
import Search from "./Search";
import UserPic from "../Profile/UserPic";
import Hamburger from "./Hamburger/Hamburger";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userId, setUserId] = useState(null);
  const handleNotification = () => {
    console.log("notification clicked");
  };

  return (
    <nav className="Header w-full h-14 p-2.5 bg-white inline-flex items-center">
      <Link href="/">
        <Logo />
      </Link>
      <Search />

      {isLoggedIn ? (
        <Hamburger />
      ) : (
        <Link href="/login">
          <UserPic />
        </Link>
      )}

      {isLoggedIn && (
        <div className="hidden sm:flex-row sm:inline-flex sm:justify-center sm:items-center sm:w-fit sm:h-full">
          <div onClick={handleNotification}>
            <FontAwesomeIcon icon={icon({ name: "bell", style: "regular" })} />
          </div>
          <div className="ml-4">
            <UserPic />
          </div>
        </div>
      )}
    </nav>
  );
}