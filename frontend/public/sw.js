if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const t=e=>a(e,n),r={module:{uri:n},exports:o,require:t};s[n]=Promise.all(c.map((e=>r[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/85IFHoPcZVNoCKUK3Eg-j/_buildManifest.js",revision:"e57a59d253dabd0e0d31ccdad4b9a2b4"},{url:"/_next/static/85IFHoPcZVNoCKUK3Eg-j/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e762574-2c66662e6b0afee6.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/2719-6a84140ac999ea0d.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/2767-3d53a5cf6ea21845.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/3337-c7df571bb9ca578d.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/4877-59e3872c85b9b150.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/5314-727a1d94103c28ff.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/5468-c19436b3505ade03.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/591-f97495600f1718f9.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/6373-c17fb140f699e41d.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/7299-1fecae397aa0ead8.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/7387-2f8715901c5e0c6d.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/8051-221919f44732e08a.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/8210-17003de2a6a6c788.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/9100-62c6b1c753ab34ab.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/9c4e2130-1db5dd5ad7b3fbde.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/_not-found-8e8a43f6f5eca44b.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/auth/login/page-8f362e2fdfa90b1e.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/auth/register/page-a94b56cfee7e1baf.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/courses/%5BcourseId%5D/layout-fcb4a92c9ed33776.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/courses/%5BcourseId%5D/page-3edaee07411ca74c.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/courses/page-d60c6e4ec1c8dbf4.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/home/%5Bsearch%5D/layout-c4247c45bb810a0e.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/home/%5Bsearch%5D/page-a1d21a2f7c89244e.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/home/layout-d4c6b405d6b5c536.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/home/page-70ebdb56e63f89ab.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/instructor/%5Buserid%5D/layout-ddd745d81b5fb761.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/instructor/%5Buserid%5D/page-801ccecbb5c5eca1.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/layout-4d97dce173f50fc4.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/page-7623ded817d74f71.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/addCourse/layout-d25ca0d8a9afd850.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/addCourse/page-484ca07aecd64f27.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/admin/courses/page-aa89488e04ff4936.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/admin/mods/page-e26242cca49e5404.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/admin/students/page-07cfc4fdf013f33a.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/admin/teachers/page-db340ba8bbb8b57a.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/cart/layout-963dd045e3c2a3b9.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/cart/page-dec4c8f853d5784f.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/courses/page-ff89c87e682cf883.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/dashboard/layout-a4993dada50c8464.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/dashboard/page-d277c4fac570254d.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/inbox/page-d6555c5d93356178.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/layout-c168072d5cdad553.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/page-9d6e83dfcee59219.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/app/profile/settings/page-c866f95ac6e7c9d6.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/fd9d1056-49392ae19dc5b631.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/framework-20adfd98f723306f.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/main-9aa7bf8cadd28454.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/main-app-555dfc2074b3a7e5.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/pages/_app-794d85baa83ca682.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/pages/_error-5fb63848e0136a02.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-620b685545f45074.js",revision:"85IFHoPcZVNoCKUK3Eg-j"},{url:"/_next/static/css/3cbd70ff48da2307.css",revision:"3cbd70ff48da2307"},{url:"/_next/static/css/665ae46949b7955f.css",revision:"665ae46949b7955f"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/edulogo.svg",revision:"bc4784742c2a3f85a1d129ea8434f94b"},{url:"/images/Google.svg",revision:"e9485127ea4a577dd94e155d4795d9b7"},{url:"/images/Group1940.svg",revision:"d81b410cc9434b4ff9a40a99d2f9bfe0"},{url:"/images/Group1941.svg",revision:"795d980c703303a7900084455fc1bfc5"},{url:"/images/LOGORED.svg",revision:"fa9450063689d8f5987af305d49ac5be"},{url:"/images/LogoRED.png",revision:"cb2e0cb7eb8abfec9136b20a13a0cf07"},{url:"/images/Rectangle353.svg",revision:"74c14b213d0cb06e6c967fe4639ba8c7"},{url:"/images/Udemy.svg",revision:"18e4c78436c4c8083691ddd44dcde5bd"},{url:"/images/business-presentation.svg",revision:"f30565cde5656f329246c62e4d4ff03b"},{url:"/images/coursera.svg",revision:"d5168a87864194a76a386e4d47a01355"},{url:"/images/defaultCourse.svg",revision:"4471395c10fb1d78b35cf4f12b8ef2a2"},{url:"/images/frame67.svg",revision:"80d3a6ca2ecef3d324b0599c82357517"},{url:"/images/frame68.svg",revision:"b91640641ee757921506087262cf464d"},{url:"/images/frame69.svg",revision:"d3415d6e9c42af4aa127a2822f098f8a"},{url:"/images/frame70.svg",revision:"fa22fb3560e0f1e6a68cb7cf5bcb74fd"},{url:"/images/inter_des_found.svg",revision:"dd6ff1bdaef8b455ec5616fadb4da29a"},{url:"/images/landing.svg",revision:"467ad1a9cb6c145f409245d9fd7828b2"},{url:"/images/login.png",revision:"6e771de12cb9cf354cd546b53ac51812"},{url:"/images/logo128x128.png",revision:"93f3d08540592e715b8c7babe01c3270"},{url:"/images/logo144x144.png",revision:"b7d0af273c9c3e5a5b8aca67da51028f"},{url:"/images/logo152x152.png",revision:"9a3075446eddaf4b0406e7c791d743d3"},{url:"/images/logo192x192.png",revision:"fa6e636a4066d0bf37e800532ea623ea"},{url:"/images/logo384x384.png",revision:"785091913e42aacf96d3bb4928f86cf6"},{url:"/images/logo72x72.png",revision:"309c2d48570c747ecb409b4557149e58"},{url:"/images/logoEdu.png",revision:"3e7df8de85493e1e57eacecf4758eb30"},{url:"/images/partners.svg",revision:"fa9450063689d8f5987af305d49ac5be"},{url:"/images/persons.svg",revision:"86ef7904b12ede729a69618a6a88ff95"},{url:"/images/search-panel.png",revision:"e0648833f913635b9fdbf6d61afb6635"},{url:"/images/search-panel.svg",revision:"91af49fc798517a3724b163c39bf9b94"},{url:"/images/skillshare.svg",revision:"b72211e8c631bf2770489d4fd22d648f"},{url:"/images/student-studying.svg",revision:"c6ebfabb5e389dbdd2fdc0a51f0efd5a"},{url:"/images/studentRegister.svg",revision:"c1ace28b5ffaf92775176c55b3345fdf"},{url:"/manifest.json",revision:"649232545504baf9f58992462e7094df"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET"),self.__WB_DISABLE_DEV_LOGS=!0}));
