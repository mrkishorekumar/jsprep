import { font } from "@/utils/font";
import Link from "next/link";
import React from "react";

export default function Announcement({ close }: { close: () => void }) {
  return (
    <div
      className={`flex items-center justify-between border-b border-gray-200 bg-gray-100 h-13 sticky top-0 ${font.className}`}
    >
      <span> </span>
      <p className="text-center font-medium">
        JavaScript playground -
        <Link
          href="https://runjs.rigial.com/js/"
          target="_blank"
          className="ml-1 inline-block underline"
        >
          Try Now !
        </Link>
      </p>

      <button
        onClick={close}
        type="button"
        aria-label="Dismiss"
        className="rounded border border-gray-300 bg-white p-1.5 shadow-sm transition-colors hover:bg-gray-50 mr-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}
