import React from "react";
import Image from "next/image";

export default function VideoCard() {
  return (
    <div className="modern-card">
      <div className="rounded-lg overflow-hidden">
        <div className="w-full h-64 flex items-center justify-center relative">
          <Image
            src="/innovation.png"
            alt="Innovation"
            layout="fill"
            objectFit="contain"
            className="mx-auto"
            priority
          />
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
          Our Approach to Success
        </h3>
        <p className="text-secondary-600">
          We transform businesses through strategic consulting and innovative solutions.
        </p>
      </div>
    </div>
  );
}
