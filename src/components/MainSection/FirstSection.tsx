"use client";
import React from "react";
import {
  CheckCircle,
  AlertCircle,
} from "lucide-react";



export default function FirstSection() {
  return (
    <div className="min-h-screen bg-gray-100 mt-12 text-gray-900">
      <main className="container mx-auto px-4 py-4 max-w-6xl">
        <div className="space-y-16">
          {/* What is Pomodoro Technique */}
            <section className="rounded-2xl p-4 sm:p-6 md:p-9">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-5 text-center text-black/95">
                The Ultimate Online Pomodoro Timer
              </h2>

              <div className="max-w-2xl md:max-w-4xl mx-auto">
                <p className="mb-4 sm:mb-6 text-gray-700 leading-relaxed text-sm sm:text-base tracking-wide">
                  The Pomodoro Technique is a revolutionary time management method developed by Francesco Cirillo in the late 1980s.
                  Named after the tomato-shaped kitchen timer <span>(pomodoro means &quot;tomato&quot; in Italian)</span>
, this technique breaks work into
                  focused 25-minute intervals followed by short breaks.
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed tracking-wide">
                  At <strong className="text-black/80">FocusNest</strong>, we&apos;ve modernized this proven method into a simple, easy-to-use digital tool that helps you stay disciplined, track your sessions, and improve your productivity seamlessly.
                  This scientifically-backed method helps combat procrastination, improves focus, and significantly boosts productivity by working with your brain’s natural attention span rather than against it. Studies show that the human brain can maintain peak focus for approximately 25 minutes before requiring a mental break.
                </p>
              </div>
            </section>

          {/* The Science Behind Pomodoro */}
            <section className="bg-gray-100 p-5 sm:p-8 md:p-10 -mt-20">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-9 text-center text-blue-600">
              The Science Behind the Pomodoro Technique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 shadow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Attention Restoration Theory</h3>
                <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
                  Research shows that our brains have limited attention resources that become depleted with continuous use.
                  FocusNest leverages the Pomodoro Technique by providing regular restoration periods to refresh your focus and energy.
                </p>
              </div>
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 shadow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Flow State Optimization</h3>
                <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
                  The 25-minute work sessions built into FocusNest are designed to help you quickly enter a flow state, a psychological condition where you are fully immersed and productive.
                </p>
              </div>
            </div>
          </section>

          {/* Benefits */}
            <section className="p-10 mb-10 -mt-10">
            <h2 className="text-3xl font-bold mb-10 text-center text-blue-600">
              Why Use the Pomodoro Technique?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
              <div className="rounded-xl p-4 sm:p-6 text-center shadow flex flex-col items-center bg-white/80">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 shadow">
                1
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Better Time Management</h3>
              <p className="text-gray-700 text-sm sm:text-base">Estimate and track time more effectively, leading to improved project planning.</p>
              </div>
              <div className="rounded-xl p-4 sm:p-6 text-center shadow flex flex-col items-center bg-white/80">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 shadow">
                2
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Enhanced Focus</h3>
              <p className="text-gray-700 text-sm sm:text-base">Eliminate distractions and maintain laser-sharp concentration for extended periods.</p>
              </div>
              <div className="rounded-xl p-4 sm:p-6 text-center shadow flex flex-col items-center bg-white/80">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 shadow">
                3
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Reduced Mental Fatigue</h3>
              <p className="text-gray-700 text-sm sm:text-base">Regular breaks prevent cognitive overload and maintain high energy levels throughout the day.</p>
              </div>
              <div className="rounded-xl p-4 sm:p-6 text-center shadow flex flex-col items-center bg-white/80">
              <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-700 shadow">
                4
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-800">Increased Productivity</h3>
              <p className="text-gray-700 text-sm sm:text-base">Accomplish more tasks in less time with structured, focused work sessions.</p>
              </div>
            </div>
            </section>

          {/* Productivity Tips */}
            <section className="px-4 py-8 sm:p-8 md:p-10 bg-white/80 rounded-3xl shadow-lg mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-gray-900">
              Pro Tips for Maximum Productivity
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
              <div className="space-y-6">
              <Tip
                icon={<CheckCircle className="w-5 h-5 text-green-400" />}
                title="Eliminate Distractions"
                desc="Turn off notifications, close unnecessary browser tabs, and inform colleagues about your focus time."
              />
              <Tip
                icon={<CheckCircle className="w-5 h-5 text-green-400" />}
                title='Use the "Two-Minute Rule"'
                desc="If a task takes less than 2 minutes, do it immediately rather than adding it to your Pomodoro list."
              />
              <Tip
                icon={<CheckCircle className="w-5 h-5 text-green-400" />}
                title="Track Your Progress"
                desc="Keep a record of completed pomodoros to identify patterns and optimize your productivity."
              />
              </div>
              <div className="space-y-6 mt-8 md:mt-0">
              <Tip
                icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
                title="Handle Interruptions"
                desc="When interrupted, write down the interruption and return to it later. Protect your focused work time."
              />
              <Tip
                icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
                title="Don't Skip Breaks"
                desc="Breaks are essential for maintaining focus. Use them to rest your mind, not for more work tasks."
              />
              <Tip
                icon={<AlertCircle className="w-5 h-5 text-yellow-400" />}
                title="Customize for Your Needs"
                desc="Adjust timer intervals based on your tasks. Some people work better with 30 or 45-minute sessions."
              />
              </div>
            </div>
            </section>
        </div>
      </main>
    </div>
  );
}

// Helper components for cleaner markup

function Tip({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="rounded-full bg-white shadow p-2 flex-shrink-0">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <p className="text-gray-700">{desc}</p>
      </div>
    </div>
  );
}



