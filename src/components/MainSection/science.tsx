

export default function Science(){
    return (
            <section className="bg-gray-100 p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-9 text-center text-blue-600">
              The Science Behind the Pomodoro Technique
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-6">
              <div className="bg-white/70 rounded-xl p-4 sm:p-6 shadow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Attention Restoration Theory</h3>
                <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
                  Research shows that our brains have limited attention resources that become depleted with continuous use.
                  FocusNest leverages the Pomodoro Technique by providing regular restoration periods to refresh your focus and energy.
                </p>
              </div>
              <div className="bg-white/70 rounded-xl p-4 sm:p-6 shadow flex flex-col">
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-center">Flow State Optimization</h3>
                <p className="leading-relaxed text-gray-700 text-sm sm:text-base">
                  The 25-minute work sessions built into FocusNest are designed to help you quickly enter a flow state, a psychological condition where you’re fully immersed and productive.
                </p>
              </div>
            </div>
          </section>
    );
}