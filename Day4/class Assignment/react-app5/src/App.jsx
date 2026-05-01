import React from 'react'
import GrandParent from './props Component/GrandParent'
import ContextComponent from './ContextComponent/ContextComponent'
import ChildContext from './ContextComponent/ChildContext'
import ContextParent from './ContextComponent/ContextParent'

const App = () => {
  return (
    <div>
      {/* <GrandParent /> */}
      <ContextComponent>
      <ContextParent /  >

      </ContextComponent>
    </div>
  )
}

export default App
