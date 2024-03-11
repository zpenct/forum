import { ActionType } from './action';

function leaderboardsReducer(leaderboards = [], action:any = {}) {
  switch (action.type) {
    case ActionType.GET_LEADERBOARDS:
      return action.payload.leaderboards;
    default:
      return leaderboards;
  }
}

export default leaderboardsReducer;