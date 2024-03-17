"use client";

import { store } from './../states/index';
// import { useDispatch, useSelector, useStore } from "react-redux";
// import type { AppDispatch, RootState,AppStore } from "@/lib/store";

// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
// export const useAppSelector = useSelector.withTypes<RootState>()
// export const useAppStore = useStore.withTypes<AppStore>()
import { useDispatch, useSelector, useStore } from "react-redux";
// import type { AppDispatch, AppStore, RootState } from './store'
import { AppDispatch, RootState } from "@/states";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<typeof store>();
