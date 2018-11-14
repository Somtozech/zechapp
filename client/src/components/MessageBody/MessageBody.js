import React from "react";
import chatbg from "../../images/chatBg.jpg";
import Message from "./Message";
import { connect } from "react-redux";
import propTypes from "prop-types";

const styles = {
  root: {
    flex: 1,
    background: `url(${chatbg})`,
    overflowY: "scroll",
    display: "flex",
    justifyContent: "center"
  },
  messages: {
    marginTop: "100px",
    width: "90%"
  }
};

const MessageBody = props => {
  return (
    <div style={styles.root}>
      <div style={styles.messages}>
        {props.messages.map(message => (
          <Message {...message} key={message.id} />
        ))}
      </div>
    </div>
  );
};

MessageBody.propTypes = {
  messages: propTypes.array
};

const getTime = date => {
  date = new Date(date);
  return `${date.getHours()}:${("0" + date.getMinutes()).slice(-2)}`;
};

const mapStateToProps = state => {
  const chat = state.chats.find(chat => chat.id === state.activeChatId);
  const messages = chat.messages.map(message => ({
    id: message.id,
    sender: message.sender,
    time: getTime(message.time),
    message: message.message,
    active: message.sender === state.user.name
  }));

  return {
    messages
  };
};

export default connect(
  mapStateToProps,
  null
)(MessageBody);
