import React, { Component } from 'react';

class Test extends Component {
  constructor() {
    super();
    console.log("Welcome to the constructor");
    this.state = {
      count: 0,
      a: 0,
      b: 0,
      r: 0,
      sum: 0, // Added sum to state
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  }

  store() {
    if (this.state.key === 0) {
      this.setState({ a: 1, sum: this.state.a });
    } else if (this.state.key > 1) {
      this.setState({ sum: this.state.sum + this.state.a });
    }
  }

  store2() {
    this.setState({ b: 2 });
  }

  add() {
    this.setState({ r: this.state.a + this.state.b });
  }

  render() {
    return (
      <>
        <h5>{this.state.a}</h5>
        <h5>{this.state.b}</h5>
        <h2>{this.state.count}</h2>
        <h5>Result:-{this.state.r}</h5>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            this.increment();
          }}
        >
          Increment the number by own
        </button>
        <button
          type="button"
          disabled={this.state.count === 0}
          className="btn btn-outline-primary bx-2"
          onClick={() => {
            this.decrement();
          }}
        >
          Decrement the number by own
        </button>
        <button
          type="button"
          onClick={() => {
            this.store();
          }}
        >
          1
        </button>
        <button
          type="button"
          onClick={() => {
            this.store2();
          }}
        >
          2
        </button>
        <button
          type="button"
          onClick={() => {
            this.add();
          }}
        >
          +
        </button>
      </>
    );
  }
}

export default Test;
