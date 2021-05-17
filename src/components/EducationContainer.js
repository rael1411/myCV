import React from "react";
import Education from "./Education";
import uniqid from "uniqid";

class EducationContainer extends React.Component {
  newObj = () => {
    const obj = {
      schoolName: "",
      educationStartDate: "",
      educationEndDate: "",
      educationTitle: "",
      id: uniqid(),
    };
    return obj;
  };
  createNew = (e) => {
    e.preventDefault();
    this.props.createNewItem("education", this.newObj());
  };
  componentDidMount() {
    this.props.createNewItem("education", this.newObj());
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
                    deleteItem={this.props.deleteItem}
                  />
                }
              </li>
            );
          })}
          <hr />
        </ul>
        <button onClick={this.createNew} className="cvButton">
          Add Schooling
        </button>
      </div>
    );
  }
}

export default EducationContainer;
