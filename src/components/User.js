import React, { Component } from "react";
import PropTypes from "prop-types";

class User extends Component {
  static defaultProps = {
    name: "Bilgi Yok",
    salary: "Bilgi Yok",
    department: "Bilgi Yok",
  };
  render() {
    // Destructing
    const { name, department, salary } = this.props;
    return (
      <div>
        <ul>
          <li>Isim : {this.props.name}</li>
          <li>Departman : {this.props.department}</li>
          <li>Maaş : {this.props.salary}</li>
        </ul>
        <ul>
          <li>Isim2 : {name}</li>
          <li>Departman2 : {department}</li>
          <li>Maaş2 : {salary}</li>
        </ul>
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
