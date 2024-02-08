import { type ReactNode } from "react";
import * as React from "react";

function CircleProgress({ progress }: { progress: number }): ReactNode {
  const strokeWidth = 10;
  const radius = 50;
  const circumference = 2 * Math.PI * radius;
  return (
    <div className="relative size-16">
      <svg
        className="absolute left-0 top-0 -rotate-90"
        width="100%"
        height="100%"
        viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="text-gray-400"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
        />
        <circle
          className="text-white transition-all duration-300 ease-in-out"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={((100 - progress) / 100) * circumference}
          strokeLinecap="round"
          fill="none"
          cx={radius + strokeWidth}
          cy={radius + strokeWidth}
          r={radius}
        />
      </svg>
      <div className="absolute left-0 top-0 flex size-full items-center justify-center text-xs text-white">
        {Math.round(progress)}%
      </div>
    </div>
  );
}

export { CircleProgress };
