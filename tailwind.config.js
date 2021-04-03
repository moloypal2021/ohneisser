module.exports = {
  purge: {
    enabled: true,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color: "#CEC5CF",
      },
      zIndex: {
        "-1000": "-1000",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
