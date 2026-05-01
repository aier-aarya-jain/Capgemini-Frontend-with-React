#  React Assignment

---

##  Question 1: Class Based (Stateful) vs Function Based (Stateless) Components

| Feature | Function Component | Class Component |
|--------|------------------|----------------|
| **Definition** | Plain JavaScript function | ES6 class extending React.Component |
| **State** |  Yes (using Hooks like useState) |  Yes (this.state) |
| **Lifecycle methods** | Yes (using useEffect) | Yes (componentDidMount, etc.) |
| **this keyword** |  Not used |  Used (refers to instance) |
| **Syntax complexity** |  Simple, less boilerplate |  Verbose (constructor, binding) |
| **Code readability** |  Easier to read |  Harder for beginners |
| **Performance** |  Optimized (hooks, concurrent features) |  Similar but less modern |
| **Reusability of logic** |  Easy (custom hooks) |  Hard (HOCs, render props) |
| **Event handling** | Simple functions | Requires binding (this) |
| **Learning curve** |  Easier |  Slightly harder |
| **Current usage** | Preferred (industry standard) |  Legacy (still supported) |
| **Boilerplate code** | Minimal | More |
| **Future support** |  Actively developed |  No new features |

---

## Question 2: What is the use of useState and its rules?

###  Concept
If we pass a function inside `useState`, it runs **only once** (lazy initialization).  
This helps when dealing with complex computations.  
For simple values, we pass them directly.

---

###  useState
- Stores data in a component  
- Updates data using `setState`  
- When state changes → React re-renders UI  

---

###  Syntax
```js
const [state, setState] = useState(initialValue);
