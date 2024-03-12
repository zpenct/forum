"use client";

import ThreadPreview from "@/components/thread/ThreadPreview";
import { IThread } from "../../../@types";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { useEffect } from "react";
import { asyncPopulateUsersAndThreads } from "@/states/shared/action";
import { useSearchParams } from "next/navigation";

export default function ListThreads() {
  const { threads } = useAppSelector((state) => state);
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const category = searchParams.get("category");
  const filteredThreads = category
    ? threads.filter((thread: IThread) => thread.category === category)
    : threads;

  return (
    <main className="w-full md:pl-10 pb-20">
      <div className="w-full max-w-3xl flex flex-col gap-5">
        {filteredThreads.length === 0 ? (
          <p>Tidak ada thread</p>
        ) : (
          filteredThreads.map((thread: IThread) => (
            <ThreadPreview key={thread.id} thread={thread} />
          ))
        )}
      </div>
    </main>
  );
}
