import { takeLatest, put, call } from "redux-saga/effects";
import { addSuccess, addFaild } from '../actions/addtodo';
import { addTodoAPI } from "../axios/instance";
import { ADD_REQUEST } from "../contants";


function* addListTodo(todo) {
    try {
        let data = yield call(addTodoAPI,todo.payload);
        if (data.status === 201) {
            yield put(addSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(addFaild())
    }
}

export default function* addTodo() {
    yield takeLatest(ADD_REQUEST, addListTodo)
}