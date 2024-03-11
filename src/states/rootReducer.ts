import { combineReducers } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreaload/reducer';
import threadsReducer from './threads/reducer';
import detailThreadReducer from './detailThread/reducer';
import usersReducer from './user/reducer';
import leaderboardsReducer from './leaderboard/reducer';
// import usersReducer from './states/users/reducer';
// import detailThreadReducer from './states/detailThread/reducer';
// import leaderboardsReducer from './states/leaderboards/reducer';

export const rootReducer = combineReducers({
  isPreload: isPreloadReducer,
  loadingBar: loadingBarReducer,
  authUser: authUserReducer,
  users: usersReducer,
  threads: threadsReducer,
  detailThread: detailThreadReducer,
  leaderboards: leaderboardsReducer,
});
