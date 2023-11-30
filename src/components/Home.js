import React, {useState} from 'react';
import './login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useNavigate} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faLock);
library.add(faUser);

const Home = ({socket}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [room, setRoom] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        
        socket.emit('newUser', {userName, socketID: socket.id});
        // navigate('/chat');
        navigate(`/chat/${room}`); // Use the room name in the route
    };

    return (
        // <form className="home_conatiner" onSubmit={handleSubmit}>
        //     <h2 className="home_header">Sign in to Chat</h2>
        //     <label htmlFor="username">Username</label>
        //     <input
        //         type="text"
        //         minLength={6}
        //         name="username"
        //         id="username"
        //         className="username_inpu"
        //         value={userName}
        //         onChange={(e) => setUserName(e.target.value)}
        //     />
        //     <label htmlFor="room">Room Name</label>
        //     <input
        //         type="text"
        //         name="room"
        //         id="room"
        //         className="room_input"
        //         value={room}
        //         onChange={(e) => setRoom(e.target.value)}
        //     />
        //     <button className="home__cta">SIGN IN</button>
        // </form>


        <div className="bg-img">
        <div className="content">
        <div className="head">Sign in to Chat</div>
        <form action="#"  onSubmit={handleSubmit}>
            <div className="field">
            <span ><FontAwesomeIcon icon="fa-solid fa-user" /></span>
            <input
                type="text"
                minLength={6}
                name="username"
                id="username"
                placeholder='Username'
                className="username_inpu"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            </div>
            <div className="field space">
            {/* <span className="fa fa-lock" /> */}
            <span ><FontAwesomeIcon icon="lock" /></span>
            <input
                type="text"
                name="room"
                id="room"
                className="room_input"
                value={room}
                placeholder='Room Number'
                onChange={(e) => setRoom(e.target.value)}
            />            
            </div>
            <div className="pass">
            {/* <a href="#">Forgot Password?</a> */}
            </div>
            {/* <div className="field">
            <input type="submit" defaultValue="LOGIN" />
            </div> */}
            <button className="my-button bb blue"style={{borderRadius:'2rem'}}>Sign in</button>
        </form>
        
        </div>
        </div>
    );
};

export default Home;