"use client";

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Progress {
  streak: number;
  totalMinutes: number;
}

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const language = searchParams.get("lang") || "English";
  const guru = searchParams.get("guru") || "Unknown Guru";

  const dailyQuote = "True happiness comes from inner stillness.";

  const quickActions = [
    { title: "Ask Your Guru", icon: "🕉️", href: "/chat" },
    { title: "Meditation", icon: "🧘‍♂️", href: "/meditation" },
    { title: "Daily Mantra", icon: "🔔", href: "/mantras" },
    { title: "Wisdom Library", icon: "📚", href: "/wisdom" },
  ];

  const todaySadhana = [
    "5-min mindful breathing",
    "Chant Om 21 times",
    "Gratitude reflection",
  ];

  const [progress, setProgress] = useState<Progress>({ streak: 0, totalMinutes: 0 });

  useEffect(() => {
    const savedProgress = localStorage.getItem(`progress_${guru}_${language}`);
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    } else {
      localStorage.setItem(
        `progress_${guru}_${language}`,
        JSON.stringify({ streak: 0, totalMinutes: 0 })
      );
    }
  }, [guru, language]);

  return (
    <div className="min-h-screen text-white px-4 sm:px-6 md:px-8 py-6 bg-gradient-to-tr from-purple-900 via-black to-indigo-900">

      {/* Header */}
      <header className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 sm:gap-0">
        <div className="text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold">Welcome 👋</h1>
          <p className="text-gray-300 text-sm sm:text-base">Guided by: {guru}</p>
          <p className="text-gray-300 text-sm sm:text-base">Language: {language}</p>
        </div>
        <img
          src="/logo.png"
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg"
          alt="logo"
        />
      </header>

      {/* Daily Quote */}
      <section className="mb-6">
        <div className="p-4 sm:p-5 rounded-xl bg-white/10 backdrop-blur shadow-lg text-center">
          <p className="text-base sm:text-lg italic text-gray-200">"{dailyQuote}"</p>
        </div>
      </section>

      {/* Today's Sadhana */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Today's Sadhana</h2>
        <div className="space-y-2 sm:space-y-3">
          {todaySadhana.map((task, i) => (
            <div
              key={i}
              className="p-3 sm:p-4 bg-white/10 rounded-xl border border-gray-600 flex items-center justify-between"
            >
              <p className="text-sm sm:text-base">{task}</p>
              <input type="checkbox" className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="mb-8">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 sm:gap-4">
          {quickActions.map((item, i) => (
            <a
              href={item.href}
              key={i}
              className="p-3 sm:p-5 rounded-xl bg-white/10 backdrop-blur border border-gray-600 hover:scale-105 transition flex flex-col items-center justify-center"
            >
              <div className="text-3xl sm:text-4xl mb-1 sm:mb-2">{item.icon}</div>
              <p className="font-medium text-sm sm:text-base text-center">{item.title}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Progress Section */}
      <section className="mb-12">
        <h2 className="text-lg sm:text-xl font-semibold mb-3">Your Progress</h2>
        <div className="p-4 sm:p-5 bg-white/10 rounded-xl border border-gray-600 backdrop-blur text-sm sm:text-base space-y-2">
          <p className="text-gray-300">
            Meditation Streak: <span className="font-bold">{progress.streak} days 🔥</span>
          </p>
          <p className="text-gray-300">
            Total Minutes: <span className="font-bold">{progress.totalMinutes} min</span>
          </p>
        </div>
      </section>
    </div>
  );
}
