import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Home = ({socket}) => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('userName', userName);
        
        socket.emit('newUser', {userName, socketID: socket.id});
        navigate('/chat');
    };

    return (
        <form className="home_conatiner" onSubmit={handleSubmit}>
            <h2 className="home_header">Sign in to Chat</h2>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                minLength={6}
                name="username"
                id="username"
                className="username_inpu"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />
            <button className="home__cta">SIGN IN</button>
        </form>
    );
};

export default Home;