import React from 'react'
import {useFetch} from '../hooks'
import useCounter from '../hooks/useCoounter';
import LoadingMessge from './LoadingMessge';
import PokemonCar from './PokemonCar';

const MultipleCustomHooks = () => {

  const {counter,increment,decrement} = useCounter(1);  
  const url = `https://pokeapi.co/api/v2/pokemon/${counter}`; 
  const {data, isLoading, hasError} = useFetch(url);
  return (
    <>
      <h1>Información de Pókemon</h1>
      <hr />
      <h3>pokemon Info Codigo: {counter}</h3>
      {isLoading 
        ? <LoadingMessge/>
        : <PokemonCar 
            id={counter} 
            name={data.name} 
            sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ]} />
        }
      

      <button className='btn btn-primary mt-2' onClick={ () => counter > 1 ? decrement() : null }>Anterior</button>
      <button className='btn btn-primary mt-2' onClick={() => increment()}>Siguiente</button>
    </>
  )
}

export default MultipleCustomHooks
