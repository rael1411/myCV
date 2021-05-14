import React from "react";
class DisplayWork extends React.Component {
    render() {
      return (
        <div className="displayJobInfoContainer">
            <h1 className="sectionTitle">Work History</h1><hr/>
          {this.props.state.work.length !== 0 && (
            <ul>
              {this.props.state.work.map((item) => {
                return (
                  <li key={item.id} className="displayJobInfo">
                    <h3 className="positionTitle">{item.positionTitle}</h3>
                    <p className="companyName">
                      <i>{item.companyName} </i>
                    </p>
                    <p className="workDates">
                      {item.jobStartDate} - {item.jobEndDate}
                    </p>
                    {item.mainTasks.length !== 0 && (
                      <p className="description">Main Tasks: {item.mainTasks}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          )}
          <hr/>
        </div>
      );
    }
  }
  
  export default DisplayWork;