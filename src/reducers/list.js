import {LIST_SUCCESS, ADD_SUCCESS, DELETE_SUCCESS,EDIT_SUCCESS} from '../contants'
const listTodo = []
const ListTodoReducer = (state = listTodo, action) => {
    switch (action.type) {
        case LIST_SUCCESS:
            const newList = [...action.payload.list]
            return newList;
        case ADD_SUCCESS:
            const newListAdd = [...state]
            newListAdd.push(action.payload);
            return newListAdd;
        case DELETE_SUCCESS:
            const newListRemove = [...state].filter(item => item.id !== action.payload.id)
            return newListRemove;
        case EDIT_SUCCESS:
            let indexTodo = state.findIndex((el)=> action.payload.id === el.id);
            console.log(indexTodo);
            const newListEdit = [...state.splice(0,indexTodo),
                {
                ...action.payload,
                title: action.payload.title
                },...state.splice(indexTodo + 1)]
            return newListEdit;
        default:
            return state;
    }
}
export default ListTodoReducer;