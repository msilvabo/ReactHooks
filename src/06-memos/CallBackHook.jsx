import React, { useCallback, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((valor) => {
    console.log('setCounter ...');
    
    setCounter((value)=> value + valor);
  },
  []);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // }

  return (
  <>
     <h1>CallBackHook : {counter} </h1>
     <hr />
     <ShowIncrement increment={incrementFather}/>

  </>
  )
}

export default CallBackHook
