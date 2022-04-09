module.exports = {
  mode: "jit",
  safelist: ["md:basis-1/2", "md:basis-full", "md:ml-64", "md:mr-64"],
  purge: [],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require("@bbki.ng/design"), require("@tailwindcss/typography")],
};
