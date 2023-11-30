import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BasicExample({socket}) {

  const navigate = useNavigate();

  const handleLeaveChat = () => {
    const userName = localStorage.getItem('userName');
    localStorage.removeItem('userName');
    socket.emit('leaveChat', { userName });
    navigate('/');
    window.location.reload();
  };
  
    return (
      <Navbar expand="lg" className='shadow p-2 sticky-top' style={{'background':'#3b3f3b'}}>
        <Container>
          <Navbar.Brand style={{ textDecoration: 'none', color: '#fff', fontWeight: '600', fontSize: '30px', marginTop: '15px', marginLeft:'5%' }} href="/chat">Chat App</Navbar.Brand>
            <button className="my-button bb" onClick={handleLeaveChat}>
              LEAVE 
            </button>
        </Container>
      </Navbar>
    );
  
}
// export default BasicExample;
