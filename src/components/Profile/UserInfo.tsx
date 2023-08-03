"use client";

import { useState } from "react";
import UserTotalMaps from "@/components/Profile/UserTotalMaps";

export const UserInfo: React.FC = () => {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("foo.barstein");
  const [mapNum, setMapNum] = useState(0);

  return (
    <div className="flex flex-col justify-start w-full px-2">
      <h6 className="text-xs font-medium">{userName}</h6>
      <UserTotalMaps />
    </div>
  );
};

export default UserInfo;