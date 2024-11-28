import {useEffect, useState} from 'react'
import Message from './Message';

const SimpleForm = () => {

    const [ formState, setFormState] = useState({
        username: 'strider',
        email: 'strider@gmail.com',
    })
    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]:value, 
        });
    }

    useEffect(() => {
        // console.log('useEffect called!');
    },[]);

    useEffect(() => {
        // console.log('formState change!');
    },[formState]);

    useEffect(() => {
        // console.log('email change!');
    },[email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input 
        type="text" 
        className="form-control"
        placeholder= "userName"
        value= {username}
        name = "username"
        onChange = {onInputChange}
      />
      <input 
        type="email" 
        className="form-control mt-2"
        placeholder= "correo@gmail.com"
        value= {email}
        name = "email"
        onChange = {onInputChange}
      />
        {
            username === 'strider2' && <Message/>
        }
      
    </>
  )
}

export default SimpleForm;
