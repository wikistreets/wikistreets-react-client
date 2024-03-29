"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { extractDateOnly } from "../../extractDateOnly";

type Props = {
  username: string;
  createdAt: string;
  mapTitle: string;
};

export const Info = ({ username, createdAt, mapTitle }: Props) => {
  const dateOnly = extractDateOnly(createdAt);

  return (
    <section className="flex flex-col w-full">
      <div className="flex justify-start items-center gap-1.5">
        <p className="text-xs">{username}</p>
        <FontAwesomeIcon icon={faCircle} className="w-0.5 text-secondary" />
        <p className="text-secondary text-xs">{dateOnly}</p>
      </div>
      <p className="text-secondary text-xs">{mapTitle}</p>
    </section>
  );
};

export default Info;
