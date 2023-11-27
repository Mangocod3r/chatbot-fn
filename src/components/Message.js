// Message.jsx

import React from 'react';
// import './Message.css';

const Message = ({ text, isSent, position, timestamp }) => {
  const messageStyle = {
    color: 'white',
    maxWidth: '300px',
    padding: '10px',
    borderRadius: '10px',
    fontSize: '15px',
    marginLeft: isSent ? 'auto' : '0',
    backgroundColor: isSent ? getSentMessageColor(position) : '#e0e0e0',
  };

  return (
    <div className="message__sender" style={messageStyle}>
      {isSent}
      <p>{text}</p>
      <span>{timestamp}</span>
    </div>
  );
};

const getSentMessageColor = (position) => {
  const colors = ['#FF4081', '#2196F3', '#673AB7', '#03A9F4'];
  const index = position % colors.length;
  return colors[index];
};

export default Message;
