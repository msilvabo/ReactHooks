import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';
import {useTodos} from './useTodos';




const TodoApp = () => {

    const {todos,handleNewTodo,handleDeleteTodo,handleToggleTodo, todosCount, todosPending} = useTodos();

    return (
    <>
    <h1>TodoApp: {todosCount} <small> <br /> pendientes: {todosPending} </small></h1>
        <br />
        <div className="row">
            <div className="col-12">
                <TodoList 
                    todos={todos} 
                    onDeleteTodo= { handleDeleteTodo } 
                    onToggleTodo = { handleToggleTodo }
                />
            </div>
            <div className="row">
                <h4>Agregar Todo</h4>
                <hr />
                <TodoAdd 
                    onNewTodo={handleNewTodo}
                />
            </div>
        </div>


    
    </>
  )
}

export default TodoApp
