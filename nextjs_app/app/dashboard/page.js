"use client";

import { useState } from 'react';

export default function Dashboard() {
    const [selectedChat, setSelectedChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleChatSelect = (chat) => {
        setSelectedChat(chat);
        // Load chat messages here
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (newMessage.trim()) {
        setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setNewMessage('');
        // Handle sending message logic here
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
        <div className="w-1/4 p-4 bg-white border-r">
            <h2 className="mb-4 text-xl font-bold">Chats</h2>
            <ul>
            {/* Replace with dynamic chat list */}
            <li
                className={`p-2 mb-2 cursor-pointer ${selectedChat === 'Chat 1' ? 'bg-gray-200' : ''}`}
                onClick={() => handleChatSelect('Chat 1')}
            >
                Chat 1
            </li>
            <li
                className={`p-2 mb-2 cursor-pointer ${selectedChat === 'Chat 2' ? 'bg-gray-200' : ''}`}
                onClick={() => handleChatSelect('Chat 2')}
            >
                Chat 2
            </li>
            </ul>
        </div>
        <div className="flex-1 p-4">
            <h2 className="mb-4 text-xl font-bold">Chat Interface</h2>
            <div className="h-96 p-4 mb-4 bg-white border rounded overflow-y-scroll">
            {/* Replace with dynamic messages */}
            {messages.map((message, index) => (
                <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    {message.text}
                </span>
                </div>
            ))}
            </div>
            <form onSubmit={handleSendMessage} className="flex">
            <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="flex-1 px-3 py-2 border rounded"
                placeholder="Type a message..."
                required
            />
            <button type="submit" className="px-4 py-2 ml-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                Send
            </button>
            </form>
        </div>
        </div>
    );
}