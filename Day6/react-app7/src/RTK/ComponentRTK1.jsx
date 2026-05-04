import React from 'react'
import { useSelector } from 'react-redux';

const ComponentRTK1 = () => {
    let data = useSelector(prev => prev)
    console.log(data);

  return (
    <div>
      
    </div>
  )
}

export default ComponentRTK1
