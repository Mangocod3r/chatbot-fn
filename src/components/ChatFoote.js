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
import { useParams } from 'react-router-dom';

const ChatFooter = ({ socket }) => {
  const [message, setMessage] = useState("");
  const { room } = useParams(); // Use the room name from the URL

  const handleTyping = () => {
    socket.emit("typing", `${localStorage.getItem('userName')} is typing`);
  }

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (message.trim() && localStorage.getItem('userName')) {
      const currentDate = new Date();
      const timestamp = currentDate.toLocaleString('en-US', {
        timeZone: 'Asia/Kolkata', // Replace 'your-timezone' with the desired timezone
        hour12: false, // Use 24-hour format
      });
      // const timestamp = new Date().toLocaleTimeString(); // Get the current timestamp
      const newMessage = {
        text: message,
        room: room,
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
    <div className="p-2 shadow rounded-box">
      <form className="form" onSubmit={handleSendMessage}>
        <div className='row'>
          <div className='col-sm-10 col-10'>
            <input
            type="text"
            style={{borderRadius:'1rem'}}
            placeholder="Write message"
            className="form-control w-100" 
            value={message}
            onChange={e => setMessage(e.target.value)}
            onKeyDown={handleTyping}
          />
          </div>
          <div className='col-sm-2 col-2'>
            <button className="my-buttoni bbi blue"><i className="bi bi-send" style={{'marginLeft':'-5%'}}></i></button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChatFooter;
