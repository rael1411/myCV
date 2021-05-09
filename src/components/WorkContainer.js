import React from "react";
import Work from "./Work";
import uniqid from "uniqid";

class WorkContainer extends React.Component {
  newObj = () => {
    const obj = {
      companyName: "",
      mainTasks: "",
      jobStartDate: "",
      jobEndDate: "",
      positionTitle: "",
      id: uniqid(),
    };
    return obj;
  };
  createNew = (e) => {
    e.preventDefault();
    this.props.createNewItem("work", this.newObj());
  };
  componentDidMount() {
    this.props.createNewItem("work", this.newObj());
  }
  render() {
    return (
      <div id="workContainer">
        <h2>Work History</h2>
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
