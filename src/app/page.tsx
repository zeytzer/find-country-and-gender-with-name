"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [inputValue, setInputValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      push(`/prediction/${inputValue}`);
    }
  };

  return (
    <div className="font-sans select-none">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center min-h-screen flex-col gap-10 sm:gap-20 p-4"
      >
        <input
          type="text"
          placeholder={isFocused ? "" : "Enter your name..."}
          className="text-white text-center text-3xl sm:text-6xl w-full border-x-4 px-4 h-16 sm:h-24 border-white outline-none bg-black uppercase"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button
          type="submit"
          className="text-center text-xl sm:text-2xl border-2 border-white p-4 h-16 w-48 sm:h-20 sm:w-60 rounded-2xl hover:bg-white hover:text-black fixed bottom-10"
        >
          Predict Data
        </button>
      </form>
    </div>
  );
}
