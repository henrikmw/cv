// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'mint-600': 'oklch(0.72 0.11 178)',  // Your custom color
        'lime-500': 'oklch(0.72 0.11 178)',  // Your custom color
        "timberwolf": "#dad7cdff",
        "sage": "#a3b18aff",
        "fern-green": "#588157ff",
        "hunter-green": "#3a5a40ff",
        "brunswick-green": "#344e41ff",
      },
    },
  },
  plugins: [],
};
