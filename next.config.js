/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

/** @type {import("next").NextConfig} */
const config = {
    reactStrictMode: false,
    images:
    {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            { hostname: "tailwindui.com",
         }
        ]
    }
};

export default config;
