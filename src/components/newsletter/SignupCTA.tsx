export default function SignupCTA({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center py-10">
      <h2 className="text-2xl font-bold mb-4 text-pink-400 text-center">
        Sign up to drop some bombs!
      </h2>
      <button
        onClick={onStart}
        className="bg-pink-600 hover:bg-pink-400 text-white rounded-2xl px-8 py-3 font-bold shadow-md transition"
      >
        Join the Newsletter
      </button>
    </div>
  );
}