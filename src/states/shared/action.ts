import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '@/lib/api';
import { getAllThreadsActionCreator } from '../threads/action';
import { getAllUsersActionCreator } from '../user/action';

function asyncPopulateUsersAndThreads() {
  return async (dispatch:any) => {
    dispatch(showLoading());
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(getAllThreadsActionCreator(threads));
      dispatch(getAllUsersActionCreator(users));
    } catch (error:any) {
      alert(error.message);
    } finally {
      dispatch(hideLoading());
    }
  };
}

export { asyncPopulateUsersAndThreads };