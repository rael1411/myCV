import React from "react";

class Education extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteItem("education", this.props.id);
  }
  render() {
    return (
      <div>

        <label>
          Name of the school
          <input
            type="text"
            name="schoolName"
            onChange={this.props.handleChange}
            value={this.props.state.education[this.props.index].schoolName}
            placeholder="School Name"
            data-key={this.props.id}
          />
        </label>
        <label>
          Title or degree obtained:
          <input
            type="text"
            name="educationTitle"
            onChange={this.props.handleChange}
            value={this.props.state.education[this.props.index].educationTitle}
            placeholder="Title/Degree obtained"
            data-key={this.props.id}
          />
        </label>
        <label>
          From:
          <input
            type="date"
            name="educationStartDate"
            onChange={this.props.handleChange}
            value={
              this.props.state.education[this.props.index].educationStartDate
            }
            data-key={this.props.id}
          />
        </label>
        <label>
          To:
          <input
            type="date"
            name="educationEndDate"
            onChange={this.props.handleChange}
            value={
              this.props.state.education[this.props.index].educationEndDate
            }
            data-key={this.props.id}
          />
        </label>
        <button onClick={this.handleClick} className="removeButton">Remove</button>

      </div>
    );
  }
}

export default Education;
