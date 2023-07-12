"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import userDefault from "../../../public/icons/user-default.svg";

export default function UserPic() {
  const [userId, setUserId] = useState(null);
  const [userPic, setUserPic] = useState(userDefault);

  return (
    <div className="flex shrink-0 grow w-9 h-9">
      <Image src={userPic} alt="User" priority={true}></Image>
    </div>
  );
}
