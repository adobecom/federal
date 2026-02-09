var it=Object.defineProperty;var m=(e,n)=>()=>(e&&(n=e(e=0)),n);var ve=(e,n)=>{for(var t in n)it(e,t,{get:n[t],enumerable:!0})};function an(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let d=a??i??"";return n.get(d)??d}):e}var on,at,st,he,z,F=m(()=>{"use strict";be();N();v();on=async e=>{let{placeholders:n}=e,{locale:t}=b(),o=`${ee()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,at(o)]);return new Map([...i,...a])},at=async e=>{try{let n=await fetch(e);if(!n.ok)throw new p(`Federal placeholders not found at ${e}`);let t=st(await n.json());if(t instanceof p)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof p)console.error(n.message);else{let t=new p(n.message);console.error(t.message)}return E(`Failed to fetch placeholders from ${e}`),new Map([])}},st=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new p(n.message)}};[he,z]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})()});function lt(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let d=document.head.querySelector(`link[href="${e}"]`);if(d)return r?.("noop"),d;let s=document.createElement("link");return s.setAttribute("rel",a),n!==void 0&&s.setAttribute("id",n),t!==void 0&&s.setAttribute("as",t),o!==void 0&&s.setAttribute("crossorigin",o),i!==void 0&&s.setAttribute("fetchpriority",i),s.setAttribute("href",e),r&&(s.onload=l=>r(l.type),s.onerror=l=>r(typeof l=="string"?"error":l.type)),document.head.appendChild(s),s}function ct(e,n){return lt(e,{rel:"stylesheet",callback:n})}function Le(e,n=!1){n&&ct(e)}function A(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}function ut(e){let n=pt[e];return!n&&un[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}function fn(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(un[t]??t).split("_",2);if(t.startsWith(ye)||window.location.pathname.startsWith(`/${ye}`)){let a=t.replace(ye,"").toLowerCase();r=ut(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var G,we,sn,xe,D,M,k,ln,B,H,ee,cn,dn,P,U,w,pn,W,dt,Ce,b,pt,un,ye,v=m(()=>{"use strict";L();N();F();G=window.matchMedia("(min-width: 900px)"),we={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},sn=e=>n=>{let t=[],r=[];for(let o=0;o<n.length;o++){if(e(n[o])){t.push(r),r=[];continue}r.push(n[o])}return t.push(r),t},xe=e=>n=>{if(n.length===0)return n;let[t,...r]=n;return e(t)?[t].concat(xe(e)(r)):[]},D=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},M=e=>({eval:e,or:n=>M(t=>{try{return e(t)}catch{return n(t)}})}),k=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof c?[t,[a,...r]]:[t,r]}},[[],[]]),ln=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;G.matches?r=n(t):r=e(t),G.addEventListener("change",()=>{r?.(),r=G.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},B=async e=>{try{if(e===null)return new c("URL is null");let n=cn(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return E(`Request for ${n} failed`),new c(`Request for ${n} failed`);let r=await t.text(),o=await z(),a=an(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");return i}catch(n){return new c(n?.message)}},ee=()=>{if(H)return H;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(H)return H;let n=window.location.origin;H=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(H=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),H},cn=(e="")=>{if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${ee()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${ee()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},dn=async e=>{let n=async(t,r)=>{if(t instanceof c)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let d=cn(i.href),s=new URL(d),l=await B(s);if(r.add(i.href),l instanceof c)throw l;await n(l,r);let u=i.closest("div");u?u.replaceWith(...l.children):i.replaceWith(...l.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new c(JSON.stringify(o))}};return n(e,new Set)},P=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),U=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),w=e=>e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;"),pn=()=>!0;W=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:l}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),l.append(i)}let d=i.dataset.loaded;if(d!=null){o(i);return}let s=l=>{i.removeEventListener("load",s),i.removeEventListener("error",s),l.type==="error"?a(new Error(`error loading script: ${i.src}`)):l.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",s),i.addEventListener("error",s)});dt=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[Ce,b]=(()=>{let e,n=!1;return[t=>{if(t===null){n=!1,e=void 0;return}if(!n){if(!dt(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),pt={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},un={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};ye="langstore/"});var ne,S,_=m(()=>{"use strict";L();ne={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},S=e=>{if(e===null)throw new c(ne.elementNull);if(e.tagName!=="A")throw new c(ne.notAnchor);let n=e?.textContent??"";if(n==="")throw new c(ne.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new c(ne.hrefNotFound);return[{type:"Link",text:n,href:t},[]]}});var Se,I,ft,mt,gt,Ee=m(()=>{"use strict";L();v();_();Se=e=>M(mt).or(ft).or(gt).eval(e),I={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},ft=e=>{let n=new Set;if(!e)throw new c(I.elementNull);let t=e.querySelector("p a");if(!t)throw new c(I.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new p(I.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new p(I.noHref));let a=t?.closest("p")?.nextElementSibling;if(!a)throw new c(I.noSubtitleP);let i=a.textContent??"";i===""&&n.add(new p(I.noSubtitle));let[d=null,s=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(l=>l.trim());return[{type:"LinkGroupLink",iconHref:d,iconAlt:s,title:r,href:o,subtitle:i},[...n]]},mt=e=>{if(!e)throw new c(I.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new c(I.notAHeader);let t=e.querySelector("a")?.textContent??"";if(t==="")throw new c(I.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n},[]]},gt=e=>{if(!e)throw new c(I.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=S(n);return[{type:"LinkGroupBlue",link:t},r]}});var vt,mn,gn=m(()=>{"use strict";vt=`/**
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
`,mn=document.createElement("style");mn.textContent=vt;document.head.appendChild(mn)});var ke,ht,bt,yt,Te=m(()=>{"use strict";gn();ke=e=>{switch(e.type){case"LinkGroupHeader":return ht(e);case"LinkGroupLink":return bt(e);case"LinkGroupBlue":return yt(e);default:return console.error(e),""}},ht=({title:e,classes:n})=>`
    <div role="heading" class="feds-link-group ${n.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `,bt=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o})=>{let i=n!==null&&e!==null?`
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
  `},yt=({link:e})=>`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue" daa-ll="${e.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`});var te,O,wt,xt,Me,Pe=m(()=>{"use strict";L();v();te={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},O=/(\.png|\.jpg|\.jpeg|\.svg)/i,wt=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&O.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&O.test(r)?r:null},xt=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},Me=e=>{if(e===null)throw new c(te.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new c(te.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new c(te.noLinks);let r=t.find(g=>{let C=g.textContent??"";return!O.test(g.href)&&!O.test(C)});if(!r)throw new c(te.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),d=!a,s=!o&&!i,l=t.filter(g=>{let C=g.textContent??"";return O.test(g.href)||O.test(C)}),[u,h,y]=(()=>{let g=o?we.brand:we.company,[C=null,R=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(ge=>ge?.src).filter(ge=>ge?.length>0),[Q=null,rt=null]=l.map(wt),ot=l[0]instanceof Element?xt(l[0]):r.textContent?.trim()??"";return[Q??C??g,rt??R,ot]})(),f=r.textContent?.trim()??"",x=r.href;if(!d&&!s)return[{type:"Brand",data:{type:"NoRender"}},[]];let T=(g,C)=>{let R=C!=null&&C!=="";return pn()&&R?C:g},$=u.startsWith("<svg")?{type:"inline-svg",svgContent:T(u,h),alt:y}:{type:"image",src:T(u,h),alt:y};return d&&s?[{type:"Brand",data:{type:"LabelledBrand",href:x,label:f,image:$}},[]]:d&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:x,image:$,alt:y}},[]]:d&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:x,image:$,alt:y}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:x,label:f}},[]]}});var Lt,vn,hn=m(()=>{"use strict";Lt=`.feds-brand-container {
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
}`,vn=document.createElement("style");vn.textContent=Lt;document.head.appendChild(vn)});var Ie,re,Ae,_e=m(()=>{"use strict";hn();Ie=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},re=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),Ae=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return re(n.href,Ie(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return re(n.href,Ie(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return re(n.href,Ie(n.image,!1),t)}case"BrandLabelOnly":return re(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}}});async function $e(){return oe=oe||new Promise((e,n)=>{let t=b(),{locale:r,imsClientId:o,imsScope:a,env:i,base:d,adobeid:s,imsTimeout:l}=t;if(!o){n(new Error("Missing IMS Client ID"));return}let[u,h,y]=[A("universal-nav")?.trim(),A("adobe-home-redirect"),A("ims-guest-token")],f=`AdobeID,openid,gnav${u&&u!=="off"?",pps.read,firefly_api,additional_info.roles,read_organizations,account_cluster.read":""}`,x=setTimeout(()=>n(new Error("IMS timeout")),l||5e3);window.adobeid={client_id:o,scope:a||f,locale:r?.ietf?.replace("-","_")||"en_US",redirect_uri:h==="on"?`https://www${i.name!=="prod"?".stage":""}.adobe.com${r.prefix}`:void 0,autoValidateToken:!0,environment:i.ims,useLocalStorage:!1,onReady:()=>{e(),clearTimeout(x)},onError:n,...y==="on"&&{api_parameters:{check_token:{guest_allowed:!0}},enableGuestAccounts:!0,enableGuestTokenForceRefresh:!0},...s};let T=Ct.searchParams.get("useAlternateImsDomain")?"https://auth.services.adobe.com/imslib/imslib.min.js":`${d}/deps/imslib.min.js`;W(T)}).then(()=>{}).catch(e=>{throw oe=void 0,e}),oe}var Ct,oe,Re=m(()=>{"use strict";v();Ct=new URL(window.location.href)});function Ue(e,n=!1){let d=(/uc_carts=/.test(document.cookie)?e:e?.filter(l=>l!=="cart"))??[],s=d.length??3;if(n){let l=d.filter(h=>bn.includes(h)).length;return`calc(92px + ${l*32}px + ${l*.25}rem)`}return`calc(${s*32}px + ${(s-1)*.25}rem)`}var bn,He,q,St,Ne,Et,Ge,De,Z=m(()=>{"use strict";bn=["appswitcher","help"],He={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[q,St]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();Ne=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(He).find(r=>He[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},Et={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},Ge=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(Et))if(e.includes(n))return t;return"linux"},De=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0}});function Mt(){let{unav:e}=b();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var ie,kt,Tt,ae,se=m(()=>{"use strict";Z();v();ie=()=>{try{return b().signInContext||{}}catch{return{}}},kt=()=>{let e=b();return A("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Tt=()=>{let n=b()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{q(i)}).catch(()=>{q({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};ae=()=>{let e=b();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Tt()},signInCtaStyle:kt(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(ie())},onSignUp:()=>{window.adobeIMS?.signIn(ie())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Mt()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}}});var yn,Be,Oe=m(()=>{"use strict";L();v();Z();se();yn=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},Be=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new p('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new p('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new p('metadata "universal-nav" has no value'));let d=!window.adobeIMS?.isSignedInUser(),s=i.split(",").map(g=>g.trim()).filter(g=>Object.keys(ae()).includes(g)||g==="signup");if(d){let g=Ue(s,d);t.style.setProperty("min-width",g)}let l;try{l=b()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let u=Ne(l.locale),h=l.env.name==="prod"?"prod":"stage",y=await De(),f=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(f??"")||(f="1.5"),await Promise.all([W(`https://${h}.adobeccstatic.com/unav/${f}/UniversalNav.js`),Le(`https://${h}.adobeccstatic.com/unav/${f}/UniversalNav.css`,!0)]);let x=()=>{let g=ae(),C=[g.profile];return yn(C,!1),s?.forEach(R=>{if(R==="profile")return;if(R==="signup"){yn(C,!0);return}let Q=g[R];Q&&C.push(Q)}),C},T=()=>({target:t,env:h,locale:u,countryCode:fn(l?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:Ge(),os_version:navigator.platform},event:{visitor_guid:y}},children:x(),isSectionDividerRequired:!!l?.unav?.showSectionDivider,showTrayExperience:!G.matches});await window?.UniversalNav?.(T()),d||t?.style.removeProperty("min-width");let $=g=>{window?.UniversalNav?.reload(T())};return G.addEventListener("change",()=>{$()}),{reloadUnav:$,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new p(r)}}});var wn,le,qe,je=m(()=>{"use strict";Re();Oe();Z();L();N();wn=()=>new Promise(e=>{setTimeout(e,0)}),le=async e=>{let{profileType:n,mountpoint:t,decorateProfile:r}=e;if((!window.adobeIMS?.isSignedInUser()||n!=="Unav")&&q({}),n==="Unav"&&t)try{await wn();let o=await Be(t);return o instanceof p?(E(o.message),{reloadUnav:()=>{},errors:new Set([o])}):{reloadUnav:o.reloadUnav,errors:o.errors}}catch{return{reloadUnav:()=>{},errors:new Set([new p("Failed to load UNAV")])}}if(r)try{await wn();let o=await r();return{reloadUnav:()=>{},errors:o}}catch{return{reloadUnav:()=>{},errors:new Set([new p("An unexpected error occurred in decorateProfile")])}}return{reloadUnav:()=>{},errors:new Set}},qe=async e=>{if(window.adobeIMS?.initialized)return le(e);try{return await $e(),le(e)}catch(n){return n instanceof Error&&n.message==="IMS timeout"?(window.addEventListener("onImsLibInstance",()=>le(e)),{reloadUnav:()=>{},errors:new Set}):{reloadUnav:()=>{},errors:new Set([new p("Failed to load IMS")])}}}});var ze,Fe=m(()=>{"use strict";v();ze=e=>{let n=document.createElement("div");n.innerHTML=e;let t=n.querySelector(":scope > div > div:nth-child(2)"),o=t?.querySelector('[href$="?sign-in=true"]')?.textContent?.trim()??null;return{hasDropdown:t!==null,dropdownHTML:t?.innerHTML??null,signInText:o?w(o):null}}});var Pt,xn,We=m(()=>{"use strict";Pt=`/**
 * Profile Component Styles
 * 
 * Styles for sign-in button and dropdown menu.
 * Uses Popover API for dropdown behavior.
 */

/* Profile container */
.feds-profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Sign-in button base styles */
.feds-signIn {
  padding: 5px 16px 6px;
  border: 2px solid #dadada;
  background: none;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  line-height: 16.8px;
  border-radius: 16px;
  font-weight: 700;
  white-space: nowrap;
  text-align: start;
  width: 100%;
}

.feds-signIn:hover {
  background: #e9e9e9;
  border-color: #c6c6c6;
}

.feds-signIn:active {
  background: #e5e5e5;
}

.feds-signIn:focus {
  outline: 2px solid #0265dc;
  outline-offset: 2px;
}

/* Sign-in dropdown popup */
.feds-signIn-dropdown {
  margin-top: 0;
  padding: 12px 0;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  inset: 64px auto auto auto;
  right: anchor(right);
}

.feds-signIn-dropdown:popover-open {
  display: block;
}

/* Dropdown items */
.feds-signIn-dropdown ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feds-signIn-dropdown li {
  margin: 0;
}

.feds-signIn-dropdown button,
.feds-signIn-dropdown a {
  display: block;
  padding: 6px 32px;
  text-align: left;
  text-decoration: none;
  color: #2c2c2c;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
}

.feds-signIn-dropdown button {
  width: 100%;
  line-height: 27px;
  border-radius: 0;
  font-weight: normal;
}

.feds-signIn-dropdown button:hover,
.feds-signIn-dropdown a:hover {
  background: #f5f5f5;
}

.feds-signIn-dropdown button:focus,
.feds-signIn-dropdown a:focus {
  outline: 2px solid #0265dc;
  outline-offset: -2px;
}

/* ============================================================================
   Signed-In Profile Styles
   ============================================================================ */

/* Profile button with avatar */
.feds-profile-button {
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s;

  /* Define anchor for positioning dropdown */
  anchor-name: --profile-button;
}

.feds-profile-button:hover {
  opacity: 0.8;
}

.feds-profile-button:focus {
  outline: 2px solid #0265dc;
  outline-offset: 2px;
}

/* Avatar image */
.feds-profile-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

/* Profile dropdown menu */
.feds-profile-menu {
  padding: 0;
  background: #fff;
  border: 1px solid #e1e1e1;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  inset: 64px auto auto auto;
  right: anchor(right);
}

.feds-profile-menu:popover-open {
  display: block;
}

/* Profile header section */
.feds-profile-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  text-decoration: none;
  color: inherit;
  border-bottom: 1px solid #e1e1e1;
  transition: background-color 0.2s;
}

.feds-profile-header:hover {
  background: #f5f5f5;
}

.feds-profile-header:focus {
  outline: 2px solid #0265dc;
  outline-offset: -2px;
}

.feds-profile-header .feds-profile-img {
  cursor: pointer;
  flex-shrink: 0;
}

/* Profile details */
.feds-profile-details {
  flex: 1;
  min-width: 0;
  overflow: hidden;
}

.feds-profile-name {
  margin: 0 0 4px 0;
  font-size: 14px;
  font-weight: 600;
  color: #2c2c2c;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feds-profile-email {
  margin: 0 0 4px 0;
  font-size: 12px;
  color: #6e6e6e;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.feds-profile-account {
  margin: 0;
  font-size: 12px;
  color: #0265dc;
  font-weight: 500;
}

/* Local menu section */
.feds-local-menu {
  padding: 8px 0;
  border-bottom: 1px solid #e1e1e1;
}

.feds-local-menu ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.feds-local-menu li {
  margin: 0;
}

.feds-local-menu a {
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  color: #2c2c2c;
  font-size: 14px;
  transition: background-color 0.2s;
}

.feds-local-menu a:hover {
  background: #f5f5f5;
}

.feds-local-menu a:focus {
  outline: 2px solid #0265dc;
  outline-offset: -2px;
}

/* Profile actions list */
.feds-profile-actions {
  list-style: none;
  margin: 0;
  padding: 8px 0;
}

.feds-profile-actions li {
  margin: 0;
}

.feds-profile-action {
  display: block;
  width: 100%;
  padding: 8px 16px;
  text-align: left;
  text-decoration: none;
  color: #2c2c2c;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  transition: background-color 0.2s;
}

.feds-profile-action:hover {
  background: #f5f5f5;
}

.feds-profile-action:focus {
  outline: 2px solid #0265dc;
  outline-offset: -2px;
}`,xn=document.createElement("style");xn.textContent=Pt;document.head.appendChild(xn)});var Ln,Cn,It,Ze,Ve=m(()=>{"use strict";We();v();Ln=e=>{let n=w(e);return`
  <button 
    class="feds-signIn" 
    daa-ll="${n}"
    data-signin-trigger
  >
    ${n}
  </button>
`},Cn=(e,n)=>{let t="feds-signIn-dropdown",r=w(e);return`
    <button 
      class="feds-signIn" 
      daa-ll="${r}"
      aria-expanded="false"
      aria-haspopup="true"
      popovertarget="${t}"
    >
      ${r}
    </button>
    <div 
      id="${t}" 
      popover 
      class="feds-signIn-dropdown"
    >
      ${n}
    </div>
  `},It=(e,n)=>n?e.replace(/<a[^>]*href="[^"]*\?sign-in=true"[^>]*>.*?<\/a>/,`<button class="feds-signIn" data-signin-trigger>${n}</button>`):e,Ze=(e,n)=>{let{hasDropdown:t,dropdownHTML:r,signInText:o}=n;if(!t)return Ln(e);let a=It(r||"",o);return Cn(e,a)}});var En={};ve(En,{buildAccountUrl:()=>de,buildAdminConsoleUrl:()=>pe,extractLocalMenu:()=>At,fetchProfileData:()=>Sn,getLanguage:()=>Ke,truncateEmail:()=>ce});var Sn,At,ce,Ke,de,pe,ue=m(()=>{"use strict";v();L();Sn=async()=>{let e=new Set;try{if(!window.adobeIMS)return e.add(new p("ProfileData: Adobe IMS not loaded")),[null,e];let n=window.adobeIMS.getAccessToken();if(!n?.token)return e.add(new p("ProfileData: No access token available")),[null,e];let r=b().env?.adobeIO;if(!r)return e.add(new p("ProfileData: Adobe IO hostname not configured")),[null,e];let o=new Headers({Authorization:`Bearer ${n.token}`}),[a,i]=await Promise.all([fetch(`https://${r}/profile`,{headers:o}).then(l=>{if(l.status!==200)throw new p(`ProfileData: Failed to fetch profile data with status ${l.status}`);return l.json()}),window.adobeIMS.getProfile()]),{sections:d,user:s}=a;return s?.avatar?[{avatar:s.avatar,displayName:i.displayName,email:i.email,sections:d||{}},e]:(e.add(new p("ProfileData: Invalid response - missing avatar")),[null,e])}catch{return e.add(new p("ProfileData: Exception fetching profile data")),[null,e]}},At=e=>{let n=document.createElement("div");n.innerHTML=e;let r=n.querySelector("h5")?.parentElement;return r?r.innerHTML:""},ce=e=>{let[t,r]=e.split("@");if(!r)return e;let[o,...a]=r.split("."),i=a.join("."),d=t.length>12?`${t.slice(0,12)}\u2026`:t,s=o.length>12?`${o.slice(0,12)}\u2026`:o;return`${d}@${s}.${i}`},Ke=()=>{try{let n=b().locale?.ietf||"en-US",t={"no-NO":"nb"};return t[n]?t[n]:n.split("-")[0]}catch{return"en"}},de=(e="")=>{try{return`https://${b().env?.account||"account.adobe.com"}${e}`}catch{return`https://account.adobe.com${e}`}},pe=(e="")=>{try{return`https://${b().env?.adminconsole||"adminconsole.adobe.com"}${e}`}catch{return`https://adminconsole.adobe.com${e}`}}});var Tn={};ve(Tn,{renderSignedInProfile:()=>kn});var kn,Je=m(()=>{"use strict";ue();v();We();kn=e=>{let{avatar:n,displayName:t,email:r,sections:o,placeholders:a,localMenuHTML:i}=e,d=Ke(),s=ce(r),l=w(n),u=w(t),h=w(s),y=w(a.get("profile-avatar")||"Profile avatar"),f=`
    <button 
      class="feds-profile-button" 
      popovertarget="feds-profile-menu"
      aria-label="${u}"
      daa-ll="Account">
      <img 
        class="feds-profile-img" 
        src="${l}" 
        alt="${y}">
    </button>
  `,x=w(a.get("view-account")||"View Account"),T=w(de(`profile?lang=${d}`)),g=`
    <div id="feds-profile-menu" class="feds-profile-menu" popover>
      <a 
        href="${w(de(`?lang=${d}`))}" 
        class="feds-profile-header"
        daa-ll="${x}"
        aria-label="${x}">
        <img 
          class="feds-profile-img" 
          src="${l}" 
          tabindex="0"
          alt="${y}"
          data-profile-url="${T}">
        <div class="feds-profile-details">
          <p class="feds-profile-name">${u}</p>
          <p class="feds-profile-email">${h}</p>
          <p class="feds-profile-account">${x}</p>
        </div>
      </a>
      
      ${i?`<div class="feds-local-menu">${i}</div>`:""}
      
      <ul class="feds-profile-actions">
        ${o?.manage?.items?.team?.id?`<li><a class="feds-profile-action" href="${w(pe("/team"))}">${w(a.get("manage-teams")||"Manage Teams")}</a></li>`:""}
        ${o?.manage?.items?.enterprise?.id?`<li><a class="feds-profile-action" href="${w(pe(""))}">${w(a.get("manage-enterprise")||"Manage Enterprise")}</a></li>`:""}
        <li>
          <a href="#" class="feds-profile-action" data-signout-trigger daa-ll="${w(a.get("sign-out")||"Sign Out")}">
            ${w(a.get("sign-out")||"Sign Out")}
          </a>
        </li>
      </ul>
    </div>
  `;return f+g}});var Pn={};ve(Pn,{attachProfileEvents:()=>Mn});var Mn,Xe=m(()=>{"use strict";Mn=(e,n=window.location)=>{let t=e.querySelector("#feds-profile-menu"),r=e.querySelector("[data-signout-trigger]"),o=t?.querySelector("[data-profile-url]");r&&r.addEventListener("click",a=>{a.preventDefault(),window.dispatchEvent(new Event("feds:signOut")),window?.adobeIMS&&window?.adobeIMS?.signOut()}),o&&o.addEventListener("click",a=>{a.preventDefault();let i=o.getAttribute("data-profile-url");i&&n.assign(i)})}});var Ye,In,_t,$t,Rt,Qe,fe=m(()=>{"use strict";F();se();Fe();Ve();[Ye,In]=(()=>{let e=null;return[n=>{e=n},()=>e]})(),_t=e=>{e.querySelectorAll("[data-signin-trigger]").forEach(t=>{t.addEventListener("click",r=>{if(r.preventDefault(),!window.adobeIMS)return;let o=ie();window.adobeIMS.signIn(o)})})},$t=async(e,n)=>{let t=new Set,r=await z(),o=r.get("sign-in")||"Sign In";r.has("sign-in");let a=ze(e),i=Ze(o,a);return n.innerHTML=i,_t(n),t},Rt=async(e,n)=>{let t=new Set,{fetchProfileData:r,extractLocalMenu:o}=await Promise.resolve().then(()=>(ue(),En)),[a,i]=await r();if(i.forEach(y=>t.add(y)),!a)return t;let d=await z(),s=o(e),{renderSignedInProfile:l}=await Promise.resolve().then(()=>(Je(),Tn)),u=l({avatar:a.avatar,displayName:a.displayName,email:a.email,sections:a.sections,placeholders:d,localMenuHTML:s});n.innerHTML=u;let{attachProfileEvents:h}=await Promise.resolve().then(()=>(Xe(),Pn));return h(n),t},Qe=async e=>{let n=In();if(!n)return new Set;let t=e.querySelector(".feds-profile");return t?window?.adobeIMS?.isSignedInUser()?Rt(n,t):$t(n,t):new Set}});var be=m(()=>{"use strict";Ee();Te();L();_();Pe();_e();v();F();Re();je();Z();se();Oe();fe();Fe();Ve();Je();ue();Xe()});var Ht,E,N=m(()=>{"use strict";be();Ht="feds-milo",E=(e,n="default",t="e")=>{let{locale:r}=b(),o=A("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Ht,sampleRate:1,tags:n,errorType:t})}});var c,p,L=m(()=>{"use strict";N();c=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},p=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&E(n)}}});L();Pe();_e();v();_();var An=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(Ut(e));if(!t)throw new Error("");let[{text:r,href:o},a]=S(t);return[{type:e.type,text:r,href:o},a]},V=An({type:"PrimaryCTA"}),K=An({type:"SecondaryCTA"}),_n=e=>M(V).or(K).eval(e),Ut=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var J=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,X=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,$n=e=>e.type==="PrimaryCTA"?J(e):X(e);_();var j=({text:e,href:n})=>`<a class="feds-link" href="${n}">${e}</a>`;L();v();L();v();_();Ee();var Rn=e=>{let[n,t]=Nt(e);return(()=>{switch(n.type){case"SingleColumnSection":return[[{type:"Tab",title:n.title,columns:[n.items],CTA:en(n)}],t];case"SingleColumnSectionList":return[n.sections.flatMap(r=>({type:"Tab",title:r.title,columns:[r.items],CTA:en(r)})),t];case"MultiColumnSection":return[[{type:"Tab",title:n.title,columns:n.columns,CTA:en(n)}],t];case"MenuPromo":return[[{type:"Tab",title:"More",columns:n,CTA:void 0}],t];default:return[[],[]]}})()},en=e=>e.type==="SingleColumnSection"?e.items.find(n=>n.type==="PrimaryCTA"):e.columns.flat().find(n=>n.type==="PrimaryCTA"),Nt=e=>M(nn).or(Nn).or(Gt).or(tn).eval(e),Hn=e=>k(e,n=>M(Se).or(V).or(K).or(S).eval(n)),Un=e=>e.flatMap(n=>n.nodeName==="UL"?[...n.querySelectorAll("li > a")]:[n]),Nn=e=>{if(e.querySelector(".gnav-promo"))throw new Error("This is a promo");if(e.querySelector(".column-break"))throw new c("Has a column break");let n=e.firstElementChild;if(n===null)throw new c("No Children");let t=n.nodeName==="H5"?n.textContent??null:null,r=n.nodeName==="H5"?D(n):[...e.children],o=Un(r),[a,i]=Hn(o);return[{type:"SingleColumnSection",title:t,items:a},i]},nn=e=>{if(e.querySelector(".column-break"))throw new c("Has a column break");let n=[...e.querySelectorAll("h5")];if(n.length<=1)throw new c("Not a section list");let t=a=>{let i=document.createElement("div"),d=xe(s=>s.nodeName!=="H5")(D(a));return i.append(a,...d),Nn(i)},[r,o]=k(n,t);return[{type:"SingleColumnSectionList",sections:r},o]},Gt=e=>{if(!e.querySelector(".column-break"))throw new c("Expected a Column Break");let n=e.firstElementChild;if(n===null||n.nodeName!=="H5")throw new c(Y.expectedH5);let t=n.textContent;if(t===""||t===null)throw new c(Y.emptyTitle);let o=sn(d=>d.classList.contains("column-break"))(D(n)).map(Un),[a,i]=k(o,Hn);return[{type:"MultiColumnSection",title:t,columns:a},i]},tn=e=>{if(e===null)throw new c(Y.elementNull);let n=e.querySelector(".gnav-promo, .gnav-image");if(n===null)throw new c(Y.noPromo);let t=n.innerHTML??"";if(t==="")throw new c(Y.noPromoContent);return[{type:"MenuPromo",content:t},[]]},Y={expectedH5:"Expected an H5 element for the title ",emptyTitle:"Expected Title to not be empty",elementNull:"Element is null",noPromo:"Promo or gnav image not found",noPromoContent:"Promo Content not found"};_();var Dn=e=>{let n=new Set;if(e===null)throw new c(Gn.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new p(Gn.noTitle));let r=(async()=>{try{let s=e.querySelector("h2 > a"),l=new URL(s?.href??""),u=await B(l);if(u instanceof c)throw new Error(u.message);let h=await dn(u);if(h instanceof c)throw new Error(h.message);let y=[...h.children],[f,x]=k(y,Rn);return[f.flat(),x]}catch(s){throw new c(s?.message)}})(),o=e.querySelectorAll(".cross-cloud-menu ul > li > a"),[a,i]=k([...o],S),d=e.classList.contains("section");return[{type:"MegaMenu",title:t,tabs:r,crossCloudMenu:a,isSection:d},[...i,...n]]},Gn={elementNull:"Element is null",noTitle:"Large Menu has no Title"};v();var Dt=`.mega-menu::after {
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

`,Bn=document.createElement("style");Bn.textContent=Dt;document.head.appendChild(Bn);var On=e=>{let n=()=>({name:"",description:""}),t=[0,1,2,3].map(n);return`
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
  `},qn=({title:e,isSection:n})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${U(e)}"
          class="mega-menu feds-link"
          popovertarget="${U(e)}"
  >
    ${e}
  </button>
  <div id="${U(e)}" popover class="feds-popup${n?"":" section"}" aria-hidden="true">
    <ul>
    </ul>
  </div>
`;L();v();_();var zn=e=>{let n=[];if(e===null)throw new c(jn.elementNull);let t=e.querySelector("h2"),r=t?.textContent??"";r===""&&n.push(new p(jn.noTitle));let o=(()=>{if(t===null)return e;let l=document.createElement("div");return D(t).forEach(u=>l.appendChild(u)),l})(),[a,i]=M(nn).or(l=>k([...l.children],Bt)).eval(o),[d,s]=(()=>{try{return tn(e)}catch{return[null,[]]}})();return[{type:"SmallMenu",title:r,columns:a,promo:d},[...i,...s]]},Bt=e=>{if(e.nodeName!=="UL")throw new Error("");let n=[...e.querySelectorAll("ul > li > a")];return k(n,S)},jn={elementNull:"The element to be parsed is null",noTitle:"Small menu has no title"};v();Te();v();var Fn=(e,n,t,r,o)=>a=>`
  <div class="top-bar">
    ${o?e:""}
  </div>
  <div class="title">
    ${t||'<div class="breadcrumbs"></div>'}
    <h2 id="${r}-title">${n}</h2>
  </div>
  <div class="tabs" role="tablist">
    ${a.map((i,d)=>`
      <button
        role="tab"
        class="tab"
        aria-selected="false"
        aria-controls="${d}"
      >
        ${i.title===""?"<div></div>":i.title}
      </button>
    `).join("")}
  </div>
  <div class="tab-content">
    ${a.map((i,d)=>`
      <div
        id="${d}"
        role="tabpanel"
        class="${Array.isArray(i.columns)&&i.columns.flat().some(s=>s.type==="LinkGroupHeader")?"has-subheader":""}"
        hidden
      >
        <ul>
        ${Array.isArray(i.columns)?P(i.columns,s=>`
                              <ul>
                                ${P(s.filter(l=>l.type!=="PrimaryCTA"),me)}
                              </ul>
                            `):i.columns.content}
        </ul>
        <div class="sticky-cta">
          ${i.CTA?me(i.CTA):""}
        </div>
      </div>
    `.trim()).join("")}
  </div>
`.trim(),Wn=({content:e})=>e,me=e=>{switch(e.type){case"LinkGroupHeader":case"LinkGroupLink":case"LinkGroupBlue":return ke(e);case"Link":return j(e);case"PrimaryCTA":return J(e);case"SecondaryCTA":return X(e);default:return""}};var Zn=({title:e,columns:n,promo:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${U(e)}"
  >
    ${e}
  </button>
  <div class="feds-popup" id="${U(e)}">
    ${Ot(n)}
    ${t===null?"":`<li>${Wn(t)}</li>`}
  </div>
`,Ot=e=>!Array.isArray(e)&&e?.type==="SingleColumnSectionList"?qt(e):`
  <ul>
    ${P(e,n=>`
      <ul>
        ${P(n,j)}
      </ul>
    `)}
  </ul>
  `,qt=e=>`
  <ul>
    ${P(e.sections,n=>`
      <ul>
        ${n.title===null?"":`<span class="column-section-title">${n.title}</span>`}
        ${P(n.items,me)}
      </ul>
    `.trim())}
  </ul>
`.trim();L();var Vn={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Kn=e=>{if(e===null)return[{type:"Text",content:""},[new p(Vn.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new p(Vn.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var Jn=({content:e})=>e;var Xn=e=>{if(e===null)throw new c(jt.elementNull);if(e.querySelector(".gnav-brand")!==null)return Me(e);let t=e.querySelector(".large-menu");return t!==null?Dn(t):e.querySelector("h5, ul, link-group")!==null?zn(e):e.querySelector("strong")!==null?V(e):e.querySelector("em")!==null?K(e):e.querySelector("a")===null?Kn(e):S(e.querySelector("a"))},rn=e=>{switch(e.type){case"Text":return Jn(e);case"Link":return j(e);case"SecondaryCTA":return X(e);case"PrimaryCTA":return J(e);case"Brand":return Ae(e);case"SmallMenu":return Zn(e);case"MegaMenu":return qn(e);default:return console.error(`Failed to recognize component: ${e}`),""}},jt={elementNull:"Element is null"};L();_();v();fe();var Yn=(e,n)=>{let r=[...e.children].find(f=>f.querySelector(".profile"));if(r){let f=r.querySelector(".profile");f&&n==="FedsProfile"&&Ye(f.outerHTML),r.remove()}let[o,a]=k([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],S),[i,d]=k([...e.children],Xn),s=e.querySelector(".product-entry-cta"),[l,u]=(()=>{try{return _n(s)}catch{return[null,[]]}})(),h=i.filter(f=>f.type==="MegaMenu"&&f.isSection).length===1,y=[a,d,u].flat();return{breadcrumbs:o,components:i,productCTA:l,localnav:h,profileType:n,errors:y}};var zt=e=>{let n=[...e.querySelectorAll('.tabs > button[role="tab"]')],t=[...e.querySelectorAll(".tab-content > div")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var Qn=zt;v();var Ft=e=>()=>console.log(e),Wt=e=>()=>console.log(e),et=ln({mobileEventListeners:Wt,desktopEventListeners:Ft});je();fe();L();v();var nt=async({gnavSource:e,asideSource:n})=>{let t=await B(e);if(t instanceof c)return t;let r=await B(n);return{mainNav:t,aside:r}};v();var Zt=`/**
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

`,tt=document.createElement("style");tt.textContent=Zt;document.head.appendChild(tt);F();N();var ya=async e=>{let{gnavSource:n,mountpoint:t,miloConfig:r}=e,o=e.profileType??"Empty";if(!(n instanceof URL))throw E(`gnavSource is invalid: ${n}`),new c("gnavSource needs to be a URL object");try{Ce(r)}catch(l){throw E(`Failed to initialize MiloConfig: ${l}`),new c(`Failed to initialize MiloConfig: ${l}`)}he(on(e));let a=await nt(e);if(a instanceof c)throw E(a.message),a;let{mainNav:i,aside:d}=a;if(i instanceof c)throw E(i.message),i;let s=Yn(i,o);if(s instanceof c)throw E(s.message),s;return await Vt(s)(t),Jt(e)},Vt=e=>async n=>{let t=Kt(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup > ul")];r.forEach(i=>{i.innerHTML=On(i.textContent?.trim()??"")});let o=e.components.filter(i=>i.type==="MegaMenu").map(i=>i.tabs),a=await Promise.all(o.map(async(i,d)=>{let[s,l]=await i,u=n.querySelector(".feds-brand-container")?.outerHTML??"",h=r[d].parentElement?.previousElementSibling?.textContent??"",y=n.querySelector(".breadcrumbs")?.outerHTML??"",f=r[d].querySelector(".feds-popup")?.id??"",x=r.length===1,T=Fn(u,h,y,f,x)(s);return r[d].innerHTML=T,l}).flat());return n},Kt=({components:e,productCTA:n,profileType:t})=>`
<nav>
  <ul>
    ${(()=>{let r=e.find(s=>s.type==="Brand")??null,o=e.filter(s=>s.type!=="Brand"),a=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim(),i=r?rn(r):"",d=P(o,rn);return`
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
            ${d}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${n===null?"":$n(n)}
  ${t==="Unav"?'<div class="feds-utilities"></div>':t==="FedsProfile"?'<div data-cs-mask class="feds-profile"></div>':""}
</nav>
`,Jt=async e=>{let n=e.profileType??"Empty",{reloadUnav:t,errors:r}=await qe({profileType:n,mountpoint:e.mountpoint,decorateProfile:n==="Unav"?void 0:()=>Qe(e.mountpoint)}),o=new Set([...r]);return Qn(e.mountpoint),et(e.mountpoint),{closeEverything:Xt,reloadUnav:t,errors:o,setGnavTopPosition:a=>{},getGnavTopPosition:()=>0}},Xt=()=>{};export{ya as main,Jt as postRenderingTasks,Vt as renderGnav,Kt as renderGnavString};
//# sourceMappingURL=main.js.map
