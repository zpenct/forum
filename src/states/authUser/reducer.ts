import { ActionType } from "./action";

function authUserReducer(authUser = null, action:any = {}) {
  switch (action.type) {
    case ActionType.LOGIN:
      return action.payload.authUser;
    case ActionType.LOGOUT:
      return null;
    default:
      return authUser;
  }
}

export default authUserReducer;
