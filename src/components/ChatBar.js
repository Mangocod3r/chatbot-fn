import React, { useEffect, useState } from 'react';

const ChatBar = ({socket}) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('newUserResponse', (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="col-sm-3" style={{'background':'#3b3f3b'}}>
      <div className="text-center shadow p-3 rounded box" 
        style={{ height: '87vh' , 'color':'white', background:'#3b3f3b'}}
      >
        <h4 className='mt-4'>ACTIVE USERS</h4>
        <div className="col">
          {users.map((user) => (
            <div key={user.socketID} className="row shadow rounded-box">
            {/* <i className="bi bi-person-circle"></i>
            <p>{user.userName}</p> */}
                <div className="col"><i className="bi bi-person-circle"></i></div>
                <div className="col" style={{'marginLeft':'-50%'}}><p>{user.userName}</p></div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
