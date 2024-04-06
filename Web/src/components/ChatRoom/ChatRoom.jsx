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
  const roomOptions = [
    { name: 'Sustainable Fashion', description: 'Discuss eco-friendly clothing and fashion trends.' },
    { name: 'Green Living Tips', description: 'Share tips and tricks for sustainable living.' },
    { name: 'Renewable Energy Solutions', description: 'Explore renewable energy sources and technologies.' },
    { name: 'Zero Waste Lifestyle', description: 'Discuss strategies for reducing waste and living sustainably.' },
    { name: 'Eco-Friendly Home Design', description: 'Share ideas and designs for sustainable homes and buildings.' },
    { name: 'Organic Farming Practices', description: 'Discuss methods and benefits of organic and sustainable farming.' },
    { name: 'Climate Change Action', description: 'Collaborate on initiatives and actions to combat climate change.' },
    { name: 'Community Recycling Programs', description: 'Share information and ideas about community recycling efforts.' },
    { name: 'Water Conservation Strategies', description: 'Discuss techniques and technologies for conserving water resources.' },
    { name: 'Circular Economy Discussions', description: 'Explore concepts and practices of a circular economy for sustainability.' }
  ];
  
  return (
    <div className='main bg-cover bg-no-repeat bg-center h-screen flex-col justify-center items-center '>
      {room ? (
        <div>
          <Chat room={room} />
          <div className='leave-room'>
            <button onClick={handleLeaveRoom}>Leave Room</button>
          </div>
        </div>
      ) : (
        <div>
        <div className='room'>
          <label>Enter Room Name</label>
          <input ref={roomInputRef} />
          <button onClick={() => setRoom(roomInputRef.current.value)}>Enter Chat</button>
        </div>
        <div className='sign-out'>
        <button onClick={signUserOut}>Sign Out</button>
      </div>
        <div className='room-options text-white p-8 rounded-lg shadow-lg mb-40'>
        <h2 className='text-2xl font-semibold mb-4'>Room Options:</h2>
        <ul className='list-disc pl-4'>
          {roomOptions.map((option, index) => (
            <li key={index} className='mb-2'>
              <strong>{option.name}</strong>: {option.description}
            </li>
          ))}
        </ul>
      </div>
      </div>
      )}
    </div>
  );
}

export default ChatRoom;
