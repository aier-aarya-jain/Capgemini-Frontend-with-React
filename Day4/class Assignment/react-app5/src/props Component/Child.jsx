import React from 'react'

const Child = (childProps) => {
    console.log(childProps);    
  return (
    <div>
      <h3>This is the surname in the childComponent</h3>
      <hr />
      <h3>{childProps.value.value.surname}</h3>
    </div>
  )
}

export default Child
