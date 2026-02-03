var ot=Object.defineProperty;var f=(e,n)=>()=>(e&&(n=e(e=0)),n);var fe=(e,n)=>{for(var t in n)ot(e,t,{get:n[t],enumerable:!0})};function on(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let d=a??i??"";return n.get(d)??d}):e}var rn,it,at,me,j,z=f(()=>{"use strict";ge();U();b();rn=async e=>{let{placeholders:n}=e,{locale:t}=g(),o=`${Q()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,it(o)]);return new Map([...i,...a])},it=async e=>{try{let n=await fetch(e);if(!n.ok)throw new p(`Federal placeholders not found at ${e}`);let t=at(await n.json());if(t instanceof p)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof p)console.error(n.message);else{let t=new p(n.message);console.error(t.message)}return C(`Failed to fetch placeholders from ${e}`),new Map([])}},at=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new p(n.message)}};[me,j]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})()});function st(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let d=document.head.querySelector(`link[href="${e}"]`);if(d)return r?.("noop"),d;let s=document.createElement("link");return s.setAttribute("rel",a),n!==void 0&&s.setAttribute("id",n),t!==void 0&&s.setAttribute("as",t),o!==void 0&&s.setAttribute("crossorigin",o),i!==void 0&&s.setAttribute("fetchpriority",i),s.setAttribute("href",e),r&&(s.onload=l=>r(l.type),s.onerror=l=>r(typeof l=="string"?"error":l.type)),document.head.appendChild(s),s}function lt(e,n){return st(e,{rel:"stylesheet",callback:n})}function ye(e,n=!1){n&&lt(e)}function I(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}function pt(e){let n=dt[e];return!n&&pn[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}function un(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(pn[t]??t).split("_",2);if(t.startsWith(ve)||window.location.pathname.startsWith(`/${ve}`)){let a=t.replace(ve,"").toLowerCase();r=pt(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var N,he,an,be,G,k,S,sn,D,$,Q,ln,cn,T,R,dn,F,ct,we,g,dt,pn,ve,b=f(()=>{"use strict";w();U();z();N=window.matchMedia("(min-width: 900px)"),he={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},an=e=>n=>{let t=[],r=[];for(let o=0;o<n.length;o++){if(e(n[o])){t.push(r),r=[];continue}r.push(n[o])}return t.push(r),t},be=e=>n=>{if(n.length===0)return n;let[t,...r]=n;return e(t)?[t].concat(be(e)(r)):[]},G=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},k=e=>({eval:e,or:n=>k(t=>{try{return e(t)}catch{return n(t)}})}),S=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof c?[t,[a,...r]]:[t,r]}},[[],[]]),sn=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;N.matches?r=n(t):r=e(t),N.addEventListener("change",()=>{r?.(),r=N.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},D=async e=>{try{if(e===null)return new c("URL is null");let n=ln(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return C(`Request for ${n} failed`),new c(`Request for ${n} failed`);let r=await t.text(),o=await j(),a=on(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");return i}catch(n){return new c(n?.message)}},Q=()=>{if($)return $;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if($)return $;let n=window.location.origin;$=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&($=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),$},ln=(e="")=>{if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${Q()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${Q()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},cn=async e=>{let n=async(t,r)=>{if(t instanceof c)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let d=ln(i.href),s=new URL(d),l=await D(s);if(r.add(i.href),l instanceof c)throw l;await n(l,r);let u=i.closest("div");u?u.replaceWith(...l.children):i.replaceWith(...l.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new c(JSON.stringify(o))}};return n(e,new Set)},T=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),R=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),dn=()=>!0;F=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:l}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),l.append(i)}let d=i.dataset.loaded;if(d!=null){o(i);return}let s=l=>{i.removeEventListener("load",s),i.removeEventListener("error",s),l.type==="error"?a(new Error(`error loading script: ${i.src}`)):l.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",s),i.addEventListener("error",s)});ct=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[we,g]=(()=>{let e,n=!1;return[t=>{if(t===null){n=!1,e=void 0;return}if(!n){if(!ct(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),dt={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},pn={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};ve="langstore/"});var ee,L,A=f(()=>{"use strict";w();ee={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},L=e=>{if(e===null)throw new c(ee.elementNull);if(e.tagName!=="A")throw new c(ee.notAnchor);let n=e?.textContent??"";if(n==="")throw new c(ee.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new c(ee.hrefNotFound);return[{type:"Link",text:n,href:t},[]]}});var xe,M,ut,ft,mt,Le=f(()=>{"use strict";w();b();A();xe=e=>k(ft).or(ut).or(mt).eval(e),M={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},ut=e=>{let n=new Set;if(!e)throw new c(M.elementNull);let t=e.querySelector("p a");if(!t)throw new c(M.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new p(M.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new p(M.noHref));let a=t?.closest("p")?.nextElementSibling;if(!a)throw new c(M.noSubtitleP);let i=a.textContent??"";i===""&&n.add(new p(M.noSubtitle));let[d=null,s=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(l=>l.trim());return[{type:"LinkGroupLink",iconHref:d,iconAlt:s,title:r,href:o,subtitle:i},[...n]]},ft=e=>{if(!e)throw new c(M.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new c(M.notAHeader);let t=e.querySelector("a")?.textContent??"";if(t==="")throw new c(M.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n},[]]},mt=e=>{if(!e)throw new c(M.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=L(n);return[{type:"LinkGroupBlue",link:t},r]}});var gt,fn,mn=f(()=>{"use strict";gt=`/**
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
`,fn=document.createElement("style");fn.textContent=gt;document.head.appendChild(fn)});var Ce,vt,ht,bt,Se=f(()=>{"use strict";mn();Ce=e=>{switch(e.type){case"LinkGroupHeader":return vt(e);case"LinkGroupLink":return ht(e);case"LinkGroupBlue":return bt(e);default:return console.error(e),""}},vt=({title:e,classes:n})=>`
    <div role="heading" class="feds-link-group ${n.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `,ht=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o})=>{let i=n!==null&&e!==null?`
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
  `},bt=({link:e})=>`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue" daa-ll="${e.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`});var ne,B,yt,wt,Ee,ke=f(()=>{"use strict";w();b();ne={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},B=/(\.png|\.jpg|\.jpeg|\.svg)/i,yt=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&B.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&B.test(r)?r:null},wt=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},Ee=e=>{if(e===null)throw new c(ne.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new c(ne.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new c(ne.noLinks);let r=t.find(v=>{let x=v.textContent??"";return!B.test(v.href)&&!B.test(x)});if(!r)throw new c(ne.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),d=!a,s=!o&&!i,l=t.filter(v=>{let x=v.textContent??"";return B.test(v.href)||B.test(x)}),[u,h,y]=(()=>{let v=o?he.brand:he.company,[x=null,_=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(ue=>ue?.src).filter(ue=>ue?.length>0),[Y=null,tt=null]=l.map(yt),rt=l[0]instanceof Element?wt(l[0]):r.textContent?.trim()??"";return[Y??x??v,tt??_,rt]})(),m=r.textContent?.trim()??"",E=r.href;if(!d&&!s)return[{type:"Brand",data:{type:"NoRender"}},[]];let P=(v,x)=>{let _=x!=null&&x!=="";return dn()&&_?x:v},H=u.startsWith("<svg")?{type:"inline-svg",svgContent:P(u,h),alt:y}:{type:"image",src:P(u,h),alt:y};return d&&s?[{type:"Brand",data:{type:"LabelledBrand",href:E,label:m,image:H}},[]]:d&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:E,image:H,alt:y}},[]]:d&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:E,image:H,alt:y}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:E,label:m}},[]]}});var xt,gn,vn=f(()=>{"use strict";xt=`.feds-brand-container {
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
}`,gn=document.createElement("style");gn.textContent=xt;document.head.appendChild(gn)});var Te,te,Me,Pe=f(()=>{"use strict";vn();Te=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},te=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),Me=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return te(n.href,Te(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return te(n.href,Te(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return te(n.href,Te(n.image,!1),t)}case"BrandLabelOnly":return te(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}}});async function Ae(){return Ie=Ie||new Promise((e,n)=>{let t=g(),{locale:r,imsClientId:o,imsScope:a,env:i,base:d,adobeid:s,imsTimeout:l}=t;if(!o){n(new Error("Missing IMS Client ID"));return}let[u,h,y]=[I("universal-nav")?.trim(),I("adobe-home-redirect"),I("ims-guest-token")],m=`AdobeID,openid,gnav${u&&u!=="off"?",pps.read,firefly_api,additional_info.roles,read_organizations,account_cluster.read":""}`,E=setTimeout(()=>n(new Error("IMS timeout")),l||5e3);window.adobeid={client_id:o,scope:a||m,locale:r?.ietf?.replace("-","_")||"en_US",redirect_uri:h==="on"?`https://www${i.name!=="prod"?".stage":""}.adobe.com${r.prefix}`:void 0,autoValidateToken:!0,environment:i.ims,useLocalStorage:!1,onReady:()=>{e(),clearTimeout(E)},onError:n,...y==="on"&&{api_parameters:{check_token:{guest_allowed:!0}},enableGuestAccounts:!0,enableGuestTokenForceRefresh:!0},...s};let P=Lt.searchParams.get("useAlternateImsDomain")?"https://auth.services.adobe.com/imslib/imslib.min.js":`${d}/deps/imslib.min.js`;F(P)}).then(()=>{window.adobeIMS?.isSignedInUser()||g().entitlements?.([])}).catch(e=>{throw g().entitlements?.([]),e}),Ie}var Lt,Ie,_e=f(()=>{"use strict";b();Lt=new URL(window.location.href)});function Re(e,n=!1){let d=(/uc_carts=/.test(document.cookie)?e:e?.filter(l=>l!=="cart"))??[],s=d.length??3;if(n){let l=d.filter(h=>hn.includes(h)).length;return`calc(92px + ${l*32}px + ${l*.25}rem)`}return`calc(${s*32}px + ${(s-1)*.25}rem)`}var hn,$e,O,Ct,He,St,Ue,Ne,W=f(()=>{"use strict";hn=["appswitcher","help"],$e={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[O,Ct]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();He=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys($e).find(r=>$e[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},St={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},Ue=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(St))if(e.includes(n))return t;return"linux"},Ne=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0}});function Tt(){let{unav:e}=g();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var re,Et,kt,oe,ie=f(()=>{"use strict";W();b();re=()=>{try{return g().signInContext||{}}catch{return{}}},Et=()=>{let e=g();return I("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},kt=()=>{let n=g()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{O(i)}).catch(()=>{O({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};oe=()=>{let e=g();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:kt()},signInCtaStyle:Et(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(re())},onSignUp:()=>{window.adobeIMS?.signIn(re())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Tt()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}}});var bn,Ge,De=f(()=>{"use strict";w();b();W();ie();bn=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},Ge=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new p('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new p('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new p('metadata "universal-nav" has no value'));let d=!window.adobeIMS?.isSignedInUser(),s=i.split(",").map(v=>v.trim()).filter(v=>Object.keys(oe()).includes(v)||v==="signup");if(d){let v=Re(s,d);t.style.setProperty("min-width",v)}let l;try{l=g()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let u=He(l.locale),h=l.env.name==="prod"?"prod":"stage",y=await Ne(),m=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(m??"")||(m="1.5"),await Promise.all([F(`https://${h}.adobeccstatic.com/unav/${m}/UniversalNav.js`),ye(`https://${h}.adobeccstatic.com/unav/${m}/UniversalNav.css`,!0)]);let E=()=>{let v=oe(),x=[v.profile];return bn(x,!1),s?.forEach(_=>{if(_==="profile")return;if(_==="signup"){bn(x,!0);return}let Y=v[_];Y&&x.push(Y)}),x},P=()=>({target:t,env:h,locale:u,countryCode:un(l?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:Ue(),os_version:navigator.platform},event:{visitor_guid:y}},children:E(),isSectionDividerRequired:!!l?.unav?.showSectionDivider,showTrayExperience:!N.matches});await window?.UniversalNav?.(P()),d||t?.style.removeProperty("min-width");let H=v=>{window?.UniversalNav?.reload(P())};return N.addEventListener("change",()=>{H()}),{reloadUnav:H,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new p(r)}}});var yn,ae,Be,Oe=f(()=>{"use strict";_e();De();W();w();U();yn=()=>new Promise(e=>{setTimeout(e,0)}),ae=async e=>{let{profileType:n,mountpoint:t,decorateProfile:r}=e;if((!window.adobeIMS?.isSignedInUser()||n!=="Unav")&&O({}),n==="Unav"&&t)try{await yn();let o=await Ge(t);return o instanceof p?(C(o.message),{reloadUnav:()=>{},errors:new Set([o])}):{reloadUnav:o.reloadUnav,errors:o.errors}}catch{return{reloadUnav:()=>{},errors:new Set([new p("Failed to load UNAV")])}}if(r)try{await yn();let o=await r();return{reloadUnav:()=>{},errors:o}}catch{return{reloadUnav:()=>{},errors:new Set([new p("An unexpected error occurred in decorateProfile")])}}return{reloadUnav:()=>{},errors:new Set}},Be=async e=>{if(window.adobeIMS?.initialized)return ae(e);try{return await Ae(),ae(e)}catch(n){return n instanceof Error&&n.message==="IMS timeout"?(window.addEventListener("onImsLibInstance",()=>ae(e)),{reloadUnav:()=>{},errors:new Set}):{reloadUnav:()=>{},errors:new Set([new p("Failed to load IMS")])}}}});var qe,je=f(()=>{"use strict";qe=e=>{let n=document.createElement("div");n.innerHTML=e;let t=n.querySelector(":scope > div > div:nth-child(2)");return{hasDropdown:t!==null,dropdownHTML:t?.innerHTML??null}}});var Mt,wn,ze=f(()=>{"use strict";Mt=`/**
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
}`,wn=document.createElement("style");wn.textContent=Mt;document.head.appendChild(wn)});var xn,Ln,Pt,Fe,We=f(()=>{"use strict";ze();xn=e=>`
  <button 
    class="feds-signIn" 
    daa-ll="${e}"
    data-signin-trigger
  >
    ${e}
  </button>
`,Ln=(e,n)=>{let t="feds-signIn-dropdown";return`
    <button 
      class="feds-signIn" 
      daa-ll="${e}"
      aria-expanded="false"
      aria-haspopup="true"
      popovertarget="${t}"
    >
      ${e}
    </button>
    <div 
      id="${t}" 
      popover 
      class="feds-signIn-dropdown"
    >
      ${n}
    </div>
  `},Pt=e=>{let n=document.createElement("div");n.innerHTML=e;let t=n.querySelector('[href$="?sign-in=true"]');if(t){let o=`<button class="feds-signIn" data-signin-trigger>${t.textContent||""}</button>`;t.outerHTML=o}return n.innerHTML},Fe=(e,n,t)=>{if(!n)return xn(e);let r=Pt(t||"");return Ln(e,r)}});var Sn={};fe(Sn,{buildAccountUrl:()=>se,buildAdminConsoleUrl:()=>le,extractLocalMenu:()=>It,fetchProfileData:()=>Cn,getLanguage:()=>Ze,truncateEmail:()=>Ve});var Cn,It,Ve,Ze,se,le,ce=f(()=>{"use strict";b();w();Cn=async()=>{let e=new Set;try{if(!window.adobeIMS)return e.add(new p("ProfileData: Adobe IMS not loaded")),[null,e];let n=window.adobeIMS.getAccessToken();if(!n?.token)return e.add(new p("ProfileData: No access token available")),[null,e];let r=g().env?.adobeIO;if(!r)return e.add(new p("ProfileData: Adobe IO hostname not configured")),[null,e];let o=new Headers({Authorization:`Bearer ${n.token}`}),[a,i]=await Promise.all([fetch(`https://${r}/profile`,{headers:o}),window.adobeIMS.getProfile()]);if(a.status!==200)return e.add(new p(`ProfileData: Failed to fetch profile data with status ${a.status}`)),[null,e];let d=await a.json(),{sections:s,user:l}=d;return l?.avatar?[{avatar:l.avatar,displayName:i.displayName,email:i.email,sections:s||{}},e]:(e.add(new p("ProfileData: Invalid response - missing avatar")),[null,e])}catch{return e.add(new p("ProfileData: Exception fetching profile data")),[null,e]}},It=e=>{let n=document.createElement("div");n.innerHTML=e;let r=n.querySelector("h5")?.parentElement;return r?r.innerHTML:""},Ve=e=>{let[t,r]=e.split("@");if(!r)return e;let[o,...a]=r.split("."),i=a.join("."),d=t.length>12?`${t.slice(0,12)}\u2026`:t,s=o.length>12?`${o.slice(0,12)}\u2026`:o;return`${d}@${s}.${i}`},Ze=()=>{try{let n=g().locale?.ietf||"en-US",t={"no-NO":"nb"};return t[n]?t[n]:n.split("-")[0]}catch{return"en"}},se=(e="")=>{try{return`https://${g().env?.account||"account.adobe.com"}${e}`}catch{return`https://account.adobe.com${e}`}},le=(e="")=>{try{return`https://${g().env?.adminconsole||"adminconsole.adobe.com"}${e}`}catch{return`https://adminconsole.adobe.com${e}`}}});var kn={};fe(kn,{renderSignedInProfile:()=>En});var En,Ke=f(()=>{"use strict";ce();ze();En=e=>{let{avatar:n,displayName:t,email:r,sections:o,placeholders:a,localMenuHTML:i}=e,d=Ze(),s=Ve(r),l=`
    <button 
      class="feds-profile-button" 
      popovertarget="feds-profile-menu"
      aria-label="${t}"
      daa-ll="Account">
      <img 
        class="feds-profile-img" 
        src="${n}" 
        alt="${a.get("profile-avatar")||"Profile avatar"}">
    </button>
  `,u=`
    <div id="feds-profile-menu" class="feds-profile-menu" popover>
      <a 
        href="${se(`?lang=${d}`)}" 
        class="feds-profile-header"
        daa-ll="${a.get("view-account")||"View Account"}"
        aria-label="${a.get("view-account")||"View Account"}">
        <img 
          class="feds-profile-img" 
          src="${n}" 
          tabindex="0"
          alt="${a.get("profile-avatar")||"Profile avatar"}"
          data-profile-url="${se(`profile?lang=${d}`)}">
        <div class="feds-profile-details">
          <p class="feds-profile-name">${t}</p>
          <p class="feds-profile-email">${s}</p>
          <p class="feds-profile-account">${a.get("view-account")||"View Account"}</p>
        </div>
      </a>
      
      ${i?`<div class="feds-local-menu">${i}</div>`:""}
      
      <ul class="feds-profile-actions">
        ${o?.manage?.items?.team?.id?`<li><a class="feds-profile-action" href="${le("/team")}">${a.get("manage-teams")||"Manage Teams"}</a></li>`:""}
        ${o?.manage?.items?.enterprise?.id?`<li><a class="feds-profile-action" href="${le("")}">${a.get("manage-enterprise")||"Manage Enterprise"}</a></li>`:""}
        <li>
          <a href="#" class="feds-profile-action" data-signout-trigger daa-ll="${a.get("sign-out")||"Sign Out"}">
            ${a.get("sign-out")||"Sign Out"}
          </a>
        </li>
      </ul>
    </div>
  `;return l+u}});var Mn={};fe(Mn,{attachProfileEvents:()=>Tn});var Tn,Je=f(()=>{"use strict";Tn=(e,n=window.location)=>{let t=e.querySelector("#feds-profile-menu"),r=e.querySelector("[data-signout-trigger]"),o=t?.querySelector("[data-profile-url]");r&&r.addEventListener("click",a=>{a.preventDefault(),window.dispatchEvent(new Event("feds:signOut")),window?.adobeIMS&&window?.adobeIMS?.signOut()}),o&&o.addEventListener("click",a=>{a.preventDefault();let i=o.getAttribute("data-profile-url");i&&n.assign(i)})}});var Xe,Pn,At,_t,$t,Ye,de=f(()=>{"use strict";z();ie();je();We();[Xe,Pn]=(()=>{let e=null;return[n=>{e=n},()=>e]})(),At=e=>{e.querySelectorAll("[data-signin-trigger]").forEach(t=>{t.addEventListener("click",r=>{if(r.preventDefault(),!window.adobeIMS)return;let o=re();window.adobeIMS.signIn(o)})})},_t=async(e,n)=>{let t=new Set,r=await j(),o=r.get("sign-in")||"Sign In";r.has("sign-in");let a=qe(e),i=Fe(o,a.hasDropdown,a.dropdownHTML);return n.innerHTML=i,At(n),t},$t=async(e,n)=>{let t=new Set,{fetchProfileData:r,extractLocalMenu:o}=await Promise.resolve().then(()=>(ce(),Sn)),[a,i]=await r();if(i.forEach(y=>t.add(y)),!a)return t;let d=await j(),s=o(e),{renderSignedInProfile:l}=await Promise.resolve().then(()=>(Ke(),kn)),u=l({avatar:a.avatar,displayName:a.displayName,email:a.email,sections:a.sections,placeholders:d,localMenuHTML:s});n.innerHTML=u;let{attachProfileEvents:h}=await Promise.resolve().then(()=>(Je(),Mn));return h(n),t},Ye=async e=>{let n=Pn();if(!n)return new Set;let t=e.querySelector(".feds-profile");return t?window?.adobeIMS?.isSignedInUser()?$t(n,t):_t(n,t):new Set}});var ge=f(()=>{"use strict";Le();Se();w();A();ke();Pe();b();z();_e();Oe();W();ie();De();de();je();We();Ke();ce();Je()});var Rt,C,U=f(()=>{"use strict";ge();Rt="feds-milo",C=(e,n="default",t="e")=>{let{locale:r}=g(),o=I("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Rt,sampleRate:1,tags:n,errorType:t})}});var c,p,w=f(()=>{"use strict";U();c=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},p=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&C(n)}}});w();ke();Pe();b();A();var In=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(Ht(e));if(!t)throw new Error("");let[{text:r,href:o},a]=L(t);return[{type:e.type,text:r,href:o},a]},V=In({type:"PrimaryCTA"}),Z=In({type:"SecondaryCTA"}),An=e=>k(V).or(Z).eval(e),Ht=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var K=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,J=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,_n=e=>e.type==="PrimaryCTA"?K(e):J(e);A();var q=({text:e,href:n})=>`<a class="feds-link" href="${n}">${e}</a>`;w();b();w();b();A();Le();var $n=e=>{let[n,t]=Ut(e);return(()=>{switch(n.type){case"SingleColumnSection":return[[{type:"Tab",title:n.title,columns:[n.items],CTA:Qe(n)}],t];case"SingleColumnSectionList":return[n.sections.flatMap(r=>({type:"Tab",title:r.title,columns:[r.items],CTA:Qe(r)})),t];case"MultiColumnSection":return[[{type:"Tab",title:n.title,columns:n.columns,CTA:Qe(n)}],t];case"MenuPromo":return[[{type:"Tab",title:"More",columns:n,CTA:void 0}],t];default:return[[],[]]}})()},Qe=e=>e.type==="SingleColumnSection"?e.items.find(n=>n.type==="PrimaryCTA"):e.columns.flat().find(n=>n.type==="PrimaryCTA"),Ut=e=>k(en).or(Un).or(Nt).or(nn).eval(e),Rn=e=>S(e,n=>k(xe).or(V).or(Z).or(L).eval(n)),Hn=e=>e.flatMap(n=>n.nodeName==="UL"?[...n.querySelectorAll("li > a")]:[n]),Un=e=>{if(e.querySelector(".gnav-promo"))throw new Error("This is a promo");if(e.querySelector(".column-break"))throw new c("Has a column break");let n=e.firstElementChild;if(n===null)throw new c("No Children");let t=n.nodeName==="H5"?n.textContent??null:null,r=n.nodeName==="H5"?G(n):[...e.children],o=Hn(r),[a,i]=Rn(o);return[{type:"SingleColumnSection",title:t,items:a},i]},en=e=>{if(e.querySelector(".column-break"))throw new c("Has a column break");let n=[...e.querySelectorAll("h5")];if(n.length<=1)throw new c("Not a section list");let t=a=>{let i=document.createElement("div"),d=be(s=>s.nodeName!=="H5")(G(a));return i.append(a,...d),Un(i)},[r,o]=S(n,t);return[{type:"SingleColumnSectionList",sections:r},o]},Nt=e=>{if(!e.querySelector(".column-break"))throw new c("Expected a Column Break");let n=e.firstElementChild;if(n===null||n.nodeName!=="H5")throw new c(X.expectedH5);let t=n.textContent;if(t===""||t===null)throw new c(X.emptyTitle);let o=an(d=>d.classList.contains("column-break"))(G(n)).map(Hn),[a,i]=S(o,Rn);return[{type:"MultiColumnSection",title:t,columns:a},i]},nn=e=>{if(e===null)throw new c(X.elementNull);let n=e.querySelector(".gnav-promo, .gnav-image");if(n===null)throw new c(X.noPromo);let t=n.innerHTML??"";if(t==="")throw new c(X.noPromoContent);return[{type:"MenuPromo",content:t},[]]},X={expectedH5:"Expected an H5 element for the title ",emptyTitle:"Expected Title to not be empty",elementNull:"Element is null",noPromo:"Promo or gnav image not found",noPromoContent:"Promo Content not found"};A();var Gn=e=>{let n=new Set;if(e===null)throw new c(Nn.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new p(Nn.noTitle));let r=(async()=>{try{let s=e.querySelector("h2 > a"),l=new URL(s?.href??""),u=await D(l);if(u instanceof c)throw new Error(u.message);let h=await cn(u);if(h instanceof c)throw new Error(h.message);let y=[...h.children],[m,E]=S(y,$n);return[m.flat(),E]}catch(s){throw new c(s?.message)}})(),o=e.querySelectorAll(".cross-cloud-menu ul > li > a"),[a,i]=S([...o],L),d=e.classList.contains("section");return[{type:"MegaMenu",title:t,tabs:r,crossCloudMenu:a,isSection:d},[...i,...n]]},Nn={elementNull:"Element is null",noTitle:"Large Menu has no Title"};b();var Gt=`.mega-menu::after {
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

`,Dn=document.createElement("style");Dn.textContent=Gt;document.head.appendChild(Dn);var Bn=e=>{let n=()=>({name:"",description:""}),t=[0,1,2,3].map(n);return`
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
  `},On=({title:e,isSection:n})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${R(e)}"
          class="mega-menu feds-link"
          popovertarget="${R(e)}"
  >
    ${e}
  </button>
  <div id="${R(e)}" popover class="feds-popup${n?"":" section"}" aria-hidden="true">
    <ul>
    </ul>
  </div>
`;w();b();A();var jn=e=>{let n=[];if(e===null)throw new c(qn.elementNull);let t=e.querySelector("h2"),r=t?.textContent??"";r===""&&n.push(new p(qn.noTitle));let o=(()=>{if(t===null)return e;let l=document.createElement("div");return G(t).forEach(u=>l.appendChild(u)),l})(),[a,i]=k(en).or(l=>S([...l.children],Dt)).eval(o),[d,s]=(()=>{try{return nn(e)}catch{return[null,[]]}})();return[{type:"SmallMenu",title:r,columns:a,promo:d},[...i,...s]]},Dt=e=>{if(e.nodeName!=="UL")throw new Error("");let n=[...e.querySelectorAll("ul > li > a")];return S(n,L)},qn={elementNull:"The element to be parsed is null",noTitle:"Small menu has no title"};b();Se();b();var zn=(e,n,t,r,o)=>a=>`
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
        ${Array.isArray(i.columns)?T(i.columns,s=>`
                              <ul>
                                ${T(s.filter(l=>l.type!=="PrimaryCTA"),pe)}
                              </ul>
                            `):i.columns.content}
        </ul>
        <div class="sticky-cta">
          ${i.CTA?pe(i.CTA):""}
        </div>
      </div>
    `.trim()).join("")}
  </div>
`.trim(),Fn=({content:e})=>e,pe=e=>{switch(e.type){case"LinkGroupHeader":case"LinkGroupLink":case"LinkGroupBlue":return Ce(e);case"Link":return q(e);case"PrimaryCTA":return K(e);case"SecondaryCTA":return J(e);default:return""}};var Wn=({title:e,columns:n,promo:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${R(e)}"
  >
    ${e}
  </button>
  <div class="feds-popup" id="${R(e)}">
    ${Bt(n)}
    ${t===null?"":`<li>${Fn(t)}</li>`}
  </div>
`,Bt=e=>!Array.isArray(e)&&e?.type==="SingleColumnSectionList"?Ot(e):`
  <ul>
    ${T(e,n=>`
      <ul>
        ${T(n,q)}
      </ul>
    `)}
  </ul>
  `,Ot=e=>`
  <ul>
    ${T(e.sections,n=>`
      <ul>
        ${n.title===null?"":`<span class="column-section-title">${n.title}</span>`}
        ${T(n.items,pe)}
      </ul>
    `.trim())}
  </ul>
`.trim();w();var Vn={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Zn=e=>{if(e===null)return[{type:"Text",content:""},[new p(Vn.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new p(Vn.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var Kn=({content:e})=>e;var Jn=e=>{if(e===null)throw new c(qt.elementNull);if(e.querySelector(".gnav-brand")!==null)return Ee(e);let t=e.querySelector(".large-menu");return t!==null?Gn(t):e.querySelector("h5, ul, link-group")!==null?jn(e):e.querySelector("strong")!==null?V(e):e.querySelector("em")!==null?Z(e):e.querySelector("a")===null?Zn(e):L(e.querySelector("a"))},tn=e=>{switch(e.type){case"Text":return Kn(e);case"Link":return q(e);case"SecondaryCTA":return J(e);case"PrimaryCTA":return K(e);case"Brand":return Me(e);case"SmallMenu":return Wn(e);case"MegaMenu":return On(e);default:return console.error(`Failed to recognize component: ${e}`),""}},qt={elementNull:"Element is null"};w();A();b();de();var Xn=(e,n)=>{let r=[...e.children].find(m=>m.querySelector(".profile"));if(r){let m=r.querySelector(".profile");m&&n!=="Unav"&&(Xe(m.outerHTML),r.remove())}let[o,a]=S([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],L),[i,d]=S([...e.children],Jn),s=e.querySelector(".product-entry-cta"),[l,u]=(()=>{try{return An(s)}catch{return[null,[]]}})(),h=i.filter(m=>m.type==="MegaMenu"&&m.isSection).length===1,y=[a,d,u].flat();return{breadcrumbs:o,components:i,productCTA:l,localnav:h,profileType:n,errors:y}};var jt=e=>{let n=[...e.querySelectorAll('.tabs > button[role="tab"]')],t=[...e.querySelectorAll(".tab-content > div")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var Yn=jt;b();var zt=e=>()=>console.log(e),Ft=e=>()=>console.log(e),Qn=sn({mobileEventListeners:Ft,desktopEventListeners:zt});Oe();de();w();b();var et=async({gnavSource:e,asideSource:n})=>{let t=await D(e);if(t instanceof c)return t;let r=await D(n);return{mainNav:t,aside:r}};b();var Wt=`/**
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

`,nt=document.createElement("style");nt.textContent=Wt;document.head.appendChild(nt);z();U();var ga=async e=>{let{gnavSource:n,mountpoint:t,profileType:r,miloConfig:o}=e;if(!(n instanceof URL))throw C(`gnavSource is invalid: ${n}`),new c("gnavSource needs to be a URL object");try{we(o)}catch(l){throw C(`Failed to initialize MiloConfig: ${l}`),new c(`Failed to initialize MiloConfig: ${l}`)}me(rn(e));let a=await et(e);if(a instanceof c)throw C(a.message),a;let{mainNav:i,aside:d}=a;if(i instanceof c)throw C(i.message),i;let s=Xn(i,r);if(s instanceof c)throw C(s.message),s;return await Vt(s)(t),Kt(e)},Vt=e=>async n=>{let t=Zt(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup > ul")];r.forEach(i=>{i.innerHTML=Bn(i.textContent?.trim()??"")});let o=e.components.filter(i=>i.type==="MegaMenu").map(i=>i.tabs),a=await Promise.all(o.map(async(i,d)=>{let[s,l]=await i,u=n.querySelector(".feds-brand-container")?.outerHTML??"",h=r[d].parentElement?.previousElementSibling?.textContent??"",y=n.querySelector(".breadcrumbs")?.outerHTML??"",m=r[d].querySelector(".feds-popup")?.id??"",E=r.length===1,P=zn(u,h,y,m,E)(s);return r[d].innerHTML=P,l}).flat());return n},Zt=({components:e,productCTA:n,profileType:t})=>`
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
      `.trim(),i=r?tn(r):"",d=T(o,tn);return`
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
  ${n===null?"":_n(n)}
  ${t==="Unav"?'<div class="feds-utilities"></div>':t==="FedsProfile"?'<div data-cs-mask class="feds-profile"></div>':""}
</nav>
`,Kt=async e=>{let{reloadUnav:n,errors:t}=await Be({profileType:e.profileType,mountpoint:e.mountpoint,decorateProfile:e.profileType==="Unav"?void 0:()=>Ye(e.mountpoint)}),r=new Set([...t]);return Yn(e.mountpoint),Qn(e.mountpoint),{closeEverything:Jt,reloadUnav:n,errors:r,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Jt=()=>{};export{ga as main,Kt as postRenderingTasks,Vt as renderGnav,Zt as renderGnavString};
//# sourceMappingURL=main.js.map
