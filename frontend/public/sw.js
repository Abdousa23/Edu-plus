if(!self.define){let e,a={};const s=(s,i)=>(s=new URL(s+".js",i).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(a[c])return;let r={};const f=e=>s(e,c),t={module:{uri:c},exports:r,require:f};a[c]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(n(...e),r)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts("/fallback-ce627215c0e4a9af.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/0e762574-4973baa7d19f4e27.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/2519-13bd2d4b655c8ad0.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/30a37ab2-e69471a250a25b44.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/3124-7e9bb2598ea0b013.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/317-846a3525d0960f16.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/3290-d521f4ad08bd1ced.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/385-a6e4410da28bbbe5.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/3926-69ea92f6ae697a96.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/3d47b92a-3cc562ddf620eb72.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/5093-59eb77c349e2afb8.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/53c13509-e0b58395bf43feed.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/5507-269c3f3d37cb5233.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/5654-eebbeb7bb2af33ee.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/5924-6a44a87b0e70562d.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/59650de3-90d0d0210faaa376.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/6223-566bfb9757983985.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/6373-f219efe1dc41916b.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/7299-cb5c620b719e1397.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/8051-a9ca6f7d1a99b630.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/8228-491740059c0a00bf.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/8382-ee9a99e7460dd97b.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/8620-b5bd25fcb6f56c24.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/8e1d74a4-9f1c1804295eaaea.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/9101-ff03bd9e3bcf6d02.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/9717-a2a9167308811007.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/9c4e2130-1440b33651b59279.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/_not-found-f726ee4a98c34538.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/auth/login/page-7affbf12c801aff6.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/auth/register/page-13cc98c383afee07.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/contact/page-5ecc13db30d92842.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/courses/%5BcourseId%5D/layout-9266e8f2bf9908ae.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/courses/%5BcourseId%5D/page-964754bd379a4b3f.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/courses/page-4b7741eae63ab3fd.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/home/%5Bsearch%5D/layout-14d780b4885dbd9e.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/home/%5Bsearch%5D/page-ba620b782887ac3d.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/home/contact/page-925b2f9fb70cbe44.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/home/layout-098daf6cc151feaa.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/home/page-6b94473cde54959e.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/instructor/%5Buserid%5D/layout-9fc219182c33bdf4.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/instructor/%5Buserid%5D/page-d0b30e9dcc1c7590.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/layout-ff78d3bb9dd6acaf.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/loading-68a615557563c80d.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/offline/page-7df6fe1c6f4178b9.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/page-1d583c1bc02025df.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/MyCourses/page-d11a1ab817298898.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/addCourse/layout-47da8208a3ca0146.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/addCourse/page-0273e26f628f522f.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/admin/courses/page-11d52e2a63723db5.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/admin/mods/page-7ce3898729b0f908.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/admin/students/layout-8ff4628adc016b5b.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/admin/students/page-4eea32aab218d8a6.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/admin/teachers/page-f4c0add3fcd4f960.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/cart/layout-179091cb4e3f60bd.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/cart/page-461249800a0956b0.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/dashboard/layout-2a5fca57313ba5d0.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/dashboard/page-09fcc34d0c94d7bc.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/inbox/eduai/page-406a4e9d0ba8581c.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/inbox/layout-5aacf29794de053d.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/inbox/page-917b3dbb9d9a0de4.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/layout-cff38aeb297991f7.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/page-5807112489405f81.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/publishedCourses/page-3d2422386d4caff1.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/profile/settings/page-63921ce9f3f0e0e3.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/success/%5BcourseId%5D/page-9ab22e5ceebaedab.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/watchCourse/%5BcourseId%5D/layout-fc68f020d95dca87.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/watchCourse/%5BcourseId%5D/page-649203722bbdb261.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/watchOffline/layout-03519604ef6933cd.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/app/watchOffline/page-9ba09d27196b4c4e.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/ca377847-d894fec60824e4dd.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/f7333993-f935c84a7bfef372.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/f97e080b-af07597e695fe74b.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/fd9d1056-0c818fab5efface1.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/framework-08aa667e5202eed8.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/main-aea62392f47e3dad.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/main-app-376040948b87f186.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/pages/_app-57bdff7978360b1c.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/pages/_error-29037c284dd0eec6.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-410c8ff6414bf44c.js",revision:"faTmMnBRzIYk-4b4Y3yNQ"},{url:"/_next/static/css/3cbd70ff48da2307.css",revision:"3cbd70ff48da2307"},{url:"/_next/static/css/3ede976f86fb341d.css",revision:"3ede976f86fb341d"},{url:"/_next/static/css/65c1ffaedae65ac9.css",revision:"65c1ffaedae65ac9"},{url:"/_next/static/faTmMnBRzIYk-4b4Y3yNQ/_buildManifest.js",revision:"2b54d7db375d2b4c0e6af318090bebea"},{url:"/_next/static/faTmMnBRzIYk-4b4Y3yNQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/364872427001d875-s.woff2",revision:"01793a8b711e1b55b6d5f14934c5c329"},{url:"/_next/static/media/3c7e3819bb91cc28-s.woff2",revision:"d5e5edac5cb1a13d29677b7ae3e81360"},{url:"/_next/static/media/513469f860ba7b51-s.p.woff2",revision:"97fd74922a1c6e9a3e5bb38ca64b8d9c"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/d6bd377dc5ee9c11-s.woff2",revision:"77b04e9f6ecf027f6d23f7803be0792b"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/edulogo.svg",revision:"bc4784742c2a3f85a1d129ea8434f94b"},{url:"/fallback-ce627215c0e4a9af.js",revision:"969358740713555377bd519b41582bd1"},{url:"/images/Frame 1000007258.png",revision:"538045d9c940cafcb227c2319ff2fa5a"},{url:"/images/Google.svg",revision:"e9485127ea4a577dd94e155d4795d9b7"},{url:"/images/Group.png",revision:"015155cc24673dd4b1734a5fb18b5aa2"},{url:"/images/Group1940.svg",revision:"d81b410cc9434b4ff9a40a99d2f9bfe0"},{url:"/images/Group1941.svg",revision:"795d980c703303a7900084455fc1bfc5"},{url:"/images/LOGORED.svg",revision:"fa9450063689d8f5987af305d49ac5be"},{url:"/images/LogoRED.png",revision:"cb2e0cb7eb8abfec9136b20a13a0cf07"},{url:"/images/Rectangle353.svg",revision:"74c14b213d0cb06e6c967fe4639ba8c7"},{url:"/images/Udemy.svg",revision:"18e4c78436c4c8083691ddd44dcde5bd"},{url:"/images/Vector 52.png",revision:"57fbd30f62eccbf894eb32b1ee4f7885"},{url:"/images/analyze-data.png",revision:"c6190634a372fdd8dad71deaec1ee5ed"},{url:"/images/business-presentation.svg",revision:"f30565cde5656f329246c62e4d4ff03b"},{url:"/images/coursera.svg",revision:"d5168a87864194a76a386e4d47a01355"},{url:"/images/defaultCourse.svg",revision:"4471395c10fb1d78b35cf4f12b8ef2a2"},{url:"/images/frame67.svg",revision:"80d3a6ca2ecef3d324b0599c82357517"},{url:"/images/frame68.svg",revision:"b91640641ee757921506087262cf464d"},{url:"/images/frame69.svg",revision:"d3415d6e9c42af4aa127a2822f098f8a"},{url:"/images/frame70.svg",revision:"fa22fb3560e0f1e6a68cb7cf5bcb74fd"},{url:"/images/icon-128x128.png",revision:"846eb9efd55bbb4d770072a7048b7855"},{url:"/images/icon-144x144.png",revision:"8830d5a5aa2b7305770071f24e0ab4cc"},{url:"/images/icon-152x152.png",revision:"8cf539d61d2e963342297268f5d4f2d6"},{url:"/images/icon-192x192.png",revision:"2d66cb649b1d5984fac30d2e844da231"},{url:"/images/icon-384x384.png",revision:"0b474229723c95af2a65a04802c7f4fe"},{url:"/images/icon-72x72.png",revision:"e805792f5d7934cc89d5cb540b13fa27"},{url:"/images/inter_des_found.svg",revision:"dd6ff1bdaef8b455ec5616fadb4da29a"},{url:"/images/landing.svg",revision:"213f6ae5b77a7d42a85473d664efbd4d"},{url:"/images/login.png",revision:"6e771de12cb9cf354cd546b53ac51812"},{url:"/images/logo128x128.png",revision:"93f3d08540592e715b8c7babe01c3270"},{url:"/images/logo144x144.png",revision:"b7d0af273c9c3e5a5b8aca67da51028f"},{url:"/images/logo152x152.png",revision:"9a3075446eddaf4b0406e7c791d743d3"},{url:"/images/logo192x192.png",revision:"fa6e636a4066d0bf37e800532ea623ea"},{url:"/images/logo384x384.png",revision:"785091913e42aacf96d3bb4928f86cf6"},{url:"/images/logo72x72.png",revision:"309c2d48570c747ecb409b4557149e58"},{url:"/images/logoEdu.png",revision:"3e7df8de85493e1e57eacecf4758eb30"},{url:"/images/partners.svg",revision:"fa9450063689d8f5987af305d49ac5be"},{url:"/images/path100.svg",revision:"1b5c0ee0bad0f7cc5071bd10acb4aed7"},{url:"/images/path112.svg",revision:"75650d9eb2fef68784fea6d454c95cb1"},{url:"/images/path114.svg",revision:"e64fb7888dcf05175c1425c8c445b8f2"},{url:"/images/path116.svg",revision:"1fdee400ab50201efd21873de8ea0077"},{url:"/images/path118.svg",revision:"6ef9a4cacc7029d24fabfc4232d6264e"},{url:"/images/path12.svg",revision:"fc1c8258251ddfdc9cd0c15692bf0166"},{url:"/images/path120.svg",revision:"f6032b1e688fcb418135ca887b94d16f"},{url:"/images/path122.svg",revision:"a9228c6ae3fd1680fb32434ea8b4a3f8"},{url:"/images/path124.svg",revision:"e61d84a04ae69644bc7a3fecf4e75540"},{url:"/images/path126.svg",revision:"df77e1037493849ccf1635441bbe1725"},{url:"/images/path128.svg",revision:"3b75ea7a7c68a782cee592550dd8f7be"},{url:"/images/path130.svg",revision:"e03cc67311f65ce55f37562f5bf9084f"},{url:"/images/path132.svg",revision:"2751a81db1835b7489828046d70ff930"},{url:"/images/path134.svg",revision:"3ac912810353216585c4395aa67169f9"},{url:"/images/path136.svg",revision:"b5e5299cd81dabbfecbf8485ba7675fc"},{url:"/images/path138.svg",revision:"7c0062929c41983a2cc7a2adafe54325"},{url:"/images/path146.svg",revision:"b3a1f529add2a75964b4da3d92f352a2"},{url:"/images/path148.svg",revision:"9f7d36f678c0bd66656066cc240a6c7d"},{url:"/images/path150.svg",revision:"2ff406391c9f4a990597dc9c12e5135d"},{url:"/images/path174.svg",revision:"daec22267a9397bdc5d29a341296d64a"},{url:"/images/path176.svg",revision:"efd5dca5d633185721ba8e2c9b685563"},{url:"/images/path178.svg",revision:"0a3d920d11303e0cce454815db85798c"},{url:"/images/path180.svg",revision:"2f331b7e02fc46105b83abfa75b0ebb7"},{url:"/images/path182.svg",revision:"e9377b434cd62698034c714abc8f4d7e"},{url:"/images/path184.svg",revision:"6723cdac9f6b561bae6b81285618be50"},{url:"/images/path186.svg",revision:"b68caf7fdb098068de00260607f74d9b"},{url:"/images/path188.svg",revision:"abdcdd6b1ad261c84f50a64d4a9c64d1"},{url:"/images/path190.svg",revision:"d36cbac93f2407d92a012d36d0b580c2"},{url:"/images/path192.svg",revision:"de1585842d9e571f58a6fab6eace7a49"},{url:"/images/path194.svg",revision:"53147da554e06094f428edc670f54a48"},{url:"/images/path196.svg",revision:"a43a5786f21ae85dc24b4a0ae0564fec"},{url:"/images/path198.svg",revision:"f1d7a0d7422472daa3443a9bbef75a20"},{url:"/images/path200.svg",revision:"1b1b1d912253f5862f52646544d16e2c"},{url:"/images/path202.svg",revision:"ff321ecdaead35c4f5383629c563f2e6"},{url:"/images/path204.svg",revision:"6d0821c87b3685ffe81ecce4a73f8c95"},{url:"/images/path226.svg",revision:"5cbd0c50ddb3078d369bb97949376e0b"},{url:"/images/path228.svg",revision:"5e7716375042b8032febe9cdb8868cd2"},{url:"/images/path230.svg",revision:"8731d36374af9df1b82a12dead79f2dc"},{url:"/images/path232.svg",revision:"21db82a4d0068e7a5efbf627ab0567d6"},{url:"/images/path234.svg",revision:"fd995402b8f6e82a7daa63e794f1af74"},{url:"/images/path236.svg",revision:"cc7d66383e6a218fa75fd3d958646f8d"},{url:"/images/path238.svg",revision:"fe4173e3b601feac4d373ebb894627bf"},{url:"/images/path240.svg",revision:"522ea44332a2d12bd5554d0ad81e35a8"},{url:"/images/path242.svg",revision:"c7908e3eb6a4aec149bc5648a05bdf83"},{url:"/images/path244.svg",revision:"359c08a5df5adb7a8bdcc2c9e7af6200"},{url:"/images/path246.svg",revision:"a23236f8de788358da0a483e492b9330"},{url:"/images/path248.svg",revision:"c4826290840631070173b11bcdff66b0"},{url:"/images/path250.svg",revision:"530b7062f38140f7449a8d1922b7156f"},{url:"/images/path252.svg",revision:"1818ad6a1089dd850c114e201611e187"},{url:"/images/path254.svg",revision:"5b538d5216e162c7c75eb6c3d9d31fd8"},{url:"/images/path256.svg",revision:"46d52bbf7eae02f6ac269b1a02060e31"},{url:"/images/path258.svg",revision:"373fd99ad8a6838cb2debc95692e8662"},{url:"/images/path260.svg",revision:"3c4ce68ada4d7ab0a79afa4e33f91da2"},{url:"/images/path262.svg",revision:"4887805dbf0df656d91e952524088e75"},{url:"/images/path264.svg",revision:"b30148a6f17a5bc33943f14b1fa56583"},{url:"/images/path266.svg",revision:"112b62db1737bd74a82975a788c2b322"},{url:"/images/path268.svg",revision:"ad473a8a607506d353b6d2692ba87903"},{url:"/images/path270.svg",revision:"01c299fd18e30483e28c38d76ca35354"},{url:"/images/path272.svg",revision:"f34955edfa53e22a1470d2709fe3ea33"},{url:"/images/path274.svg",revision:"b71287c9e5ed66546c5d5b5672b48235"},{url:"/images/path276.svg",revision:"133ab5bd9977c8faeacbcba5e27f4bd6"},{url:"/images/path278.svg",revision:"99aa36e94a52a15f6c1cdfa6a65dfdab"},{url:"/images/path322.svg",revision:"0eedc932c21d34a8d53d76c51f2a047f"},{url:"/images/path324.svg",revision:"210cfecb1070640c8d94497660c8390a"},{url:"/images/path326.svg",revision:"d5319bfe36766be3a116d1fe31dd6e8d"},{url:"/images/path328.svg",revision:"7da13c9332c7d9b51d367e3c6bfabe3a"},{url:"/images/path330.svg",revision:"4c955a17039876471960726e4bf25a3c"},{url:"/images/path332.svg",revision:"4bc3a530bd6607dd010dd70711e3209c"},{url:"/images/path334.svg",revision:"f1bf2d2c167b23fffc24ddaf549cc687"},{url:"/images/path336.svg",revision:"f5aa4de407603abb6a66c1993f362700"},{url:"/images/path338.svg",revision:"758415cc8208463d6276dea23d229e0a"},{url:"/images/path92.svg",revision:"fcf70d7638d4b96dce0b1d88f91bd936"},{url:"/images/path94.svg",revision:"b82ac21af5a043765ea9fe659406202d"},{url:"/images/path96.svg",revision:"0a0d9e0a5fd5c82c42e9976f201467e3"},{url:"/images/path98.svg",revision:"a9f835de2877fe01c219634f8ea4346a"},{url:"/images/persons.svg",revision:"86ef7904b12ede729a69618a6a88ff95"},{url:"/images/search-panel.png",revision:"e0648833f913635b9fdbf6d61afb6635"},{url:"/images/search-panel.svg",revision:"91af49fc798517a3724b163c39bf9b94"},{url:"/images/skillshare.svg",revision:"b72211e8c631bf2770489d4fd22d648f"},{url:"/images/student-studying.svg",revision:"c6ebfabb5e389dbdd2fdc0a51f0efd5a"},{url:"/images/studentRegister.svg",revision:"c1ace28b5ffaf92775176c55b3345fdf"},{url:"/manifest.json",revision:"3c3733d90e1b338384ac0ea614ff5af4"},{url:"/swe-worker-5c72df51bb1f6ee0.js",revision:"5a47d90db13bb1309b25bdf7b363570e"},{url:"/watchOffline",revision:"faTmMnBRzIYk-4b4Y3yNQ"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e},{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>"undefined"!=typeof self?self.fallback(e):Response.error()}]}),"GET")}));
