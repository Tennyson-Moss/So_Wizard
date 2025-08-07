'use client';
import { useState, useEffect } from "react";

type Genre = {
  id: number;
  name: string;
};

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Fetch genres from your API
  useEffect(() => {
    fetch('/api/genres') // You'll want to set up this API route or call Supabase directly here!
      .then(res => res.json())
      .then(data => setGenres(data.genres))
      .catch(() => setGenres([]));
  }, []);

  function toggleGenre(genre: Genre) {
    if (genre.name === "All of the Above") {
      // Select or deselect all genres except "All of the Above"
      if (selectedGenres.length === genres.length - 1) {
        setSelectedGenres([]);
      } else {
        setSelectedGenres(genres.filter(g => g.name !== "All of the Above").map(g => g.id));
      }
    } else {
      setSelectedGenres(selectedGenres.includes(genre.id)
        ? selectedGenres.filter(id => id !== genre.id)
        : [...selectedGenres, genre.id]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          username,
          genreIds: selectedGenres,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setMessage("You're signed up! Check your email soon.");
        setEmail("");
        setUsername("");
        setSelectedGenres([]);
      } else {
        setMessage(data.error || "Something went wrong.");
      }
    } catch (err: any) {
      setMessage("Something went wrong.");
    }
    setLoading(false);
  }

  return (
    <section className="w-full max-w-md mx-auto bg-gray-900/95 rounded-2xl shadow-xl px-6 py-10 mb-16">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 text-center">
        Join the So Wizard Newsletter
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="rounded-xl p-3 bg-gray-800 text-white border-2 border-gray-700 focus:border-pink-500 outline-none"
          placeholder="Your Email Address"
        />
        <input
          type="text"
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
          className="rounded-xl p-3 bg-gray-800 text-white border-2 border-gray-700 focus:border-pink-500 outline-none"
          placeholder="Username"
        />

        <div>
          <div className="text-left mb-2 text-pink-300 font-semibold">
            Pick your favorite genres:
          </div>
          <div className="flex flex-wrap gap-2">
            {genres.map(genre => (
              <button
                type="button"
                key={genre.id}
                onClick={() => toggleGenre(genre)}
                className={`px-4 py-2 rounded-full font-medium transition 
                  ${selectedGenres.includes(genre.id)
                    ? "bg-pink-600 text-white shadow-lg"
                    : "bg-gray-700 text-gray-200 hover:bg-pink-800 hover:text-white"}
                  ${genre.name === "All of the Above"
                    ? "border-2 border-pink-400"
                    : ""}`}
              >
                {genre.name}
              </button>
            ))}
            <div className="flex flex-wrap gap-2 mb-3">
            <button
                type="button"
                onClick={() => setSelectedGenres(genres.map(g => g.id))}
                className={`px-4 py-2 rounded-full font-medium transition bg-pink-700 text-white shadow-md`}
            >
                All of the Above
            </button>
            <button
                type="button"
                onClick={() => setSelectedGenres([])}
                className={`px-4 py-2 rounded-full font-medium transition bg-gray-600 text-white shadow-md`}
            >
                Clear
            </button>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-pink-600 hover:bg-pink-500 text-white rounded-2xl px-8 py-3 font-bold shadow-md transition"
          disabled={loading}
        >
          {loading ? "Signing Up..." : "Sign Me Up!"}
        </button>
        {message && <div className="mt-4 text-center text-pink-300">{message}</div>}
      </form>
    </section>
  );
}
