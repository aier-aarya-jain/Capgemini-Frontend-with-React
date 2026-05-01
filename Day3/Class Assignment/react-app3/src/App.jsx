import { useEffect, useState } from 'react';
import Component1 from './props/Component1';
import ApiCalling from './UseEffect/ApiCalling';

import ComponentWithCleanUp from './ComponentLifeCycleFunctions/ComponentWithCleanUp';
import ComponentConstructor from './ComponentLifeCycleFunctions/ComponentConstructor';
import ComponentWithRender from './ComponentLifeCycleFunctions/ComponentWithRender';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log("Hi there!!");
  }, [])
  return (
    <div>
      {count}
      <button onClick={()=>setCount(count+1)}>+</button>
     
      {/* <Component1 /> */}
      {/* <ApiCalling /> */}
      {/* <ComponentConstructor /> */}
      <ComponentWithRender  />
      {/* <ComponentWithDependency /> */}

      {/* {
        !(count%5==0) && <ComponentWithCleanUp />

      } */}
  
    </div>
  );
}

export default App;