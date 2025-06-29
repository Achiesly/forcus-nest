 

 export default function FAQSection() {
  return (
    <section className="bg-white px-4 py-8 sm:px-6 md:px-10">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-10 text-center text-black/95">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6 max-w-lg sm:max-w-2xl md:max-w-3xl mx-auto text-gray-700 text-sm sm:text-base mb-4">
        <FAQ
          question="What if 25 minutes is too long or too short?"
          answer="FocusNest lets you customize your session durations to fit your workflow. Start with shorter sessions if you’re easily distracted or extend them for deep focus tasks."
        />
        <FAQ
          question="Can I use FocusNest for creative work?"
          answer="Absolutely! FocusNest is perfect for artists, writers, designers, and creators. The structured sessions help you overcome creative blocks and perfectionism."
        />
        <FAQ
          question="What should I do during breaks?"
          answer="During short breaks, step away from your screen, stretch, or hydrate. For longer breaks, try meditation, light exercise, or enjoy a healthy snack."
        />
        <FAQ
          question="How many Pomodoros should I aim for per day?"
          answer="Start with 4-6 sessions and gradually build up to 8-12 pomodoros per day using FocusNest. Remember, consistent quality focus is more important than the total number."
        />
      </div>
    </section>
  );
}

function FAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div>
      <h3 className="text-lg font-semibold mb-2 text-gray-800">{question}</h3>
      <p className="text-gray-700 text-12sm">{answer}</p>
    </div>
  );
}