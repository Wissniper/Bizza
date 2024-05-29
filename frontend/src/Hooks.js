import React from "react";

class BasicHook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Victoria",
    };

    this.updateNameState = this.updateNameState.bind(this);
  }

  updateNameState() {
    this.setState({
      name: "Victoria Silver",
    });
  }

  render() {
    return (
      <div>
        <p>{this.state.name}</p>
        <button onClick={this.updateNameState}>Display Full Name</button>
      </div>
    );
  }
}

export { BasicHook }; // named export
