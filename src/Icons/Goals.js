import React from 'react';

function Goals() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40.565" height="40.565" viewBox="0 0 40.565 40.565">
    <defs>
      <filter id="Goals_Logo" x="0" y="0" width="40.565" height="40.565" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Goals_Logo)">
      <path id="Goals_Logo-2" data-name="Goals Logo" d="M25.136,11.8H22.912a9.189,9.189,0,0,0-7.648-7.648V1.928H12.443V4.152A9.189,9.189,0,0,0,4.795,11.8H2.571v2.821H4.795a9.189,9.189,0,0,0,7.648,7.648v2.224h2.821V22.269a9.189,9.189,0,0,0,7.648-7.648h2.224V11.8Zm-5.094,0h-2.2a4.242,4.242,0,0,0-2.58-2.58v-2.2A6.367,6.367,0,0,1,20.042,11.8Zm-6.188,2.821a1.41,1.41,0,1,1,1.41-1.41A1.41,1.41,0,0,1,13.853,14.621Zm-1.41-7.6v2.2a4.242,4.242,0,0,0-2.58,2.58h-2.2A6.367,6.367,0,0,1,12.443,7.022Zm-4.778,7.6h2.2a4.242,4.242,0,0,0,2.58,2.58v2.2A6.367,6.367,0,0,1,7.665,14.621Zm7.6,4.778V17.2a4.242,4.242,0,0,0,2.58-2.58h2.2A6.367,6.367,0,0,1,15.264,19.4Z" transform="translate(6.43 4.07)" fill="#5433ff"/>
    </g>
  </svg>
  )
}

export default Goals;