module.exports = {
  mode: 'jit',
  content: [
    "./packages/*/src/**/*.stories.(js|jsx|ts|tsx)",
    "./packages/*/src/**/*.(js|jsx|ts|tsx)",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@bbki.ng/design')],
}
