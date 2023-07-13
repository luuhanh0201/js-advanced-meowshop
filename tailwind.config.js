/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      sticky: {
        top: "top",
        right: "right",
        bottom: "bottom",
        left: "left",
      },
      boxShadow: {
        "my-shadow": "0px 4px 4px 0px rgba(0, 0, 0, 0.25);",
        "shadow-btn": "0px 0px 5px 0px rgba(0, 0, 0, 0.20);",
        "shadow-slide-product":
          "0px 0px 4.16806697845459px 0px rgba(0, 0, 0, 0.10);",
        "like-product": "0px 0px 2.084033489227295px rgba(0, 0, 0, 0.50);",
      },
      // dropShadow: {
      //   "like-product": "0px 0px 2.084033489227295px rgba(0, 0, 0, 0.50);",
      // },
      gap: {
        18: "18px",
      },
      spacing: {
        "minus-24px": " -24px",

        "calc-50%-width-minus-24": "calc(50% - 24px)",
        "calc-50%-width-minus-16": "calc(50% - 16px)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        detail: "#00575C",
        black: "#000",
        white: "#fff",
        detail2: "#7a7a7a",
        "bg-product-detail": "#f7f7f7",
        "color-star": "#FFB800",
        "color-border": "#EAEAEA",
        "date-evaluate": "#959595",
        "#ccc": "#ccc",
        Price: "#00575C",
        "Secondary-yl": "#FFB800",
        "accessory-opacity": "#00575C20",
        "detail-opacity": "#00575C08",
        "btn-search": "#D9D9D9",
        "colors-rated-product": "#838383",
        "colors-btn-slide": "rgba(0, 87, 92, 0.50);",
      },
      padding: {
        content: "100px",
        mini_padding: "6px",
      },
      height: {
        "10px": "10px",
        102: "102px",
        33: "33px",
        57: "57px",
        15: "15px",
        "51px": "51px",
        "357px": "357px",
      },
      width: {
        "10px": "10px",
        15: "15px",
        375: "375px",
        "40%": "40%",
        "10%": "10%",
        33: "33px",
        57: "57px",
        "51px": "51px",
      },
      maxWidth: {
        "4/5": "80%",
        "width-nav-tablet": "200px",
      },
      maxHeight: {
        "414px": "414px",
      },

      fontSize: {
        1.5: "15px",
        6: "6px",
        10: "10px",
      },
      margin: {
        "2px": "2px",
      },
      borderRadius: {
        custom: "5%",
      },
    },
  },
  plugins: [],
};
