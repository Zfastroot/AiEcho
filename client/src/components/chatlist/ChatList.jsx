import React from 'react'
import './chatlist.css'
import { Link } from 'react-router-dom'

function ChatList() {
  return (
    <div className="chatlist">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore ECHO AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <p>Chat 1</p>
        <p>Chat 1</p>
        <p>Chat 1</p>
        <p>Chat 1</p>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>ECHO AI Pro Comming soon</span>
          <span>wit for ECHO AI PRO that generate also images</span>
        </div>
      </div>
    </div>
  )
}

export default ChatList