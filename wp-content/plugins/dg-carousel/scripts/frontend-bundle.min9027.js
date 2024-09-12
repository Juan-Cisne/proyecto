!function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o(o.s=13)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={extend:function(e,t){var o,a={};for(o in e)Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);for(o in t)Object.prototype.hasOwnProperty.call(t,o)&&(a[o]=t[o]);return a},df_fix_builder_css_issue:function(e,t){var o=t.querySelectorAll(".et-fb-custom-css-output");0!==o.length&&o.forEach(function(e){var t=e.innerHTML.replace(/.et-db/g,"");t=(t=t.replace(/#et-boc/g,"")).replace(/.et-l/g,""),e.innerHTML=t})},process_icon_font_style:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.extend({props:{},key:"",additionalCss:"",selector:""},e),o=t.props,a=t.key,n=t.additionalCss,c=t.selector;if(o[a]){var r=window.ET_Builder.API.Utils;if(r.processIconFontData){var i=r.processIconFontData(o[a]);i&&("ETmodules"!==i.iconFontFamily&&n.push([{selector:c,declaration:"font-family: ".concat(i.iconFontFamily," !important;")}]),n.push([{selector:c,declaration:"font-weight: ".concat(i.iconFontWeight," !important;")}]))}}},apply_element_color:function(e,t,o,a,n,c,r){var i=e[t],l=e[t+"__hover"],s=!0===r?"!important":"";""!==i&&o.push([{selector:n,declaration:"".concat(a,": ").concat(i+s,";")}]),e[t+"__hover_enabled"]&&e.hover_enabled&&1==e.hover_enabled&&e[t+"__hover"]&&o.push([{selector:n,declaration:"".concat(a,": ").concat(l+s,";")}])},adding_margin_padding:function(e,t,o,a,n,c){var r=e[t],i=e[t+"_tablet"],l=e[t+"_phone"];if(r&&""!==r){var s=r.split("|");o.push([{selector:a,declaration:"".concat(c,"-top: ").concat(s[0],"!important;\n                ").concat(c,"-right: ").concat(s[1],"!important;\n                ").concat(c,"-bottom: ").concat(s[2],"!important;\n                ").concat(c,"-left: ").concat(s[3],"!important;")}])}if(i&&""!==i){var p=i.split("|");o.push([{selector:a,declaration:"".concat(c,"-top: ").concat(p[0],"!important;\n                ").concat(c,"-right: ").concat(p[1],"!important;\n                ").concat(c,"-bottom: ").concat(p[2],"!important;\n                ").concat(c,"-left: ").concat(p[3],"!important;"),device:"tablet"}])}if(l&&""!==l){var d=l.split("|");o.push([{selector:a,declaration:"".concat(c,"-top: ").concat(d[0],"!important;\n                ").concat(c,"-right: ").concat(d[1],"!important;\n                ").concat(c,"-bottom: ").concat(d[2],"!important;\n                ").concat(c,"-left: ").concat(d[3],"!important;"),device:"phone"}])}if(e[t+"__hover_enabled"]&&e.hover_enabled&&1==e.hover_enabled&&e[t+"__hover"]){var u=e[t+"__hover"].split("|");o.push([{selector:a,declaration:"".concat(c,"-top: ").concat(u[0],"!important;\n                        ").concat(c,"-right: ").concat(u[1],"!important;\n                        ").concat(c,"-bottom: ").concat(u[2],"!important;\n                        ").concat(c,"-left: ").concat(u[3],"!important;")}])}},apply_single_value:function(e,t,o,a,n){var c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"%",r=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"",i=arguments.length>7&&void 0!==arguments[7]&&arguments[7],l=!(arguments.length>8&&void 0!==arguments[8])||arguments[8],s=!e[t]&&r?r:parseInt(e[t]),p=!1===i?s:100-s,d=!1===i?parseInt(e[t+"_tablet"]):100-parseInt(e[t+"_tablet"]),u=!1===i?parseInt(e[t+"_phone"]):100-parseInt(e[t+"_phone"]),h=!1===l?"-":"";d=h+d+c,u=h+u+c,(p=h+p+c)&&""!==p&&o.push([{selector:a,declaration:"".concat(n,": ").concat(p,";")}]),d&&""!==d&&o.push([{selector:a,declaration:"".concat(n,": ").concat(d,";"),device:"tablet"}]),u&&""!==u&&o.push([{selector:a,declaration:"".concat(n,": ").concat(u,";"),device:"phone"}])},control_width_and_spacing:function(e,t,o,a,n){var c=e[t],r=e[t+"_tablet"],i=e[t+"_phone"];c&&""!==c&&o.push([{selector:a,declaration:"".concat(n,": ").concat(c,"!important;")}]),r&&""!==r&&o.push([{selector:a,declaration:"".concat(n,": ").concat(r,"!important;"),device:"tablet"}]),i&&""!==i&&o.push([{selector:a,declaration:"".concat(n,": ").concat(i,"!important;"),device:"phone"}])},render_title:function(e){var t=e.title;return e.url&&(t='<a href="'.concat(e.url,'" target="').concat(e.url_new_window,'">').concat(t,"</a>")),{__html:t}},render_subtitle:function(e){return{__html:e.sub_title}},process_single_value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.extend({props:{},key:"",additionalCss:"",selector:"",type:"",unit:"%",default_value:"",decrease:!1,addition:!0,no_unit:!1,unit_type:!0},e),o=t.props,a=t.key,n=t.additionalCss,c=t.selector,r=t.type,i=t.unit,l=t.default_value,s=t.decrease,p=t.addition,d=t.unit_type,u=""!==o[a].replace(parseInt(o[a]),"")?o[a].replace(parseInt(o[a]),""):i,h=o[a+"_tablet"]?o[a+"_tablet"].replace(parseInt(o[a+"_tablet"]),""):u,_=o[a+"_phone"]?o[a+"_phone"].replace(parseInt(o[a+"_phone"]),""):h,v=!o[a]&&l?l:parseInt(o[a]),f=!1===s?v:100-v,m=!1===s?parseInt(o[a+"_tablet"]):100-parseInt(o[a+"_tablet"]),b=!1===s?parseInt(o[a+"_phone"]):100-parseInt(o[a+"_phone"]),g=!1===p?"-":"";if(f=g+f,m=g+m,b=g+b,!0===d&&(f+=u,m+=h,b+=_),f&&""!==f&&n.push([{selector:c,declaration:"".concat(r,": ").concat(f,";")}]),m&&""!==m&&n.push([{selector:c,declaration:"".concat(r,": ").concat(m,";"),device:"tablet"}]),b&&""!==b&&n.push([{selector:c,declaration:"".concat(r,": ").concat(b,";"),device:"phone"}]),o[a+"__hover_enabled"]&&o.hover_enabled&&1==o.hover_enabled&&o[a+"__hover"]){var y=o[a+"__hover"];n.push([{selector:c,declaration:"".concat(r,": ").concat(y,"!important;")}])}}};t.default=a},function(e,t){},function(e,t){},,,,,,,,,,,function(e,t,o){o(14),o(1),o(2),o(0),e.exports=o(15)},function(e,t){},function(e,t){jQuery(function(e){e(".dica_divi_carousel").each(function(t,o){var a=o.querySelector(".swiper-container"),n=o.querySelector(".dica-container"),c=JSON.parse(n.dataset.props),r=Number(c.speed),i=Number(c.desktop),l=Number(c.tablet),s=Number(c.mobile),p=c.arrow,d=c.dots,u=c.autoplay,h=Number(c.autoSpeed),_=c.loop,v=Number(c.item_spacing.replace(/[^0-9.]/g,"")),f=c.center_mode,m=c.slider_effec,b=c.pause_onhover,g=c.multislide,y=c.cfshadow,w=c.order,I="on"==c.lazyload&&{loadedClass:"swiper-lazy-loaded"},N=c.scroller_effect,x=Number(c.scroller_speed),P=c.autowidth,S=Number(c.item_spacing_tablet.replace(/[^0-9.]/g,"")),k=Number(c.item_spacing_phone.replace(/[^0-9.]/g,""));h="on"!==N?h:1,"on"==c.lazybefore?I.loadOnTransitionStart=!0:I.loadOnTransitionStart=!1;var C="on"==p&&{nextEl:".dica-next-btn-"+w,prevEl:".dica-prev-btn-"+w},O="on"==d&&{el:".dica-paination-"+w,clickable:!0},T=Number(parseInt(c.cover_rotate));T=isNaN(T)?0:T;var E=new Swiper(a,{slidesPerView:"on"!==P?i:"auto",slidesPerGroup:"on"==g&&"on"!==P&&"on"!==N?Number(i):1,navigation:C,pagination:O,spaceBetween:v,speed:"on"!==N?r:x,autoplay:"on"==u&&{delay:h,disableOnInteraction:!1},slideClass:"dica_divi_carouselitem",loop:"on"==_,centeredSlides:"on"==f,effect:"1"==m?"slide":m,coverflowEffect:{rotate:T,stretch:0,depth:100,modifier:1,slideShadows:"off"!==y},observer:!0,observeParents:!0,observeSlideChildren:!0,preloadImages:"on"!=c.lazyload,watchSlidesVisibility:!0,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,touchMoveStopPropagation:!0,threshold:15,lazy:I,hashNavigation:"on"===c.hashNavigation&&{watchState:!0},breakpoints:{981:{slidesPerView:"on"!==P?i:"auto",slidesPerGroup:"on"==g&&"on"!==P&&"on"!==N?Number(i):1,spaceBetween:v},768:{slidesPerView:"on"!==P?l:"auto",slidesPerGroup:"on"==g&&"on"!==P&&"on"!==N?Number(l):1,spaceBetween:S},1:{slidesPerView:"on"!==P?s:"auto",slidesPerGroup:"on"==g&&"on"!==P&&"on"!==N?Number(s):1,spaceBetween:k}},simulateTouch:"on"!==c.simulatetouch,allowTouchMove:"on"!==c.allowtouchmove});if("on"===c.hashNavigation&&E.slides.each(function(e,t){var o=t.querySelector(".dica-item").dataset.hash;t.dataset.hash=o}),"on"==N&&"on"==u){E.freeMode=!0,E.autoplay.stop(),setTimeout(function(){E.autoplay.start()},1e3)}"on"!==N&&E.on("observerUpdate",function(e){"on"==u&&(E.autoplay.paused=!1,E.translate=0),E.update()}),"on"==b&&"on"==u&&(a.addEventListener("mouseover",function(){E.autoplay.stop()}),a.addEventListener("mouseout",function(){E.autoplay.start()})),"on"==c.lazyload&&E.on("lazyImageReady",function(e,t){e.querySelector(".dica-item").classList.remove("loading")}),e(this).find(".dica_divi_carouselitem .et_pb_module_inner").on("click",function(t){var o=e(this).find(".dica-item")[0].dataset.link;if(o)if(-1!=o.indexOf("#"))et_pb_smooth_scroll();else{t.stopPropagation();var a=e(this).find(".dica-item")[0].dataset.target;void 0!==o&&("_blank"===a?window.open(o):window.location=o)}})});e("body").append('<div class="dg-carousel-lightbox"><div class="lightbox-header"><button class="close-btn">&#9587;</button></div><div class="image-wrapper"><span><img src="" /></span></div></div>');e(".dica-image-container a[data-lightbox]").each(function(t,o){var a=e(this),n=a.attr("href"),c=e(".dg-carousel-lightbox");a.click(function(t){t.preventDefault(),e(".dg-carousel-lightbox").addClass("open"),c.find("img").attr("src",n)})}),e(".dg-carousel-lightbox .close-btn").click(function(){e(this).parent().parent().removeClass("open")}),e(".dg-carousel-lightbox .image-wrapper").click(function(t){"IMG"!==t.target.tagName&&e(this).parent().removeClass("open")})})}]);