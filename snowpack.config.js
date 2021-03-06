// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/scripts",
    static: "/"
  },
  plugins: [
    "@snowpack/plugin-typescript",
    "@snowpack/plugin-postcss",
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },

  optimize: {
    bundle: true,
    minify: true
  }
};
