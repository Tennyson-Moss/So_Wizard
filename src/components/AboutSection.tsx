// components/AboutSection.tsx

export default function AboutSection() {
    return (
      <section className="w-full max-w-3xl bg-gray-800/90 rounded-2xl shadow-xl px-8 py-12 mb-16 flex flex-col items-center">
        <h2 className="text-3xl font-semibold mb-6 text-pink-400 text-center">
          Check Out Our Latest Interview
        </h2>
        <a
          href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="group"
        >
          <img
            src="https://img.youtube.com/vi/YOUR_VIDEO_ID/maxresdefault.jpg"
            alt="Latest Interview Thumbnail"
            className="w-full max-w-lg rounded-2xl shadow-lg border-4 border-pink-500 transition group-hover:scale-105 group-hover:shadow-pink-400 mb-6"
          />
          <div className="text-center text-lg text-pink-300 font-bold group-hover:underline">
            Watch on YouTube
          </div>
        </a>
      </section>
    );
  }
  