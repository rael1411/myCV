import React from "react";

function Work(props) {
  return (
    <div>
      <label>
        Name of the company you worked for:
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={props.handleChange}
          value={props.state.companyName}
          data-key={props.id}
        />
      </label>
      <label>
        Title of the position:
        <input
          type="text"
          name="positionTitle"
          placeholder="Position Title"
          onChange={props.handleChange}
          value={props.state.positionTitle}
          data-key={props.id}
        />
      </label>
      <label>
        Main tasks:
        <textarea
          rows="8"
          cols="50"
          name="mainTasks"
          placeholder="Main Tasks"
          onChange={props.handleChange}
          value={props.state.mainTasks}
          data-key={props.id}
        />
      </label>
      <label>
        Job Start Date:
        <input
          type="date"
          name="jobStartDate"
          placeholder=""
          onChange={props.handleChange}
          value={props.state.jobDateStart}
          data-key={props.id}
        />
      </label>
      <label>
        Job end date:
        <input
          type="date"
          name="jobEndDate"
          placeholder=""
          onChange={props.handleChange}
          value={props.state.jobDateEnd}
          data-key={props.id}
        />
      </label>
    </div>
  );
}
export default Work;
