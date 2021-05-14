import React from "react";
class DisplayFooter extends React.Component {
  render() {
    
    return (
      <footer>
        <span id="phoneNumber" className="footerInfo">{this.props.state.phoneNumber}</span>
        <span id="emptySpan"></span>
        <span id="email" className="footerInfo">{this.props.state.email}</span>
      </footer>
    );
  }
}
export default DisplayFooter;
