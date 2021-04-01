module.exports = {
  purge: {
    enabled: false,
    content: ["./public/**/*.html"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        color: "#CEC5CF",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
