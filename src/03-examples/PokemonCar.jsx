import React, { useLayoutEffect, useRef, useState } from 'react'

const PokemonCar = ({id, name, sprites = []}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({with:0, height:0});

  useLayoutEffect(() =>{
    console.log('useLayoutEffect');
    const {height, width}  = pRef.current.getBoundingClientRect();
    setBoxSize({height, width});
  },[name]);

  return (
    <section style={{height: 200}}>
      <h1  className='text-capitalize'>#{id} - {name}</h1>
      <div ref={pRef} style = {{marginBottom: '10px'}}>
        {
            sprites.map((sprite) => (
                <img key={sprite} src={sprite} alt={name} />
            ))
        }
      </div>
      <br />
      <code>{JSON.stringify(boxSize)}</code>
    </section>
  )
}

export default PokemonCar
