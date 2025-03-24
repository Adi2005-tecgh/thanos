import React, { useState, useEffect } from 'react';

function AIChat({ searchQuery, setProducts }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (searchQuery) {
      // Simulate AI response
      const aiResponse = {
        sender: 'AI',
        text: `Looking for ${searchQuery}... Here's what I found:`,
      };
      setMessages([aiResponse]);
      
      // Simulate product suggestions
      const mockProducts = [
        { name: `${searchQuery} Item 1`, price: 29.99, image: 'https://via.placeholder.com/150' },
        { name: `${searchQuery} Item 2`, price: 39.99, image: 'https://via.placeholder.com/150' },
      ];
      setProducts(mockProducts);
    }
  }, [searchQuery, setProducts]);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { sender: 'User', text: input }]);
      // Simulate AI response
      setTimeout(() => {
        setMessages(prev => [...prev, { sender: 'AI', text: 'Let me help you with that!' }]);
      }, 1000);
      setInput('');
    }
  };

  return (
    <div className="ai-chat">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender.toLowerCase()}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Chat with your AI assistant..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default AIChat;