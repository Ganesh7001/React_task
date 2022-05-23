import React from 'react';

function Home() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="45.154" height="42.635" viewBox="0 0 45.154 42.635">
  <defs>
    <filter id="Home_Logo" x="0" y="0" width="45.154" height="42.635" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#Home_Logo)">
    <path id="Home_Logo-2" data-name="Home Logo" d="M29.724,17.7,16.148,7.158,2.571,17.7V13.4L16.148,2.861,29.724,13.4Zm-3.394-.383V27.5H19.542V20.708H12.753V27.5H5.965V17.314L16.148,9.677Z" transform="translate(6.43 3.14)" fill="#5433ff"/>
  </g>
</svg>

  )
}

export default Home;