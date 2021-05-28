import { takeLatest, put, call } from "redux-saga/effects";
import { listSuccess, listFaild } from '../actions/list';
import { requestGetList } from "../axios/instance";
import { LIST_REQUEST } from "../contants";


function* fetchList() {
    try {
        let data = yield call(requestGetList);
        if (data.status === 200) {
            yield put(listSuccess(data.data));
        }
    } catch (e) {
        console.log(e);
        yield put(listFaild())
    }
}

export default function* listTodo() {
    yield takeLatest(LIST_REQUEST, fetchList)
}