module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "base-color": "#1F2350",
      "secondary-color": "#7D40FF",
      "aksen-color": "#FF40B3",
    },
    extend: {
       dropShadow: {
      'baseShadow': '10px 10px 10px rgba(0, 0, 0, 0.25)',

    }},
  },
  plugins: [],
}
