import {ADD_FAILED,ADD_SUCCESS,ADD_REQUEST} from '../contants'
export const addRequest = (todo) => {
    return {
      type: ADD_REQUEST,
      payload:todo
    };
  };

  export const addSuccess = (todo) => {
    return {
      type: ADD_SUCCESS,
      payload:todo
    };
  };
  export const addFaild = () => {
    return {
      type: ADD_FAILED
    };
  };