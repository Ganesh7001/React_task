import React from 'react';

function Icon1() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="28.962" height="28.962" viewBox="0 0 28.962 28.962">
  <defs>
    <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#20bdff"/>
      <stop offset="1" stop-color="#5433ff"/>
    </linearGradient>
    <filter id="Icon_awesome-plus" x="0" y="0" width="28.962" height="28.962" filterUnits="userSpaceOnUse">
      <feOffset dy="1" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="0.5" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Add_Task_Top_Nav_Bar" data-name="Add Task Top Nav Bar" transform="translate(1.5 0.5)">
    <g transform="matrix(1, 0, 0, 1, -1.5, -0.5)" filter="url(#Icon_awesome-plus)">
      <path id="Icon_awesome-plus-2" data-name="Icon awesome-plus" d="M27.542,13.566H17.806V3.83h-6.49v9.736H1.58v6.49h9.736v9.736h6.49V20.056h9.736Z" transform="translate(-0.08 -3.33)" fill="url(#linear-gradient)"/>
    </g>
  </g>
</svg>

  )
}

export default Icon1;