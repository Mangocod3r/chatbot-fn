import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ChatPage from './components/ChatPage';
import socketIO from 'socket.io-client';

// const socket = socketIO.connect('https://chatbot-bn.vercel.app/');
const socket = socketIO.connect("https://chatbot-bn.vercel.app/", {
   forceNew: true,
   transports: ["websocket"],
});


export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home socket={socket} />}></Route>
          <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
