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

  const selectedResponses = lang === "Hindi" ? hindiResponses : englishResponses;

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
    }, 50);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, typingText]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 pt-5 pb-4 border-b border-gray-700 bg-cardDark/40 backdrop-blur-md">
        <img
          src="/gurus/saibaba.jpg"
          className="w-12 h-12 rounded-full border-2 border-yellow-300 object-cover"
          alt="Guru"
        />
        <div>
          <h1 className="text-lg font-bold text-yellow-300">{guru}</h1>
          <p className="text-gray-300 text-sm">
            {lang === "Hindi" ? "हिंदी मोड" : "English Mode"}
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${
              msg.sender === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className={`max-w-xs px-4 py-3 rounded-xl shadow-lg text-sm ${
                msg.sender === 'user'
                  ? 'bg-yellow-400 text-black rounded-br-none'
                  : 'bg-white/10 border border-yellow-300 text-yellow-200 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-3 rounded-xl shadow-lg bg-white/10 border border-yellow-300 text-yellow-200 text-sm flex gap-1">
              <span>{lang === "Hindi" ? "गुरु लिख रहे हैं" : "Guru is typing"}</span>
              <span className="animate-pulse">...</span>
            </div>
          </div>
        )}

        {typingText && (
          <div className="flex justify-start">
            <div className="max-w-xs px-4 py-3 rounded-xl shadow-lg bg-white/10 border border-yellow-300 text-yellow-200 text-sm">
              {typingText}
              <span className="animate-pulse">|</span>
            </div>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-700 bg-cardDark/60 backdrop-blur-md flex items-center gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          placeholder={lang === "Hindi" ? "अपना प्रश्न पूछें..." : "Ask your question..."}
          className="flex-1 px-4 py-3 rounded-xl bg-white/10 text-gray-200 border border-gray-600 focus:border-yellow-300 outline-none"
        />
        <button
          onClick={sendMessage}
          className="px-5 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:scale-105 transition-transform shadow-md"
        >
          {lang === "Hindi" ? "भेजें" : "Send"}
        </button>
      </div>
    </div>
  );
}
