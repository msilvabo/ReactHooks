import React, { useMemo, useState } from 'react'
import useCounter from '../hooks/useCounter'


const heavyStop = (iterationNumber = 100) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log('Vamos....');
    
  }
  return `${iterationNumber} iteraciones realizadas`;
}

const MemoHook = () => {

    const {counter, increment} = useCounter(4000);
    const [show,setShow] = useState(true);

    const memorizedValue = useMemo( () => heavyStop(counter),[counter]);

  return (
    <>
      <h1>Counter: {counter}</h1> 
      <hr />

      <h4>{memorizedValue}</h4>
      <button 
      type='button'
        className='btn btn-primary' 
        onClick={() => increment()
        }>+1</button>
        <br />
      <button

        className='btn btn-outline-primary mt-2' 
        onClick={ (e) => {
          setShow( !show );
          e.target.blur(); 
        }}  
      >Show/Hide: {JSON.stringify(show)}</button>  
    </>
  )
}

export default MemoHook
