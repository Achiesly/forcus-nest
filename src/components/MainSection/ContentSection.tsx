'use client';

import React from 'react';

export default function ContentSection() {
  return (
    <section className="bg-gradient-to-b from-gray-900 to-black text-white px-6 py-16 md:px-20">
      <div className="max-w-5xl mx-auto space-y-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-red-400">
          What is the Pomodoro Technique?
        </h1>
        <p className="text-lg leading-7 text-gray-300 text-center">
          The Pomodoro Technique is a revolutionary time management method developed by Francesco Cirillo in the late 1980s.
          Named after the tomato-shaped kitchen timer, this technique breaks work into focused 25-minute intervals followed by short breaks.
          <br />
          <span className="text-white font-semibold">FocusNest</span> brings this method to life with modern features and simplicity.
        </p>

        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-red-300">The Science Behind the Pomodoro Technique</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Attention Restoration Theory</h3>
            <p className="text-gray-400">Our brains have limited attention spans. FocusNest combats fatigue by adding structured breaks that restore focus and energy.</p>

            <h3 className="text-xl font-semibold">Flow State Optimization</h3>
            <p className="text-gray-400">Each 25-minute session helps you enter a productive “flow state” and stay there longer.</p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">Why Use the Pomodoro Technique with FocusNest?</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">Better Time Management:</strong> Track time more effectively using FocusNest’s timer.</li>
            <li><strong className="text-white">Enhanced Focus:</strong> Eliminate distractions and improve concentration.</li>
            <li><strong className="text-white">Reduced Mental Fatigue:</strong> Refresh your mind with well-timed breaks.</li>
            <li><strong className="text-white">Increased Productivity:</strong> Get more done with less burnout.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">How to Master the Pomodoro Technique</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">Plan Your Tasks:</strong> Use FocusNest to break large projects into small goals.</li>
            <li><strong className="text-white">Start the Timer:</strong> Stay focused for 25 minutes with zero distractions.</li>
            <li><strong className="text-white">Take Short Breaks:</strong> Rest for 5 minutes to recharge your brain.</li>
            <li><strong className="text-white">Enjoy a Long Break:</strong> After 4 sessions, take 15–30 minutes to relax fully.</li>
          </ol>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">Pro Tips with FocusNest</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Turn off notifications and stay distraction-free.</li>
            <li>Use the "2-minute rule" to handle quick tasks immediately.</li>
            <li>Track completed Pomodoros to optimize your work habits.</li>
            <li>Use breaks wisely — don’t skip them!</li>
            <li>Customize timer lengths in FocusNest for your unique needs.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">Avoid These Common Mistakes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">Don’t multitask:</strong> One task per session is key.</li>
            <li><strong className="text-white">Take your breaks seriously:</strong> They’re essential for focus recovery.</li>
            <li><strong className="text-white">Plan your tasks well:</strong> Vague goals slow you down.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">Who Benefits from FocusNest?</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-300 list-inside">
            <li><strong className="text-white">Students:</strong> Improve study habits and memory retention.</li>
            <li><strong className="text-white">Remote Workers:</strong> Structure your day with focused sessions.</li>
            <li><strong className="text-white">Entrepreneurs:</strong> Handle multiple priorities with clarity.</li>
            <li><strong className="text-white">Creative Professionals:</strong> Stay consistent and beat creative blocks.</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-semibold text-red-300">FAQs</h2>
          <div className="space-y-4 text-gray-300">
            <p><strong className="text-white">What if 25 minutes is too short or long?</strong><br />FocusNest allows full customization — start with shorter sessions or extend for deep work.</p>

            <p><strong className="text-white">Can I use this for creative work?</strong><br />Absolutely! FocusNest works great for writing, designing, and brainstorming.</p>

            <p><strong className="text-white">What should I do during breaks?</strong><br />Move, breathe, hydrate — anything that relaxes your mind without screens.</p>

            <p><strong className="text-white">How many Pomodoros per day?</strong><br />Start with 4–6. With practice, most users reach 8–12 effective sessions daily.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
