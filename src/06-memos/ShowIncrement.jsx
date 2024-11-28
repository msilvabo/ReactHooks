import React, { memo } from 'react'

const ShowIncrement = memo(({increment}) => {
    console.log('renderiza :(');
  return (
    <button
        className='btn btn-primary'
        onClick={() => {
                increment(5);
            }
        }
        >
      Incrementar
    </button>
  )
})

export default ShowIncrement
