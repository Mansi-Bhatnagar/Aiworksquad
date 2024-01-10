import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ChatWindow from "../Components/ChatWindow/ChatWindow";
import classes from "./Chat.module.css";
const Chat = () => {
  const [department, setDepartment] = useState("marketing");
  const getDepartment = (dep) => {
    setDepartment(dep);
  };
  return (
    <div>
      <Navbar getDepartment={getDepartment} />
      <div className={classes.container}>
        <Sidebar />
        <ChatWindow department={department} />
      </div>
    </div>
  );
};

export default Chat;
