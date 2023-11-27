// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const ChatBody = ({messages, lastMessageRef, typingStatus}) => {
//   const navigate = useNavigate();

//   const handleLeaveChat = () => {
//     localStorage.removeItem('userName');
//     navigate('/');
//     window.location.reload();
//   };

//   return (
//     <>
//       <header className="chat__mainHeader">
//         <p>Hangout with Colleagues</p>
//         <button className="leaveChat__btn" onClick={handleLeaveChat}>
//           LEAVE CHAT
//         </button>
//       </header>

//       {/*This shows messages sent from you*/}
//       <div className="message__container">
//         {messages.map((message) => (
//           message.name === localStorage.getItem('userName') ? (
//             <div className="message__chats" key={message.id}>
//               <p className="sender__name">You</p>
//               <div className="message__sender">
//                 <p>{message.text}</p>
//               </div>
//             </div>
//         ) : (
//             <div className="message__chats" key={message.id}>
//               <p className="recipient_name">{message.name}</p>
//               <div className="message__recipient">
//                 <p>{message.text}</p>
//               </div>
//             </div>
//         )
//         ))}

//         {/*This is triggered when a user is typing*/}
//         <div className="message__status">
//           <p>{typingStatus}</p>
//         </div>
//         <div ref={lastMessageRef} />
//       </div>
//     </>
//   );
// };

// export default ChatBody;
// ChatBody.jsx

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Message from './Message';

const ChatBody = ({ messages, lastMessageRef, typingStatus }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <header className="chat__mainHeader">
        <p>Hangout with Colleagues</p>
        <button className="my-button bb" onClick={handleLeaveChat}>
          LEAVE 
        </button>
      </header>

      {/* This shows messages sent from you */}
      <div className="message__container">
        {messages.map((message, index) => (
          message.name === localStorage.getItem('userName') ? (
            <Message
              key={message.id}
              text={message.text}
              isSent={true}
              position={index}
              totalMessages={messages.length}
              timestamp={message.timestamp}
            />
          ) : (
            <div className="message__chats" key={message.id}>
              <p className="recipient_name">{message.name}</p>
              <div className="message__recipient">
                <p>{message.text}</p>
                <span className='timestamp'>{message.timestamp}</span>
              </div>
            </div>
          )
        ))}

        {/* This is triggered when a user is typing */}
        <div className="message__status">
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;
