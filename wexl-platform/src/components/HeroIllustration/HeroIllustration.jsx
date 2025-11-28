import React from 'react';

const HeroIllustration = () => {
  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <svg
        viewBox="0 0 500 400"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background Circles */}
        <circle cx="250" cy="200" r="180" fill="url(#grad1)" opacity="0.1" className="animate-pulse" />
        <circle cx="250" cy="200" r="140" fill="url(#grad2)" opacity="0.1" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
        
        {/* Gradients */}
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#113e59', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#f6b519', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#f6b519', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#113e59', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#113e59', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#0d2f43', stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Book/Education Symbol */}
        <g className="animate-float">
          {/* Open Book */}
          <path
            d="M 200 180 Q 250 160 300 180 L 300 280 Q 250 260 200 280 Z"
            fill="url(#grad1)"
            opacity="0.9"
          />
          <path
            d="M 200 180 L 200 280 Q 250 260 300 280 L 300 180 Q 250 200 200 180"
            fill="url(#grad2)"
            opacity="0.8"
          />
          {/* Book Pages Lines */}
          <line x1="220" y1="200" x2="240" y2="195" stroke="white" strokeWidth="2" opacity="0.6" />
          <line x1="220" y1="215" x2="240" y2="210" stroke="white" strokeWidth="2" opacity="0.6" />
          <line x1="220" y1="230" x2="240" y2="225" stroke="white" strokeWidth="2" opacity="0.6" />
          <line x1="260" y1="195" x2="280" y2="200" stroke="white" strokeWidth="2" opacity="0.6" />
          <line x1="260" y1="210" x2="280" y2="215" stroke="white" strokeWidth="2" opacity="0.6" />
          <line x1="260" y1="225" x2="280" y2="230" stroke="white" strokeWidth="2" opacity="0.6" />
        </g>

        {/* Graduation Cap */}
        <g className="animate-float" style={{ animationDelay: '0.3s' }}>
          <polygon
            points="250,120 200,140 250,160 300,140"
            fill="url(#grad1)"
            opacity="0.9"
          />
          <rect x="245" y="160" width="10" height="40" fill="url(#grad2)" opacity="0.8" />
          <circle cx="250" cy="205" r="8" fill="#f6b519" />
        </g>

        {/* AI Brain Circuit */}
        <g className="animate-pulse" style={{ animationDelay: '0.2s' }}>
          {/* Brain Outline */}
          <path
            d="M 350 150 Q 380 150 380 180 Q 380 200 370 210 Q 380 220 380 240 Q 380 270 350 270 Q 340 270 330 265 Q 320 270 310 270 Q 280 270 280 240 Q 280 220 290 210 Q 280 200 280 180 Q 280 150 310 150 Q 320 150 330 155 Q 340 150 350 150"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="3"
            opacity="0.7"
          />
          {/* Circuit Lines */}
          <circle cx="320" cy="180" r="4" fill="#f6b519" />
          <circle cx="340" cy="190" r="4" fill="#f6b519" />
          <circle cx="320" cy="210" r="4" fill="#f6b519" />
          <circle cx="340" cy="230" r="4" fill="#f6b519" />
          <line x1="320" y1="180" x2="340" y2="190" stroke="#f6b519" strokeWidth="2" opacity="0.6" />
          <line x1="340" y1="190" x2="320" y2="210" stroke="#f6b519" strokeWidth="2" opacity="0.6" />
          <line x1="320" y1="210" x2="340" y2="230" stroke="#f6b519" strokeWidth="2" opacity="0.6" />
        </g>

        {/* Chart/Analytics */}
        <g className="animate-float" style={{ animationDelay: '0.4s' }}>
          <rect x="120" y="240" width="20" height="40" fill="url(#grad1)" opacity="0.8" rx="4" />
          <rect x="145" y="220" width="20" height="60" fill="url(#grad2)" opacity="0.8" rx="4" />
          <rect x="170" y="200" width="20" height="80" fill="url(#grad1)" opacity="0.8" rx="4" />
          {/* Upward Arrow */}
          <path d="M 175 190 L 180 180 L 185 190" fill="none" stroke="#f6b519" strokeWidth="3" strokeLinecap="round" />
        </g>

        {/* Floating Particles */}
        <circle cx="150" cy="120" r="4" fill="#f6b519" opacity="0.6" className="animate-pulse" />
        <circle cx="380" cy="100" r="3" fill="#113e59" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <circle cx="100" cy="180" r="5" fill="#f6b519" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        <circle cx="420" cy="250" r="4" fill="#113e59" opacity="0.6" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
        
        {/* Trophy/Success */}
        <g className="animate-float" style={{ animationDelay: '0.5s' }}>
          <path
            d="M 380 320 L 390 340 L 410 340 L 420 320 L 415 310 L 385 310 Z"
            fill="url(#grad1)"
            opacity="0.8"
          />
          <rect x="395" y="340" width="10" height="15" fill="url(#grad2)" opacity="0.8" />
          <rect x="390" y="355" width="20" height="5" fill="#f6b519" opacity="0.9" />
          {/* Star on trophy */}
          <path
            d="M 400 320 L 402 325 L 407 325 L 403 328 L 405 333 L 400 330 L 395 333 L 397 328 L 393 325 L 398 325 Z"
            fill="#f6b519"
          />
        </g>

        {/* Connecting Lines (Network) */}
        <line x1="250" y1="140" x2="330" y2="180" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" className="animate-pulse" />
        <line x1="250" y1="200" x2="150" y2="240" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
        <line x1="300" y1="240" x2="390" y2="320" stroke="white" strokeWidth="1" opacity="0.2" strokeDasharray="5,5" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
      </svg>
    </div>
  );
};

export default HeroIllustration;
