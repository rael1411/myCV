import React, { Component } from "react";
import GeneralInfo from "./GeneralInfo";
import EducationContainer from "./EducationContainer";
import WorkContainer from "./WorkContainer";
import Content from "./Content";
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
      display: "form",
    };
  }
  //changes the display from the form to the content and back
  changeDisplay = () => {
    this.state.display === "form"
      ? this.setState({
          display: "content",
        })
      : this.setState({
          display: "form",
        });
  };
  handleClick = (e) => {
    e.preventDefault();
    this.changeDisplay();
  };
  deleteItem = (arrayName, id) => {
    const tempArr = this.state[arrayName];
    const index = tempArr.findIndex((element) => element.id === id);
    tempArr.splice(index, 1);
    this.setState({
      [arrayName]: tempArr,
    });
  };
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
      "jobStartDate",
      "jobEndDate",
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
  createNewItem = (arrayName, object) => {
    this.setState({
      [arrayName]: [...this.state[arrayName], object],
    });
  };
  loadDummy = (e) => {
    e.preventDefault();
    let dummyEducation = [];
    dummyEducation[0] = {
      schoolName: "Istituto tecnico",
      educationStartDate: "11-14-91",
      educationEndDate: "08-29-95",
      educationTitle: "Informatica",
      id: uniqid(),
    };
    dummyEducation[1] = {
      schoolName: "Istituto tecnico commerciale xyz fdsa ",
      educationStartDate: "11-14-91",
      educationEndDate: "08-30-95",
      educationTitle: "Informatica",
      id: uniqid(),
    };
    dummyEducation[2] = {
      schoolName: "Istituto tecnico",
      educationStartDate: "11-14-91",
      educationEndDate: "08-29-95",
      educationTitle: "Informatica",
      id: uniqid(),
    };
    dummyEducation[3] = {
      schoolName: "Istituto tecnico",
      educationStartDate: "11-14-91",
      educationEndDate: "08-29-95",
      educationTitle: "Informatica",
      id: uniqid(),
    };
    dummyEducation[4] = {
      schoolName: "Istituto tecnico",
      educationStartDate: "11-14-91",
      educationEndDate: "08-29-95",
      educationTitle: "Informatica",
      id: uniqid(),
    };
    let dummyTask =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    let dummyWork = [];
    dummyWork[0] = {
      companyName: "Some web company",
      positionTitle: "Ingegnere",
      mainTasks: dummyTask,
      jobStartDate: "07-25-2018",
      jobEndDate: "06-30-2020",
      id: uniqid(),
    };
    dummyWork[1] = {
      companyName: "Some web company",
      positionTitle: "Ingegnere",
      mainTasks: dummyTask,
      jobStartDate: "07-25-2018",
      jobEndDate: "06-30-2020",
      id: uniqid(),
    };
    this.setState({
      name: "John Doe",
      email: "sampleemail@gmail.com",
      phoneNumber: 55555321,
      work: dummyWork,
      education: dummyEducation,
      display: "content",
    });
  };
  render() {
    return (
      <div>
        <form
          id="formContainer"
          style={{
            display: this.state.display === "form" ? "" : "none",
          }}
        >
          <button id="load" onClick={this.loadDummy}>
            Load sample
          </button>
          <GeneralInfo handleChange={this.handleChange} state={this.state} />
          <EducationContainer
            handleChange={this.handleChange}
            state={this.state}
            createNewItem={this.createNewItem}
            deleteItem={this.deleteItem}
          />
          <WorkContainer
            handleChange={this.handleChange}
            state={this.state}
            initializeWork={this.initializeWork}
            createNewItem={this.createNewItem}
            deleteItem={this.deleteItem}
          />
          <button
            id="submit"
            onClick={this.handleClick}
            style={{ float: "right" }}
          >
            Submit
          </button>
        </form>
        <Content changeDisplay={this.changeDisplay} state={this.state} />
      </div>
    );
  }
}

export default FormContainer;
