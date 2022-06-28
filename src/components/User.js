import React, { Component } from "react";

class User extends Component {
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
export default User;
