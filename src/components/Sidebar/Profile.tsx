import React from "react";
import { H3 } from "../ui/typography";
import { BiLogOut } from "react-icons/bi";
// import { useSession } from "next-auth/react";
import { useAppSelector } from "@/hooks";
import Image from "next/image";
import { FiLogIn } from "react-icons/fi";
import Link from "next/link";

export default function Profile() {
  const { authUser } = useAppSelector((state) => state);

  if (!authUser) return null;

  return (
    <>
      <div className="my-2 bg-slate-50 border-b-1 border-slate-300">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <Image
              alt="avatar"
              src={authUser?.avatar}
              className="w-7 h-7 rounded-full bg-blue-600"
              width={20}
              height={20}
            />
            <H3 className="font-bold">{authUser?.name}</H3>
          </div>
          <BiLogOut size={24} />
        </div>
      </div>
      {/* {JSON.stringify(session)}
      {JSON.stringify(status)} */}
    </>
  );
}
