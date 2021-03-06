import React from 'react';

function Icon3() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40.502" height="40.606" viewBox="0 0 40.502 40.606">
    <defs>
      <filter id="calendar" x="0" y="0" width="40.502" height="40.606" filterUnits="userSpaceOnUse">
        <feOffset dy="3" input="SourceAlpha"/>
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feFlood flood-opacity="0.161"/>
        <feComposite operator="in" in2="blur"/>
        <feComposite in="SourceGraphic"/>
      </filter>
    </defs>
    <g id="Calendar-2" data-name="Calendar" transform="translate(9 6)">
      <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#calendar)">
        <path id="calendar-3" data-name="calendar" d="M.6,8.477H21.9a.572.572,0,0,1,.6.53v11.48a2.28,2.28,0,0,1-2.411,2.119H2.411A2.28,2.28,0,0,1,0,20.487V9.007A.572.572,0,0,1,.6,8.477ZM22.5,6.535V4.945a2.28,2.28,0,0,0-2.411-2.119H17.68V.53a.572.572,0,0,0-.6-.53H15.068a.572.572,0,0,0-.6.53v2.3H8.036V.53a.572.572,0,0,0-.6-.53H5.425a.572.572,0,0,0-.6.53v2.3H2.411A2.28,2.28,0,0,0,0,4.945v1.59a.572.572,0,0,0,.6.53H21.9A.572.572,0,0,0,22.5,6.535Z" transform="translate(9 6)" fill="#a8a8a8"/>
      </g>
    </g>
  </svg>
  
  )
}

export default Icon3;