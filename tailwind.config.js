/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "aboutUs.html",
    "services.html",
    "servicesDetails.html",
    "serviceBooking.html",
    "doctorsDetails.html",
    "contact.html",
    "careers.html",
    "jobDitails.html",
    "onlineApply.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: "Lato",
      },
      backgroundImage: {
        hero: "url('/img/hero.jpg')",
        slider_back: "url('/img/slider_back.jpg')",
        footer_back: "url('/img/footer-back.jpg')",
        corner_back: "url('/img/corner_back.png')",
        about_hero: "url('/img/about_hero.jpg')",
        medicale_back: "url('/img/medicale_back.png')",
        social_back: "url('/img/social_back.png')",
      },
      colors: {
        highRed: "#E22845",
        lightRed: "#E65168",
        ashRade: "#F4E1E4",
        highBlue: "#021D3A",
        lightBlue: "#33485F",
        darkBlack: "#101825",
        ash: "#DDE0E3",
        lightAsh: "#637385",
        ash_dark: "#949FAA",
      },
      spacing: {
        200: "12.5rem",
        70: "4.357rem",
        "-48px": "-30px",
        300: "300px",
        m130: "-130px",
        500: "500px",
      },
      boxShadow: {},
    },
  },
  plugins: [],
};
