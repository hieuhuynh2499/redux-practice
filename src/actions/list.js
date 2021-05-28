import {LIST_FAILED,LIST_SUCCESS,LIST_REQUEST} from '../contants'
export const listRequest = () => {
    return {
      type: LIST_REQUEST
    };
  };

  export const listSuccess = (list) => {
    return {
      type: LIST_SUCCESS,
      payload:{
        list:list
      }
    };
  };
  export const listFaild = () => {
    return {
      type: LIST_FAILED
    };
  };