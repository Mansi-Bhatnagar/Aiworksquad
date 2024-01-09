import { useEffect, useState } from "react";
import menu from "../../Assets/menu.svg";
import history from "../../Assets/remix-history.svg";
import chat from "../../Assets/msg-writing.svg";
import edit from "../../Assets/wand-sparkle.svg";
import trash from "../../Assets/trash.svg";
import add from "../../Assets/square-plus.svg";
import launch from "../../Assets/notification.svg";
import tc from "../../Assets/circle-compose-2.svg";
import shield from "../../Assets/shield-check.svg";
import classes from "./Sidebar.module.css";
const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const openHandler = () => {
    setMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    if (window.innerWidth > "768") {
      setMenuOpen(true);
    }
  }, []);
  //options
  const options = [
    "New Chat",
    "What is marketing",
    "Give me a list of marketing agencies near me in 5 km",
  ];

  //more-options
  const moreOptions = [
    { src: add, opt: "Upgrade to Plus" },
    { src: launch, opt: "Updates & FAQ" },
    { src: tc, opt: "Terms and Conditions" },
    { src: shield, opt: "Privacy Policy Page" },
  ];
  return (
    <div className={classes.container}>
      <img
        src={menu}
        alt="menu-icon"
        className={classes.menuIcon}
        onClick={openHandler}
      />
      <div
        style={{ display: menuOpen ? "block" : "none" }}
        className={classes.content}
      >
        <div className={classes.newChatBox}>
          <span>+ New Chat</span>
        </div>
        <div className={classes.history}>
          <img src={history} alt="history" />
          <span>History</span>
        </div>
        <div className={classes.allOptions}>
          <div className={classes.options}>
            {options.map((item, idx) => (
              <div key={idx}>
                <img
                  src={chat}
                  alt="chatIcon"
                  style={{ marginRight: "14px", marginLeft: "5px" }}
                />
                <p>{item}</p>
                <img
                  src={edit}
                  alt="editIcon"
                  style={{ marginRight: "16px" }}
                />
                <img src={trash} alt="trashIcon" />
              </div>
            ))}
            <div className={classes.tooltip}>
              <span>Give me a list of marketing </span>
              <span>agencies near me in 5 km</span>
            </div>
          </div>

          <div className={classes.moreOptions}>
            {moreOptions.map((item, idx) => (
              <div key={idx}>
                <img
                  src={item.src}
                  alt={item.src}
                  style={{ marginLeft: "14px", marginRight: "14px" }}
                />
                <p>{item.opt}</p>
              </div>
            ))}
          </div>
        </div>
        {/* tooltip */}
      </div>
    </div>
  );
};

export default Sidebar;
