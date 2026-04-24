import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Minimize2 } from 'lucide-react';

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! How can we help you today?',
      sender: 'bot',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: 'Thank you for your message. One of our mediators will get back to you shortly.',
        sender: 'bot',
        time: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 w-[60px] h-[60px] bg-[#0f4c3a] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#0a3629] transition-colors z-50"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 20.5C7 20.5 4 16.5 4 11.5C4 7.5 6.5 4.5 9.5 4.5C11 4.5 12 6 12 6C12 6 13 4.5 14.5 4.5C17.5 4.5 20 7.5 20 11.5C20 16.5 17 20.5 12 20.5Z" stroke="#e8f8d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 20.5C9.5 15.5 9.5 10 12 6C14.5 10 14.5 15.5 12 20.5Z" stroke="#e8f8d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="absolute top-[2px] right-[2px] w-[14px] h-[14px] bg-[#ff0000] border-[2.5px] border-white rounded-full"></span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
              height: isMinimized ? 'auto' : '500px'
            }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            className="fixed bottom-6 right-6 w-full max-w-sm bg-white rounded-lg shadow-2xl z-50 flex flex-col overflow-hidden"
            style={{ maxHeight: '90vh' }}
          >
            {/* Header */}
            <div className="bg-[#0f4c3a] text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20.5C7 20.5 4 16.5 4 11.5C4 7.5 6.5 4.5 9.5 4.5C11 4.5 12 6 12 6C12 6 13 4.5 14.5 4.5C17.5 4.5 20 7.5 20 11.5C20 16.5 17 20.5 12 20.5Z" stroke="#e8f8d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 20.5C9.5 15.5 9.5 10 12 6C14.5 10 14.5 15.5 12 20.5Z" stroke="#e8f8d6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold tracking-wider">AKKANO</h3>
                  <p className="text-xs text-[#e8f8d6]">We're here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <Minimize2 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.sender === 'user'
                            ? 'bg-[#0f4c3a] text-white'
                            : 'bg-white text-gray-800 border border-gray-200'
                        }`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <p
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-[#e8f8d6]' : 'text-gray-500'
                          }`}
                        >
                          {message.time}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Input */}
                <form onSubmit={handleSendMessage} className="p-4 bg-white border-t">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#0f4c3a]"
                    />
                    <button
                      type="submit"
                      className="bg-[#0f4c3a] text-white p-2 rounded-full hover:bg-[#0a3629] transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
