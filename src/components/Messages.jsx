import React from 'react'

export default function MessagesRecieved(props) {

  const {message, time, sender} = props;


  function convertDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  


  return (
    <div className='MessagesRecieved'>
      <div className="content">
        <div className="Messages--sender">
          {sender}
        </div>
        <div className="Messages--content">
          {message}
        </div>
      </div>
      <div className="Messages--time">
        {convertDate(time)}
      </div>
    </div>
  )
}
