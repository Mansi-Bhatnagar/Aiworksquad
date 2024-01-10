import { useEffect, useState, useRef } from "react";
import SenderMessage from "../SenderMessage/SenderMessage";
import ReceiverMessage from "../ReceiverMessage/ReceiverMessage";
import help from "../../Assets/phosphor-seal-question.svg";
import send from "../../Assets/phosphor-paper-plane-right.svg";
import pen from "../../Assets/phosphor-pen.svg";
import caret from "../../Assets/phosphor-caret-up.svg";
import classes from "./ChatWindow.module.css";
const ChatWindow = (props) => {
  const placeholderText = "Enter your " + props.department + " query here...";

  //Initial Conversation Messages
  let initialMsgs = [
    { text: "What is marketing?", type: "S" },
    {
      text: "Marketing refers to the process of promoting and selling products or services to customers. It involves researching customer needs and wants, developing products and services that meet those needs, pricing products and services appropriately. Creating marketing materials to promote products and services, and distributing those materials through various channels to reach potential customers. The ultimate goal of marketing is to generate interest and increase sales for a business or organization.",
      type: "R",
    },
    {
      text: "Give me a list of top 5 digital marketing agencies near me who offers services like social media marketing, content marketing and influencer marketing.",
      type: "S",
    },
  ];
  const scrollableBodyRef = useRef(null);
  const [msgs, setMsgs] = useState(initialMsgs);
  const [inputMsg, setInputMsg] = useState("");

  const inputMsgHandler = (e) => {
    setInputMsg(e.target.value);
  };

  const sendMsgHandler = (e) => {
    if (e.type === "click" || (e.type === "keydown" && e.keyCode === 13)) {
      if (inputMsg.trim() !== "") {
        setMsgs((prev) => [...prev, { text: inputMsg, type: "S" }]);
        setInputMsg("");
      }
    }
  };

  //For always scrolling to the bottom in chat window
  useEffect(() => {
    if (scrollableBodyRef) {
      scrollableBodyRef.current.scrollTop =
        scrollableBodyRef.current.scrollHeight;
    }
  }, [msgs]);

  return (
    <div className={classes.container}>
      <div className={classes.scrollableWindow} ref={scrollableBodyRef}>
        <div className={classes.introBox}>
          <h2>Introduce yourself to AIWorkSquad</h2>
          <div>
            <p>Im Nithin. CEO of an IT startup company in India</p>
            <img src={pen} alt="pen-icon" />
          </div>
        </div>

        {msgs.map((item, key) =>
          item.type === "S" ? (
            <SenderMessage msg={item.text} key={key} />
          ) : (
            <ReceiverMessage msg={item.text} key={key} />
          )
        )}
      </div>
      <div className={classes.msgBar} onKeyDown={sendMsgHandler}>
        <img src={help} alt="help-icon" />
        <input
          type="text"
          placeholder={placeholderText}
          value={inputMsg}
          onChange={inputMsgHandler}
        />
        <img src={send} alt="send-icon" onClick={sendMsgHandler} />
      </div>
      <p className={classes.helpText}>
        Type your next question above or select one from the related questions
        section
      </p>
      <img src={caret} alt="caret-icon" className={classes.caret} />
    </div>
  );
};

export default ChatWindow;
