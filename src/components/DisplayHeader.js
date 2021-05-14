import React from "react";

class DisplayHeader extends React.Component {
  render() {
    return (
      <div className="displayGenInfo">
        <h1>
          {this.props.state.name === ""
            ? "Name not entered"
            : this.props.state.name}
        </h1>
      </div>
    );
  }
}

export default DisplayHeader;
