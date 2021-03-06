import React from 'react';


function Globe() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="43.379" height="42.291" viewBox="0 0 43.379 42.291">
  <defs>
    <filter id="Icon_awesome-star" x="0" y="0" width="43.379" height="42.291" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g id="Star" transform="translate(9 6)">
    <g transform="matrix(1, 0, 0, 1, -9, -6)" filter="url(#Icon_awesome-star)">
      <path id="Icon_awesome-star-2" data-name="Icon awesome-star" d="M12.769.844l-3.1,6.281L2.741,8.135a1.519,1.519,0,0,0-.84,2.59l5.014,4.886-1.186,6.9a1.517,1.517,0,0,0,2.2,1.6l6.2-3.259,6.2,3.259a1.518,1.518,0,0,0,2.2-1.6l-1.186-6.9,5.014-4.886a1.519,1.519,0,0,0-.84-2.59L18.59,7.125,15.492.844a1.519,1.519,0,0,0-2.723,0Z" transform="translate(7.56 6)" fill="#a8a8a8"/>
    </g>
  </g>
</svg>
  )
}

export default Globe;