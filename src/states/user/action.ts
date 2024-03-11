import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '@/lib/api';

const ActionType = {
  REGISTER_USER: 'REGISTER_USER',
  GET_ALL_USERS: 'GET_ALL_USERS',
};

function registerUserActionCreator(user:any) {
  return {
    type: ActionType.REGISTER_USER,
    payload: {
      user,
    },
  };
}

function getAllUsersActionCreator(users:any) {
  return {
    type: ActionType.GET_ALL_USERS,
    payload: {
      users,
    },
  };
}

function asyncRegisterUser({ name, email, password }:any) {
  return async (dispatch:any) => {
    dispatch(showLoading());
    try {
      const user = await api.registerUser({ name, email, password });
      dispatch(registerUserActionCreator(user));
      return { status: 'success' };
    } catch (error:any) {
      alert(error.message);
      return { status: 'error' };
    } finally {
      dispatch(hideLoading());
    }
  };
}

export {
  ActionType,
  registerUserActionCreator,
  getAllUsersActionCreator,
  asyncRegisterUser,
};