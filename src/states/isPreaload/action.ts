import { setAuthUserActionCreator } from "../authUser/action";
import api from "@/lib/api";

const ActionType = {
    SET_IS_PRELOAD: 'SET_IS_PRELOAD',
  };
   
  function setIsPreloadActionCreator(isPreload:boolean) {
    return {
      type: ActionType.SET_IS_PRELOAD,
      payload: {
        isPreload,
      },
    };
  }
   
  function asyncPreloadProcess() {
    return async (dispatch:any) => {
      try {
        // preload process
        const authUser = await api.getOwnProfile();
        dispatch(setAuthUserActionCreator(authUser));
      } catch (error) {
        // fallback process
        dispatch(setAuthUserActionCreator(null));
      } finally {
        // end preload process
        dispatch(setIsPreloadActionCreator(false));
      }
    };
  }
   
  export {
    ActionType,
    setIsPreloadActionCreator,
    asyncPreloadProcess,
  };