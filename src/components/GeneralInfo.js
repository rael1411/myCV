import React from "react";

function GeneralInfo(props) {
  return (
    <div id="generalInfo">
      <h2>General Information</h2>
      <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={props.handleChange}
            placeholder="name"
            value={props.state.name}
          />
      </label>
      <label>
          Email:
          <input
            type="email"
            name="email"
            onChange={props.handleChange}
            placeholder="email address"
            value={props.state.email}
          />
      </label>
      <label>
          Phone Number:
          <input
            type="text"
            name="phoneNumber"
            onChange={props.handleChange}
            placeholder="phone number"
            pattern="[0-9]*"
            value={props.state.phoneNumber}
          />
      </label>
      <hr />
    </div>
  );
}

export default GeneralInfo;
