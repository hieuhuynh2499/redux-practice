import React, { useEffect, useState } from 'react'
import './style.css'
import {connect} from 'react-redux'
import PropTypes from "prop-types"
import {listRequest} from '../../actions/list'
import { addRequest } from '../../actions/addtodo'
import { deleteRequest } from '../../actions/removeTodo'
import { editRequest } from '../../actions/edittodo'

function About(props) {
    const {list,getList,addTodo,removeTodo,editTodo} = props
    const [value,setValue] = useState('')
    const [checkEdit,setCheckEdit] = useState(false)
    const [id,setId] = useState('')
    useEffect(()=>{
            getList()
    },[getList]);
    function getValueInput (e){
        setValue(e.target.value);
    }
    function submitForm (e){
        e.preventDefault();
        setValue('')
        if(checkEdit === false){
            addTodo(value)
        }else{
            editTodo({id:id,title:value})
            setCheckEdit(false)
        }
    }
    function deleteList(id){
        removeTodo(id)  
    }
    function editList(item){
        setValue(item.title)
        setId(item.id)
        setCheckEdit(true)
        
    }
    return (
        <div className="about">
            <h1> to do app</h1>
            <form onSubmit={submitForm} className="about__form">
               <input type="text" value={value} onChange={getValueInput} />
               {checkEdit?<button type="submit">edit</button>:<button type="submit">add</button>}
            </form>
            <ul className="about__list">
                {list.length > 0 ? list.map(item => (
                    <li key={item.id}>
                        {item.title}
                        <div>
                        <span onClick={() =>deleteList(item.id)}>delete</span> 
                        <span onClick={() =>editList(item)}>edit</span>
                        </div>
                    </li>
                )):"nothing here you should add new something"}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}
const mapDispatchToProps = (dispatch) =>{
    return {
        getList: () => dispatch(listRequest()),
        addTodo: (todo) => dispatch(addRequest(todo)),
        removeTodo: (id) => dispatch(deleteRequest(id)),
        editTodo: (todo) => dispatch(editRequest(todo)),
    }
}
About.propTypes = {
    list: PropTypes.array,
    getList: PropTypes.func,
    addTodo: PropTypes.func,
    removeTodo: PropTypes.func,
    editTodo: PropTypes.func,
  };
export default connect(mapStateToProps,mapDispatchToProps)(About)
