module.exports = {
  sassOptions: {
    includePaths: ["./src"],
    prependData: `@import "./styles/variables.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
