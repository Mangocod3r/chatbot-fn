// Message.jsx

import React from 'react';
// import './Message.css';

const Message = ({ text, isSent, position, timestamp }) => {
  const messageStyle = {
    color: 'white',
    maxWidth: '50%',
    padding: '2%',
    borderRadius: '10px',
    fontSize: '90%',
    marginLeft: isSent ? 'auto' : '0',
    marginBottom: '5%',
    backgroundColor: isSent ? getSentMessageColor(position) : '#e0e0e0',
  };

  return (
    <div className="message__sender position-relative" style={messageStyle}>
      {isSent}
      <p>{text}</p>
      <span className='position-absolute bottom-0 end-0' style={{'fontSize': '60%'}}>
        {timestamp}
      </span>
    </div>
  );
};

const getSentMessageColor = (position) => {
  const colors = ['#FF4081', '#2196F3', '#673AB7', '#03A9F4'];
  const index = position % colors.length;
  return colors[index];
};

export default Message;
