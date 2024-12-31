const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        scrollbarYellow: "#fcb116", 
      },
      borderRadius: {
        "scroll-thumb": "8px", 
      },
    },
  },
  plugins: [flowbite.plugin(), require("tailwind-scrollbar")],
};
