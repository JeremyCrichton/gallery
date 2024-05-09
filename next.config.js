/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true, // We can check this in github actions and not block our build
  },
  eslint: {
    ignoreDuringBuilds: true, // We can check this in github actions and not block our build
  },
};

export default config;
