import React from 'react'
export default function Notification ({message}) {
  
  const messageStyle = {
      color: 'green',
      background: 'lightgrey',
      fontSize: 20,
      borderStyle: 'solid',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    }
  
  if (message) {
    return (
      <div className='message' style={messageStyle}>
        {message}
      </div>
    )
  }
}
