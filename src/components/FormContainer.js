import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationContainer from "./EducationContainer";
import WorkContainer from "./WorkContainer";
import uniqid from "uniqid";

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
  deleteItem = (e) => {
    
  }
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
      console.log(position);
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
  initializeWork = (e) => {
    const obj = {
      companyName: "",
      mainTasks: "",
      jobStartDate: "",
      jobEndDate: "",
      positionTitle: "",
      id: uniqid(),
    };
    this.setState({
      work: [...this.state.work, obj],
    });
  };
  initializeEducation = (e) => {
    const obj = {
      schoolName: "",
      educationStartDate: "",
      educationEndDate: "",
      educationTitle: "",
      id: uniqid(),
    };
    this.setState({
      education: [...this.state.education, obj],
    });
  };
  render() {
    return (
      <form id="formContainer">
        <GeneralInfo handleChange={this.handleChange} state={this.state} />
        <EducationContainer
          handleChange={this.handleChange}
          initializeEducation={this.initializeEducation}
          state={this.state}
        />
        <WorkContainer handleChange={this.handleChange} state={this.state} initializeWork={this.initializeWork} />
        {/* <button id="submit">Submit</button> */}
      </form>
    );
  }
}

export default FormContainer;
