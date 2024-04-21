/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontendNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinifiy:true,
  disable:false,
  workboxOptions:{
    disableDevLogs:true,
  }


});


const nextConfig = {};


export default withPWA(nextConfig);
