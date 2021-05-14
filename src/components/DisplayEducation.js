import React from "react";
class DisplayEducation extends React.Component {
  render() {
    return (
      <div id="displayEducationInfoContainer">
        {this.props.state.education.length !== 0 && (
          <div>
            <h1 className="sectionTitle">Education</h1>
            <ul>
              {this.props.state.education.map((item) => {
                return (
                  <li key={item.id} className="displayEducationInfo">
                    <p className="educationTitle">{item.educationTitle}</p>
                    <i>{item.schoolName}</i>
                    <p className="educationDates">
                      {item.educationStartDate} - {item.educationEndDate}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default DisplayEducation;
