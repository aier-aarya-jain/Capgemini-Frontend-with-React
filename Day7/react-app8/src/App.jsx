import CounterComponent from "./app/CounterComponent";
import { Provider } from "react-redux"
import { store } from "./app/Store"
function App() {
  return (
    <>
      <Provider store={store}>
        <CounterComponent />
      </Provider>
    </>
  )
}
export default App