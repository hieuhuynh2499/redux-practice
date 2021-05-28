import { all } from "redux-saga/effects";
import addTodo from "./addtodo";
import editTodo from "./edittodo";
import listTodo from "./list";
import removeTodo from "./removeTodo";
export default function* rootSaga() {
    yield all([
        listTodo(),
        addTodo(),
        removeTodo(),
        editTodo(),
    ])
}