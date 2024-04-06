import React, { useState, useRef } from 'react';
import { Auth } from './Auth';
import { Chat } from './chat';
import Cookies from 'universal-cookie';
import { signOut } from 'firebase/auth';
import { auth } from './firebase-config';
import './room.css'

const cookies = new Cookies();

function ChatRoom() {
  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState(null);

  const roomInputRef = useRef(null);

  const signUserOut = async () => {
    await signOut(auth);
    cookies.remove('auth-token');
    setIsAuth(false);
    setRoom(null);
  };

  const handleLeaveRoom = () => {
    setRoom(null);
  };

  if (!isAuth) {
    return (
      <>
        <div><Auth setIsAuth={setIsAuth} /></div>
      </>
    );
  }

  return (
    <div className='main'>
      {room ? (
        <div>
          <Chat room={room} />
          <div className='leave-room'>
            <button onClick={handleLeaveRoom}>Leave Room</button>
          </div>
        </div>
      ) : (
        <div className='room'>
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
      )}
      <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default ChatRoom;
