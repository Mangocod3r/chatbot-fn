import React, { useEffect, useRef, useState } from 'react';
import ChatBar from './ChatBar';
import ChatBody from './ChatBody';
import ChatFoote from './ChatFoote';
import BasicExample from './BasicExample';
import { useParams, useNavigate } from 'react-router-dom';

export default function ChatPage({ socket }){
    const [messages, setMessages] = useState([]);
    const [typingStatus, setTypingStatus] = useState('');
    const lastMessageRef = useRef(null);
    const { room } = useParams(); // Use the room name from the URL
    const navigate = useNavigate();
    
    useEffect(() => {
      const userName = localStorage.getItem('userName');
      if (!userName || !room) {
        // Redirect to the home page if username or room is missing
        navigate('/');
    }})

    useEffect(() => {
      console.log(messages);
      // Join the room when the component mounts
      socket.emit('joinRoom', { room , messages});

    }, [socket, room]);

    // useEffect(() => {
    //   // Listen for past messages from the server
    //   // socket.on('pastMessages', (pastMessages) => {
    //   //   console.log(pastMessages);
    //   //     setMessages([...messages, pastMessages]);
    //   // });

    //   // Listen for new messages from the server
    //   socket.on('messageResponse', (data) => setMessages([...messages, data]));

    // }, [socket, messages]);
    useEffect(() => {
        socket.on('messageResponse', (data) => setMessages([...messages, data]))
    }, [socket, messages]);

    useEffect(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: 'smooth'});
    }, [messages]);

    useEffect(() => {
      socket.on('typingResponse', (data) => setTypingStatus(data));
    }, [socket]);


  return (
    <>
    <BasicExample />
    <div className='container-fluid main'>
    <div className="row">
      <ChatBar socket={socket} />
      <div className='col'>
        <div className='row overflow-auto mt-5'>
          <ChatBody 
          messages={messages} 
          lastMessageRef={lastMessageRef}
          typingStatus={typingStatus}
          />
        </div>
        {/* <div className='container-fluid position-absolute bottom-0 end-0' style={{'width':'66%'}}> */}
        {/* <div> */}
          <ChatFoote socket={socket} room={room} />
        {/* </div> */}
      </div>
    </div>
    </div>
    </>
  );
};