import help from "../../Assets/phosphor-seal-question-white.svg";
import classes from "./SenderMessage.module.css";
const SenderMessage = (props) => {
  return (
    <div style={{ width: "100%" }}>
      <div className={classes.senderContainer}>
        <p>{props.msg}</p>
        <img src={help} alt="help-icon" />
      </div>
    </div>
  );
};

export default SenderMessage;
