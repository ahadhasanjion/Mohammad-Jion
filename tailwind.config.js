/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  // daisyui: {
  //   themes: [
  //     {
  //       port: {
  //         primary: "#C084FC",
  //         secondary: "#9CA3AF",
  //         info: "#C084FC",
  //       },
  //     },
  //     {
  //       dark: {
  //         primary: "#C084FC",
  //         secondary: "#9CA3AF",
  //         info: "#C084FC",
  //       },
  //     }
  //   ]

  // },
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")],
}
