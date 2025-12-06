'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Message {
  sender: 'user' | 'guru';
  text: string;
}

interface Props {
  lang: string;
  guru: string;
}

export default function HomePageClient({ lang, guru }: Props) {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'guru', text: `Welcome, my child. How may I guide you today?` },
  ]);

  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const englishResponses = [
    'Peace comes from within. Reflect deeply.',
    'Compassion is the path to enlightenment.',
    'Meditation will help calm your mind.',
    'Your actions today shape your tomorrow.',
  ];

  const hindiResponses = [
    'शांति आपके भीतर से आती है। गहराई से चिंतन करें।',
    'करुणा ही ज्ञान का मार्ग है।',
    'ध्यान आपके मन को शांत करेगा।',
    'आज के कर्म आपका कल बनाते हैं।',
  ];

  const selectedResponses = lang === 'Hindi' ? hindiResponses : englishResponses;

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: 'user', text: input }]);
    setInput('');
    setLoading(true);

    let charIndex = 0;
    const response =
      selectedResponses[Math.floor(Math.random() * selectedResponses.length)];

    setTypingText('');

    const interval = setInterval(() => {
      if (charIndex < response.length) {
        setTypingText((prev) => prev + response.charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(interval);
        setMessages((prev) => [...prev, { sender: 'guru', text: response }]);
        setTypingText('');
        setLoading(false);
      }
    }, 40);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingText]);

  return (
    <div className="min-h-screen flex flex-col 
                    bg-gradient-to-br from-[#0e0f1a] via-[#111322] to-[#0b0b15] text-white">

      {/* HEADER */}
      <div className="flex items-center gap-3 px-5 py-4 
                      border-b border-white/10 bg-white/5 backdrop-blur-xl shadow-sm">
        <img
          src="/gurus/saibaba.jpg"
          className="w-12 h-12 rounded-full object-cover border border-yellow-300/40 shadow-md"
          alt="Guru"
        />
        <div>
          <h1 className="text-lg font-semibold bg-gradient-to-r from-yellow-200 to-yellow-400 bg-clip-text text-transparent">
            {guru}
          </h1>
          <p className="text-gray-400 text-sm">
            {lang === 'Hindi' ? 'हिंदी मोड' : 'English Mode'}
          </p>
        </div>
      </div>

      {/* CHAT AREA */}
      <div className="flex-1 overflow-y-auto px-5 py-8 space-y-5">

        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            
            {/* Bubble */}
            <div
              className={`max-w-[75%] px-4 py-3 rounded-2xl text-sm backdrop-blur-md
                          transition-all duration-300 shadow-md
                ${
                  msg.sender === 'user'
                    ? 'bg-yellow-400 text-black rounded-br-none'
                    : 'bg-white/10 border border-white/10 text-yellow-200 rounded-bl-none'
                }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {/* Typing indicator bubble */}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-4 py-3 rounded-2xl text-sm 
                            bg-white/10 border border-white/10 text-gray-300 backdrop-blur-md">
              {lang === 'Hindi' ? 'गुरु लिख रहे हैं' : 'Guru is typing'}
              <span className="animate-pulse ml-1">...</span>
            </div>
          </div>
        )}

        {/* Live typing bubble */}
        {typingText && (
          <div className="flex justify-start">
            <div className="max-w-[75%] px-4 py-3 rounded-2xl 
                            bg-white/10 border border-white/10 text-yellow-200 
                            text-sm backdrop-blur-md">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* INPUT AREA */}
      <div className="px-5 py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl">
        <div className="flex items-center gap-3 bg-white/5 px-4 py-3 rounded-2xl 
                        border border-white/10 shadow-lg">
          
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={lang === 'Hindi' ? 'अपना प्रश्न पूछें...' : 'Ask your question...'}
            className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-400"
          />

          <button
            onClick={sendMessage}
            className="px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-300 to-yellow-400 
                       text-black font-semibold shadow-md hover:scale-[1.05] transition-all"
          >
            {lang === 'Hindi' ? 'भेजें' : 'Send'}
          </button>
        </div>
      </div>

    </div>
  );
}
