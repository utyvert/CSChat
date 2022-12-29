import React from 'react'
import { useState, useEffect } from 'react';
import MessagesRecieved from '../components/Messages';


export default function Home() {
  const [messages, setMessages] = useState([]);
  const messagesToDisplay = messages.slice(0, 50).reverse()
  console.log(messagesToDisplay)

  useEffect(() => {
    fetch('https://curriculum-api.codesmith.io/messages')
      .then(response => response.json())
      .then(data => {
        setMessages(data);
      })
      .catch(error => {
        console.log(error)
      });
  }, []);
  

  useEffect(() => {
    const scrollDiv = document.querySelector('.message-scroll');
    scrollDiv.scrollTop = scrollDiv.scrollHeight;
  }, [messages]);
  




  return (
    <div className='Home'>
      <div className="header">CSChat</div>
      <div className="container">
        <div className="messages-container">
          <div className="messages-top">

          </div>
          <div className="message-scroll">
            {messagesToDisplay.map(message => {
              return <MessagesRecieved
              message = {message['message']}
              time = {message['created_at']}
              sender = {message['created_by']}
              />
            })}
          </div>
        </div>
        <div className="container-foot">
          <input className='input-message' type="text"/><button>Send</button>
        </div>  

      
      </div>
    </div>
  )
}
