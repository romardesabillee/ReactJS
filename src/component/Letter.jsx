import { useState, memo } from 'react'

function Letter({ letter, setLetter }) {
  console.log('letter component');

  return (
    <div>
      <h1>{letter}</h1>
      <button onClick={setLetter}>Random Letter</button>
    </div>
  )
}

export default memo(Letter);
