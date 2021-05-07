import React from "react";
import Education from "./Education";

class EducationContainer extends React.Component {
  createNew = (e) => {
    e.preventDefault();
    this.props.initializeEducation();
  };
  componentDidMount() {
    this.props.initializeEducation();
  }
  render() {
    return (
      <div id="EducationContainer">
        <h2>Education</h2>
        <ul>
          {this.props.state.education.map((item, index) => {
            return (
              <li key={item.id} className="schoolingInfo">
                {
                  <Education
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
          <hr />
        </ul>
        <button onClick={this.createNew} id="addSchool">
          Add Schooling
        </button>
      </div>
    );
  }
}

export default EducationContainer;
