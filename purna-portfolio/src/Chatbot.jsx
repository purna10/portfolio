import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Purna's AI assistant. Ask me about his skills, experience, or that award he won!" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef(null);

  // Resume Knowledge Base
  const responses = {
    skills: "Purna is proficient in Python, Java, SQL, React.js, and Node.js. He also specializes in ML models like XGBoost, Random Forest, and PCA.",
    experience: "He currently works as a Software Developer at Talent Corner HR Services and previously interned at Hungama Digital Media and Stark Cyber Tech.",
    award: "Purna won the 'Outstanding Performance Award 2025' for developing the Sarthi360 CRM system!",
    education: "He holds an M.Sc. in Artificial Intelligence & IT with a CGPI of 8.52 from D G Ruparel College.",
    contact: "You can reach Purna at purnaghadi923@gmail.com or call him at +91 8355829226.",
    projects: "Some of his key projects include Sarthi360 CRM, an AI Image Generator, and a Logs Extraction Tool for Hungama.",
    default: "That's a great question! While I'm still learning, you can find more details about that in the sections above or contact Purna directly."
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    try {
      // Talking to your Node.js backend
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      
      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: data.response || "I'm having trouble connecting to my brain right now!" 
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "My server is offline, but Purna is a great developer! Try again later." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-80 md:w-96 h-[450px] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-emerald-600 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Bot size={20} />
                <span className="font-bold">Purna AI</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-200 rounded-tl-none border border-slate-700'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-700">
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                      <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={scrollRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-800 bg-slate-900/50">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-slate-800 text-white text-sm rounded-lg px-3 py-2 outline-none border border-transparent focus:border-emerald-500 transition"
                />
                <button 
                  onClick={handleSend}
                  className="bg-emerald-600 p-2 rounded-lg text-white hover:bg-emerald-500 transition"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-emerald-500 text-slate-950 p-4 rounded-full shadow-lg hover:shadow-emerald-500/20 transition flex items-center gap-2 group"
      >
        <MessageSquare size={24} />
        {!isOpen && <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap">Ask My AI</span>}
      </motion.button>
    </div>
  );
};

export default Chatbot;
