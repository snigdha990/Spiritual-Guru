'use client'; // ← This makes the page a Client Component

import React from 'react';
import ChatPage from './ChatPage';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-indigo-900 to-blue-900">
      <ChatPage />
    </div>
  );
}
