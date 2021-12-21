module.exports = {
  stories: [
    "../packages/*/src/**/*.stories.mdx",
    "../packages/*/src/**/*.stories.@(js|jsx|ts|tsx)",
    "**/packages/**/*.stories.mdx",
    "**/packages/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
        },
      },
    },
  ],
  framework: "@storybook/react",
};
