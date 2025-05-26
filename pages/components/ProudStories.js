import React from 'react';
import proudStories from './ProudStories.json';

export default function ProudStories() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {proudStories.map((story, index) => (
        <div key={index} className="modern-card">
          {/* Quote */}
          <div className="mb-6">
            <svg className="w-8 h-8 text-primary-600 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>            <p className="text-secondary-700 text-lg leading-relaxed italic">
              &ldquo;{story.comments}&rdquo;
            </p>
          </div>
          
          {/* Author Info */}
          <div className="flex items-center space-x-4">            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-primary-100">
              <img 
                src="/avatar.png" 
                alt={story.name}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <h4 className="font-semibold text-secondary-900">{story.name}</h4>
              <p className="text-secondary-600 text-sm">{story.title}</p>
              {story.quote && (
                <p className="text-primary-600 text-sm font-medium">{story.quote}</p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
