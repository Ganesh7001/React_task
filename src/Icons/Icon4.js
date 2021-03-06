import React from 'react';

function Icon4() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="36.356" height="36.827" viewBox="0 0 36.356 36.827">
  <defs>
    <filter id="Bell_Body" x="0" y="0" width="36.356" height="36.827" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Notification_Bell" data-name="Notification Bell" transform="translate(9 6)">
    <path id="Bell_End" data-name="Bell End" d="M17.364,31.377c-1.785,0-2.76-1.262-2.76-3.041H20.13C20.13,30.115,19.154,31.377,17.364,31.377Z" transform="translate(-8.175 -8.419)" fill="#a8a8a8"/>
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Bell_Body)">
      <path id="Bell_Body-2" data-name="Bell Body" d="M6.993,20.933c.884-1.165,2.622-1.848,2.622-7.064,0-5.354,2.364-7.506,4.568-8.022.207-.052.356-.121.356-.339V5.342a1.4,1.4,0,1,1,2.8,0v.166c0,.212.149.287.356.339,2.209.522,4.568,2.668,4.568,8.022,0,5.216,1.739,5.893,2.622,7.064a1.139,1.139,0,0,1-.912,1.825H7.9A1.139,1.139,0,0,1,6.993,20.933Z" transform="translate(2.24 2.07)" fill="#a8a8a8"/>
    </g>
  </g>
</svg>

  )
}

export default Icon4;