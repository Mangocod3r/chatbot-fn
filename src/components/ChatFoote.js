// import React, { useState } from 'react';

// const ChatFoote = ({socket}) => {
//   const [message, setMessage] = useState("");

//   const handleTyping = () => {
//     socket.emit("typing", `${localStorage.getItem('userName')} is typing`);
//     // console.log(`${localStorage.getItem('userName')} is typing`);
//   }

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     if(message.trim() && localStorage.getItem('userName')){
//         socket.emit('message', {
//             text: message,
//             name: localStorage.getItem('userName'),
//             id: `${socket.id}${Math.random()}`,
//             socketID: socket.id,
//         });
//     }
//     // console.log({ userName: localStorage.getItem('userName'), message });
//     setMessage("");

//     socket.emit('resetTypingStatus', '');
//   };

//   return (
//     <div className="chat__footer">
//       <form className="form" onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           placeholder="Write message"
//           className="message"
//           value={message}
//           onChange={e => setMessage(e.target.value)}
//           onKeyDown={handleTyping}
//         />
//         <button className="my-button bb blue">SEND</button>
//       </form>
//     </div>
//   );
// };

// export default ChatFoote;
import React, { useState } from 'react';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem('userName')} is typing`);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (message.trim() && localStorage.getItem('userName')) {
      const timestamp = new Date().toLocaleTimeString(); // Get the current timestamp
      const newMessage = {
        text: message,
        name: localStorage.getItem('userName'),
        id: `${socket.id}${Math.random()}`,
        socketID: socket.id,
        timestamp: timestamp, // Add timestamp property
      };

      socket.emit('message', newMessage);
    }

    setMessage("");
    socket.emit('resetTypingStatus', '');
  };

  return (
    <div className="chat__footer">
      <form className="form" onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Write message"
          className="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyDown={handleTyping}
        />
        <button className="my-button bb blue">SEND</button>
      </form>
    </div>
  );
};

export default ChatFooter;
