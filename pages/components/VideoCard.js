import React from "react";

export default function VideoCard() {
  return (
    <div className="modern-card">
      <div className="rounded-lg overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="w-full h-64 object-cover"
          poster="https://assets.codepen.io/6093409/river.jpg"
        >
          <source
            src="https://assets.codepen.io/6093409/river.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
          Our Approach to Success
        </h3>
        <p className="text-secondary-600">
          Watch how we transform businesses through strategic consulting and innovative solutions.
        </p>
      </div>
    </div>
  );
}
