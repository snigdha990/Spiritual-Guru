'use client';

import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

interface Progress {
  streak: number;
  totalMinutes: number;
  completedTasks: boolean[];
  lastCompletedDate?: string; 
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
    { task: "5-min mindful breathing", minutes: 5 },
    { task: "Chant Om 21 times", minutes: 10 },
    { task: "Gratitude reflection", minutes: 5 },
  ];

  const [progress, setProgress] = useState<Progress>({
    streak: 0,
    totalMinutes: 0,
    completedTasks: todaySadhana.map(() => false),
    lastCompletedDate: undefined,
  });

  // Helper to get today's date as YYYY-MM-DD
  const getToday = () => new Date().toISOString().split("T")[0];

  // Load progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`progress_${guru}_${language}`);
    const today = getToday();

    if (saved) {
      const parsed: Progress = JSON.parse(saved);

      // Reset daily tasks if lastCompletedDate is not today
      if (parsed.lastCompletedDate !== today) {
        parsed.completedTasks = todaySadhana.map(() => false);
        parsed.lastCompletedDate = today;
      }

      // Ensure completedTasks matches today's sadhana length
      if (!parsed.completedTasks || parsed.completedTasks.length !== todaySadhana.length) {
        parsed.completedTasks = todaySadhana.map(() => false);
      }

      setProgress(parsed);
      localStorage.setItem(`progress_${guru}_${language}`, JSON.stringify(parsed));
    } else {
      const initial: Progress = {
        streak: 0,
        totalMinutes: 0,
        completedTasks: todaySadhana.map(() => false),
        lastCompletedDate: today,
      };
      setProgress(initial);
      localStorage.setItem(`progress_${guru}_${language}`, JSON.stringify(initial));
    }
  }, [guru, language]);

  // Toggle task completion
  const handleTaskToggle = (index: number) => {
    const updatedTasks = [...progress.completedTasks];
    updatedTasks[index] = !updatedTasks[index];

    const minutesCompleted = todaySadhana.reduce((acc, item, i) => {
      return acc + (updatedTasks[i] ? item.minutes : 0);
    }, 0);

    let updatedStreak = progress.streak;

    // If all tasks are completed today, increment streak
    if (updatedTasks.every(Boolean) && !progress.completedTasks.every(Boolean)) {
      updatedStreak += 1;
    }

    const updatedProgress: Progress = {
      ...progress,
      totalMinutes: minutesCompleted,
      completedTasks: updatedTasks,
      streak: updatedStreak,
      lastCompletedDate: getToday(),
    };

    setProgress(updatedProgress);
    localStorage.setItem(`progress_${guru}_${language}`, JSON.stringify(updatedProgress));
  };

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
          {todaySadhana.map((item, i) => (
            <div
              key={i}
              className={`p-3 sm:p-4 rounded-xl border flex items-center justify-between cursor-pointer
                          ${progress.completedTasks[i] ? 'bg-green-500/20 border-green-400' : 'bg-white/10 border-gray-600'}`}
              onClick={() => handleTaskToggle(i)}
            >
              <p className={`text-sm sm:text-base ${progress.completedTasks[i] ? 'line-through text-gray-400' : ''}`}>
                {item.task}
              </p>
              <input
                type="checkbox"
                checked={progress.completedTasks[i]}
                onChange={() => handleTaskToggle(i)}
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
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
