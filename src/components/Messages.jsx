import React from 'react'

export default function Messages(props) {

  const {message, time, sender} = props;


  return (
    <div className='Messages'>
      <div className="content">
        <div className="Messages--sender"></div>
        <div className="Messages--content"></div>
      </div>
      <div className="Messages--time"></div>
    </div>
  )
}
