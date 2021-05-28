import { takeLatest, put, call } from "redux-saga/effects";
import { editSuccess, editFailed } from '../actions/edittodo';
import { editTodoAPI } from "../axios/instance";
import { EDIT_REQUEST } from "../contants";


function* editListTodo(todo) {
    console.log(todo)
    try {
        let data = yield call(editTodoAPI,todo.payload);
        console.log(data)
        if (data.status === 200) {
            yield put(editSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(editFailed())
    }
}

export default function* editTodo() {
    yield takeLatest(EDIT_REQUEST, editListTodo)
}