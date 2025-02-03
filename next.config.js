/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow for static publishing on GitHub Pages at subdomain https://thatrobotdev.github.io/cs-2340-team-website/
  basePath: "/cs-2340-team-website",
  /*
    Enable static export to allow for HTML/CSS/JS static assets hosting on GitHub Pages
    
    See https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
  */ 
  output: "export",
  reactStrictMode: true,
}

module.exports = nextConfig
