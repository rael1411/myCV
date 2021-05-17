import React from "react";
import DisplayHeader from "./DisplayHeader"
import DisplayWork from "./DisplayWork"
import DisplayEducation from "./DisplayEducation"
import DisplayFooter from "./DisplayFooter"

class Content extends React.Component {
  handleClick = (e) => {
    e.preventDefault();
    this.props.changeDisplay();
  };
  render() {
    return (
      <div id="contentContainer"
        style={{
          display: this.props.state.display === "content" ? "" : "none",
        }}
      >
        <DisplayHeader state={this.props.state}/>
        
        {this.props.state.work.length !== 0 && <DisplayWork state={this.props.state} /> }
        {this.props.state.education.length !== 0 && <DisplayEducation state={this.props.state}/> }
        <DisplayFooter state={this.props.state}/>
        <button onClick={this.handleClick}>Edit</button>

      </div>
    );
  }
}
export default Content;
