import axios from "axios";
export function requestGetList() {
    return axios.request({
        method: "get",
        url: `${process.env.React_App_MOCKUP_API}/todo`
    });
}
export function addTodoAPI(todo) {
    return axios.request({
        method: "post",
        url: `${process.env.React_App_MOCKUP_API}/todo`,
        data:{title:todo}
    });
}
export function editTodoAPI(todo) {
    return axios.request({
        method: "put",
        url: `${process.env.React_App_MOCKUP_API}/todo/${todo.id}`,
        data:{title:todo.title}
    });
}
export function removeTodoAPI(id) {
    return axios.request({
        method: "delete",
        url: `${process.env.React_App_MOCKUP_API}/todo/${id}`,
    });
}
