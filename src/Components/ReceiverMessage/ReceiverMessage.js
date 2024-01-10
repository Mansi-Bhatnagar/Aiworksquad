import chat from "../../Assets/phosphor-chat.svg";
import copy from "../../Assets/phosphor-copy.svg";
import exportIcon from "../../Assets/phosphor-export.svg";
import arrowDown from "../../Assets/phosphor-file-arrow-down.svg";
import envelope from "../../Assets/phosphor-envelope.svg";

import classes from "./ReceiverMessage.module.css";

const ReceiverMessage = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.receiverContainer}>
        <div>
          <img src={chat} alt="chat-icon" />
          <p>{props.msg}</p>
        </div>
        <div>
          <img src={copy} alt="copy-icon" />
          <img src={exportIcon} alt="export-icon" />
          <img src={arrowDown} alt="arrow-down-icon" />
          <img src={envelope} alt="envelope-icon" />
        </div>
      </div>
    </div>
  );
};

export default ReceiverMessage;
