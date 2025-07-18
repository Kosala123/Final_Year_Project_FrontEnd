/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        150: "150px",
        190: "190px",
        225: "225px",
        275: "275px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        400: "400px",
        656: "656px",
        880: "880px",
        508: "508px",
        100: "100%",
      },
      height: {
        80: "80px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1800px",
        "2xl": "2024px",
      },
      colors: {
        //headingColor:"#FF5303",
        headingColor: "#FF5303",
        textColor: "#515151",
        primary: "#f3f3f3",
        darkOverlay: "#rgba(0,0,0.2)",
        lightOverlay: "#rgba(255,255,255,0.4)",
        lighttextGray: "#9ca0ab",
        card: "#rgba(256,256,256,0.8)",
        cartbg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
      },
    },
  },
  plugins: [],
};
