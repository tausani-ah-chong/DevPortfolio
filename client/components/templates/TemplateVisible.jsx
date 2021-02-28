import React from 'react'

export default function TemplateVisible () {
  return (
    <>
      <h1>visible</h1>
      <div className="w-72 h-72 bg-yellow-300">
        {/* <i className="devicon-javascript-plain w-24 h-24"></i> */}
        {/* <div className="w-72 h-72 bg-red-500 visible hover:invisible"></div> */}
        <svg viewBox="0 0 128 128">
          <rect x="6.5" y="6.5" fill="#1F0740" width="115" height="115"></rect><path fill="#D490C5" d="M0,0v128h128V0H0z M121.5,121.5H6.5V6.5h115V121.5z"></path><path fill="#D490C5" d="M103.5,59.2c0,0-0.6-14.6-16.5-14.6c-16,0-17.3,22-17.3,22v4.7c0,0,2.8,18.3,16.3,18.3 c13.5,0,14.8-2.6,14.8-2.6v-8.1c0,0-19.3,9.2-21.2-10h24V59.2z M94.5,61.6H79.5c0,0,0-8.3,7.5-9.2C95.2,52.4,94.5,61.6,94.5,61.6z "></path><path fill="#D490C5" d="M50.5,29.9H38.4v3.8l-16,54.9h9.4l4.4-16.1H53l4.5,16.1h10.3L50.5,29.9z M38.2,63.1l6.4-24.5L51,63.1H38.2z"></path>
        </svg>
        <i className="devicon-javascript-plain"></i>

      </div>
    </>
  )
}
