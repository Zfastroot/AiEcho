import "./chatpage.css"
import React from 'react'
import "../../components/newprompt/NewPrompt"

function ChatPage() {
  return (
    <div className="chatPage">
    <div className="wrapper">
      <div className="chat">
        <div className="message">message</div>
        <div className="message user">message user </div>
        <div className="message">message</div>
        <div className="message user">message user </div>
        <div className="message">message</div>
        <div className="message user">message user </div>
        <div className="message">message</div>
        <div className="message user">message user </div>
        <div className="message">message</div>
        <div className="message user">message user </div>
        <div className="message">message</div>
        <div className="message user">message user </div>
        <NewPrompt/>
      </div>
    </div>
  </div>
  )
}

export default ChatPage