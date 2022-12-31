import React from 'react'
import { useState, useEffect } from 'react';
import MessagesRecieved from '../components/Messages';


export default function Home() {
  const [messages, setMessages] = useState([]);
  const messagesToDisplay = messages.slice(0, 50).reverse()

  const [sendMessage, setSendMessage] = useState('');
  const [autoScroll, setAutoScroll] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  function toggleAutoScroll() {
    setAutoScroll(!autoScroll);
  }
  

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 1000);
    return () => clearInterval(interval);
  }, []);
  
  function fetchMessages() {

    const scrollDiv = document.querySelector('.message-scroll');
    setScrollPosition(scrollDiv.scrollTop);

    fetch('https://curriculum-api.codesmith.io/messages')
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      })
      .catch(error => {
        console.log(error)
      });
  }


  useEffect(() => {
    const scrollDiv = document.querySelector('.message-scroll');
    scrollDiv.scrollTop = scrollDiv.scrollHeight;
  }, []);
  

  useEffect(() => {
    // Restore the scroll position after the refresh
    const scrollDiv = document.querySelector('.message-scroll');
    scrollDiv.scrollTop = scrollPosition;
  }, [scrollPosition]);
  


  function handleClick() {
    fetch('https://curriculum-api.codesmith.io/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  mode: 'no-cors',
  body: JSON.stringify({
    message: sendMessage,
    created_by: 'Uty'
  })
  });
  setSendMessage('');  
  document.querySelector('.input-message').value = '';  

  }

  function onChange(event) {
    setSendMessage(event.target.value);
  }
  

  return (
    <div className='Home'>
      <div className="header">CSChat</div>
      <div className="container">
        <div className="messages-container">
          <div className="messages-top">

          </div>
          <div className="message-scroll">
            {messagesToDisplay.map(message => {
              if (message['created_by'] !== 'Uty') {
                return <MessagesRecieved
                message = {message['message']}
                time = {message['created_at']}
                sender = {message['created_by']}
              />
              } else {
                return <MessagesRecieved 
                // fix this !! new component for non-self messages
                message = {message['message']}
                time = {message['created_at']}
                sender = {message['created_by']}
              />
              }
            })}
          </div>
        </div>
        <div className="container-foot">
          <input onChange={onChange} placeholder='Message...' className='input-message' type="text"/><button onClick={handleClick} className='send-btn'>SEND</button>
        </div>  

      
      </div>
    </div>
  )
}
