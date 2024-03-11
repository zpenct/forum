"use client";

import React, { useEffect } from "react";
import { H4 } from "../ui/typography";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { asyncPopulateUsersAndThreads } from "@/states/shared/action";
import { IThread } from "../../../@types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function ListTrending() {
  const params = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const threads = useAppSelector((state) => state.threads);
  const dispatch = useAppDispatch();

  const categories = new Set(threads.map((thread: IThread) => thread.category));

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const handleFilter = (value: string) => {
    const newParams = new URLSearchParams(params.toString());
    newParams.set("category", value);
    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <>
      <H4 className="mt-5 md:mt-0">Trending Topic</H4>
      <div className="flex md:flex-wrap gap-3 mt-3 overflow-x-auto md:overflow-y-auto">
        {Array.from(categories).map((category, i) => (
          <span
            key={i}
            className="p-1 px-1.5 text-sm rounded-md border-[1.2px] border-slate-400 cursor-pointer hover:bg-slate-300/20"
            onClick={() => handleFilter(category as string)}
          >
            {`#${category}`}
          </span>
        ))}
      </div>
    </>
  );
}
