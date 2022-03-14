import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };

  styles = {
    fontSize: 15,
    fontWeight: "bold",
  };

  //  constructor(){
  //      super();
  //      this.handleIncrement = this.handleIncrement.bind(this);
  //  }
  // 4) we can use a constructor where we have access to 'this' and set value of 'this' for our function

  // handleIncrement = (product) => {
  //         console.log(product)
  //         this.setState({ value: this.state.value + 1 });
  //         //  console.log('Increment Clicked',this)
  //     } // useing arrow function where it inherits the 'this' properties from nearby class

  // if we call 'this' with a object function
  // 1) obj.method() ==> 'this' returns (obj)
  // if called from a standalone function
  // 2) function(); ===> 'this' returns undefined if strict mode enabled or a window object
  // 3) this from an arrow function inherets properties from nearby function (here it is counter)

  // onReset = () => {
  //    this.setState({value: this.state.value = 0});
  // }
  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>

        <button
          onClick={() => {
            this.props.onDecrement(this.props.counter);
          }}
          className={this.disabledDecrement()}
          //or
          // disabled = {this.props.counter.value === 0 ? 'disabled' : ''};
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          X
        </button>

        {/* <button onClick={
                () => this.onReset(this.props.counter.id) }
            className="btn btn-info btn-sm m-2" >
            Reset
            </button> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge text-light m-2 bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }

  disabledDecrement() {
    const { value: count } = this.props.counter;
    let classes = "btn btn-secondary btn-sm m-2";
    if (count === 0) {
      classes += " disabled";
    }
    return classes;
  }
}

export default Counter;
