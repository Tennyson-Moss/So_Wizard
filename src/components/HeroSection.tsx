// components/HeroSection.tsx
export default function HeroSection() {
    return (
        <section className="w-full flex flex-col items-center text-center bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-700 shadow-2xl rounded-b-3xl mb-12 py-20">
        <div className="w-3/4 max-w-lg">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">So Wizard.com</h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            People that bomb together stay together.
          </p>
          <button className="px-8 py-3 bg-pink-600 hover:bg-pink-500 rounded-2xl shadow-md font-semibold transition text-lg">
            Get Started
          </button>
        </div>
      </section>
    );
  }
  