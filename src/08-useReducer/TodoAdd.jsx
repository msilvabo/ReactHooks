import React from 'react'
import useForm from '../hooks/useForm'

const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm} = useForm({
                                                                description: ''
                                                                });

    const onFormSubmit = (event) => {
        event.preventDefault();
        // console.log(description);
        
        if (description.trim().length===0) return;
        const newTodo = 
            {
                id:new Date().getTime(),
                description,
                done: false
            };
        onNewTodo((newTodo));
        onResetForm();
    };                                                                

  return (
    <form onSubmit={onFormSubmit}>
        <input type="text"
            placeholder='que hay que hacer?'
            className='form-control'
            name= "description"
            value={description}
            onChange={onInputChange}
            />
        <button 
            type='submit' 
            className='btn btn-primary mt-2'
            >
            Agregar    
        </button> 
    </form>
  )
}

export default TodoAdd
