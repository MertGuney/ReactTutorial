import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
  };
  state = {
    isVisible: false,
  };

  // onClickEvent(e) {}
  //arrow func otomatik bind yaptığı için ekstradan bind islemine gerek kalmaz
  onClickEvent=(number, e)=>{

  }
  //this bind etme yol 2
  // constructor(props) {
  //   super(props);
  //   this.onClickEvent = this.onClickEvent.bind(this);
  // }
  render() {
    // Destructing
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <div className="col-md-8 mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between ">
            {/*bind etme yol 1 
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this)}>
              {name}
            </h4> 
            */}
            <h4 className="d-inline" onClick={this.onClickEvent.bind(this,34)}>
              {name}
            </h4>
            <i className="far fa-trash-alt" style={{ cursor: "pointer" }}></i>
          </div>
          {isVisible ? (
            <div className="card-body">
              s<p className="card-text"> Maaş: {salary}</p>
              <p className="card-text"> Department: {department}</p>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}
// User.defaultProps = {
//   name: "Bilgi Yok",
//   salary: "Bilgi Yok",
//   department: "Bilgi Yok",
// };
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
};
export default User;
