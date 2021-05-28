import { takeLatest, put, call } from "redux-saga/effects";
import { deleteSuccess, deleteFailed } from '../actions/removeTodo';
import { removeTodoAPI } from "../axios/instance";
import { DELETE_REQUEST } from "../contants";


function* removeListTodo(todo) {
    try {
        let data = yield call(removeTodoAPI,todo.payload);
        if (data.status === 200) {
            yield put(deleteSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(deleteFailed())
    }
}

export default function* removeTodo() {
    yield takeLatest(DELETE_REQUEST, removeListTodo)
}