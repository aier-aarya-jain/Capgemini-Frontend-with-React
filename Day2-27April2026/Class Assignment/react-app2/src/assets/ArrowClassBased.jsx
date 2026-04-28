import { Component } from "react";

class ArrowClassBased extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }

  render() {
    return (
      <div>
        <h2>Arrow Class Based Component</h2>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default ArrowClassBased;