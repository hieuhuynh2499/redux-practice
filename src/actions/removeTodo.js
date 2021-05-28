import {DELETE_REQUEST,DELETE_SUCCESS, DELETE_FAILED} from '../contants'
export const deleteRequest = (id) => {
    return {
      type: DELETE_REQUEST,
      payload:id
    };
  };

  export const deleteSuccess = (todo) => {
    return {
      type: DELETE_SUCCESS,
      payload:todo
    };
  };
  export const deleteFailed = () => {
    return {
      type: DELETE_FAILED
    };
  };