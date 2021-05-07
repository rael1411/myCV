import React from "react";
import Work from "./Work";

class WorkContainer extends React.Component {
  createNew = (e) => {
    e.preventDefault();
    this.props.initializeWork();
  };
  componentDidMount() {
    this.props.initializeWork();
  }
  render() {
    return (
      <div id="workContainer">
          <h2>Work Experience</h2>
        <ul>
          {this.props.state.work.map((item, index) => {
            return (
              <li key={item.id} className="workInfo">
                {
                  <Work
                    handleChange={this.props.handleChange}
                    state={this.props.state}
                    key={item.id}
                    id={item.id}
                    index={index}
                  />
                }
              </li>
            );
          })}
          <button onClick={this.createNew}>Add New</button>
        </ul>
        <hr />
      </div>
    );
  }
}

export default WorkContainer;
