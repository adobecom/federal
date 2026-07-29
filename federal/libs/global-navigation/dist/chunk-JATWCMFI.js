var J="feds-milo",y=(e,t="default",n="e")=>{let{locale:r}=M(),o=P("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:J,sampleRate:1,tags:t,errorType:n})};var g=class e extends Error{constructor(t){super(t),Object.setPrototypeOf(this,e.prototype)}},L=class e extends Error{constructor(t,n="Minor"){super(t),Object.setPrototypeOf(this,e.prototype),n==="Critical"&&y(t)}};var Ee=async e=>{let{placeholders:t}=e,{locale:n}=M(),o=`${T()}${n.prefix}/federal/globalnav/placeholders.json`,[i,s]=await Promise.all([t,X(o)]);return new Map([...s,...i])},X=async e=>{try{let t=await fetch(e);if(!t.ok)throw new L(`Federal placeholders not found at ${e}`);let n=Y(await t.json());if(n instanceof L)throw n;return new Map(n.data.map(({key:r,value:o})=>[r,o]))}catch(t){if(t instanceof L)console.error(t.message);else{let n=new L(t.message);console.error(n.message)}return y(`Failed to fetch placeholders from ${e}`),new Map([])}},Y=e=>{try{let{data:t}=e;if(!t.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(t){return new L(t.message)}};function R(e,t){let n=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return n.test(e)?e.replace(n,(o,i,s)=>{let l=i??s??"";return t.get(l)??l}):e}var[ke,z]=(()=>{let e;return[t=>{e||(e=t)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var I="feds-menu-wrapper",f="is-open",xe=(e,t)=>t===""?null:e.querySelector(`[aria-controls="${CSS.escape(t)}"]`),j=(e,t)=>t===""?[]:[...e.querySelectorAll(`[aria-controls="${CSS.escape(t)}"]`)],O=(e,t)=>{let n={newState:t?"open":"closed",oldState:t?"closed":"open",bubbles:!1,cancelable:!1},r=window.ToggleEvent,o=r!==void 0?new r("toggle",n):Object.assign(new Event("toggle",n),{newState:n.newState,oldState:n.oldState});e.dispatchEvent(o)},x=e=>e!=null&&e.classList.contains(f),Q=e=>{e!=null&&(e.classList.contains(f)||(e.classList.add(f),O(e,!0)))},$=e=>{e!=null&&e.classList.contains(f)&&(e.classList.remove(f),O(e,!1))},ee=e=>{e!=null&&(e.classList.contains(f)?$(e):Q(e))},Ae=e=>{e.querySelectorAll(`.feds-popup, #${I}`).forEach(n=>{let r=j(e,n.id);if(r.length===0)return;let o=n.id===I;r.forEach(i=>{i.addEventListener("click",s=>{s.preventDefault(),!x(n)&&!o&&e.querySelectorAll(`.feds-popup.${f}`).forEach(a=>{a!==n&&$(a)}),ee(n)})}),n.addEventListener("toggle",()=>{let i=x(n);r.forEach(s=>{let l=s.classList.contains("feds-nav-toggle"),a=s.classList.contains("feds-localnav-bar");s.setAttribute("aria-expanded",String(i)),s.setAttribute("daa-ll",l?i?"hamburgermenu|close":"hamburgermenu|open":a?i?"localnav-bar|Close":"localnav-bar|Open":i?"header|Close":"header|Open")}),n.classList.toggle("feds-menu-active")}),o&&n.addEventListener("transitionend",i=>{i.target===n&&(x(n)||n.classList.remove("feds-menu-active"))})})},Se=e=>{document.addEventListener("click",t=>{let n=t.target;if(!(n instanceof Node)||e.querySelector(`.${f}`)===null)return;let r=e.querySelectorAll(`.${f}`);[...r].some(o=>o.contains(n))||r.forEach(o=>{j(e,o.id).some(s=>s.contains(n))||$(o)})})};var te=window.matchMedia("(min-width: 1024px)"),Oe=()=>te.matches&&document.querySelector("header.global-navigation")?.classList.contains("is-compact")!==!0,Ue=(()=>{let e;return()=>(e===void 0&&(e=new URLSearchParams(window.location.search).has("enableBE")),e)})(),m={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',chevronLeft:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" focusable="false"><path d="M12.5 4l-5 6 5 6" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>',chevronRight:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="3" height="6" viewBox="0 0 3 6" focusable="false"><path d="M.5.5 2.5 3 .5 5.5" stroke="currentColor" stroke-width="1" fill="none"/></svg>',chevronDown:'<svg class="chevron-down" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="6" height="3.375" viewBox="0 0 6 3.375" focusable="false"><path d="M.5.5 3 2.875 5.5.5" stroke="currentColor" stroke-width="1" fill="none"/></svg>'},ne=["/tools/ost?","/miniplans"],De=e=>ne.some(t=>e.includes(t));var Ne=e=>{let t=[],n=e.nextElementSibling??null;for(;n!==null;)t.push(n),n=n.nextElementSibling??null;return t},re=e=>({eval:e,or:t=>re(n=>{try{return e(n)}catch{return t(n)}})}),Be=(e,t)=>e.reduce(([n,r],o)=>{try{let[i,s]=t(o);return[[...n,i],[...r,...s]]}catch(i){return i instanceof g?[n,[i,...r]]:[n,r]}},[[],[]]),[Fe,oe]=(()=>{let e,t=!1;return[n=>{t||(e=n,t=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),[Ge,U]=(()=>{let e=t=>t;return[t=>{e=t},()=>e]})(),p=e=>{try{let t=e.startsWith("/")?`${window.location.origin}${e}`:e;return U()(t)}catch{return e}},S=e=>e.includes("#_blank")?{href:e.replace("#_blank",""),target:"_blank"}:{href:e,target:""},[Ze,qe]=(()=>{let e;return[t=>{e=t},()=>e]})(),ie=async e=>{try{if(e===null)return new g("URL is null");let t=`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`,n=U()(t),r=h(n),o=await fetch(r);if(!o.ok)return y(`Request for ${r} failed`),new g(`Request for ${r} failed`);let i=await o.text(),s=await z(),l=R(i,s),{body:a}=new DOMParser().parseFromString(l,"text/html");try{let{handleCommands:c,commands:b}=oe();await c(b,a)}catch(c){y(`Personalization not applied: ${c?.message}`)}return a}catch(t){return new g(t?.message)}},C,T=()=>{if(C)return C;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"],t=window.location.origin;C=e.some(o=>{let i=t.replace(".stage","");return o.startsWith("https://")?i===o:i.endsWith(o)})?t:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(t.includes("localhost")||t.includes(`.${r}.`))&&(C=`https://main--federal--adobecom.aem.${t.endsWith(".live")?"live":"page"}`),C},h=(e="")=>{if(e.includes("stage.adobe.com"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(e.includes("c2-poc-feds-gnav--milo--adobecom"))return e.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(e.includes("localhost:3000"))return e.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${T()}${e}`;try{let{pathname:t,search:n,hash:r}=new URL(e);return`${T()}${t}${n}${r}`}catch(t){let n=t instanceof Error?t.message:String(t);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${n}`)}return e},We=(e,t)=>{let n=(r,o)=>{let i=`${r}[${o}^="./media_"]`;t.querySelectorAll(i).forEach(l=>{let a=l.getAttribute(o);if(!(a===null||a===""))try{let c=h(new URL(a,new URL(e,window.location.href)).href);l.setAttribute(o,c)}catch(c){console.warn(`[MediaPathError]: Failed to process relative media path (${a}) for ${r}`,c)}})};n("img","src"),n("source","srcset")},Ke=async e=>{let t=async(n,r)=>{if(n instanceof g)return n;try{let i=[...n.querySelectorAll('a[href*="#_inline"]')].map(async s=>{try{if(r.has(s.href))return;let l=h(s.href),a=new URL(l),c=await ie(a);if(r.add(s.href),c instanceof g)throw c;await t(c,r),s.replaceWith(...c.children);return}catch{return}},[]);return await Promise.all(i),n}catch(o){return new g(JSON.stringify(o))}};return t(e,new Set)};var u=e=>{let t=e.normalize("NFKC").toLocaleLowerCase().trim().replace(/[^\p{L}\p{N}\p{M}]+/gu,"-").replace(/^-+|-+$/g,"");return t===""?"id":/^\p{N}/u.test(t)?`id-${t}`:t},d=(e,t)=>{let n=e!==null&&e!==""?` daa-lh="${e}"`:"",r=t!==null&&t!==""?` daa-ll="${t}"`:"";return`${n}${r}`},w=(e,t)=>{let n=t!=null&&t!=="";if(!(e!==void 0)&&!n)return"";let o=[];if(n)o.push(`aria-label="${t}"`);else{let i=e?.["aria-label"]??"";i!==""&&o.push(`aria-label="${i}"`)}return e&&Object.entries(e).forEach(([i,s])=>{i!=="aria-label"&&s&&o.push(`${i}="${s}"`)}),o.length>0?` ${o.join(" ")}`:""};function se(e,{id:t,as:n,callback:r,crossorigin:o,rel:i,fetchpriority:s}={rel:"stylesheet"}){let l=document.head.querySelector(`link[href="${e}"]`);if(l)return r?.("noop"),l;let a=document.createElement("link");return a.setAttribute("rel",i),t!==void 0&&a.setAttribute("id",t),n!==void 0&&a.setAttribute("as",n),o!==void 0&&a.setAttribute("crossorigin",o),s!==void 0&&a.setAttribute("fetchpriority",s),a.setAttribute("href",e),r&&(a.onload=c=>r(c.type),a.onerror=c=>r(typeof c=="string"?"error":c.type)),document.head.appendChild(a),a}function ae(e,t){return se(e,{rel:"stylesheet",callback:t})}function Ve(e,t=!1){t&&ae(e)}var Je=(e,t,{mode:n,id:r}={})=>new Promise((o,i)=>{let s=document.querySelector(`head > script[src="${e}"]`);if(!s){let{head:c}=document;s=document.createElement("script"),s.setAttribute("src",e),r!=null&&s.setAttribute("id",r),t!=null&&s.setAttribute("type",t),n!==void 0&&s.setAttribute(n,""),c.append(s)}let l=s.dataset.loaded;if(l!=null){o(s);return}let a=c=>{s.removeEventListener("load",a),s.removeEventListener("error",a),c.type==="error"?i(new Error(`error loading script: ${s.src}`)):c.type==="load"&&(s.dataset.loaded="true",o(s))};s.addEventListener("load",a),s.addEventListener("error",a)});function P(e,t=document){let n=e&&e.includes(":")?"property":"name",r=t.head.querySelector(`meta[${n}="${e}"]`);return r instanceof HTMLMetaElement?r.content:null}var le=e=>{let t=e,n=i=>i==null||typeof i!="object";if(n(t)||n(t.locale)||typeof t.locale.prefix!="string"||n(t.env)||typeof t.env.name!="string")return!1;if(t.unav!==void 0){if(typeof t.unav!="object"||t.unav===null)return!1;let i=t.unav;if(i.profile!==void 0){if(typeof i.profile!="object"||i.profile===null)return!1;let s=i.profile;if(s.signInCtaStyle!==void 0&&s.signInCtaStyle!=="primary"&&s.signInCtaStyle!=="secondary"||s.messageEventListener!==void 0&&typeof s.messageEventListener!="function")return!1}}return!(t.jarvis!==void 0&&(typeof t.jarvis!="object"||t.jarvis===null||typeof t.jarvis.id!="string"))},[Xe,M]=(()=>{let e,t=!1;return[n=>{if(!t){if(!le(n))throw new Error("MiloConfig validation failed: Invalid structure");e=n,t=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),ce={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},D={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function de(e){let t=ce[e];return!t&&D[e]&&(t=e),!t&&e.includes("-")&&([t]=e.split("-")),t||"US"}var A="langstore/";function Ye(e){let n=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(D[n]??n).split("_",2);if(n.startsWith(A)||window.location.pathname.startsWith(`/${A}`)){let i=n.replace(A,"").toLowerCase();r=de(i),o=i}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var Qe=e=>{let t=e.querySelector("#feds-menu-wrapper");t?.classList.remove("feds-menu-active"),$(t),e.querySelectorAll(`.feds-popup.${f}`).forEach($)};function et(){let e=P("gnav-source")?.split("#")[0]?.split("/").pop()?.trim();if(e!==void 0&&e!==""&&e!=="gnav")return e;let t=window.adobeid?.client_id;return typeof t=="string"&&t!==""?t:""}var N=({items:e})=>`
<ul class="feds-breadcrumbs">
  ${e.map(t=>typeof t=="string"?`<li><span>${t}</span></li>`:`<li><a href="${p(t.href)}">${t.text}</a></li>`).join("")}
</ul>
`.trim();var E=({text:e,mobileText:t,href:n,daaLl:r,highlight:o,ariaLabel:i,ariaAttrs:s,svgIcon:l=""})=>{let a=t!==void 0?`<span class="feds-link__desktop-text">${e}</span><span class="feds-link__mobile-text">${t}</span>`:e;return`<a class="feds-link ${o??!1?"feds-link--highlight":""}" href="${p(n)}"${w(s,i)}${d(null,r??e)}>${a}${l}</a>`};var H=({text:e,href:t,daaLl:n,ariaLabel:r,ariaAttrs:o})=>{let{href:i,target:s}=S(t);return`
<a href="${p(i)}"
  class="feds-primary-cta"${w(o,r)}
  ${s!==""?` target="${s}"`:""}
  ${d(null,n??e)}
>
  ${e}
</a>
`},v=({text:e,href:t,daaLl:n,ariaLabel:r,ariaAttrs:o})=>{let{href:i,target:s}=S(t);return`
<a href="${p(i)}"
  class="feds-secondary-cta"${w(o,r)}
  ${s!==""?` target="${s}"`:""}
  ${d(null,n??e)}
>
  ${e}
</a>
`},at=({cta:e})=>`<div class="feds-product-entry-cta">${e.type==="PrimaryCTA"?H(e):v(e)}</div>`;var B=({card:e},t)=>pe(e,t),pe=({title:e,subtitle:t,eyeBrow:n,footerCTA:r,bodyLink:o},i)=>{let s=`featured-eyebrow-${u(n)}`;return`
  <article class="featured-card" ${d(n,"")}>
    <div>
      <div class="featured-eyebrow" aria-label="${n} ${i}">
        <span id="${s}" aria-hidden="true">${n}</span>
      </div>
      <h2>${e}</h2>
      <div class="featured-subtitle">${t}</div>
      <span class="featured-link">${E({...o,ariaAttrs:{"aria-describedby":s},svgIcon:m.chevronRight})}</span>
    </div>
    <div class="footer-container">
      ${v({...r,ariaAttrs:{"aria-describedby":s}})}
    </div>
  </article>
`.trim()};var F=({card:e})=>ue(e),ue=({title:e,links:t,footerCTA:n})=>`
  <article class="links-card" ${d(e,"")}>
    <div>
      <div class="links-card-title-container" daa-ll="Close">
        <h2 id="links-card-${u(e)}" class="links-card-title" role="heading" aria-level="2">${e}</h2>
        <span class="links-card-chevron" aria-hidden="true">${m.chevronDown}</span>
      </div>
      <ul class="links-card-links" aria-labelledby="links-card-${u(e)}">
        ${t.map(r=>r.description!==void 0&&r.description!==""?`<li class="links-card-links__item--has-description">
               <a class="feds-link links-card-links__item-link ${r.highlight??!1?"feds-link--highlight":""}" href="${p(r.href)}">
                 <span class="links-card-links__item-title">${r.text}</span>
                 <span class="links-card-links__item-description">${r.description}</span>
               </a>
             </li>`:`<li>${E(r)}</li>`).join("")}
      </ul>
    </div>
    ${n===null?"":`
    <div class="links-card-footer">
      ${n.type==="PrimaryCTA"?H({...n,ariaAttrs:{"aria-describedby":`links-card-${u(e)}`}}):v({...n,ariaAttrs:{"aria-describedby":`links-card-${u(e)}`}})}
    </div>`}
  </article>
`.trim();var G=({card:e})=>fe(e),fe=({bgImageAlt:e,bgImageSrc:t,iconAlt:n,iconSrc:r,title:o,cta:i,priceText:s,priceHref:l,isPriceMerchLink:a})=>`
  <article class="promo-card" daa-lh="promo-card">
    ${t?`<picture class="promo-card__bg">
             <img 
              loading="lazy"
              src="${h(t)}"
              alt="${e}"
              class="promo-card__bg-image"
            >
           </picture>`:""}

    <div class="promo-card__content">
      ${r?`<picture class="promo-card__icon">
               <img
                loading="lazy"
                src="${h(r)}"
                alt="${n}"
                class="promo-card__icon-image"
              >
             </picture>`:""}
      <div class="promo-card__text-content">
        ${l&&a?`<p id="price-${u(o)}" class="promo-card__price">
          <a href="${p(l)}" class="merch">${s}</a>
        </p>`:""}
        <h2 id="title-${u(o)}" class="promo-card__title" role="heading" aria-level="2">
          ${o}
        </h2>
        ${i===null?"":`<div class="promo-card__cta">
                 ${v({...i,ariaAttrs:{"aria-describedby":`title-${u(o)}${a?` price-${u(o)}`:""}`}})}
               </div>`}
      </div>
    </div>
  </article>
`.trim();var Z=({card:e})=>ge(e),ge=({title:e,body:t,cta:n,bgImageAlt:r,bgImageSrc:o})=>`
  <article class="promo-card-small" daa-lh="promo-card-small">
  ${o?`<picture class="promo-card__bg">
            <img
            loading="lazy"
            src="${h(o)}"
            alt="${r}"
            class="promo-card__bg-image"
          >
          </picture>`:""}
  <div class="promo-card-small__content">
      <div class="promo-card-small__text">
        <h2 id="title-${u(e)}" class="promo-card-small__title" role="heading" aria-level="2">
          ${e}
        </h2>
        ${t?`<p class="promo-card-small__body">${t}</p>`:""}
      </div>
      ${n===null?"":`<div class="promo-card-small__cta">
             ${v({...n,ariaAttrs:{"aria-describedby":`title-${u(e)}`}})}
           </div>`}
    </div>
  </article>
`.trim();var me=(e,t)=>{switch(e.type){case"FeaturedCard":return B(e,t);case"LinksCard":return F(e);case"PromoCard":return G(e);case"PromoCardSmall":return Z(e);default:}return""},q=({sections:e,megaMenuTitle:t})=>`
  <div class="feds-gnav-cards">
    ${e.map(n=>`<li>${n.cards.map(r=>me(r,t)).join("")}</li>`).join("")}
  </div>
`;var W=e=>{switch(e.type){case"ProductCardHeader":return he(e);case"ProductCardLink":return ve(e);case"ProductCardBlue":return Le(e);default:return console.error(e),""}},he=({title:e,classes:t,daaLl:n,daaLh:r})=>{let o=t.slice(1).map(s=>`feds-product-card--${s}`).join(" "),i=d(r,n??e);return`
    <div role="heading" class="feds-product-card ${o}"${i}>
      <div class="feds-product-card__content">
        <div class="feds-product-card__title">${e}</div>
      </div>
    </div>
  `},ve=({icons:e,title:t,href:n,subtitle:r,badges:o=[],daaLl:i,daaLh:s})=>{let l=d(s,i??t),a=e.filter(({iconHref:_})=>_!==null&&_!==""),c=a.length===0?"":`
      <div class="feds-product-card__icons">
        ${a.map(({iconHref:_})=>`
          <picture class="feds-product-card__icon">
            <img
              loading="lazy"
              src="${h(_)}"
              class="feds-product-card__icon-img"
            >
          </picture>
        `).join("")}
      </div>
    `,b=o.length===0?"":`
      <div class="feds-product-card__badges">
        ${o.map(({text:_,isFilled:V})=>`
          <span class="feds-product-card__badge${V?" feds-product-card__badge--filled":""}">
            ${_}
          </span>
        `).join("")}
      </div>
    `,k=r===""?"":`<div class="feds-product-card__subtitle">${r}</div>`;return`
    <a class="feds-product-card" href="${p(n)}"${l}>
      <div class="feds-product-card-header">
        ${c}
        ${b}
      </div>
      <div class="feds-product-card__content">
       
        <div class="feds-product-card__title">${t}</div>
        ${k}
      </div>
    </a>
  `},Le=({link:e,daaLl:t,daaLh:n})=>{let r=d(n,t??e.text);return`
  <a href="${p(e.href)}" class="feds-product-card feds-product-card--blue"${r}>
    <div class="feds-product-card__content">
        <div class="feds-product-card__title">${e.text}</div>
      </div>
  </a>
`};var K=({categories:e,links:t,placeholders:n})=>{let r=`
    <ul class="tabs" role="tablist">
      ${e.map(ye).join("")}
      ${t.length?`<li class="product-links"><a class="feds-link" href="${p(t[t.length-1].href)}"${d(null,t[t.length-1].daaLl??t[t.length-1].text)}>${t[t.length-1].text}${m.chevronRight}</a></li>`:""}
    </ul>
  `.trim(),o=`
    <ul class="tab-content">
      ${e.map(({links:i},s)=>{let l=n.get("product-list-includes")??"includes",a=n.get("product-list-product")??"product",c=n.get("product-list-products")??"products",b=i.length===1?a:c;return`
      <li>
        <span id="product-hint-${s}" class="product-hint">${l} ${i.length} ${b}</span>
        <ul
          id="${s}"
          role="tabpanel"
          ${s===0?"":"hidden"}
        >
          ${i.map(k=>`<li>${W(k)}</li>`).join("")}
        </ul>
      </li>
      `.trim()}).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${r}
      <div>${o}</div>
    </div>
  `.trim()},ye=({name:e,daaLl:t},n)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(n===0).toString()}"
          aria-controls="${n}"
          aria-describedby="product-hint-${n}"
          ${d("",t)}
          >
            ${e}
          </button>
      </li>
  `.trim();var jt=({title:e},t=0)=>`
  <button type="button"
          aria-controls="${u(e)}"
          aria-haspopup="true"
          aria-expanded="false"
          class="mega-menu feds-link"
          ${d(`${e}-${t+1}`,"header|Open")}
  >
    ${e}${m.chevronDown}
  </button>
  <div id="${u(e)}" class="feds-popup" daa-lh="${e}">
  </div>
`,Ot=(e,t,n)=>{let{megaMenuTitle:r}=e,o=`
        <button
          type="button"
          class="feds-popup-back-button"
          
          aria-label="Back"
          daa-ll="${r}|Back"
        >
          ${m.chevronLeft}
          <span class="feds-popup-title">${r}</span>
        </button>
  `,i=e.type==="ProductList"&&e.links.length>0?e.links[e.links.length-1]:null,s=`
    <div class="feds-popup-header">
      <div class="feds-popup-header-left">${o}</div>
      ${i?`<div class="product-links"><a class="feds-link" href="${p(i.href)}"${d(null,i.daaLl??i.text)}>${i.text}${m.chevronRight}</a></div>`:""}
    </div>
  `.trim(),l=n!=null&&n.breadcrumbs!==null?N(n.breadcrumbs):"",a="";switch(e.type){case"ProductList":a=K(e);break;case"GnavCards":a=q(e);break;default:}return`${l}${s}${a}`};export{y as a,g as b,L as c,Ee as d,ke as e,z as f,f as g,xe as h,j as i,x as j,$ as k,Ae as l,Se as m,te as n,Oe as o,Ue as p,De as q,Ne as r,re as s,Be as t,Fe as u,Ge as v,p as w,S as x,Ze as y,qe as z,ie as A,h as B,We as C,Ke as D,u as E,Ve as F,Je as G,P as H,Xe as I,M as J,Ye as K,Qe as L,et as M,N,H as O,v as P,at as Q,E as R,jt as S,Ot as T};
//# sourceMappingURL=chunk-JATWCMFI.js.map
