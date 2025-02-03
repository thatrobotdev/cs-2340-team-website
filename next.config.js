/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow for static publishing on GitHub Pages at subdomain https://thatrobotdev.github.io/cs-2340-team-website/
  basePath: "/cs-2340-team-website",
  /**
   * Enable static export to allow for HTML/CSS/JS static assets hosting on GitHub Pages
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: "export",
  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   * @see https://nextjs.org/docs/app/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig
