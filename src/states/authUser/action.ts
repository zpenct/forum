import { showLoading, hideLoading } from "react-redux-loading-bar";
import api from "@/lib/api";

export const ActionType = {
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
};

export function setAuthUserActionCreator(authUser: any) {
  return {
    type: ActionType.LOGIN,
    payload: {
      authUser,
    },
  };
}

export function unsetAuthUserActionCreator() {
  return {
    type: ActionType.LOGOUT,
    payload: {
      authUser: null,
    },
  };
}

export function asynLoginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return async (dispatch:any) => {
    dispatch(showLoading());
    try {
      const token = await api.login({ email, password });
      const user = await api.getOwnProfile();
      dispatch(setAuthUserActionCreator(user));
      return user
    } catch (error: any) {
      alert(error.message);
      throw new Error(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export function asyncUnsetAuthUser() {
  return (dispatch: any) => {
    dispatch(showLoading());
    try {
      dispatch(unsetAuthUserActionCreator());
      localStorage.removeItem("token");
      return { status: "success" };
    } catch (error) {
      throw { status: "error" };
    } finally {
      dispatch(hideLoading());
    }
  };
}
