var s=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},u=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype)}};var q={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},v=e=>{if(e===null)throw new s(q.elementNull);if(e.tagName!=="A")throw new s(q.notAnchor);let n=e?.textContent??"";if(n==="")throw new s(q.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new s(q.hrefNotFound);return[{type:"Link",text:n,href:t},[]]};var ne=e=>w(un).or(pn).or(dn).eval(e),x={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},pn=e=>{let n=new Set;if(!e)throw new s(x.elementNull);let t=e.querySelector("p a");if(!t)throw new s(x.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new u(x.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new u(x.noHref));let a=t?.closest("p")?.nextElementSibling;if(!a)throw new s(x.noSubtitleP);let i=a.textContent??"";i===""&&n.add(new u(x.noSubtitle));let[p=null,l=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(c=>c.trim());return[{type:"LinkGroupLink",iconHref:p,iconAlt:l,title:r,href:o,subtitle:i},[...n]]},un=e=>{if(!e)throw new s(x.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new s(x.notAHeader);let t=e.querySelector("a")?.textContent??"";if(t==="")throw new s(x.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n},[]]},dn=e=>{if(!e)throw new s(x.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=v(n);return[{type:"LinkGroupBlue",link:t},r]};var mn=`/**
 * Link Group Styles
 */
.feds-link-group {
    --title-color: #2f2f2f;
    --sub-title-color: #4b4b4b;
    --bg-hover-color: #e9e9e9;
    --accent-color: #274dea;
    --accent-color-hover: #1d3ecf;
    --header-border-color: #b6b6b6;
    --header-background-color: #eaeaea;
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    padding: 12px;
}

.feds-link-group:hover {
    background-color: var(--bg-hover-color);
}

.feds-link-group__title {
    /* font-family: var(--heading-font-family); */
    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1rem;
    color: var(--title-color);
}

.feds-link-group__subtitle {
    font-size: 0.75rem;
    line-height: 1rem;
    color: var(--sub-title-color);
}

.feds-link-group--blue,
.feds-link-group--blue .feds-link-group__title {
    color: var(--accent-color);
}

.feds-link-group--blue:hover,
.feds-link-group--blue:hover .feds-link-group__title {
    color: var(--accent-color-hover);
}

/* styles overriden coming from styles.css */
.feds-link-group.feds-link-group--blue {
    text-decoration: underline;
}

.feds-link-group.feds-link-group--gray-gradient {
    background-color: var(--header-background-color);
}

@media (min-width: 900px) {
    .feds-link-group {
        --title-color: #9f9f9f;
        --sub-title-color: #9f9f9f;
        --title-color-hover: #fff;
        --sub-title-color-hover: #fff;
        --bg-hover-color: transparent;
        --header-background-color: transparent;
        padding: 0;
    }

    .feds-link-group--blue,
    .feds-link-group--blue:hover {
        color: var(--title-color-hover);
    }

    .feds-link-group__content {
        padding: 24px 0;
    }

    .feds-link-group__title {
        font-size: 1.25rem;
        line-height: 115%;
        padding-bottom: 10px;
    }

    .feds-link-group:hover .feds-link-group__title {
        color: var(--title-color-hover);
    }

    .feds-link-group__subtitle {
        font-size: 0.875rem;
        line-height: 140%;
    }

    .feds-link-group:hover .feds-link-group__subtitle {
        color: var(--sub-title-color-hover);
    }

    .feds-link-group--blue .feds-link-group__title,
    .feds-link-group.feds-link-group--gray-gradient .feds-link-group__title{
        color: var(--title-color-hover);
    }

    .feds-link-group.feds-link-group--header .feds-link-group__title {
        color: var(--title-color);
        border-bottom: 1px solid var(--header-border-color);
    }

    .feds-link-group.feds-link-group--header .feds-link-group__content {
        width: 100%;
    }
}
`,ye=document.createElement("style");ye.textContent=mn;document.head.appendChild(ye);var te=e=>{switch(e.type){case"LinkGroupHeader":return fn(e);case"LinkGroupLink":return gn(e);case"LinkGroupBlue":return vn(e);default:return console.error(e),""}},fn=({title:e,classes:n})=>`
    <div role="heading" class="feds-link-group ${n.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `,gn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o})=>{let i=n!==null&&e!==null?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"";return`
    <a class="feds-link-group" href="${r}" daa-ll="${t}">
      ${i}
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${t}</div>
        <div class="feds-link-group__subtitle">${o}</div>
      </div>
    </a>
  `},vn=({link:e})=>`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue" daa-ll="${e.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`;var hn=`.feds-brand-container {
    display: flex;
    flex-shrink: 0;
}

.feds-brand {
    display: flex;
}

.feds-brand,
.feds-logo {
    align-items: center;
    outline-offset: 2px;
    padding: 0 var(--feds-gutter);
    column-gap: 10px;
}

.feds-brand-image,
.feds-logo-image {
    width: 25px;
    flex-shrink: 0;
}

.feds-brand-image.brand-image-only {
    height: 36px;
    width: auto;
    min-width: 66px;
}

.feds-brand-image.brand-image-only picture,
.feds-brand-image.brand-image-only img,
.feds-brand-image.brand-image-only svg {
    width: auto;
    height: 100%;
}

.feds-brand-image picture,
.feds-brand-image img,
.feds-brand-image svg,
.feds-logo-image picture,
.feds-logo-image img,
.feds-logo-image svg {
    width: 100%;
    display: block;
}

.feds-brand-label,
.feds-logo-label {
    flex-shrink: 0;
    font-weight: 700;
    font-size: 18px;
    color: var(--feds-color-adobeBrand);
}

@media (min-width: 900px) {
    .feds-brand-image+.feds-brand-label {
        display: flex;
    }
}`,be=document.createElement("style");be.textContent=hn;document.head.appendChild(be);var re=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},W=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),oe=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return W(n.href,re(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return W(n.href,re(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return W(n.href,re(n.image,!1),t)}case"BrandLabelOnly":return W(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var ie=["appswitcher","help"],z={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[U,Ce]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function F(e,n=!1){let p=(/uc_carts=/.test(document.cookie)?e:e?.filter(c=>c!=="cart"))??[],l=p.length??3;if(n){let c=p.filter(f=>ie.includes(f)).length;return`calc(92px + ${c*32}px + ${c*.25}rem)`}return`calc(${l*32}px + ${(l-1)*.25}rem)`}var Z=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(z).find(r=>z[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},yn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},V=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(yn))if(e.includes(n))return t;return"linux"},K=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var Le=()=>{try{return b().signInContext||{}}catch{return{}}},bn=()=>{let e=b();return ae("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Cn=()=>{let n=b()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{U(i)}).catch(()=>{U({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function Ln(){let{unav:e}=b();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var H=()=>{let e=b();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Cn()},signInCtaStyle:bn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Le())},onSignUp:()=>{window.adobeIMS?.signIn(Le())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Ln()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var xe=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},J=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new u('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new u('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new u('metadata "universal-nav" has no value'));let p=!window.adobeIMS?.isSignedInUser(),l=i.split(",").map(d=>d.trim()).filter(d=>Object.keys(H()).includes(d)||d==="signup");if(p){let d=F(l,p);t.style.setProperty("min-width",d)}let c;try{c=b()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let m=Z(c.locale),f=c.env.name==="prod"?"prod":"stage",C=await K(),y=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(y??"")||(y="1.5"),await Promise.all([le(`https://${f}.adobeccstatic.com/unav/${y}/UniversalNav.js`),se(`https://${f}.adobeccstatic.com/unav/${y}/UniversalNav.css`,!0)]);let L=()=>{let d=H(),g=[d.profile];return xe(g,!1),l?.forEach(S=>{if(S==="profile")return;if(S==="signup"){xe(g,!0);return}let j=d[S];j&&g.push(j)}),g},k=()=>({target:t,env:f,locale:m,countryCode:we(c?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:V(),os_version:navigator.platform},event:{visitor_guid:C}},children:L(),isSectionDividerRequired:!!c?.unav?.showSectionDivider,showTrayExperience:!A.matches});await window?.UniversalNav?.(k()),p||t?.style.removeProperty("min-width");let P=d=>{window?.UniversalNav?.reload(k())};return A.addEventListener("change",()=>{P()}),{reloadUnav:P,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new u(r)}};var ke=async e=>{let{placeholders:n}=e,{locale:t}=b(),o=`${Y()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,xn(o)]);return new Map([...i,...a])},Ee=new Map,xn=async e=>{let n=Ee.get(e);if(n)return n;try{let t=await fetch(e);if(!t.ok)throw new u(`Federal placeholders not found at ${e}`);let r=wn(await t.json());if(r instanceof u)throw r;let o=new Map(r.data.map(({key:a,value:i})=>[a,i]));return Ee.set(e,o),o}catch(t){if(t instanceof u)console.error(t.message);else{let r=new u(t.message);console.error(r.message)}return new Map([])}},wn=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new u(n.message)}};function Se(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let p=a??i??"";return n.get(p)??p}):e}var[Te,Me]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var A=window.matchMedia("(min-width: 900px)"),de={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},Pe=e=>n=>{let t=[],r=[];for(let o=0;o<n.length;o++){if(e(n[o])){t.push(r),r=[];continue}r.push(n[o])}return t.push(r),t};var me=e=>n=>{if(n.length===0)return n;let[t,...r]=n;return e(t)?[t].concat(me(e)(r)):[]};var _=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},w=e=>({eval:e,or:n=>w(t=>{try{return e(t)}catch{return n(t)}})}),h=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof s?[t,[a,...r]]:[t,r]}},[[],[]]),Ae=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;A.matches?r=n(t):r=e(t),A.addEventListener("change",()=>{r?.(),r=A.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},I=async e=>{try{if(e===null)return new s("URL is null");let n=_e(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return new s(`Request for ${n} failed`);let r=await t.text(),o=await Me(),a=Se(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");return i}catch(n){return new s(n?.message)}},T,Y=()=>{if(T)return T;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(T)return T;let n=window.location.origin;T=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(T=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),T},_e=(e="")=>{if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${Y()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${Y()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},Ie=async e=>{let n=async(t,r)=>{if(t instanceof s)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let p=_e(i.href),l=new URL(p),c=await I(l);if(r.add(i.href),c instanceof s)throw c;await n(c,r);let m=i.closest("div");m?m.replaceWith(...c.children):i.replaceWith(...c.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new s(JSON.stringify(o))}};return n(e,new Set)},E=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),M=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),Re=()=>!0;function En(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let p=document.head.querySelector(`link[href="${e}"]`);if(p)return r?.("noop"),p;let l=document.createElement("link");return l.setAttribute("rel",a),n!==void 0&&l.setAttribute("id",n),t!==void 0&&l.setAttribute("as",t),o!==void 0&&l.setAttribute("crossorigin",o),i!==void 0&&l.setAttribute("fetchpriority",i),l.setAttribute("href",e),r&&(l.onload=c=>r(c.type),l.onerror=c=>r(typeof c=="string"?"error":c.type)),document.head.appendChild(l),l}function kn(e,n){return En(e,{rel:"stylesheet",callback:n})}function se(e,n=!1){n&&kn(e)}var le=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:c}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),c.append(i)}let p=i.dataset.loaded;if(p!=null){o(i);return}let l=c=>{i.removeEventListener("load",l),i.removeEventListener("error",l),c.type==="error"?a(new Error(`error loading script: ${i.src}`)):c.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",l),i.addEventListener("error",l)});function ae(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var Sn=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[ce,b]=(()=>{let e,n=!1;return[t=>{if(!n){if(!Sn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),Tn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},$e={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function Mn(e){let n=Tn[e];return!n&&$e[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var ue="langstore/";function we(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=($e[t]??t).split("_",2);if(t.startsWith(ue)||window.location.pathname.startsWith(`/${ue}`)){let a=t.replace(ue,"").toLowerCase();r=Mn(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var X={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},R=/(\.png|\.jpg|\.jpeg|\.svg)/i,Pn=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&R.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&R.test(r)?r:null},An=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},pe=e=>{if(e===null)throw new s(X.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new s(X.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new s(X.noLinks);let r=t.find(d=>{let g=d.textContent??"";return!R.test(d.href)&&!R.test(g)});if(!r)throw new s(X.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),p=!a,l=!o&&!i,c=t.filter(d=>{let g=d.textContent??"";return R.test(d.href)||R.test(g)}),[m,f,C]=(()=>{let d=o?de.brand:de.company,[g=null,S=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(ee=>ee?.src).filter(ee=>ee?.length>0),[j=null,ln=null]=c.map(Pn),cn=c[0]instanceof Element?An(c[0]):r.textContent?.trim()??"";return[j??g??d,ln??S,cn]})(),y=r.textContent?.trim()??"",L=r.href;if(!p&&!l)return[{type:"Brand",data:{type:"NoRender"}},[]];let k=(d,g)=>{let S=g!=null&&g!=="";return Re()&&S?g:d},P=m.startsWith("<svg")?{type:"inline-svg",svgContent:k(m,f),alt:C}:{type:"image",src:k(m,f),alt:C};return p&&l?[{type:"Brand",data:{type:"LabelledBrand",href:L,label:y,image:P}},[]]:p&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:L,image:P,alt:C}},[]]:p&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:L,image:P,alt:C}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:L,label:y}},[]]};var Ue=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(_n(e));if(!t)throw new Error("");let[{text:r,href:o},a]=v(t);return[{type:e.type,text:r,href:o},a]},G=Ue({type:"PrimaryCTA"}),N=Ue({type:"SecondaryCTA"}),He=e=>w(G).or(N).eval(e),_n=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var B=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,D=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,Ge=e=>e.type==="PrimaryCTA"?B(e):D(e);var $=({text:e,href:n})=>`<a class="feds-link" href="${n}">${e}</a>`;var Ne=e=>{let[n,t]=In(e);return(()=>{switch(n.type){case"SingleColumnSection":return[[{type:"Tab",title:n.title,columns:[n.items],CTA:fe(n)}],t];case"SingleColumnSectionList":return[n.sections.flatMap(r=>({type:"Tab",title:r.title,columns:[r.items],CTA:fe(r)})),t];case"MultiColumnSection":return[[{type:"Tab",title:n.title,columns:n.columns,CTA:fe(n)}],t];case"MenuPromo":return[[{type:"Tab",title:"More",columns:n,CTA:void 0}],t];default:return[[],[]]}})()},fe=e=>e.type==="SingleColumnSection"?e.items.find(n=>n.type==="PrimaryCTA"):e.columns.flat().find(n=>n.type==="PrimaryCTA"),In=e=>w(ge).or(Oe).or(Rn).or(ve).eval(e),Be=e=>h(e,n=>w(ne).or(G).or(N).or(v).eval(n)),De=e=>e.flatMap(n=>n.nodeName==="UL"?[...n.querySelectorAll("li > a")]:[n]),Oe=e=>{if(e.querySelector(".gnav-promo"))throw new Error("This is a promo");if(e.querySelector(".column-break"))throw new s("Has a column break");let n=e.firstElementChild;if(n===null)throw new s("No Children");let t=n.nodeName==="H5"?n.textContent??null:null,r=n.nodeName==="H5"?_(n):[...e.children],o=De(r),[a,i]=Be(o);return[{type:"SingleColumnSection",title:t,items:a},i]},ge=e=>{if(e.querySelector(".column-break"))throw new s("Has a column break");let n=[...e.querySelectorAll("h5")];if(n.length<=1)throw new s("Not a section list");let t=a=>{let i=document.createElement("div"),p=me(l=>l.nodeName!=="H5")(_(a));return i.append(a,...p),Oe(i)},[r,o]=h(n,t);return[{type:"SingleColumnSectionList",sections:r},o]},Rn=e=>{if(!e.querySelector(".column-break"))throw new s("Expected a Column Break");let n=e.firstElementChild;if(n===null||n.nodeName!=="H5")throw new s(O.expectedH5);let t=n.textContent;if(t===""||t===null)throw new s(O.emptyTitle);let o=Pe(p=>p.classList.contains("column-break"))(_(n)).map(De),[a,i]=h(o,Be);return[{type:"MultiColumnSection",title:t,columns:a},i]},ve=e=>{if(e===null)throw new s(O.elementNull);let n=e.querySelector(".gnav-promo, .gnav-image");if(n===null)throw new s(O.noPromo);let t=n.innerHTML??"";if(t==="")throw new s(O.noPromoContent);return[{type:"MenuPromo",content:t},[]]},O={expectedH5:"Expected an H5 element for the title ",emptyTitle:"Expected Title to not be empty",elementNull:"Element is null",noPromo:"Promo or gnav image not found",noPromoContent:"Promo Content not found"};var qe=e=>{let n=new Set;if(e===null)throw new s(je.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new u(je.noTitle));let r=(async()=>{try{let l=e.querySelector("h2 > a"),c=new URL(l?.href??""),m=await I(c);if(m instanceof s)throw new Error(m.message);let f=await Ie(m);if(f instanceof s)throw new Error(f.message);let C=[...f.children],[y,L]=h(C,Ne);return[y.flat(),L]}catch(l){throw new s(l?.message)}})(),o=e.querySelectorAll(".cross-cloud-menu ul > li > a"),[a,i]=h([...o],v),p=e.classList.contains("section");return[{type:"MegaMenu",title:t,tabs:r,crossCloudMenu:a,isSection:p},[...i,...n]]},je={elementNull:"Element is null",noTitle:"Large Menu has no Title"};var $n=`.mega-menu::after {
  content: '';
  display: inline-block;
  width: 6px;
  height: 6px;
  margin-left: 8px;
  border-right: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  transform: rotate(-45deg);
  right: 20px;
  top: calc(50% - 4px);
}

.mega-menu:has(+ .feds-popup:popover-open)::after {
  transform: rotate(-135deg) translateY(1px);
  margin-top: 8px;
}

.feds-popup {
  display: none;
}

.feds-popup:popover-open {
    display: flex;
    flex-direction: row;
    justify-content: start;
    translate: 0;
    opacity: 1;
    z-index: 2;
    transition: translate 0.4s ease-out, opacity 0.2s ease, visibility 0s linear 0s;
    visibility: visible;
    background-color: #000;
    align-items: start;
    margin-top: 1px;
    padding: 12px 0;
    padding-left: 15%;
    width: 100%;
    height: calc(100vh - 64px);
    position: absolute;
    left: 0;
    box-shadow: 0 3px 3px 0 rgb(0 0 0 / 20%);
    transform: translate3d(0, 0, 0);
    top: var(--feds-nav-height);
}

@media (min-width: 900px) {
  .mega-menu::after {
    transform: rotate(45deg) translateY(-1px);
    transform-origin: center;
    transition: transform 150ms ease;
    pointer-events: none;
  }
}

`,We=document.createElement("style");We.textContent=$n;document.head.appendChild(We);var ze=e=>{let n=()=>({name:"",description:""}),t=[0,1,2,3].map(n);return`
  <div class="feds-popup loading" aria-hidden="true">
    <div class="top-bar">
    </div>
    <div class="title">
      <h2>${e}</h2>
    </div>
    <div class="tabs" role="tablist">
      ${t.map(({name:r,description:o},a)=>`
        <div class="tab-wrapper">
          <button
          role="tab"
          class="tab"
          aria-selected="false"
          aria-controls="${a}"
          >${r.trim()===""?"<div></div>":r}</button>
          ${o?`<div class="feds-menu-description">${o}</div>`:""}
        </div>
      `).join("")}
    </div>
    <div class="tab-content">
    ${t.map((r,o)=>`
        <div
          id="${o}"
          role="tabpanel"
          aria-labelledby="${o}"
          class="feds-navLink-content"
        >
      <div class="feds-navLink-title"></div>
      <div class="feds-navLink-description"></div>
      </div>`).join("")}
  </div>
  `},Fe=({title:e,isSection:n})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${M(e)}"
          class="mega-menu feds-link"
          popovertarget="${M(e)}"
  >
    ${e}
  </button>
  <div id="${M(e)}" popover class="feds-popup${n?"":" section"}" aria-hidden="true">
    <ul>
    </ul>
  </div>
`;var Ve=e=>{let n=[];if(e===null)throw new s(Ze.elementNull);let t=e.querySelector("h2"),r=t?.textContent??"";r===""&&n.push(new u(Ze.noTitle));let o=(()=>{if(t===null)return e;let c=document.createElement("div");return _(t).forEach(m=>c.appendChild(m)),c})(),[a,i]=w(ge).or(c=>h([...c.children],Un)).eval(o),[p,l]=(()=>{try{return ve(e)}catch{return[null,[]]}})();return[{type:"SmallMenu",title:r,columns:a,promo:p},[...i,...l]]},Un=e=>{if(e.nodeName!=="UL")throw new Error("");let n=[...e.querySelectorAll("ul > li > a")];return h(n,v)},Ze={elementNull:"The element to be parsed is null",noTitle:"Small menu has no title"};var Ke=(e,n,t,r,o)=>a=>`
  <div class="top-bar">
    ${o?e:""}
  </div>
  <div class="title">
    ${t||'<div class="breadcrumbs"></div>'}
    <h2 id="${r}-title">${n}</h2>
  </div>
  <div class="tabs" role="tablist">
    ${a.map((i,p)=>`
      <button
        role="tab"
        class="tab"
        aria-selected="false"
        aria-controls="${p}"
      >
        ${i.title===""?"<div></div>":i.title}
      </button>
    `).join("")}
  </div>
  <div class="tab-content">
    ${a.map((i,p)=>`
      <div
        id="${p}"
        role="tabpanel"
        class="${Array.isArray(i.columns)&&i.columns.flat().some(l=>l.type==="LinkGroupHeader")?"has-subheader":""}"
        hidden
      >
        <ul>
        ${Array.isArray(i.columns)?E(i.columns,l=>`
                              <ul>
                                ${E(l.filter(c=>c.type!=="PrimaryCTA"),Q)}
                              </ul>
                            `):i.columns.content}
        </ul>
        <div class="sticky-cta">
          ${i.CTA?Q(i.CTA):""}
        </div>
      </div>
    `.trim()).join("")}
  </div>
`.trim(),Je=({content:e})=>e,Q=e=>{switch(e.type){case"LinkGroupHeader":case"LinkGroupLink":case"LinkGroupBlue":return te(e);case"Link":return $(e);case"PrimaryCTA":return B(e);case"SecondaryCTA":return D(e);default:return""}};var Ye=({title:e,columns:n,promo:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${M(e)}"
  >
    ${e}
  </button>
  <div class="feds-popup" id="${M(e)}">
    ${Hn(n)}
    ${t===null?"":`<li>${Je(t)}</li>`}
  </div>
`,Hn=e=>!Array.isArray(e)&&e?.type==="SingleColumnSectionList"?Gn(e):`
  <ul>
    ${E(e,n=>`
      <ul>
        ${E(n,$)}
      </ul>
    `)}
  </ul>
  `,Gn=e=>`
  <ul>
    ${E(e.sections,n=>`
      <ul>
        ${n.title===null?"":`<span class="column-section-title">${n.title}</span>`}
        ${E(n.items,Q)}
      </ul>
    `.trim())}
  </ul>
`.trim();var Xe={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Qe=e=>{if(e===null)return[{type:"Text",content:""},[new u(Xe.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new u(Xe.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var en=({content:e})=>e;var nn=e=>{if(e===null)throw new s(Nn.elementNull);if(e.querySelector(".gnav-brand")!==null)return pe(e);let t=e.querySelector(".large-menu");return t!==null?qe(t):e.querySelector("h5, ul, link-group")!==null?Ve(e):e.querySelector("strong")!==null?G(e):e.querySelector("em")!==null?N(e):e.querySelector("a")===null?Qe(e):v(e.querySelector("a"))},he=e=>{switch(e.type){case"Text":return en(e);case"Link":return $(e);case"SecondaryCTA":return D(e);case"PrimaryCTA":return B(e);case"Brand":return oe(e);case"SmallMenu":return Ye(e);case"MegaMenu":return Fe(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Nn={elementNull:"Element is null"};var tn=(e,n)=>{let[t,r]=h([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],v),[o,a]=h([...e.children],nn),i=e.querySelector(".product-entry-cta"),[p,l]=(()=>{try{return He(i)}catch{return[null,[]]}})(),c=o.filter(f=>f.type==="MegaMenu"&&f.isSection).length===1,m=[r,a,l].flat();return{breadcrumbs:t,components:o,productCTA:p,localnav:c,errors:m,unavEnabled:n}};var Bn=e=>{let n=[...e.querySelectorAll('.tabs > button[role="tab"]')],t=[...e.querySelectorAll(".tab-content > div")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var rn=Bn;var Dn=e=>()=>console.log(e),On=e=>()=>console.log(e),on=Ae({mobileEventListeners:On,desktopEventListeners:Dn});var an=async({gnavSource:e,asideSource:n})=>{let t=await I(e);if(t instanceof s)return t;let r=await I(n);return{mainNav:t,aside:r}};var jn=`/**
 * Global Navigation Styles
 * Styles for the federal global navigation component
 */

:root {
    --feds-heading-font: 'Adobe Clean Display', adobe-clean-display, adobe-clean, 'Trebuchet MS', sans-serif;
    --feds-link-color: #4B4B4B;
    --feds-nav-height: 64px;
}

.global-navigation.site-pivot {
    visibility: visible;
    display: block;
}

.global-navigation nav > ul {
    display: flex;
    width: 100%;
    max-width: var(--feds-maxWidth-nav);
    height: inherit;
    align-items: center;
}


.feds-link {
    font-size: 16px;
    font-weight: 800;
    color: #4B4B4B;
    font-family: var(--feds-heading-font);
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 12px;
    color: var(--feds-link-color);
}

.global-navigation.site-pivot nav {
    display: flex;
    align-items: center;
    max-width: var(--feds-maxWidth-nav);
    height: var(--feds-height-nav);
    justify-content: flex-start;
}

.global-navigation nav > ul {
    display: flex;
    width: 100%;
    max-width: var(--feds-maxWidth-nav);
    height: inherit;
    align-items: center;
    padding-left: 0;
}

.global-navigation nav > ul > li {
    display: flex;
    align-items: center;
}

.global-navigation nav > ul > li.feds-menu-wrapper {
    position: fixed;
    top: var(--feds-nav-height);
    left: 0;
    right: 20px;
    flex-direction: column;
    height: calc(100dvh - var(--feds-nav-height) - 1px);
    border-top: 1px solid var(--feds-borderColor);
    width: 100%;
    background-color: var(--feds-background-cloudmenu-v2);
    translate: -200vw 0;
    opacity: 0;
    transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0.5s;
    display: flex;
    visibility: hidden;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open {
    display: flex;
    translate: 0;
    opacity: 1;
    z-index: 2;
    transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0s;
    visibility: visible;
    align-items: flex-start;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open .feds-gnav-items {
    align-items: flex-start;
    padding: 0;
}

.global-navigation nav .feds-nav-toggle {
    width: 60px;
    margin: 0;
    padding: 0;
    border: none;
    background: transparent;
    box-shadow: none;
    color: var(--feds-color-hamburger);
    cursor: pointer;
    font-size: 20px;
    font-weight: 300;
}

.global-navigation nav .feds-nav-toggle::before { 
    content: "\\2630";
}

.feds-link {
    font-size: 16px;
    font-weight: 800;
    color: #4B4B4B;
    font-family: var(--feds-heading-font);
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 12px;
    color: var(--feds-link-color);
    cursor: pointer;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle::before {
    content: "\\2715"; 
}

.global-navigation.site-pivot:has(.feds-popup:popover-open) .feds-link,
.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-link {
    color: #fff;
}

.global-navigation.site-pivot ul {
    list-style: none;
    margin: 0;
}

@media (min-width: 900px) {
    .global-navigation nav .feds-nav-toggle {
        display: none;
    }

    .global-navigation nav > ul > li.feds-menu-wrapper {
        position: static;
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        width: auto;
        height: unset;
        border: 0;
        outline: 0;
        box-shadow: none;
        justify-content: space-between;
        background-color: transparent;
        opacity: 1;
        visibility: visible;
        translate: unset;
        transition: unset;
    }

    .global-navigation.site-pivot nav {
        display: flex;
        align-items: center;
        max-width: var(--feds-maxWidth-nav);
        padding-left: 10%;
        justify-content: flex-start;
    }

    .global-navigation.site-pivot:has(.feds-popup:popover-open),
    .global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) {
        background-color: #000;
    }

    .global-navigation nav .feds-gnav-items {
        align-items: center;
        padding-left: 0;
        margin: 0;
        display: flex;
    }
    
}

`,sn=document.createElement("style");sn.textContent=jn;document.head.appendChild(sn);var Ao=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o}=e;if(!(n instanceof URL))throw new s("gnavSource needs to be a URL object");try{ce(o)}catch(c){throw new s(`Failed to initialize MiloConfig: ${c}`)}Te(ke(e));let a=await an(e);if(a instanceof s)throw a;let{mainNav:i,aside:p}=a;if(i instanceof s)throw i;let l=tn(i,r);if(l instanceof s)throw l;return await qn(l)(t),zn(e)},qn=e=>async n=>{let t=Wn(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup > ul")];r.forEach(i=>{i.innerHTML=ze(i.textContent?.trim()??"")});let o=e.components.filter(i=>i.type==="MegaMenu").map(i=>i.tabs),a=await Promise.all(o.map(async(i,p)=>{let[l,c]=await i,m=n.querySelector(".feds-brand-container")?.outerHTML??"",f=r[p].parentElement?.previousElementSibling?.textContent??"",C=n.querySelector(".breadcrumbs")?.outerHTML??"",y=r[p].querySelector(".feds-popup")?.id??"",L=r.length===1,k=Ke(m,f,C,y,L)(l);return r[p].innerHTML=k,c}).flat());return n},Wn=({components:e,productCTA:n,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=e.find(l=>l.type==="Brand")??null,o=e.filter(l=>l.type!=="Brand"),a=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim(),i=r?he(r):"",p=E(o,he);return`
        <li class="feds-brand-wrapper">
          ${a}
          ${i}
        </li>
        <li
          id="feds-menu-wrapper"
          popover
          class="feds-menu-wrapper"
          aria-hidden="true"
        >
          <ul class="feds-gnav-items">
            ${p}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${n===null?"":Ge(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,zn=async e=>{let n=new Set,t=await J(e.mountpoint);t instanceof u?n.add(t):t.errors.forEach(o=>n.add(o)),rn(e.mountpoint),on(e.mountpoint);let r=t instanceof u?()=>{}:t.reloadUnav;return{closeEverything:Fn,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Fn=()=>{};export{Ao as main,zn as postRenderingTasks,qn as renderGnav,Wn as renderGnavString};
//# sourceMappingURL=main.js.map
