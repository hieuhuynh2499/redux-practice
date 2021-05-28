import {ADD_FAILED,ADD_SUCCESS,ADD_REQUEST} from '../contants'
export const addRequest = (payload) => {
    return {
      type: ADD_REQUEST,
      payload,
    };
  };

  export const addSuccess = (payload) => {
    return {
      type: ADD_SUCCESS,
      payload,
    };
  };
  export const addFaild = () => {
    return {
      type: ADD_FAILED
    };
  };