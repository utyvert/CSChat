import React from 'react'
import { useState, useEffect } from 'react';


export default function Home() {
  const [messages, setMessages] = useState([]);

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
    <div>
      <p>{messages}</p>
    </div>
  )
}
