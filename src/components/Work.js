import React from "react";

class Work extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.deleteItem("work", this.props.id);
  }
  render() {
    return (
      <div>
        <label>
          Name of the company you worked for:
          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            onChange={this.props.handleChange}
            value={this.props.state.work[this.props.index].companyName}
            data-key={this.props.id}
          />
        </label>
        <label>
          Title of the position:
          <input
            type="text"
            name="positionTitle"
            placeholder="Position Title"
            onChange={this.props.handleChange}
            value={this.props.state.work[this.props.index].positionTitle}
            data-key={this.props.id}
          />
        </label>
        <label>
          Main tasks:
          <textarea
            rows="8"
            cols="50"
            name="mainTasks"
            placeholder="Main Tasks"
            onChange={this.props.handleChange}
            value={this.props.state.work[this.props.index].mainTasks}
            data-key={this.props.id}
          />
        </label>
        <label>
          Job Start Date:
          <input
            type="date"
            name="jobStartDate"
            placeholder=""
            onChange={this.props.handleChange}
            value={this.props.state.work[this.props.index].jobStartDate}
            data-key={this.props.id}
          />
        </label>
        <label>
          Job end date:
          <input
            type="date"
            name="jobEndDate"
            placeholder=""
            onChange={this.props.handleChange}
            value={this.props.state.work[this.props.index].jobEndDate}
            data-key={this.props.id}
          />
        </label>
        <button onClick={this.handleClick} className="removeButton">remove</button>
      </div>
    );
  }
}
export default Work;
