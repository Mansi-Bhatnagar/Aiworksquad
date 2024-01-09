import user from "../../Assets/phosphor-user-circle.svg";
import logo from "../../Assets/logoBlack.png";
import classes from "./Navbar.module.css";
import { useState } from "react";
const Navbar = () => {
  const [department, setDepartment] = useState("marketing"); //Initial value = marketing
  const departmentHandler = (e) => {
    setDepartment(e.target.value);
  };
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={logo} alt="logo" />
      </div>
      <div className={classes.info}>
        <div className={classes.dropdown}>
          <select
            id="department"
            value={department}
            onChange={departmentHandler}
          >
            <option value="marketing">Department: Marketing</option>
            <option value="sales">Department: Sales</option>
          </select>
        </div>
        <div className={classes.user}>
          <img src={user} alt="user" />
          <span>Nithin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
