import {EDIT_FAILED,EDIT_SUCCESS,EDIT_REQUEST} from '../contants'
export const editRequest = (todo) => {
    return {
      type: EDIT_REQUEST,
      payload:todo
    };
  };

  export const editSuccess = (todo) => {
    return {
      type: EDIT_SUCCESS,
      payload:todo
    };
  };
  export const editFailed = () => {
    return {
      type: EDIT_FAILED
    };
  };