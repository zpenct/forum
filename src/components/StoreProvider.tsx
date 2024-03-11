"use client";
import React, { ReactNode, useEffect } from "react";
import { store } from "@/states";
import { Provider } from "react-redux";
// import { useAppSelector, useAppDispatch } from "@/hooks";
// import { asyncPreloadProcess } from "@/states/isPreaload/action";

interface Props {
  children: ReactNode;
}

function StoreProvider({ children }: Props) {
  // const { isPreload = false } = useAppSelector((state) => state);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(asyncPreloadProcess());
  // }, [dispatch]);

  // if (isPreload) {
  //   return null;
  // }
  return <Provider store={store}>{children}</Provider>;
}

export default StoreProvider;
