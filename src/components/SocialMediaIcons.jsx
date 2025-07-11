import React from 'react';

export default function SocialMediaIcons( {links} ) {
    console.log('hello from media icons')
    console.log(links)

      return (
<div class="flex items-center justify-center gap-4">
 
  <a class="social-button" href={links.github} target="_blank">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-[#1E3A8A] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#1E3A8A] rounded-full"
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:fill-[#171543] fill-white duration-300"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.17 6.839 9.481.5.092.683-.217.683-.481 0-.237-.009-.866-.013-1.699-2.782.603-3.37-1.338-3.37-1.338-.454-1.15-1.11-1.458-1.11-1.458-.906-.619.069-.606.069-.606 1.002.071 1.527 1.03 1.527 1.03.89 1.529 2.34 1.087 2.911.831.091-.645.348-1.087.634-1.338-2.22-.252-4.555-1.11-4.555-4.94 0-1.09.39-1.986 1.028-2.682-.103-.252-.446-1.268.098-2.642 0 0 .837-.268 2.75 1.024a9.563 9.563 0 012.496-.335 9.58 9.58 0 012.496.335c1.913-1.292 2.75-1.024 2.75-1.024.544 1.374.202 2.39.1 2.642.64.696 1.027 1.592 1.027 2.682 0 3.839-2.338 4.685-4.567 4.933.358.309.678.916.678 1.847 0 1.334-.012 2.412-.012 2.74 0 .267.18.577.688.481A12.01 12.01 0 0022 12c0-5.523-4.477-10-10-10z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </button>
  </a>
  <a class="social-button" href={links.live} target="_blank">
    <button class="relative w-12 h-12 rounded-full group" onclick="window.open('https://sotodev.com', '_blank')">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-[#A78BFA] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#A78BFA] rounded-full"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#171543] duration-300"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="10"
            ry="4"
            transform="rotate(90 12 12)"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#171543] duration-300"
          />
          <path
            d="M2 12H22"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:stroke-[#171543] duration-300"
          />
        </svg>
      </div>
    </button>
  </a>
  <a class="social-button" href={links.youtube} target="_blank">
    <button class="relative w-12 h-12 rounded-full group">
      <div
        class="floater w-full h-full absolute top-0 left-0 bg-[#334155] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        class="icon relative z-10 w-full h-full flex items-center justify-center border-2 border-[#334155] rounded-full"
      >
        <svg
          height="24"
          width="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            class="group-hover:fill-[#171543] fill-white duration-300"
            d="M19.615 3.184H4.385C3.07 3.184 2 4.253 2 5.568v12.865c0 1.315 1.07 2.384 2.385 2.384h15.23c1.316 0 2.385-1.069 2.385-2.384V5.568c0-1.315-1.069-2.384-2.385-2.384zM10 15.5v-7l6 3.5-6 3.5z"
          />
        </svg>
      </div>
    </button>
  </a>
</div>

      );
    
}