import React from 'react'
import { useState, useEffect } from 'react';
import MessagesRecieved from '../components/Messages';


export default function Home() {
  const [messages, setMessages] = useState([]);
  const messagesToDisplay = messages.slice(-50);
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
          <div className="messages-foot">

          </div>

        </div>

      
      </div>
    </div>
  )
}
