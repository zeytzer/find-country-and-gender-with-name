import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Link href="/">
        <h1 className="text-4xl font-bold text-center">Welcome, You!</h1>
      </Link>
    </div>
  );
}
