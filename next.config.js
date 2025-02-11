import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  
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

  webpack(config, { isServer }) {
    // Allow importing of `.txt` files using raw-loader
    config.module.rules.push({
      test: /LICENSE$/,  // Specify the file type to match
      use: 'raw-loader',  // Use raw-loader to load the file
    });

    // Return the modified config
    return config;
  },
}

const withMDX = createMDX({
  // Add markdown plugins here if needed
})

// Merge MDX config with Next.js config and export
export default withMDX(nextConfig)