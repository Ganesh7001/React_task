import React from 'react';

function Icon2() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45.474" height="39.979" viewBox="0 0 45.474 39.979">
  <defs>
    <filter id="mail" x="0" y="0" width="45.474" height="39.979" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Mail-2" data-name="Mail" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#mail)">
      <path id="mail-3" data-name="mail" d="M27.727,6H5.747A2.744,2.744,0,0,0,3.014,8.747L3,25.232a2.756,2.756,0,0,0,2.747,2.747H27.727a2.756,2.756,0,0,0,2.747-2.747V8.747A2.756,2.756,0,0,0,27.727,6Zm0,5.495-10.99,6.869L5.747,11.495V8.747l10.99,6.869,10.99-6.869Z" transform="translate(6)" fill="#a8a8a8"/>
    </g>
  </g>
</svg>

  )
}

export default Icon2;