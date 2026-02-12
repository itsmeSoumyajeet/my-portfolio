"use client";

import { useState } from "react";

export default function WorkInProgress() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="sticky top-0 z-[60] w-full bg-gradient-to-r from-orange-950/90 via-orange-900/90 to-orange-950/90 backdrop-blur-sm border-b border-orange-800/50">
      <div className="w-full max-w-[800px] mx-auto px-5 py-3">
        <div className="flex items-center justify-between gap-4 text-sm sm:text-base">
          <div className="flex items-center gap-2 sm:gap-3 flex-1">
            <span className="text-2xl animate-bounce">🚧</span>
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              <span className="font-semibold text-orange-200">
                Work in Progress
              </span>
              <span className="text-orange-300/80 text-xs sm:text-sm">
                This portfolio is still under construction. Please excuse the digital dust!
              </span>
            </div>
          </div>
          <button
            onClick={() => setDismissed(true)}
            className="text-orange-300 hover:text-white transition-colors px-2 py-1 rounded hover:bg-orange-800/30 text-sm font-medium shrink-0"
            aria-label="Dismiss"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
