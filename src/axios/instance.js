import axios from "axios";
export function requestGetList() {
    return axios.request({
        method: "get",
        url: "https://60065ad43698a80017de165e.mockapi.io/todo"
    });
}
export function addTodoAPI(todo) {
    return axios.request({
        method: "post",
        url: "https://60065ad43698a80017de165e.mockapi.io/todo",
        data:{title:todo}
    });
}
export function editTodoAPI(todo) {
    return axios.request({
        method: "put",
        url: `https://60065ad43698a80017de165e.mockapi.io/todo/${todo.id}`,
        data:{title:todo.title}
    });
}
export function removeTodoAPI(id) {
    return axios.request({
        method: "delete",
        url: `https://60065ad43698a80017de165e.mockapi.io/todo/${id}`,
    });
}
