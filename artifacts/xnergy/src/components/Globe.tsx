import React from "react";

export function Globe({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      width="320" height="320" viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="170" cy="170" r="155" stroke="#D8D4CE" strokeWidth="1"/>
      <ellipse cx="170" cy="170" rx="155" ry="50" stroke="#D8D4CE" strokeWidth="0.7"/>
      <ellipse cx="170" cy="170" rx="155" ry="105" stroke="#D8D4CE" strokeWidth="0.7"/>
      <line x1="170" y1="15" x2="170" y2="325" stroke="#D8D4CE" strokeWidth="0.7"/>
      <line x1="15" y1="170" x2="325" y2="170" stroke="#D8D4CE" strokeWidth="0.7"/>
      <path d="M100 22 Q170 170 100 318" stroke="#D8D4CE" strokeWidth="0.7" fill="none"/>
      <path d="M240 22 Q170 170 240 318" stroke="#D8D4CE" strokeWidth="0.7" fill="none"/>
      {/* Continents */}
      <path d="M60 100 L95 88 L118 95 L125 115 L112 138 L95 145 L75 140 L60 125 Z" fill="#C8C3BB"/>
      <path d="M105 175 L130 168 L140 185 L138 215 L122 228 L108 218 L100 195 Z" fill="#C8C3BB"/>
      <path d="M165 90 L195 85 L205 100 L198 115 L178 118 L162 108 Z" fill="#C8C3BB"/>
      <path d="M175 130 L205 125 L215 148 L210 178 L195 195 L178 192 L168 170 L165 145 Z" fill="#C8C3BB"/>
      <path d="M210 82 L270 78 L295 95 L298 125 L280 145 L255 152 L228 145 L212 130 L205 108 Z" fill="#C8C3BB"/>
      <path d="M255 195 L285 190 L295 205 L290 222 L268 228 L252 218 Z" fill="#C8C3BB"/>
      {/* Centre */}
      <circle cx="170" cy="170" r="3.5" fill="#8B6F3E"/>
      {/* Connection lines — gold */}
      <line x1="170" y1="170" x2="88" y2="116" stroke="#C4A46B" strokeWidth="0.8" strokeDasharray="4 3"/>
      <circle cx="88" cy="116" r="4.5" fill="#8B6F3E"/>
      <circle cx="88" cy="116" r="10" fill="#8B6F3E" fillOpacity="0.12"/>
      <line x1="170" y1="170" x2="228" y2="138" stroke="#C4A46B" strokeWidth="0.8" strokeDasharray="4 3"/>
      <circle cx="228" cy="138" r="4.5" fill="#8B6F3E"/>
      <circle cx="228" cy="138" r="10" fill="#8B6F3E" fillOpacity="0.12"/>
      <line x1="170" y1="170" x2="272" y2="175" stroke="#C4A46B" strokeWidth="0.8" strokeDasharray="4 3"/>
      <circle cx="272" cy="175" r="4.5" fill="#8B6F3E"/>
      <circle cx="272" cy="175" r="10" fill="#8B6F3E" fillOpacity="0.12"/>
      <line x1="170" y1="170" x2="182" y2="100" stroke="#C4A46B" strokeWidth="0.8" strokeDasharray="4 3"/>
      <circle cx="182" cy="100" r="4.5" fill="#8B6F3E"/>
      <circle cx="182" cy="100" r="10" fill="#8B6F3E" fillOpacity="0.12"/>
      <circle cx="170" cy="170" r="155" stroke="#C4A46B" strokeWidth="0.4" strokeOpacity="0.3"/>
    </svg>
  );
}
