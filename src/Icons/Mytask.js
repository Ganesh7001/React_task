import React from 'react';

function Mytask() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="37.451" height="34.413" viewBox="0 0 37.451 34.413">
  <defs>
    <filter id="My_Tasks_Logo" x="0" y="0" width="37.451" height="34.413" filterUnits="userSpaceOnUse">
      <feOffset dy="3" input="SourceAlpha"/>
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feFlood flood-opacity="0.161"/>
      <feComposite operator="in" in2="blur"/>
      <feComposite in="SourceGraphic"/>
    </filter>
  </defs>
  <g transform="matrix(1, 0, 0, 1, 0, 0)" filter="url(#My_Tasks_Logo)">
    <path id="My_Tasks_Logo-2" data-name="My Tasks Logo" d="M5.3,2.382a.456.456,0,0,0-.646,0L2.239,4.787l-.862-.84a.456.456,0,0,0-.646,0l-.6.6a.456.456,0,0,0,0,.646l1.808,1.8a.486.486,0,0,0,.669,0L3.2,6.4,5.946,3.655a.459.459,0,0,0,0-.646Zm0,6.048a.456.456,0,0,0-.646,0L2.239,10.851l-.862-.84a.456.456,0,0,0-.646,0l-.6.6a.456.456,0,0,0,0,.646l1.8,1.8a.485.485,0,0,0,.669,0l.6-.6L5.946,9.718a.456.456,0,0,0,0-.642ZM2.431,15.014a1.824,1.824,0,1,0,0,3.647,1.824,1.824,0,1,0,0-3.647Zm16.412.608H7.9a.608.608,0,0,0-.608.608v1.216a.608.608,0,0,0,.608.608H18.844a.608.608,0,0,0,.608-.608V16.23A.608.608,0,0,0,18.844,15.622Zm0-12.157H7.9a.608.608,0,0,0-.608.608V5.288A.608.608,0,0,0,7.9,5.9H18.844a.608.608,0,0,0,.608-.608V4.073A.608.608,0,0,0,18.844,3.465Zm0,6.079H7.9a.608.608,0,0,0-.608.608v1.216a.608.608,0,0,0,.608.608H18.844a.608.608,0,0,0,.608-.608V10.151A.608.608,0,0,0,18.844,9.543Z" transform="translate(9 3.75)" fill="#5433ff"/>
  </g>
</svg>
  )
}

export default Mytask;