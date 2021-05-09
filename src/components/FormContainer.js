import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationContainer from "./EducationContainer";
import WorkContainer from "./WorkContainer";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      phoneNumber: "",
      education: [],
      work: [],
    };
  }
  deleteItem = (e) => {};
  handleChange = (e) => {
    const { name, value } = e.target;

    const educationContainer = [
      "schoolName",
      "educationStartDate",
      "educationEndDate",
      "educationTitle",
    ];
    const workContainer = [
      "companyName",
      "positionTitle",
      "mainTasks",
      "jobDateStart",
      "jobDateEnd",
    ];
    //checking if the information received should be stored in the education array
    //if so, change the values in the array
    //otherwise, change the state normally
    if (educationContainer.includes(name) === true) {
      const tempArr = this.state.education.slice();
      const position = tempArr.findIndex(
        (element) => element.id === e.target.dataset.key
      );
      tempArr[position][name] = value;
      this.setState({
        education: tempArr,
      });
    }
    //doing the same for the work array
    else if (workContainer.includes(name) === true) {
      const tempArr = this.state.work.slice();
      const position = tempArr.findIndex(
        (element) => element.id === e.target.dataset.key
      );
      tempArr[position][name] = value;
      this.setState({
        work: tempArr,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
    console.log(this.state);
  };
  //method to create a work or education entry in the array
  createNewItem = (identifier, object) => {
    console.log(object)
    this.setState({
      [identifier]: [...this.state[identifier], object],
    });
  };
  render() {
    return (
      <form id="formContainer">
        <GeneralInfo handleChange={this.handleChange} state={this.state} />
        <EducationContainer
          handleChange={this.handleChange}
          state={this.state}
          createNewItem={this.createNewItem}
        />
        <WorkContainer
          handleChange={this.handleChange}
          state={this.state}
          initializeWork={this.initializeWork}
          createNewItem={this.createNewItem}
        />
        {/* <button id="submit">Submit</button> */}
      </form>
    );
  }
}

export default FormContainer;
