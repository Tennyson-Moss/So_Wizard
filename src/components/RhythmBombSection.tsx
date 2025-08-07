// components/RhythmBombSection.tsx
export default function RhythmBombSection() {
    return (
      <section className="w-full max-w-3xl mx-auto bg-gray-800/90 rounded-2xl shadow-xl px-4 py-12 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pink-400 text-center">
          Countdown to the next Rhythm Bomb
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Movie Poster Placeholder */}
          <div className="w-44 h-64 bg-gradient-to-br from-gray-600 to-gray-900 rounded-xl flex items-center justify-center shadow-lg mb-6 md:mb-0">
            <span className="text-gray-400">[Movie Poster Here]</span>
          </div>
          {/* Countdown Timer Placeholder */}
          <div className="flex flex-col items-center">
            <span className="text-lg text-pink-300 mb-1">Time Remaining:</span>
            <div className="text-4xl font-mono font-bold bg-gray-700 rounded-xl px-10 py-6 shadow-inner">
              00:00:00
            </div>
            <span className="text-xs text-gray-400 mt-2">[Countdown timer coming soon]</span>
          </div>
        </div>
      </section>
    );
  }