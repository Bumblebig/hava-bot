import React, { useState, useEffect } from 'react';
import { db, collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from '../../firebase';
import ChatBox from './ChatBox';
import { getSessionId } from '../utilis';

const ChatInput = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const sessionId = getSessionId();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await addDoc(collection(db, 'messages'), {
        message,
        sessionId,
        timestamp: serverTimestamp()
      });
      setMessage('');
    }
  };

  return (
    <div className='chat-section'>
      <section>
        <div className="chat-block">
          {messages.map(msg => (
            <ChatBox
              key={msg.id}
              status={msg.sessionId === sessionId ? 'send' : 'receive'}
              message={msg.message}
            />
          ))}
        </div>
      </section>
      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="chat-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
