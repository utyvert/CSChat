import React from 'react'

export default function MessagesSent(props) {

  const {message, time, sender} = props;


  function convertDate(dateString) {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  


  return (
    <div className='MessagesSent'>
      <div className="upper-content-s">
        <div className="Messages--content-s">
          {message}
        </div>
      </div>
      <div className="lower-content">
        <div className="Messages--sender">
            {sender}
          </div>
        <div className="Messages--time">
          {convertDate(time)}
        </div>
      </div>
    </div>
  )
}
