// const {createRoot} = require("react-dom/client")

import {createRoot} from "react-dom/client";
import App from "./App";
import FunctionBased from "./FunctionBased";

// let x= document.getElementById("root")
// console.log(x);

// console.log(createRoot(document.createElement("hr")));


// console.log(createRoot(x));

// createRoot(document.getElementById("root")).render(<h1>hi there this is h1</h1>);

createRoot(document.getElementById("root")).render(<App />);
// createRoot(document.getElementById("root")).render(<FunctionBased />);