import React from "react";

function Work(props) {
  return (
    <div id="workExp">
      <h2>Work Experience</h2>
      <label>
          Name of the company you worked for:
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          onChange={props.handleChange}
          value={props.state.companyName}
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
        />
      </label>
      <label>
        Job Start Date:
        <input
          type="date"
          name="jobDateStart"
          placeholder=""
          onChange={props.handleChange}
          value={props.state.jobDateStart}
        />
      </label>
      <label>
        Job end date:
        <input
          type="date"
          name="jobDateEnd"
          placeholder=""
          onChange={props.handleChange}
          value={props.state.jobDateEnd}
        />
      </label>
    </div>
  );
}
export default Work;
