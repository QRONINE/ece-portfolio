
import React from 'react';

export const TrophyIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21A3.48 3.48 0 0 1 9 19.5a3.48 3.48 0 0 1-1-1.29C7.53 17.98 7 17.55 7 17v-2.34"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21A3.48 3.48 0 0 0 15 19.5a3.48 3.48 0 0 0 1-1.29c.47-.23.97-.66.97-1.21v-2.34"></path>
    <path d="M18 9a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v5a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-5Z"></path>
  </svg>
);