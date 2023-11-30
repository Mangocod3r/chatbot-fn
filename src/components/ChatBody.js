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
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Message from './Message';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useRef, useEffect } from 'react';

const ChatBody = ({ messages, lastMessageRef, typingStatus }) => {
  // const navigate = useNavigate();

  // const chatContainerRef = useRef(null);

  // useEffect(() => {
  //   // Scroll to the bottom when the component mounts or when new messages are added
  //   chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  // }, [messages]);

  const messageStyle = {
    color: 'white',
    maxWidth: '50%',
    padding: '2%',
    borderRadius: '10px',
    fontSize: '90%',
    marginRight: 'auto',
    marginBottom: '5%',
    backgroundColor: '#3f3939',
  };
  // const handleLeaveChat = () => {
  //   localStorage.removeItem('userName');
  //   navigate('/');
  //   window.location.reload();
  // };
  console.log(messages);

  return (
      <div className='container' style={{'height': '75vh'}}>
      {/* This shows messages sent from you */}
      {/* <div className="message__container" style={{
          width: '100%',
          height: '80vh',
          backgroundColor: '#fff',
          padding: '20px',
          overflowY: 'scroll',
        }}> */}
        <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0" class="scrollspy-example" tabindex="0">
        {/* <div className="bg-white p-4 overflow-scroll position-relative" style={{'height': '80vh'}}> */}
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
            <div className="message__chats" key={message.id} >
              <p className="recipient_name" style={{'color':'black'}}>{message.name}</p>
              <div className="message__recipient position-relative" style={messageStyle}>
                <p style={{'marginBottom' : '0rem'}}>{message.text}</p>
                <span className='position-absolute bottom-0 end-0' style={{'fontSize': '60%', 'marginRight':'2%'}}>
                  {message.timestamp}
                </span>
              </div>
            </div>
          )
        ))}

        {/* This is triggered when a user is typing */}
        <div className='container-fluid' style={{'width':'66%', 'marginTop':'82%', 'marginLeft':'-4%'}}>
          <p>{typingStatus}</p>
        </div>
        <div ref={lastMessageRef} />
      </div>
      </div>
  );
};

export default ChatBody;
