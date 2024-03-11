"use client";
import { useRef } from "react";
// import { makeStore, AppStore } from "../lib/store";
import { store } from "@/states";
import React, { ReactNode, useEffect } from "react";
// import { store } from "@/states";
import { Provider } from "react-redux";
// import { useAppSelector, useAppDispatch } from "@/hooks";
// import { asyncPreloadProcess } from "@/states/isPreaload/action";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
//   const storeRef = useRef<AppStore>();
//   if (!storeRef.current) {
//     // Create the store instance the first time this renders
//     storeRef.current = makeStore();
//   }
  //   const { isPreload = false } = useAppSelector((state) => state);
  //   const dispatch = useAppDispatch();

  //   useEffect(() => {
  //     dispatch(asyncPreloadProcess());
  //   }, [dispatch]);

  //   if (isPreload) {
  //     return null;
  //   }
  return <Provider store={store}>{children}</Provider>;
//   return <Provider store={storeRef.current}>{children}</Provider>;
}
