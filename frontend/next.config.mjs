/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  dest: "public",
  additionalManifestEntries: [
    { url: '/watchOffline', revision: '1' },
    { url: '/offline', revision: '1' },
    { url: 'manifest.json', revision: '1' },
  ],

  fallbacks: {
    document: "/watchOffline",

  }
});



const nextConfig = {};


export default withPWA(nextConfig);
//  export default nextConfig
