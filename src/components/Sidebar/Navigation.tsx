"use client";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { MdOutlineLeaderboard } from "react-icons/md";
import { MdLeaderboard } from "react-icons/md";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAppSelector } from "@/hooks";
import { FiLogIn } from "react-icons/fi";
import Profile from "./Profile";

const navLink = [
  {
    active: <GoHomeFill />,
    normal: <GoHome />,
    name: "Beranda",
    link: "/",
  },
  {
    active: <MdLeaderboard />,
    normal: <MdOutlineLeaderboard />,
    name: "Peringkat",
    link: "/leaderboard",
  },
];

export default function Navigation() {
  const pathname = usePathname();
  const authUser = useAppSelector((state) => state.authUser);

  return (
    <div className="z-[100] flex md:flex-col gap-2 md:my-4 justify-evenly fixed md:static bottom-0 left-0 right-0 bg-slate-50 md:bg-slate-50 p-1 w-full">
      {navLink.map((link) => (
        <Link
          key={link.name}
          href={link.link}
          className="flex items-center gap-2 font-medium capitalize hover:bg-slate-300/20 p-2 rounded-md duration-500"
        >
          {pathname === link.link ? link.active : link.normal}
          <span className="hidden md:block">{link.name}</span>
        </Link>
      ))}

      {authUser == null ? (
        <Link
          href={"/login"}
          className="flex items-center gap-2 font-medium capitalize hover:bg-slate-300/20 p-2 rounded-md duration-500"
        >
          <FiLogIn /> Login
        </Link>
      ) : (
        <Profile />
      )}
    </div>
  );
}
