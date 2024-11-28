import useForm from '../hooks/useForm';

const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
          username: '',
          email: '',
          password: ''
    });

    // const {username, email, password} = formState;


  return (
    <>
      <h1>Form With Custom Hook</h1>
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
      <input 
        type="text"  
        className="form-control mt-2"
        placeholder= "contraseña"
        name = "password"
        value= {password}
        onChange = {onInputChange}
      />
      <button onClick={onResetForm} className='btn btn-primary mt-4'>Reset</button>
    </>
  )
}

export default FormWithCustomHook;
