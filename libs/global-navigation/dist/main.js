var me=async e=>{let{placeholders:n}=e,{locale:t}=x(),o=`${z()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,ln(o)]);return new Map([...i,...a])},ln=async e=>{try{let n=await fetch(e);if(!n.ok)throw new d(`Federal placeholders not found at ${e}`);let t=cn(await n.json());if(t instanceof d)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof d)console.error(n.message);else{let t=new d(n.message);console.error(t.message)}return y(`Failed to fetch placeholders from ${e}`),new Map([])}},cn=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new d(n.message)}};function fe(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let l=a??i??"";return n.get(l)??l}):e}var[he,ve]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var I=window.matchMedia("(min-width: 900px)"),re={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'};var j=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},$=e=>({eval:e,or:n=>$(t=>{try{return e(t)}catch{return n(t)}})}),w=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof s?[t,[a,...r]]:[t,r]}},[[],[]]),ye=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;I.matches?r=n(t):r=e(t),I.addEventListener("change",()=>{r?.(),r=I.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},[be,pn]=(()=>{let e,n=!1;return[t=>{n||(e=t,n=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),_=async e=>{try{if(e===null)return new s("URL is null");let n=xe(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return y(`Request for ${n} failed`),new s(`Request for ${n} failed`);let r=await t.text(),o=await ve(),a=fe(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");try{let{handleCommands:l,commands:c}=pn();l(c,i)}catch(l){y(`Personalization not applied: ${l?.message}`)}return i}catch(n){return new s(n?.message)}},S,z=()=>{if(S)return S;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(S)return S;let n=window.location.origin;S=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(S=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),S},xe=(e="")=>{if(e.includes("c2-poc--milo--adobecom"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${z()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${z()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},we=async e=>{let n=async(t,r)=>{if(t instanceof s)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let l=xe(i.href),c=new URL(l),p=await _(c);if(r.add(i.href),p instanceof s)throw p;await n(p,r),i.replaceWith(...p.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new s(JSON.stringify(o))}};return n(e,new Set)},Le=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),W=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),ke=()=>!0;function dn(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let l=document.head.querySelector(`link[href="${e}"]`);if(l)return r?.("noop"),l;let c=document.createElement("link");return c.setAttribute("rel",a),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),i!==void 0&&c.setAttribute("fetchpriority",i),c.setAttribute("href",e),r&&(c.onload=p=>r(p.type),c.onerror=p=>r(typeof p=="string"?"error":p.type)),document.head.appendChild(c),c}function un(e,n){return dn(e,{rel:"stylesheet",callback:n})}function oe(e,n=!1){n&&un(e)}var ie=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:p}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),p.append(i)}let l=i.dataset.loaded;if(l!=null){o(i);return}let c=p=>{i.removeEventListener("load",c),i.removeEventListener("error",c),p.type==="error"?a(new Error(`error loading script: ${i.src}`)):p.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",c),i.addEventListener("error",c)});function U(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var gn=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[ae,x]=(()=>{let e,n=!1;return[t=>{if(!n){if(!gn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),mn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Ce={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function fn(e){let n=mn[e];return!n&&Ce[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var te="langstore/";function Ee(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Ce[t]??t).split("_",2);if(t.startsWith(te)||window.location.pathname.startsWith(`/${te}`)){let a=t.replace(te,"").toLowerCase();r=fn(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var q={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},v=e=>{if(e===null)throw new s(q.elementNull);if(e.tagName!=="A")throw new s(q.notAnchor);let n=e?.textContent??"";if(n==="")throw new s(q.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new s(q.hrefNotFound);return[{type:"Link",text:n,href:t},[]]};var H=e=>$(vn).or(hn).or(yn).eval(e),P={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},hn=e=>{let n=new Set;if(!e)throw new s(P.elementNull);let t=e.querySelector("p a")??e.querySelector("div ~ div > a");if(!t)throw new s(P.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new d(P.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new d(P.noHref));let a=t?.closest("p")?.nextElementSibling;a||n.add(new d(P.noSubtitleP));let i=a?.textContent??"";i===""&&n.add(new d(P.noSubtitle));let[l,c=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(p=>p.trim());return[{type:"LinkGroupLink",iconHref:l,iconAlt:c,title:r,href:o,subtitle:i},[...n]]},vn=e=>{if(!e)throw new s(P.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new s(P.notAHeader);let t=e.querySelector("a")?.textContent??"";if(t==="")throw new s(P.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n},[]]},yn=e=>{if(!e)throw new s(P.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=v(n);return[{type:"LinkGroupBlue",link:t},r]};var G=e=>{switch(e.type){case"LinkGroupHeader":return bn(e);case"LinkGroupLink":return xn(e);case"LinkGroupBlue":return wn(e);default:return console.error(e),""}},bn=({title:e,classes:n})=>`
    <div role="heading" class="feds-link-group ${n.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `,xn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o})=>{let i=n!==null&&e!==null?`
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
  `},wn=({link:e})=>`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue" daa-ll="${e.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`;var Z={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},R=/(\.png|\.jpg|\.jpeg|\.svg)/i,Ln=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&R.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&R.test(r)?r:null},kn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},se=e=>{if(e===null)throw new s(Z.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new s(Z.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new s(Z.noLinks);let r=t.find(m=>{let h=m.textContent??"";return!R.test(m.href)&&!R.test(h)});if(!r)throw new s(Z.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),l=!a,c=!o&&!i,p=t.filter(m=>{let h=m.textContent??"";return R.test(m.href)||R.test(h)}),[g,f,C]=(()=>{let m=o?re.brand:re.company,[h=null,T=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(ne=>ne?.src).filter(ne=>ne?.length>0),[F=null,an=null]=p.map(Ln),sn=p[0]instanceof Element?kn(p[0]):r.textContent?.trim()??"";return[F??h??m,an??T,sn]})(),b=r.textContent?.trim()??"",k=r.href;if(!l&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let E=(m,h)=>{let T=h!=null&&h!=="";return ke()&&T?h:m},L=g.startsWith("<svg")?{type:"inline-svg",svgContent:E(g,f),alt:C}:{type:"image",src:E(g,f),alt:C};return l&&c?[{type:"Brand",data:{type:"LabelledBrand",href:k,label:b,image:L}},[]]:l&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:k,image:L,alt:C}},[]]:l&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:k,image:L,alt:C}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:k,label:b}},[]]};var Cn=`.feds-brand-container {
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
}`,Pe=document.createElement("style");Pe.textContent=Cn;document.head.appendChild(Pe);var le=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},V=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),ce=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return V(n.href,le(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,le(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,le(n.image,!1),t)}case"BrandLabelOnly":return V(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var pe=["appswitcher","help"],K={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[N,Me]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function J(e,n=!1){let l=(/uc_carts=/.test(document.cookie)?e:e?.filter(p=>p!=="cart"))??[],c=l.length??3;if(n){let p=l.filter(f=>pe.includes(f)).length;return`calc(92px + ${p*32}px + ${p*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var X=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(K).find(r=>K[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},En={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},Y=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(En))if(e.includes(n))return t;return"linux"},Q=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var Te=()=>{try{return x().signInContext||{}}catch{return{}}},Pn=()=>{let e=x();return U("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Mn=()=>{let n=x()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{N(i)}).catch(()=>{N({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function Tn(){let{unav:e}=x();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var B=()=>{let e=x();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Mn()},signInCtaStyle:Pn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Te())},onSignUp:()=>{window.adobeIMS?.signIn(Te())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Tn()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var Se=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},ee=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new d('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new d('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new d('metadata "universal-nav" has no value'));let l=!window.adobeIMS?.isSignedInUser(),c=i.split(",").map(m=>m.trim()).filter(m=>Object.keys(B()).includes(m)||m==="signup");if(l){let m=J(c,l);t.style.setProperty("min-width",m)}let p;try{p=x()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let g=X(p.locale),f=p.env.name==="prod"?"prod":"stage",C=await Q(),b=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(b??"")||(b="1.5"),await Promise.all([ie(`https://${f}.adobeccstatic.com/unav/${b}/UniversalNav.js`),oe(`https://${f}.adobeccstatic.com/unav/${b}/UniversalNav.css`,!0)]);let k=()=>{let m=B(),h=[m.profile];return Se(h,!1),c?.forEach(T=>{if(T==="profile")return;if(T==="signup"){Se(h,!0);return}let F=m[T];F&&h.push(F)}),h},E=()=>({target:t,env:f,locale:g,countryCode:Ee(p?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:Y(),os_version:navigator.platform},event:{visitor_guid:C}},children:k(),isSectionDividerRequired:!!p?.unav?.showSectionDivider,showTrayExperience:!I.matches});await window?.UniversalNav?.(E()),l||t?.style.removeProperty("min-width");let L=m=>{window?.UniversalNav?.reload(E())};return I.addEventListener("change",()=>{L()}),{reloadUnav:L,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new d(r)}};var Sn="feds-milo",y=(e,n="default",t="e")=>{let{locale:r}=x(),o=U("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Sn,sampleRate:1,tags:n,errorType:t})};var s=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},d=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&y(n)}};var Ae=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(An(e));if(!t)throw new Error("");let[{text:r,href:o},a]=v(t);return[{type:e.type,text:r,href:o},a]},de=Ae({type:"PrimaryCTA"}),D=Ae({type:"SecondaryCTA"}),Ie=e=>$(de).or(D).eval(e),An=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var ue=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,A=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,_e=e=>e.type==="PrimaryCTA"?ue(e):A(e);var M=({text:e,href:n})=>`<a class="feds-link" href="${n}">${e}</a>`;var Ue=e=>{let[n,t]=Rn(e),r=[...e.children].filter(i=>i.querySelector(".panel-metadata")!==null),[o,a]=w(r,i=>In(i,n));return console.log(o),[{type:"Panels",layout:n,panels:o},[...t,...a]]},In=(e,n)=>{let t=e.querySelector(".panel-metadata");if(!t)throw new s(u.noPanelMetadata);let[r,o]=$n(t,n),a=e.querySelector(".image-panel");return a?Un(a,r,o):O(t,"use-image-with-list")?.toLowerCase()==="true"?Gn(e,r,o):Hn(e,r,o)},u={noLayoutMetadata:"panels-layout-metadata block not found",noGridColumns:"Grid columns not specified in layout metadata",noGridRows:"Grid rows not specified in layout metadata",invalidGridTrack:e=>`Invalid grid track value: "${e}"`,noPanelMetadata:"panel-metadata block not found on panel",invalidSpan:(e,n)=>`Invalid ${e} value: "${n}". Expected two comma-separated integers`,columnOutOfBounds:(e,n)=>`Column position ${e} exceeds grid column count ${n}`,rowOutOfBounds:(e,n)=>`Row position ${e} exceeds grid row count ${n}`,spanStartAfterEnd:(e,n,t)=>`${e} start (${n}) is greater than end (${t})`,noPanelTitle:"Panel is missing an <h2> title",noLinks:"Panel has no <ul> with links",listWithImageMissingImage:"List-with-image panel is missing the image link",imagePanelMissingIcon:"Image panel is missing the icon link",imagePanelMissingIconHref:"Image panel icon link has no href",imagePanelMissingImage:"Image panel is missing the image link",imagePanelMissingImageHref:"Image panel image link has no href",imagePanelMissingPrice:"Image panel is missing a price",imagePanelMissingTitle:"Image panel is missing a title",imagePanelMissingCtaText:"Image panel is missing CTA text",imagePanelMissingCtaHref:"Image panel is missing CTA href"},O=(e,n)=>{let t=[...e.children];for(let r of t){let o=[...r.children];if(o.length>=2&&(o[0].textContent?.trim().toLowerCase()??"")===n.toLowerCase())return o[1].textContent?.trim()??null}return null},_n=/^\d+(\.\d+)?fr$/,Re=(e,n)=>{let t=[],r=e.split(",").map(o=>o.trim()).filter(Boolean);for(let o of r)_n.test(o)||t.push(new d(u.invalidGridTrack(o)));return[r,t]},$e=(e,n)=>{let t=e.split(",").map(a=>a.trim());if(t.length!==2)throw new s(u.invalidSpan(n,e));let r=Number(t[0]),o=Number(t[1]);if(!Number.isInteger(r)||!Number.isInteger(o)||r<1||o<1)throw new s(u.invalidSpan(n,e));if(r>o)throw new s(u.spanStartAfterEnd(n,r,o));return[r,o]},Rn=e=>{let n=e.querySelector(".panels-layout-metadata");if(!n)throw new s(u.noLayoutMetadata);let t=O(n,"grid columns");if(t===null)throw new s(u.noGridColumns);let r=O(n,"grid rows");if(r===null)throw new s(u.noGridRows);let[o,a]=Re(t,"grid columns"),[i,l]=Re(r,"grid rows");return[{type:"PanelsLayout",gridColumns:o,gridRows:i},[...a,...l]]},$n=(e,n)=>{let t=[],r=O(e,"column span");if(r===null)throw new s(u.invalidSpan("column span",""));let o=O(e,"row span");if(o===null)throw new s(u.invalidSpan("row span",""));let[a,i]=$e(r,"column span"),[l,c]=$e(o,"row span");return i>n.gridColumns.length&&t.push(new d(u.columnOutOfBounds(i,n.gridColumns.length))),c>n.gridRows.length&&t.push(new d(u.rowOutOfBounds(c,n.gridRows.length))),[{type:"PanelPosition",columnStart:a,columnEnd:i,rowStart:l,rowEnd:c},t]},He=e=>{let n=e.querySelector(".panel-footer-link");if(!n)return[null,[]];let t=n.querySelector("a"),[r,o]=v(t),a=n.classList.contains("cta");return[{type:"FooterLink",link:r,isCta:a},o]},Un=(e,n,t)=>{let r=[...t],o=[...e.children],a=L=>o[L]?.querySelector("a")??null,i=L=>o[L]?.querySelector("div")?.textContent?.trim()??"",l=a(0);l||r.push(new d(u.imagePanelMissingIcon));let c=l?.getAttribute("href")??"";l&&c===""&&r.push(new d(u.imagePanelMissingIconHref));let[,p=""]=(l?.textContent??"").split("|").map(L=>L.trim()),g=a(1);g||r.push(new d(u.imagePanelMissingImage));let f=g?.getAttribute("href")??"";g&&f===""&&r.push(new d(u.imagePanelMissingImageHref));let C=i(2);C===""&&r.push(new d(u.imagePanelMissingPrice));let b=i(3);b===""&&r.push(new d(u.imagePanelMissingTitle));let k=i(4);k===""&&r.push(new d(u.imagePanelMissingCtaText));let E=i(5);return E===""&&r.push(new d(u.imagePanelMissingCtaHref)),[{type:"ImagePanel",position:n,iconHref:c,iconAlt:p,imageHref:f,price:C,title:b,ctaText:k,ctaHref:E},r]},Hn=(e,n,t)=>{let r=[...t],o=e.querySelector("h2");if(!o)throw new s(u.noPanelTitle);let a=o.textContent??"",i=e.querySelector("ul");if(!i)throw new s(u.noLinks);let l=[...i.querySelectorAll("li > a")],[c,p]=w(l,v);r.push(...p);let[g,f]=He(e);return r.push(...f),[{type:"LinkPanel",position:n,title:a,links:c,footer:g},r]},Gn=(e,n,t)=>{let r=[...t],o=e.querySelector(".list-with-image"),a=o??e,i=a.querySelector("h2");if(!i)throw new s(u.noPanelTitle);let l=i.textContent??"",c=a.querySelector("ul");if(!c)throw new s(u.noLinks);let p=[...c.querySelectorAll("li > a")],[g,f]=w(p,v);r.push(...f);let b=o?.querySelector(":scope > div > div:last-child a")?.getAttribute("href")??"";b===""&&r.push(new d(u.listWithImageMissingImage));let[k,E]=He(e);return r.push(...E),[{type:"ListWithImagePanel",position:n,title:l,links:g,imageHref:b,footer:k},r]};var Ge=e=>{let n=[...e.querySelectorAll("li > div")],[t,r]=w(n,Nn);return console.log(t),[{type:"ProductList",categories:t},r]},Nn=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new s("Expected H2");let t=n.textContent??"",r=j(n),[o,a]=w(r,H);return[{type:"ProductCategory",name:t,links:o},a]};var Ne=e=>{let[n,t]=w([...e.children],Bn);return console.log(n),[{type:"UseCaseCards",cards:n},t]},Bn=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new s("expected h2");let t=n.textContent??"",r=n.nextElementSibling?.firstElementChild;if(!r)throw new s("expected subtitle href");let[o,a]=v(r),i=j(n.nextElementSibling).filter(f=>f.classList.contains("link-group")),[l,c]=w(i,H),[p,g]=D(e);return[{type:"Card",title:t,subtitle:o,links:l,footerCTA:p},[...a,...c,...g]]};var De=e=>{let n=new Set;if(e===null)throw new s(Be.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new d(Be.noTitle));let r=(async()=>{try{let o=e.querySelector("a"),a=new URL(o?.href??""),i=await _(a);if(i instanceof s)throw new Error(i.message);let l=await we(i);if(l instanceof s)throw new Error(l.message);if(e.classList.contains("product-list"))return Ge(l);if(e.classList.contains("use-case-cards"))return Ne(l);if(e.classList.contains("panels"))return Ue(l);throw new s("unrecognized mega menu item (did you forget to label it correctly?")}catch(o){throw new s(o?.message)}})();if(r instanceof s)throw r;return[{type:"MegaMenu",title:t,content:r},[...n]]},Be={elementNull:"Element is null",noTitle:"Large Menu has no Title"};var Dn=`.global-navigation .panels {
  list-style: none;
  margin: 0 auto;
  padding: 36px clamp(24px, 4vw, 56px) 40px;
  gap: 32px;
  width: min(1200px, 100%);
  box-sizing: border-box;
  color: #000;
  width: 100%;
}

.panels > li {
  min-width: 0;
  background-color: #F6F6F6;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.feds-popup .panels .feds-secondary-cta {
  margin-top: auto;
  margin-bottom: 12px;
  align-self: center;
  width: 75%;
}

.panels > li:has(> .list-image-panel) {
  background-color: black;
  border: 4px black solid;
}

.panels .list-image-panel li {
  border-radius: 8px;
  padding: 12px;
}

.panels .list-image-panel li a.feds-link {
  padding: 0;
}

.panels  .list-image-panel li:hover {
  background-color: white;
}

.panels .list-image-panel li:hover .feds-link {
  color: black;
}

.panels h4 {
  font-family: var(--feds-heading-font);
  font-size: 18px;
  line-height: 1.25;
  margin-left: 24px;
}

.global-navigation.site-pivot .panels .link-panel {
  list-style: none;
  margin: 0 0 0 24px;
  padding: 0;
}

.global-navigation.site-pivot .panels .link-panel + .feds-link {
  color: #000;
  margin-left: 24px;
  padding-left: 0;
}

.panels .link-panel .feds-link,
.panels .panel-footer-link .feds-link {
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 6px 0;
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.35;
  color: #000;
}

.panels .link-panel .feds-link:hover,
.panels .panel-footer-link .feds-link:hover {
}

.panels .link-panel-container > .feds-secondary-cta,
.panels > li > .feds-secondary-cta {
  margin-top: 12px;
}

.list-image-panel .link-panel-container {
  display: flex;
  flex-direction: column;
  min-width: 250px;
}

.panels .list-image-panel .feds-secondary-cta {
  color: white;
  margin: auto 0 12px 0;
  width: calc(100% - 24px);
}

.panels .list-image-panel .feds-secondary-cta:hover{
  color: black;
}

.list-image-panel {
  display: flex;
  background-color: transparent;
  color: white;
  height: 100%;
  align-items: stretch;
  gap: 12px;
}

.panels .list-image-panel .feds-link {
  color: white;
}

.list-image-panel h4 {
}

.list-image-panel picture {
  display: block;
}

.list-image-panel picture img {
  display: block;
  height: 100%;
  max-height: 100%;
  width: auto;
  border-radius: 14px;
  object-fit: cover;
}

.image-panel {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  min-height: 320px;
  isolation: isolate;
  display: grid;
}

.image-panel > picture {
  display: block;
  height: 100%;
  grid-area: 1 / 1;
}

.image-panel > picture img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.image-panel .overlay {
  grid-area: 1 / 1;
  display: grid;
  gap: 12px;
  padding: 18px 18px 20px;
  color: #fff;
  background: linear-gradient(
    180deg,
    rgb(0 0 0 / 0%) 0%,
    rgb(0 0 0 / 80%) 70%
  );
  grid-template-columns: 300px auto auto;
  grid-template-rows: 48px auto 50px;
}

.image-panel .icon {
  width: 34px;
  height: 34px;
  grid: 1 / 1 / 1 / 1;
}

.image-panel .icon img {
  display: block;
  width: 100%;
  height: 100%;
}

.image-panel .text {
  display: grid;
  gap: 3px;
  grid-area: 3 / 1 / 3 / 1;
}

.image-panel .text span:first-child {
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
}

.image-panel .text span:last-child {
  font-family: var(--feds-heading-font);
  font-size: 21px;
  font-weight: 800;
  line-height: 1.2;
}

.image-panel-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 34px;
  padding: 0 14px;
  border-radius: 999px;
  color: black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  background-color: #FFF;
  backdrop-filter: blur(1px);
  grid-area: 3 / 3 / 3 / 3;
  justify-self: end;
}

@media (max-width: 899px) {
  .panels {
    display: block !important;
    grid-template-columns: none !important;
    grid-template-rows: none !important;
    padding: 22px 16px 28px;
  }

  .panels > li + li {
    margin-top: 22px;
  }

  .list-image-panel {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "image"
      "list";
    row-gap: 14px;
  }
}
`,Oe=document.createElement("style");Oe.textContent=Dn;document.head.appendChild(Oe);var Fe=({layout:e,panels:n})=>`
    <ul class="panels" style="${`
    display: grid;
    grid-template-rows: ${e.gridRows.join(" ")};
    grid-template-columns: ${e.gridColumns.join(" ")};
  `}">
      ${n.map(r=>`<li style="${Wn(r.position)}">${On(r)}</li>`).join("")}
    </ul>
  `.trim(),On=e=>{switch(e.type){case"LinkPanel":return Fn(e);case"ListWithImagePanel":return zn(e);case"ImagePanel":return jn(e)}},Fn=({title:e,links:n,footer:t})=>`
  <h4>${e}</h4>
  <ul class="link-panel">
    ${n.map(r=>`<li>${M(r)}</li>`).join("")}
  </ul>
  ${t===null?"":ze(t)}
`.trim(),zn=({title:e,links:n,imageHref:t,footer:r})=>`
  <div class="list-image-panel">
    <div class="link-panel-container">
      <h4>${e}</h4>
      <ul class="link-panel">
        ${n.map(o=>`<li>${M(o)}</li>`).join("")}
      </ul>
      ${r===null?"":ze(r)}
    </div>
    <picture>
      <img src="https://main--federal--adobecom.aem.page${t}">
    </picture>
  </div>
`.trim(),jn=({iconHref:e,iconAlt:n,imageHref:t,price:r,title:o,ctaText:a,ctaHref:i})=>`
  <div class="image-panel">
    <picture>
      <img src="https://main--federal--adobecom.aem.page${t}">
    </picture>
    <div class="overlay">
      <picture class="icon">
        <img src="https://main--federal--adobecom.aem.page${e}" alt="${n}">
      </picture>
      <div class="text">
        <span>$${r}</span>
        <span>${o}</span>
      </div>
      <a class="image-panel-button" href="${i}">
        ${a}
      </a>
    </div>
  </div>
`,Wn=({columnStart:e,columnEnd:n,rowStart:t,rowEnd:r})=>`
  grid-area: ${t} / ${e} / ${r} / ${n}
`.trim(),ze=e=>e.isCta?A({type:"SecondaryCTA",text:e.link.text,href:e.link.href}):M(e.link);var qn=`.feds-popup .product-list {
  display: grid;
  grid-template-columns: 283px minmax(0, 1fr);
  align-items: start;
  gap: 8px;
  margin: 0 24px 24px 24px;
  padding: 24px;
  background-color: #f6f6f6;
  border-radius: 16px;
  width: 96%;
}

.product-list .tabs,
.product-list .tab-content {
  list-style: none;
  padding: 0;
  margin: 0;
}

.product-list .tabs button.tab {
  display: inline-flex;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  min-height: 44px;
  border: 0;
  border-radius: 10px;
  padding: 8px;
  text-align: left;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  font-weight: 900;
  line-height: 24px;
  color: #2c2c2c;
  background: transparent;
  cursor: pointer;
}

.product-list .tabs button.tab[aria-selected="true"] {
  background: black;
  color: white;
}

.product-list .tab-content > li {
  list-style: none;
}

.product-list .tab-content [role="tabpanel"][hidden] {
  display: none;
}

.product-list .tab-content [role="tabpanel"] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-list .tab-content [role="tabpanel"] .feds-link-group {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
  background-color: white;
}

.product-list .tab-content [role="tabpanel"] .feds-link-group .feds-link-group__icon {
  margin-top: 16px;
  margin-left: 16px;
}

.product-list .tab-content [role="tabpanel"] .feds-link-group .feds-link-group__content {
  margin-bottom: 16px;
  margin-left: 16px;
}
`,je=document.createElement("style");je.textContent=qn;document.head.appendChild(je);var We=({categories:e})=>{let n=`
    <ul class="tabs" role="tablist">
      ${e.map(({name:r},o)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(o===0).toString()}"
          aria-controls="${o}"
          >
            ${r}
          </button>
      </li>
  `.trim()).join("")}
    </ul>
  `.trim(),t=`
    <ul class="tab-content">
      ${e.map(({links:r},o)=>`
      <li>
        <ul
          id="${o}"
          role="tabpanel"
          ${o===0?"":"hidden"}
        >
          ${r.map(a=>`<li>${G(a)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${n}
      ${t}
    </div>
  `.trim()};var Zn=`.global-navigation .feds-popup ul.use-case-cards {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 12px 24px 24px 24px;
  gap: 8px;
  width: 100%;
}

.global-navigation .feds-popup ul.use-case-cards .card:hover {
  background: black;
}
.global-navigation .feds-popup ul.use-case-cards .card:hover h4 {
  color: white;
}

.global-navigation .feds-popup ul.use-case-cards .card a.feds-link-group:hover,
.global-navigation .feds-popup ul.use-case-cards .card:hover a.feds-secondary-cta {
  background: black;
  color: white;
}

.feds-popup .use-case-cards > li {
  min-width: 0;
}

.feds-popup .card {
  max-height: 462px;
  height: 462px;
  border-radius: 14px;
  background: #f6f6f6;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.feds-popup .card h4 {
  margin: 0;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 24px;
  color: #000;
  padding:16px;
}

.feds-popup .card h6 {
  margin: 0;
}

.feds-popup .card h6 .feds-link {
  padding: 0 16px 16px 16px;
  font-size: 14px;
  font-weight: 700;
  line-height: 120%;
  text-decoration: none;
  font-family: "Adobe Clean";
  color: black;
}

.feds-popup .card:hover h6 .feds-link {
  color: white;
}

.use-case-cards .link-container {
  background-color: #FFFFFF;
  border-radius: 14px;
  margin: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-grow: 3;
}

.use-case-cards .link-container ul {
  padding: 12px;
  align-self: stretch;
}

.feds-popup ul.use-case-cards .link-container .feds-link-group {
  min-height: 0px;
  grid-template-columns: 32px 1fr;
}


.feds-popup ul.use-case-cards .link-container .feds-link-group .feds-link-group__title {
  margin-top: 4px;
}

.use-case-cards .link-container a.feds-secondary-cta {
  align-self: stretch;
  width: auto;
  margin: 24px 12px 12px 12px;
}
`,qe=document.createElement("style");qe.textContent=Zn;document.head.appendChild(qe);var Ze=({cards:e})=>`
  <ul class="use-case-cards">
    ${e.map(n=>`<li>${Vn(n)}</li>`).join("")}
  </ul>
`,Vn=({title:e,subtitle:n,links:t,footerCTA:r})=>`
  <article class="card">
    <h4>${e}</h4>
    <h6>${M(n)}</h6>
    <div class="link-container">
      <ul class="links">
        ${t.map(o=>`<li>${G(o)}</li>`).join("")}
      </ul>
      ${A(r)}
    </div>
  </article>
`.trim();var Ve=({title:e})=>`
  <button type="button"
          aria-controls="${W(e)}"
          class="mega-menu feds-link"
          popovertarget="${W(e)}"
  >
    ${e}
  </button>
  <div id="${W(e)}" popover class="feds-popup">
  </div>
`,Ke=e=>{switch(e.type){case"ProductList":return We(e);case"UseCaseCards":return Ze(e);case"Panels":return Fe(e);default:}return""};var Je={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Xe=e=>{if(e===null)return[{type:"Text",content:""},[new d(Je.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new d(Je.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var Ye=({content:e})=>e;var Qe=e=>{if(e===null)throw new s(Kn.elementNull);if(e.querySelector(".gnav-brand")!==null)return se(e);let t=e.querySelector(".large-menu");return t!==null?De(t):e.querySelector("strong")!==null?de(e):e.querySelector("em")!==null?D(e):e.querySelector("a")===null?Xe(e):v(e.querySelector("a"))},ge=e=>{switch(e.type){case"Text":return Ye(e);case"Link":return M(e);case"SecondaryCTA":return A(e);case"PrimaryCTA":return ue(e);case"Brand":return ce(e);case"MegaMenu":return Ve(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Kn={elementNull:"Element is null"};var en=(e,n)=>{let[t,r]=w([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],v),[o,a]=w([...e.children],Qe),i=e.querySelector(".product-entry-cta"),[l,c]=(()=>{try{return Ie(i)}catch{return[null,[]]}})(),p=!1,g=[r,a,c].flat();return{breadcrumbs:t,components:o,productCTA:l,localnav:p,errors:g,unavEnabled:n}};var Jn=e=>{let n=[...e.querySelectorAll('.tabs button[role="tab"]')],t=[...e.querySelectorAll(".tab-content ul")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var nn=Jn;var Xn=e=>()=>console.log(e),Yn=e=>()=>console.log(e),tn=ye({mobileEventListeners:Yn,desktopEventListeners:Xn});var rn=async({gnavSource:e,asideSource:n})=>{let t=await _(e);if(t instanceof s)return t;let r=await _(n);return{mainNav:t,aside:r}};var Qn=`/**
 * Global Navigation Styles
 * Styles for the federal global navigation component
 */

:root {
    --feds-heading-font: 'Adobe Clean Display', adobe-clean-display, adobe-clean, 'Trebuchet MS', sans-serif;
    --feds-link-color-dark: #000;
    --feds-link-color-light: #FFFFFF;
    --feds-link-color: #000;
    --feds-nav-height: 64px;
}

.global-navigation.site-pivot {
    visibility: visible;
    display: block;
    position: absolute;
    z-index: 10;
    width: 100%;
}

.global-navigation.site-pivot:has(:popover-open) {
  background: #FFF;
  opacity: 1;
}

::backdrop {
  opacity: 1;
}

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link {
  color: var(--feds-link-color-dark);
  opacity: 60%;
}

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link:has(~ :popover-open) {
  opacity: 100%;
}

.global-navigation nav {
  background-color: inherit;
}

.global-navigation nav > ul {
    display: flex;
    width: 100%;
    max-width: var(--feds-maxWidth-nav);
    height: inherit;
    align-items: center;
    background: inherit
}


.feds-link {
    font-size: 14px;
    font-weight: 700;
    font-family: var(--feds-heading-font);
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    padding: 12px;
    color: var(--feds-link-color-light);
    opacity: 100%;
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

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle::before {
    content: "\\2715"; 
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
        padding-left: 24px;
        justify-content: flex-start;
    }

    .global-navigation.site-pivot:has(.feds-popup:popover-open),
    .global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) {
    }

    .global-navigation nav .feds-gnav-items {
        align-items: center;
        padding-left: 0;
        margin: 0;
        display: flex;
    }
    
}

.feds-popup {
  position: fixed;
  inset: var(--feds-nav-height) 0 auto 0;
  width: 100%;
  max-width: none;
  max-height: calc(100dvh - var(--feds-nav-height));
  margin: 0;
  border: 0;
  padding: 0;
  overflow: auto;
  background: #fff;
}

.feds-popup:popover-open {
  display: block;
}

body:has(:popover-open) {
  overflow: hidden;
}

.feds-popup > * {
  width: min(1200px, 100%);
  margin: 0 auto;
  box-sizing: border-box;
}

.feds-popup .feds-link-group {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 10px;
  min-height: 52px;
  align-items: start;
  border-radius: 10px;
  padding: 10px;
  text-decoration: none;
  color: #2c2c2c;
}

.feds-popup .feds-link-group:hover {
  background: #f5f5f5;
}

.feds-popup .feds-link-group__icon {
  display: block;
  width: 24px;
  height: 24px;
  margin-top: 2px;
}

.feds-popup .feds-link-group__icon-img {
  display: block;
  width: 100%;
  height: 100%;
}

.feds-popup .feds-link-group__title {
  font-size: 15px;
  font-weight: 700;
  line-height: 1.25;
}

.feds-popup .feds-link-group__subtitle {
  margin-top: 2px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: #5c5c5c;
}

.feds-popup .feds-link-group--blue {
  background: #e8f2ff;
}

.feds-popup .feds-link-group--blue:hover {
  background: #dcecff;
}


.feds-popup .feds-secondary-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  min-height: 34px;
  padding: 0 14px;
  border: 1px solid #2c2c2c;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #2c2c2c;
  text-decoration: none;
}

.feds-popup .feds-secondary-cta:hover {
  background: #f5f5f5;
}

@media (max-width: 1199px) {
  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media (max-width: 899px) {
  .feds-popup {
    inset: var(--feds-nav-height) 0 0 0;
    max-height: none;
  }

  .feds-popup .product-list {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 22px 16px 28px;
  }

  .product-list .tabs {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .product-list .tabs li {
    list-style: none;
  }

  .product-list .tabs button.tab {
    width: auto;
    min-height: 36px;
    border: 1px solid #d7d7d7;
    border-radius: 999px;
    padding: 7px 12px;
  }

  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: 1fr;
  }
}
`,on=document.createElement("style");on.textContent=Qn;document.head.appendChild(on);var Xo=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:a}=e;if(!(n instanceof URL))throw y(`gnavSource is invalid: ${n}`),new s("gnavSource needs to be a URL object");try{ae(o)}catch(g){throw y(`Failed to initialize MiloConfig: ${g}`),new s(`Failed to initialize MiloConfig: ${g}`)}be(a),he(me(e));let i=await rn(e);if(i instanceof s)throw y(i.message),i;let{mainNav:l,aside:c}=i;if(l instanceof s)throw y(l.message),l;let p=en(l,r);if(p instanceof s)throw y(p.message),p;return await et(p)(t),tt(e)},et=e=>async n=>{let t=nt(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(i=>{i.innerHTML=""});let o=e.components.filter(i=>i.type==="MegaMenu").map(i=>i.content),a=await Promise.all(o.map(async(i,l)=>{let[c,p]=await i;return r[l].innerHTML=Ke(c),p}).flat());return n},nt=({components:e,productCTA:n,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=e.find(c=>c.type==="Brand")??null,o=e.filter(c=>c.type!=="Brand"),a=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim(),i=r?ge(r):"",l=Le(o,ge);return`
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
            ${l}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${n===null?"":_e(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,tt=async e=>{let n=new Set,t=await ee(e.mountpoint);t instanceof d?(n.add(t),y(t.message)):t.errors.forEach(o=>n.add(o)),nn(e.mountpoint),tn(e.mountpoint);let r=t instanceof d?()=>{}:t.reloadUnav;return{closeEverything:rt,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},rt=()=>{};export{Xo as main,tt as postRenderingTasks,et as renderGnav,nt as renderGnavString};
//# sourceMappingURL=main.js.map
