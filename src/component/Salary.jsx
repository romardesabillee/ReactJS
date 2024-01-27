import { useState, memo } from 'react'

function Salary({ salary, setSalary }) {
  console.log('salary component');

  return (
    <div>
      <h1>{salary}</h1>
      <button onClick={setSalary}>Add Salary</button>
    </div>
  )
}

export default memo(Salary);
