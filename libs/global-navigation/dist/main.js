var wn=async n=>{let{placeholders:e}=n,{locale:t}=L(),o=`${Z()}${t.prefix}/federal/globalnav/placeholders.json`,[i,a]=await Promise.all([e,me(o)]);return new Map([...a,...i])},me=async n=>{try{let e=await fetch(n);if(!e.ok)throw new g(`Federal placeholders not found at ${n}`);let t=he(await e.json());if(t instanceof g)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(e){if(e instanceof g)console.error(e.message);else{let t=new g(e.message);console.error(t.message)}return k(`Failed to fetch placeholders from ${n}`),new Map([])}},he=n=>{try{let{data:e}=n;if(!e.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return n}catch(e){return new g(e.message)}};function Cn(n,e){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(n)?n.replace(t,(o,i,a)=>{let s=i??a??"";return e.get(s)??s}):n}var[kn,Ln]=(()=>{let n;return[e=>{n||(n=e)},()=>{if(!n)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return n}]})();var D=window.matchMedia("(min-width: 900px)"),B={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var En=n=>{let e=[],t=n.nextElementSibling??null;for(;t!==null;)e.push(t),t=t.nextElementSibling??null;return e},N=n=>({eval:n,or:e=>N(t=>{try{return n(t)}catch{return e(t)}})}),E=(n,e)=>n.reduce(([t,r],o)=>{try{let[i,a]=e(o);return[[...t,i],[...r,...a]]}catch(i){return i instanceof l?[t,[i,...r]]:[t,r]}},[[],[]]),[Mn,ve]=(()=>{let n,e=!1;return[t=>{e||(n=t,e=!0)},()=>{if(!n)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return n}]})(),H=async n=>{try{if(n===null)return new l("URL is null");let e=an(`${n.origin}${n.pathname.replace(/(\.html$|$)/,".plain.html")}${n.hash}`),t=await fetch(e);if(!t.ok)return k(`Request for ${e} failed`),new l(`Request for ${e} failed`);let r=await t.text(),o=await Ln(),i=Cn(r,o),{body:a}=new DOMParser().parseFromString(i,"text/html");try{let{handleCommands:s,commands:d}=ve();s(d,a)}catch(s){k(`Personalization not applied: ${s?.message}`)}return a}catch(e){return new l(e?.message)}},I,Z=()=>{if(I)return I;let n=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(I)return I;let e=window.location.origin;I=n.some(o=>{let i=e.replace(".stage","");return o.startsWith("https://")?i===o:i.endsWith(o)})?e:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(e.includes("localhost")||e.includes(`.${r}.`))&&(I=`https://main--federal--adobecom.aem.${e.endsWith(".live")?"live":"page"}`),I},an=(n="")=>{if(n.includes("c2-poc--milo--adobecom"))return n.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(n.includes("c2-poc-feds-gnav--milo--adobecom"))return n.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(n.includes("localhost:3000"))return n.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof n!="string"||!n.includes("/federal/"))return n;if(n.startsWith("/"))return`${Z()}${n}`;try{let{pathname:e,search:t,hash:r}=new URL(n);return`${Z()}${e}${t}${r}`}catch(e){let t=e instanceof Error?e.message:String(e);console.warn(`getFederatedUrl errored parsing the URL: ${n}: ${t}`)}return n},Tn=(n,e)=>{let t=(r,o)=>{let i=`${r}[${o}^="./media_"]`;e.querySelectorAll(i).forEach(s=>{let d=s.getAttribute(o);if(d)try{let c=an(new URL(d,new URL(n,window.location.href)).href);s.setAttribute(o,c)}catch(c){console.warn(`[MediaPathError]: Failed to process relative media path (${d}) for ${r}`,c)}})};t("img","src"),t("source","srcset")},Sn=async n=>{let e=async(t,r)=>{if(t instanceof l)return t;try{let i=[...t.querySelectorAll('a[href*="#_inline"]')].map(async a=>{try{if(r.has(a.href))return;let s=an(a.href),d=new URL(s),c=await H(d);if(r.add(a.href),c instanceof l)throw c;await e(c,r),a.replaceWith(...c.children);return}catch{return}},[]);return await Promise.all(i),t}catch(o){return new l(JSON.stringify(o))}};return e(n,new Set)},_n=(n,e)=>n.map(t=>`<li>${e(t)}</li>`).join(""),O=n=>n.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),T=(n,e)=>{let t=n!==null&&n!==""?` daa-lh="${n}"`:"",r=e!==null&&e!==""?` daa-ll="${e}"`:"";return`${t}${r}`},Pn=()=>!0;function be(n,{id:e,as:t,callback:r,crossorigin:o,rel:i,fetchpriority:a}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${n}"]`);if(s)return r?.("noop"),s;let d=document.createElement("link");return d.setAttribute("rel",i),e!==void 0&&d.setAttribute("id",e),t!==void 0&&d.setAttribute("as",t),o!==void 0&&d.setAttribute("crossorigin",o),a!==void 0&&d.setAttribute("fetchpriority",a),d.setAttribute("href",n),r&&(d.onload=c=>r(c.type),d.onerror=c=>r(typeof c=="string"?"error":c.type)),document.head.appendChild(d),d}function ye(n,e){return be(n,{rel:"stylesheet",callback:e})}function sn(n,e=!1){e&&ye(n)}var ln=(n,e,{mode:t,id:r}={})=>new Promise((o,i)=>{let a=document.querySelector(`head > script[src="${n}"]`);if(!a){let{head:c}=document;a=document.createElement("script"),a.setAttribute("src",n),r!=null&&a.setAttribute("id",r),e!=null&&a.setAttribute("type",e),t&&["async","defer"].includes(t)&&a.setAttribute(t,""),c.append(a)}let s=a.dataset.loaded;if(s!=null){o(a);return}let d=c=>{a.removeEventListener("load",d),a.removeEventListener("error",d),c.type==="error"?i(new Error(`error loading script: ${a.src}`)):c.type==="load"&&(a.dataset.loaded="true",o(a))};a.addEventListener("load",d),a.addEventListener("error",d)});function z(n,e=document){let t=n&&n.includes(":")?"property":"name";return e.head.querySelector(`meta[${t}="${n}"]`)?.content??null}var xe=n=>{let e=n,t=i=>i==null||typeof i!="object";if(t(e)||t(e.locale)||typeof e.locale.prefix!="string"||t(e.env)||typeof e.env.name!="string")return!1;if(e.unav!==void 0){if(typeof e.unav!="object"||e.unav===null)return!1;let i=e.unav;if(i.profile!==void 0){if(typeof i.profile!="object"||i.profile===null)return!1;let a=i.profile;if(a.signInCtaStyle!==void 0&&a.signInCtaStyle!=="primary"&&a.signInCtaStyle!=="secondary"||a.messageEventListener!==void 0&&typeof a.messageEventListener!="function")return!1}}return!(e.jarvis!==void 0&&(typeof e.jarvis!="object"||e.jarvis===null||typeof e.jarvis.id!="string"))},[dn,L]=(()=>{let n,e=!1;return[t=>{if(!e){if(!xe(t))throw new Error("MiloConfig validation failed: Invalid structure");n=t,e=!0}},()=>{if(!n)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return n}]})(),we={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},An={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function Ce(n){let e=we[n];return!e&&An[n]&&(e=n),!e&&n.includes("-")&&([e]=n.split("-")),e||"US"}var on="langstore/";function $n(n){let t=(n?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(An[t]??t).split("_",2);if(t.startsWith(on)||window.location.pathname.startsWith(`/${on}`)){let i=t.replace(on,"").toLowerCase();r=Ce(i),o=i}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var K={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},C=n=>{if(n===null)throw new l(K.elementNull);if(n.tagName!=="A")throw new l(K.notAnchor);let e=n?.textContent??"";if(e==="")throw new l(K.textContentNotFound);let t=n?.getAttribute("href")??"";if(t==="")throw new l(K.hrefNotFound);let r=n.getAttribute("daa-ll");return[{type:"Link",text:e,href:t,daaLl:r},[]]};var cn=n=>N(Le).or(ke).or(Ee).eval(n),S={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},ke=n=>{let e=new Set;if(!n)throw new l(S.elementNull);let t=n.querySelector("p a")??n.querySelector("div ~ div > a");if(!t)throw new l(S.noTitleAnchor);let r=t.textContent??"";r===""&&e.add(new g(S.noTitle));let o=t.getAttribute("href")??"";o===""&&e.add(new g(S.noHref));let i=t.getAttribute("daa-ll"),a=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||e.add(new g(S.noSubtitleP));let d=s?.textContent??"";d===""&&e.add(new g(S.noSubtitle));let c=[],y=null,x=null;n.classList.contains("new")&&c.push("New"),n.classList.contains("show-offer")&&(c.push("Save 20%"),y="$29.99",x="$19.99");let[u,p=null]=(n.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(f=>f.trim());return[{type:"LinkGroupLink",iconHref:u,iconAlt:p,title:r,href:o,subtitle:d,badges:c,oldPrice:y,newPrice:x,daaLl:i,daaLh:a},[...e]]},Le=n=>{if(!n)throw new l(S.elementNull);let e=[...n.classList];if(!e.includes("header"))throw new l(S.notAHeader);let t=n.querySelector("a")?.textContent??"",r=n.querySelector("a")?.getAttribute("daa-ll")??null,o=n.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(S.noTitle);return[{type:"LinkGroupHeader",title:t,classes:e,daaLl:r,daaLh:o},[]]},Ee=n=>{if(!n)throw new l(S.elementNull);if(!n.classList.contains("blue"))throw new Error("Not a Blue Link Group");let e=n.querySelector("a"),[t,r]=C(e),o=e?.getAttribute("daa-ll")??null,i=e?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:i},r]};var pn=n=>{switch(n.type){case"LinkGroupHeader":return Me(n);case"LinkGroupLink":return Te(n);case"LinkGroupBlue":return Se(n);default:return console.error(n),""}},Me=({title:n,classes:e,daaLl:t,daaLh:r})=>{let o=e.slice(1).map(a=>`feds-link-group--${a}`).join(" "),i=T(r,t??n);return`
    <div role="heading" class="feds-link-group ${o}"${i}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n}</div>
      </div>
    </div>
  `},Te=({iconHref:n,iconAlt:e,title:t,href:r,subtitle:o,badges:i=[],oldPrice:a=null,newPrice:s=null,daaLl:d,daaLh:c})=>{let y=e!==null&&n!==null,x=T(c,d??t),u=y?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${n}"
          alt="${e}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"",p=i.length===0?"":`
      <div class="feds-link-group__badges">
        ${i.map((b,m)=>`
          <span class="feds-link-group__badge${m>0?" feds-link-group__badge--filled":""}">
            ${b}
          </span>
        `).join("")}
      </div>
    `,f=o===""?"":`<div class="feds-link-group__subtitle">${o}</div>`,h=a===null&&s===null?"":`
      <div class="feds-link-group__price">
        ${a===null?"":`<span class="feds-link-group__old-price">${a}</span>`}
        ${s===null?"":`<span class="feds-link-group__new-price">${s}</span>`}
      </div>
    `;return`
    <a class="feds-link-group" href="${r}"${x}>
      <div class="feds-link-header">
        ${u}
        ${p}
      </div>
      <div class="feds-link-group__content">
       
        <div class="feds-link-group__title">${t}</div>
        ${f}
        ${h}
      </div>
    </a>
  `},Se=({link:n,daaLl:e,daaLh:t})=>{let r=T(t,e??n.text);return`
  <a href="${n.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n.text}</div>
      </div>
  </a>
`};var V={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},U=/(\.png|\.jpg|\.jpeg|\.svg)/i,_e=n=>{let e=n.querySelector("picture img")?.getAttribute("src")??null;if(e!==null&&e!=="")return e;let t=n.textContent?.trim();if(t!==void 0&&t!==""&&U.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=n.getAttribute("href");return r!==null&&r!==""&&U.test(r)?r:null},Pe=n=>{let e=n.textContent?.trim();if(e?.includes("|")===!0){let r=e.split("|")[1]?.trim();if(r)return r}return n.querySelector("img")?.getAttribute("alt")??""},un=n=>{if(n===null)throw new l(V.elementNull);let e=n.querySelector(".gnav-brand");if(e===null)throw new l(V.elementNull);let t=[...e.querySelectorAll("a")];if(t.length===0)throw new l(V.noLinks);let r=t.find(m=>{let v=m.textContent??"";return!U.test(m.href)&&!U.test(v)});if(!r)throw new l(V.noPrimaryLink);let o=e.matches(".brand-image-only"),i=e.matches(".no-logo"),a=e.matches(".image-only"),s=!i,d=!o&&!a,c=t.filter(m=>{let v=m.textContent??"";return U.test(m.href)||U.test(v)}),[y,x,u]=(()=>{let m=o?B.brand:B.company,[v=null,w=null]=[...e.querySelectorAll('picture img[src$=".svg"]')].map(rn=>rn?.src).filter(rn=>rn?.length>0),[R=null,W=null]=c.map(_e),ge=c[0]instanceof Element?Pe(c[0]):r.textContent?.trim()??"";return[R??v??m,W??w,ge]})(),p=r.textContent?.trim()??"",f=r.href;if(!s&&!d)return[{type:"Brand",data:{type:"NoRender"}},[]];let h=(m,v)=>{let w=v!=null&&v!=="";return Pn()&&w?v:m},b=y.startsWith("<svg")?{type:"inline-svg",svgContent:h(y,x),alt:u}:{type:"image",src:h(y,x),alt:u};return s&&d?[{type:"Brand",data:{type:"LabelledBrand",href:f,label:p,image:b}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:f,image:b,alt:u}},[]]:s&&a?[{type:"Brand",data:{type:"ImageOnlyBrand",href:f,image:b,alt:u}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:f,label:p}},[]]};var Ae=`/* =========================================
   Brand Container
   ========================================= */

.feds-brand-container {
  display: flex;
  flex-shrink: 0;
}

li.feds-brand-wrapper {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding-left: 20px;
}

/* =========================================
   Brand / Logo
   ========================================= */

.feds-brand,
.feds-logo {
  align-items: center;
  outline-offset: 2px;
  padding: 0 var(--feds-gutter);
  column-gap: 10px;
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

/* =========================================
   Brand Image (Mobile / Desktop variants)
   ========================================= */

.feds-brand-image svg {
  color: white;
}

.feds-brand-image.desktop-brand {
  display: none;
}

.feds-brand-image.mobile-brand {
  display: inherit;
}

.feds-brand-image.brand-image-only.mobile-brand svg {
  height: 16px;
}

.feds-brand-image.brand-image-only.desktop-brand svg {
  width: 67px;
}

/* =========================================
   Responsive: Desktop (min-width: 900px)
   ========================================= */

@media (min-width: 900px) {
  li.feds-brand-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding-left: 0;
  }

  .feds-brand-image + .feds-brand-label {
    display: flex;
  }

  .feds-brand-image.desktop-brand {
    display: inherit;
  }

  header:has(:popover-open) .feds-brand-image svg {
    color: black;
  }

  .feds-brand-image.mobile-brand {
    display: none;
  }
}
`,In=document.createElement("style");In.textContent=Ae;document.head.appendChild(In);var fn=(n,e)=>{let t=`feds-brand-image${e?" brand-image-only":""}`;if(n.type==="inline-svg")return`<span class="${t}">${n.svgContent}</span>`;let r=n.alt?` alt="${n.alt}"`:"";return`<span class="${t}"><img src="${n.src}"${r} /></span>`},$e=`
<?xml
version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.57 35" fill="currentColor">
    <path d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/>
</svg>
`.trim(),Ie=`
<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 18 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path id="Logo" d="M17.5512 15.9999H13.8827C13.7233 16.0027 13.5666 15.9587 13.4326 15.8735C13.2987 15.7882 13.1934 15.6656 13.1303 15.5211L9.1476 6.3291C9.1372 6.29332 9.11539 6.26179 9.08542 6.23919C9.05545 6.2166 9.0189 6.20413 8.98118 6.20365C8.94347 6.20316 8.9066 6.21469 8.87605 6.2365C8.84549 6.25832 8.82286 6.28928 8.81152 6.32478L6.32954 12.161C6.31607 12.1925 6.31072 12.2269 6.31397 12.261C6.31721 12.2951 6.32896 12.3279 6.34815 12.3565C6.36735 12.385 6.39339 12.4084 6.42398 12.4246C6.45456 12.4408 6.48872 12.4493 6.52343 12.4493H9.25162C9.33426 12.4493 9.41508 12.4733 9.48398 12.5183C9.55288 12.5634 9.60681 12.6275 9.63905 12.7026L10.8335 15.3264C10.8652 15.4 10.8778 15.4802 10.8704 15.5599C10.863 15.6395 10.8357 15.7161 10.791 15.7828C10.7463 15.8495 10.6856 15.9042 10.6142 15.9421C10.5429 15.98 10.4631 15.9998 10.3821 15.9999H0.450101C0.375399 15.9994 0.301967 15.9808 0.236351 15.9455C0.170735 15.9103 0.114973 15.8595 0.0740362 15.7979C0.0330997 15.7362 0.00826021 15.6655 0.00173221 15.592C-0.00479579 15.5185 0.00719033 15.4446 0.0366223 15.3769L6.35412 0.526466C6.41869 0.369291 6.52976 0.234984 6.67284 0.141079C6.81593 0.0471732 6.98437 -0.00196688 7.15618 7.38373e-05H10.7999C10.9718 -0.00217252 11.1403 0.0468839 11.2835 0.140814C11.4266 0.234745 11.5377 0.369168 11.6021 0.526466L17.9633 15.3769C17.9927 15.4445 18.0048 15.5183 17.9983 15.5917C17.9919 15.665 17.9672 15.7357 17.9264 15.7973C17.8856 15.859 17.83 15.9097 17.7646 15.9451C17.6991 15.9804 17.6258 15.9992 17.5512 15.9999V15.9999Z" />
</svg>
`.trim(),J=(n,e,t="")=>`<div class="feds-brand-container">
    <a href="${n}" class="feds-brand" daa-ll="Brand"${t}>
      <span class="feds-brand-image brand-image-only desktop-brand">
        ${$e}
      </span>
      <span class="feds-brand-image brand-image-only mobile-brand">
        ${Ie}
      </span>
    </a>
  </div>`.trim(),gn=n=>{let{data:e}=n;switch(e.type){case"LabelledBrand":return J(e.href,fn(e.image,!1)+`<span class="feds-brand-label">${e.label}</span>`);case"BrandImageOnly":{let t=e.alt?` aria-label="${e.alt}"`:"";return J(e.href,fn(e.image,!0),t)}case"ImageOnlyBrand":{let t=e.alt?` aria-label="${e.alt}"`:"";return J(e.href,fn(e.image,!1),t)}case"BrandLabelOnly":return J(e.href,`<span class="feds-brand-label">${e.label}</span>`);case"NoRender":return"";default:return""}};var mn=["appswitcher","help"],Y={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[j,Rn]=(()=>{let n,e,t,r=new Promise(o=>{e=o,t=setTimeout(()=>{n={},o(n)},5e3)});return[o=>{o&&!n&&(n=o,clearTimeout(t),e?.(n))},()=>r]})();function X(n,e=!1){let s=(/uc_carts=/.test(document.cookie)?n:n?.filter(c=>c!=="cart"))??[],d=s.length??3;if(e){let c=s.filter(x=>mn.includes(x)).length;return`calc(92px + ${c*32}px + ${c*.25}rem)`}return`calc(${d*32}px + ${(d-1)*.25}rem)`}var Q=n=>{if(!n.prefix||n.prefix==="/")return"en_US";let e=n.prefix.replace("/","");if(e.includes("_")){let[r,o]=e.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(e==="uk")return"en_GB";let t=Object.keys(Y).find(r=>Y[r].includes(e));return t?`${t.toLowerCase()}_${e.toUpperCase()}`:`${e.toLowerCase()}_${e.toUpperCase()}`},Re={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},nn=()=>{let n=navigator.userAgent;for(let[e,t]of Object.entries(Re))if(n.includes(e))return t;return"linux"},en=async()=>{let n=window;return n.alloy?await n.alloy("getIdentity").then(e=>e?.identity?.ECID).catch(()=>{}):void 0};var Hn=()=>{try{return L().signInContext||{}}catch{return{}}},He=()=>{let n=L();return z("signin-cta-style")==="primary"||n?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Ue=()=>{let e=L()?.unav?.profile?.messageEventListener;return e||(t=>{let{name:r,payload:o,executeDefaultAction:i}=t.detail;if(!(!r||r!=="System"||!o||typeof i!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(a=>{j(a)}).catch(()=>{j({})});break;case"SignOut":i();break;case"ProfileSwitch":Promise.resolve(i()).then(a=>{a&&window.location.reload()});break;default:break}})};function Ge(){let{unav:n}=L();return n?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var q=()=>{let n=L();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:n?.unav?.profile?.complexConfig||null,...n?.unav?.profile?.config},messageEventListener:Ue()},signInCtaStyle:He(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Hn())},onSignUp:()=>{window.adobeIMS?.signIn(Hn())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:n?.unav?.uncAppId||"adobecom",...n?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Ge()}},jarvis:{name:"jarvis",attributes:{appid:n?.jarvis?.id,callbacks:n?.jarvis?.callbacks}},cart:{name:"cart"}}};var Un=(n,e)=>{n[0]&&"attributes"in n[0]&&n[0].attributes&&typeof n[0].attributes=="object"&&"isSignUpRequired"in n[0].attributes&&(n[0].attributes.isSignUpRequired=e)},tn=async(n,e)=>{try{let t=n.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new g('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),i=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new g('metadata "universal-nav" is missing'));let a=i.trim();o instanceof HTMLMetaElement&&a.length===0&&r.add(new g('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),d=a.split(",").map(m=>m.trim()).filter(m=>Object.keys(q()).includes(m)||m==="signup");if(s){let m=X(d,s);t.style.setProperty("min-width",m)}let c;try{c=L()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let y=Q(c.locale),x=c.env.name==="prod"?"prod":"stage",u=await en(),p=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(p??"")||(p="1.5"),await Promise.all([ln(`https://${x}.adobeccstatic.com/unav/${p}/UniversalNav.js`),sn(`https://${x}.adobeccstatic.com/unav/${p}/UniversalNav.css`,!0)]);let f=()=>{let m=q(),v=[m.profile];return Un(v,!1),d?.forEach(w=>{if(w==="profile")return;if(w==="signup"){Un(v,!0);return}let R=m[w];R&&v.push(R)}),v},h=()=>({target:t,env:x,locale:y,countryCode:$n(c?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:nn(),os_version:navigator.platform},event:{visitor_guid:u}},children:f(),isSectionDividerRequired:!!c?.unav?.showSectionDivider,showTrayExperience:!D.matches});await window?.UniversalNav?.(h()),s||t?.style.removeProperty("min-width");let b=m=>{window?.UniversalNav?.reload(h())};return D.addEventListener("change",()=>{b()}),{reloadUnav:b,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new g(r)}};function A(n,e){return[...n.querySelectorAll(e)]}function F(n,e,t){A(n,e).forEach(r=>t?r.removeAttribute("tabindex"):r.setAttribute("tabindex","-1"))}var G={ArrowLeft:-1,ArrowRight:1,ArrowUp:-1,ArrowDown:1},Gn=new Set(["ArrowLeft","ArrowRight"]),De=new Set(["ArrowUp","ArrowDown"]),Be='.tabs [role="tab"][aria-selected="true"]';function hn(n,e,t){return(n+e+t)%t}function Ne(n,e,t,r){let o=G[t];if(Gn.has(t)){let p=e+o;return p>=0&&p<n.length?p:null}let i=getComputedStyle(r).gridTemplateColumns.split(" ").length,a=[...r.children],s=p=>{let f=n[p].parentElement;return f?a.indexOf(f):-1},d=s(e)%i,c=Math.floor(s(e)/i)+(t==="ArrowDown"?1:-1),y=Math.floor((a.length-1)/i);if(c<0||c>y)return null;let x=null,u=1/0;for(let p=0;p<n.length;p++){let f=Math.abs(s(p)%i-d);Math.floor(s(p)/i)===c&&f<u&&(u=f,x=p)}return x}function vn(n){F(n,'.tab-content [role="tabpanel"] a',!1);let e=[];A(n,".feds-popup[popover]").forEach(u=>{let p=()=>{u.matches(":popover-open")||F(u,'[role="tabpanel"] a',!1)};u.addEventListener("toggle",p),e.push(()=>u.removeEventListener("toggle",p))});let t=(u,p)=>{u.focus(),p.preventDefault()},r=()=>n.querySelector(".feds-popup:popover-open"),o=u=>u.querySelector(Be),i=u=>u.querySelector('[role="tabpanel"]:not([hidden])');function a(u){let p=r(),f=n.querySelector("#feds-menu-wrapper");if(!f)return!1;let h=p??(f?.matches(":popover-open")?f:null);if(!h)return!1;h.hidePopover?.();let b=p?`[popovertarget="${h.id}"]`:".feds-nav-toggle";return n.querySelector(b)?.focus(),u.preventDefault(),!0}function s(u,p,f){if(!Gn.has(p))return!1;let h=A(n,".feds-gnav-items > li > .feds-link"),b=h.indexOf(u);return b<0?!1:(t(h[hn(b,G[p],h.length)],f),!0)}function d(u,p,f,h){let b=A(p,'.tabs :is([role="tab"], .product-links a)'),m=b.indexOf(u);if(m<0)return!1;if(G[f]){let v=b[hn(m,G[f],b.length)];return v.matches('[role="tab"]')&&v.click(),t(v,h),!0}if(f==="Tab"&&!h.shiftKey&&u.matches('[aria-selected="true"]')){let v=i(p);if(!v)return!1;F(v,"a",!0);let w=v.querySelector("a");return w&&t(w,h),!0}return!1}function c(u,p,f,h){let b=i(p);if(!b)return!1;let m=A(b,"a"),v=m.indexOf(u);if(v<0)return!1;if(G[f]){let w=Ne(m,v,f,b);return w!==null?(t(m[w],h),!0):f==="ArrowUp"?(F(b,"a",!1),t(o(p)??m[0],h),!0):!1}if(f==="Tab"&&!h.shiftKey){if(v+1<m.length)t(m[v+1],h);else{let w=A(p,'.tabs [role="tab"]'),R=o(p),W=w[w.indexOf(R)+1]??p.querySelector(".product-links a");if(W)t(W,h);else return!1}return!0}if(f==="Tab"&&h.shiftKey){if(v>0)t(m[v-1],h);else{F(b,"a",!1);let w=o(p)??A(p,'.tabs :is([role="tab"], .product-links a)')[0];w&&t(w,h)}return!0}return!1}function y(u,p,f,h){if(!De.has(f))return!1;let b=A(p,".feds-gnav-cards a"),m=b.indexOf(u);return m<0?!1:(t(b[hn(m,G[f],b.length)],h),!0)}function x(u){let p=document.activeElement??u.target;if(u.key==="Escape"){a(u);return}let f=r();f&&(f.matches(":has(.product-list)")&&(d(p,f,u.key,u)||c(p,f,u.key,u))||f.matches(":has(.feds-gnav-cards)")&&y(p,f,u.key,u))||s(p,u.key,u)}return n.addEventListener("keydown",x),e.push(()=>n.removeEventListener("keydown",x)),()=>e.forEach(u=>u())}var Oe="feds-milo",k=(n,e="default",t="e")=>{let{locale:r}=L(),o=z("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${n} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Oe,sampleRate:1,tags:e,errorType:t})};var l=class n extends Error{constructor(e){super(e),Object.setPrototypeOf(this,n.prototype)}},g=class n extends Error{constructor(e,t="Minor"){super(e),Object.setPrototypeOf(this,n.prototype),t==="Critical"&&k(e)}};var Dn=n=>e=>{if(e===null)throw new Error("");let t=e.querySelector(ze(n));if(!t)throw new Error("");let[{text:r,href:o},i]=C(t);return[{type:n.type,text:r,href:o},i]},bn=Dn({type:"PrimaryCTA"}),_=Dn({type:"SecondaryCTA"}),Bn=n=>N(bn).or(_).eval(n),ze=({type:n})=>{switch(n){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var yn=({text:n,href:e})=>`
<a href="${e}" class="feds-primary-cta">
  ${n}
</a>
`,P=({text:n,href:e})=>`
<a href="${e}" class="feds-secondary-cta">
  ${n}
</a>
`,Nn=n=>n.type==="PrimaryCTA"?yn(n):P(n);var $=({text:n,href:e,daaLl:t})=>`<a class="feds-link" href="${e}"${T(null,t??n)}>${n}</a>`;var On=n=>{let[e,t]=je(n);return[{type:"LinksCard",card:e},t]},je=n=>{let e=n.querySelector("h1, h2, h3")||null;if(!e)throw new l("Expected links card title");let t=n.querySelector("em > a"),r=[...n.querySelectorAll("a")].filter(d=>d!==t);if(r.length===0)throw new l("Expected at least one link");let[o,i]=E(r,C),[a,s]=(()=>{try{return _(n)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:e.textContent??"",links:o,footerCTA:a},[...i,...s]]};var zn=n=>{let e=[...n.querySelectorAll("li > div")],t=[...n.querySelectorAll("li > a")],[r,o]=E(e,qe),[i,a]=E(t,C);return[{type:"ProductList",categories:r,links:i},[...o,...a]]},qe=n=>{let e=n.firstElementChild;if(e?.nodeName!=="H2")throw new l("Expected H2");let t=e.textContent??"",r=e.textContent??"",o=En(e),[i,a]=E(o,cn);return[{type:"ProductCategory",name:t,daaLh:r,links:i},a]};var jn=n=>{let[e,t]=Fe(n);return[{type:"FeaturedCard",card:e},t]},Fe=n=>{let e=n.querySelector("h3")||null;if(!e)throw new g("Eye brow element not found");let t=n.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[i,a]=C(o),[s,d]=_(n);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:i,footerCTA:s,eyeBrow:e.textContent??""},[...d,...a]]};var M={MissingBackgroundImageSection:"Promo card is missing background image section",MissingBackgroundImage:"Promo card is missing background image",MissingBackgroundImageAlt:"Promo card background image is missing alt text",MissingBackgroundImageSrc:"Promo card background image is missing src",MissingContentSection:"Promo card is missing card details section",MissingIcon:"Promo card is missing icon",MissingIconSrc:"Promo card icon is missing src",MissingIconAlt:"Promo card icon is missing alt text",MissingTitleElement:"Promo card is missing title element",MissingTitleText:"Promo card is missing title text",MissingSecondaryCtaAnchor:"Promo card is missing secondary CTA anchor"},qn=n=>{let[e,t]=n.querySelectorAll(":scope > div"),r=new Set;if(e===void 0)throw new l(M.MissingBackgroundImageSection);let o=e.querySelector(":scope picture:not(:scope p picture) img")??null;o===null&&r.add(new g(M.MissingBackgroundImage));let i=o?.getAttribute("alt")??"";i===""&&r.add(new g(M.MissingBackgroundImageAlt));let a=o?.getAttribute("src")??"";if(a===""&&r.add(new g(M.MissingBackgroundImageSrc)),t===void 0)throw new l(M.MissingContentSection);let s=t.querySelector('a[href$=".svg"]')??null;s===null&&r.add(new g(M.MissingIcon));let[d,c]=(s?.textContent?.split("|")??["",""]).map(h=>h.trim());d===""&&r.add(new g(M.MissingIconSrc)),c===""&&r.add(new g(M.MissingIconAlt));let y=t.querySelector("p > strong")??null;if(y===null)throw new l(M.MissingTitleElement);let x=y?.textContent??"";x===""&&r.add(new g(M.MissingTitleText)),t.querySelector("em > a")===null&&r.add(new g(M.MissingSecondaryCtaAnchor));let[p,f]=(()=>{try{return _(n)}catch{return[null,[]]}})();return f.forEach(h=>r.add(h)),[{type:"PromoCard",card:{bgImageAlt:i,bgImageSrc:a,iconAlt:c,iconSrc:d,title:x,cta:p}},[...r]]};var We=`/* Mega Menu grid structure for links-card and promo-card */

/* =========================================
   Gnav Cards Grid (base)
   ========================================= */

.feds-gnav-cards > li:has(> :nth-child(2)) {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

/* =========================================
   Responsive: Desktop (min-width: 900px)
   ========================================= */

@media (min-width: 900px) {
  .feds-gnav-cards > li:has(> :nth-child(2)) {
    gap: 8px;
  }

  .feds-popup .feds-gnav-cards:has(.promo-card, .links-card) {
    align-items: stretch;
  }

  .feds-popup .feds-gnav-cards:has(.promo-card, .links-card) article {
    height: 100%;
  }

  .feds-gnav-cards > li:has(.promo-card, .links-card) {
    width: calc(33.33% - 5.33px);
  }
}

/* =========================================
   Responsive: Large Desktop (min-width: 1280px)
   ========================================= */

@media (min-width: 1280px) {
  .feds-gnav-cards > li:has(.promo-card, .links-card) {
    width: calc(25% - 6px);
  }

  .feds-gnav-cards > li:has(.promo-card) {
    width: calc(50% - 4px);
  }

  .feds-gnav-cards > li:has(> :nth-child(2)) {
    width: calc(50% - 4px);
    flex-direction: row;
  }

  .feds-gnav-cards > li:has(> :nth-child(2)) article {
    width: calc(50% - 4px);
  }
}
`,Fn=document.createElement("style");Fn.textContent=We;document.head.appendChild(Fn);var Zn=n=>{let e=new Set;if(n===null)throw new l(Wn.elementNull);let t=n.querySelector("h2")?.textContent??"";t===""&&e.add(new g(Wn.noTitle));let r=(async()=>{try{let o=n.querySelector("a"),i=new URL(o?.href??""),a=await H(i);if(a instanceof l)throw new Error(a.message);let s=await Sn(a);if(s instanceof l)throw new Error(s.message);return Tn(i.href,s),n.classList.contains("product-list")?zn(s):Ze(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...e]]},Wn={elementNull:"Element is null",noTitle:"Large Menu has no Title"},Ze=n=>{let e=[...n.children];if(e.length===0)throw new l("No mega menu items found (did you forget to add them correctly?)");let[t,r]=E(e,o=>Ke(o));if(t.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:t},r]},Ke=n=>{let e=[...n.querySelectorAll(".featured-card, .links-card, .promo-card")];if(e.length===0)throw new l("Column contains no cards (did you forget to label them correctly?)");let[t,r]=E(e,o=>Ve(o));if(t.length===0)throw new l("Failed to parse cards in column");return[{type:"GnavColumn",cards:t},r]},Ve=n=>{if(n.classList.contains("featured-card"))return jn(n);if(n.classList.contains("links-card"))return On(n);if(n.classList.contains("promo-card"))return qn(n);throw new l("Unsupported gnav cards section")};var Je=`/* =========================================
   Featured Card
   ========================================= */

.feds-popup .featured-card {
  max-height: 307px;
  height: 307px;
  border-radius: 14px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
  max-width: 275px;
}

.feds-popup .featured-card .featured-eyebrow {
  color: #7a7474;
  font-family: var(--body-font-family);
  font-size: 14px;
  font-weight: 700;
}

.feds-popup .featured-card h4 {
  margin: 0;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 24px;
  color: #000;
  padding: 16px 0 8px 0;
  font-weight: 900;
}

.featured-card .featured-subtitle {
  font-size: 14px;
  line-height: 120%;
}

.featured-card .feds-link {
  padding: 16px 0;
  color: #000;
}

.featured-card > div > a.feds-link::after {
  content: ">";
  margin-left: 6px;
  font-weight: 700;
}

.featured-card a.feds-secondary-cta {
  background: #000;
  color: white;
}

/* =========================================
   Featured Card Footer
   ========================================= */

.featured-card .footer-container {
  width: 100%;
}

.featured-card .footer-container a {
  width: 100%;
  box-sizing: border-box;
}

/* =========================================
   Responsive: Desktop (min-width: 900px)
   ========================================= */

@media (min-width: 900px) {
  .featured-card a.feds-link-group:hover {
    background: black;
    color: white;
  }

  .featured-card:hover {
    background: black;
  }

  .featured-card:hover h4,
  .featured-card:hover .featured-subtitle,
  .featured-card:hover .feds-link {
    color: white;
  }

  .featured-card:hover a.feds-secondary-cta {
    background: white;
    color: #000;
  }

  .feds-popup .feds-gnav-cards:has(.featured-card) {
    flex-wrap: wrap;
  }
}
`,Kn=document.createElement("style");Kn.textContent=Je;document.head.appendChild(Kn);var Vn=({card:n})=>Ye(n),Ye=({title:n,subtitle:e,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${n}</h4>
      <div class="featured-subtitle">${e}</div>
      ${$(o)}
    </div>
    <div class="footer-container">
      ${P(r)}
    </div>
  </article>
`.trim();var Xe=`/* =========================================
   Links Card
   ========================================= */

.feds-popup .links-card {
  border-radius: 14px;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
}

.feds-popup .links-card .links-card-title {
  margin: 0 0 16px;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 42px;
  font-weight: 900;
  color: #000;
}

/* =========================================
   Links Card List
   ========================================= */

.feds-popup .links-card .links-card-links {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 16px;
  line-height: 120%;
}

.feds-popup .links-card .links-card-links .feds-link {
  padding: 0;
  color: #000;
  font-size: 14px;
  font-weight: 400;
}

/* =========================================
   Links Card Footer
   ========================================= */

.feds-popup .links-card .links-card-footer {
  width: 100%;
  margin-top: 20px;
}

.feds-popup .links-card .links-card-footer .feds-secondary-cta {
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
`,Jn=document.createElement("style");Jn.textContent=Xe;document.head.appendChild(Jn);var Yn=({card:n})=>Qe(n),Qe=({title:n,links:e,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${n}</h4>
      <ul class="links-card-links">
        ${e.map(r=>`<li>${$(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${P(t)}
    </div>`}
  </article>
`.trim();var nt=`/* =========================================
   Promo Card
   ========================================= */

.feds-gnav-cards .promo-card {
  position: relative;
  height: 199px;
}

.feds-gnav-cards .promo-card__bg {
  height: 100%;
  width: 100%;
  display: block;
}

.feds-gnav-cards .promo-card__bg-image {
  border-radius: 24px;
  display: block;
  height: 100%;
  object-fit: cover;
  width: 100%;
}

.feds-gnav-cards .promo-card__content {
  position: absolute;
  top: 0;
  left: 0;
  background: transparent;
  width: 100%;
  height: 100%;
}

.feds-gnav-cards .promo-card__icon {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 24px;
  height: 24px;
}

.feds-gnav-cards .promo-card__text-content {
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  padding: 16px;
}

.feds-gnav-cards .promo-card__price,
.feds-gnav-cards .promo-card__title {
  margin: 0;
  color: #fff;
}

.feds-gnav-cards .promo-card__price {
  font-weight: 700;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: -1%;
}

.feds-gnav-cards .promo-card__title {
  font-weight: 900;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -1%;
}

/* =========================================
   Promo Card CTA
   ========================================= */

.feds-gnav-cards .promo-card__cta {
  display: block;
  margin-top: 24px;
}

.feds-gnav-cards .promo-card__cta .feds-secondary-cta {
  font-weight: 700;
  font-size: 14px;
  line-height: 130%;
  letter-spacing: 0;
  border: none;
  background: #fff;
  color: #000;
  padding: 3px 24px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.feds-gnav-cards .promo-card__cta .feds-secondary-cta:hover,
.feds-gnav-cards .promo-card__cta .feds-secondary-cta:focus {
  background: #000;
  color: #fff;
}

/* =========================================
   Responsive: Desktop (min-width: 1024px)
   ========================================= */

@media (min-width: 1024px) {
  .feds-gnav-cards .promo-card {
    height: 100%;
  }

  .feds-gnav-cards .promo-card__bg-image {
    border-radius: 16px;
  }

  .feds-gnav-cards .promo-card__cta {
    margin-top: 16px;
  }
}

/* =========================================
   Responsive: Large Desktop (min-width: 1280px)
   ========================================= */

@media (min-width: 1280px) {
  .feds-gnav-cards .promo-card__bg-image {
    border-radius: 12px;
  }

  .feds-gnav-cards .promo-card__text-content {
    width: 100%;
    box-sizing: border-box;
  }

  .feds-gnav-cards .promo-card__cta {
    position: absolute;
    bottom: 16px;
    right: 16px;
    margin-top: 0;
  }
}
`,Xn=document.createElement("style");Xn.textContent=nt;document.head.appendChild(Xn);var Qn=({card:n})=>et(n),et=({bgImageAlt:n,bgImageSrc:e,iconAlt:t,iconSrc:r,title:o,cta:i})=>`
  <article class="promo-card">
    ${e?`<picture class="promo-card__bg">
             <img src="${e}" alt="${n}" class="promo-card__bg-image">
           </picture>`:""}

    <div class="promo-card__content">
      ${r?`<picture class="promo-card__icon">
               <img src="${r}" alt="${t}" class="promo-card__icon-image">
             </picture>`:""}
      <div class="promo-card__text-content">
        <!-- Placeholder price, replace with actual price data when available -->
        <p class="promo-card__price">US$29.99/mo</p>
        <p class="promo-card__title" role="heading" aria-level="2">
          ${o}
        </p>
        ${i===null?"":`<div class="promo-card__cta">
                 ${P(i)}
               </div>`}
      </div>
    </div>
  </article>
`.trim();var tt=`/* =========================================
   Gnav Cards Container
   ========================================= */

.feds-popup .feds-gnav-cards {
  list-style: none;
  margin: 0;
  padding: 12px 24px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 4px;
  align-items: start;
}

.feds-popup .feds-gnav-cards > li {
  min-width: 0;
}

/* =========================================
   Responsive: Desktop (min-width: 900px)
   ========================================= */

@media (min-width: 900px) {
  .feds-popup .feds-gnav-cards {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    overflow-x: auto;
    width: 100%;
  }

  .feds-popup .feds-gnav-cards > li {
    flex: 0 0 auto;
  }
}
`,ne=document.createElement("style");ne.textContent=tt;document.head.appendChild(ne);var rt=n=>{switch(n.type){case"FeaturedCard":return Vn(n);case"LinksCard":return Yn(n);case"PromoCard":return Qn(n);default:}return""},ee=({sections:n})=>`
  <ul class="feds-gnav-cards">
    ${n.map(e=>`<li>${e.cards.map(t=>rt(t)).join("")}</li>`).join("")}
  </ul>
`;var ot=`/* =========================================
   Product List Container
   ========================================= */

.feds-popup .product-list {
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
.product-list .tab-content,
.product-list .product-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

/* =========================================
   Tabs
   ========================================= */

.product-list .tabs button.tab {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 44px;
  border: 0;
  border-radius: 75px;
  padding: 16px 24px;
  text-align: left;
  font-family: var(--body-font-family);
  font-size: 16px;
  font-weight: 900;
  line-height: 24px;
  color: #2c2c2c;
  background: #0000000D;
  cursor: pointer;
  margin-bottom: 4px;
}

.product-list .tabs button.tab[aria-selected="true"] {
  background: black;
  color: white;
}

/* =========================================
   Tab Content / Tabpanels
   ========================================= */

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
  min-height: 120px;
  height: auto;
  background-color: white;
}

/* =========================================
   Product Links
   ========================================= */

.product-list .product-links a {
  color: #2c2c2c;
}

.product-list .product-links .feds-link::after {
  content: " >";
  padding-left: 4px;
  font-size: 16px;
}
`,te=document.createElement("style");te.textContent=ot;document.head.appendChild(te);var re=({categories:n,links:e})=>{let t=`
    <ul class="tabs" role="tablist">
      ${n.map(it).join("")}
       ${e.map(o=>`<li class="product-links">${$(o)}</li>`).join("")}
    </ul>
  `.trim(),r=`
    <ul class="tab-content">
      ${n.map(({links:o},i)=>`
      <li>
        <ul
          id="${i}"
          role="tabpanel"
          ${i===0?"":"hidden"}
        >
          ${o.map(a=>`<li>${pn(a)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${t}
      ${r}
    </div>
  `.trim()},it=({name:n,daaLh:e},t)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(t===0).toString()}"
          aria-controls="${t}"
          ${T(e,"")}
          >
            ${n}
          </button>
      </li>
  `.trim();var oe=({title:n})=>`
  <button type="button"
          aria-controls="${O(n)}"
          aria-haspopup="true"
          class="mega-menu feds-link"
          popovertarget="${O(n)}"
          ${T(null,n)}
  >
    ${n}
  </button>
  <div id="${O(n)}" popover class="feds-popup">
  </div>
`,ie=(n,e,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${O(e)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${B.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(n.type){case"ProductList":o=re(n);break;case"GnavCards":o=ee(n);break;default:}return`${r}${o}`};var ae={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},se=n=>{if(n===null)return[{type:"Text",content:""},[new g(ae.elementNull,"Minor")]];let e=n.textContent;return e===null?[{type:"Text",content:""},[new g(ae.textContentNull,"Minor")]]:[{type:"Text",content:e},[]]};var le=({content:n})=>n;var de=n=>{if(n===null)throw new l(at.elementNull);if(n.querySelector(".gnav-brand")!==null)return un(n);let t=n.querySelector(".large-menu");return t!==null?Zn(t):n.querySelector("strong")!==null?bn(n):n.querySelector("em")!==null?_(n):n.querySelector("a")===null?se(n):C(n.querySelector("a"))},xn=n=>{switch(n.type){case"Text":return le(n);case"Link":return $(n);case"SecondaryCTA":return P(n);case"PrimaryCTA":return yn(n);case"Brand":return gn(n);case"MegaMenu":return oe(n);default:return console.error(`Failed to recognize component: ${n}`),""}},at={elementNull:"Element is null"};var ce=(n,e)=>{let[t,r]=E([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],C),[o,i]=E([...n.children],de),a=n.querySelector(".product-entry-cta"),[s,d]=(()=>{try{return Bn(a)}catch{return[null,[]]}})(),c=!1,y=[r,i,d].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:c,errors:y,unavEnabled:e}};var pe=n=>{let e=[...n.querySelectorAll('.tabs button[role="tab"]')],t=[...n.querySelectorAll(".tab-content ul")],r=e.map((o,i)=>()=>{e.forEach(a=>{a.setAttribute("aria-selected","false")}),t.forEach(a=>{a.setAttribute("hidden","true")}),t[i]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return e.forEach((o,i)=>{o.addEventListener("click",r[i])}),()=>{e.forEach((o,i)=>{o.removeEventListener("click",r[i])})}};var ue=async({gnavSource:n,asideSource:e})=>{let t=await H(n);if(t instanceof l)return t;let r=await H(e);return{mainNav:t,aside:r}};var st=`/**
 * Global Navigation Styles
 * Styles for the federal global navigation component
 */

:root {
  --feds-heading-font: 'Adobe Clean Display', adobe-clean-display, adobe-clean, 'Trebuchet MS', sans-serif;
  --feds-link-color-dark: #000;
  --feds-link-color-light: #FFFFFF;
  --feds-link-color: #000;
  --feds-nav-height: 64px;
  --feds-gutter: 8px;
}

/* =========================================
   Header Shell
   ========================================= */

header.global-navigation {
  width: 100%;
}

header.feds-header-scrolled .feds-link {
  color: #000;
}

header.global-navigation:has(.feds-popup:popover-open) {
  background-color: #f8f8f8;
}

.global-navigation.site-pivot {
  visibility: visible;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
}

.global-navigation.site-pivot:has(:popover-open) {
  background: #FFF;
  opacity: 1;
}

.global-navigation.site-pivot .universal-nav-container .profile-signed-out button {
  background-color: white;
}

.global-navigation.site-pivot:has(:popover-open) .universal-nav-container .profile-signed-out button,
.global-navigation.site-pivot .universal-nav-container .profile-signed-out button:hover {
  color: inherit;
}

.global-navigation.site-pivot .feds-utilities {
  margin-left: auto;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-brand-container {
  display: none;
}

::backdrop {
  opacity: 1;
}

/* =========================================
   Navigation Bar
   ========================================= */

.global-navigation.site-pivot nav {
  display: flex;
  align-items: center;
  height: var(--feds-nav-height);
  justify-content: flex-start;
}

.global-navigation nav > ul {
  display: flex;
  width: 100%;
  max-width: var(--feds-maxWidth-nav);
  height: inherit;
  align-items: center;
  padding-left: 0;
  background: inherit;
}

.global-navigation nav > ul > li {
  display: flex;
  align-items: center;
}

.global-navigation.site-pivot ul {
  list-style: none;
  margin: 0;
}

/* =========================================
   Nav Links
   ========================================= */

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

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link {
  color: var(--feds-link-color-dark);
  font-family: var(--feds-heading-font);
  font-size: 32px;
  font-weight: 900;
}

.global-navigation:not(.feds-header-scrolled):not(:has(:popover-open)) .feds-gnav-items > li > .feds-link:hover {
  color: #fff;
}

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link:has(~ :popover-open) {
  opacity: 100%;
}

/* =========================================
   Menu Wrapper (Mobile Slide-out)
   ========================================= */

.global-navigation nav > ul > li.feds-menu-wrapper {
  position: fixed;
  top: var(--feds-nav-height);
  left: 0;
  right: 20px;
  flex-direction: column;
  height: calc(100dvh - var(--feds-nav-height));
  border: 0;
  width: 100%;
  translate: -200vw 0;
  opacity: 0;
  display: flex;
  visibility: hidden;
  color: var(--feds-link-color-dark);
}

.global-navigation nav > ul > li.feds-menu-wrapper.feds-menu-active {
  transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0.5s;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open {
  display: flex;
  translate: 0;
  opacity: 1;
  z-index: 2;
  transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0s;
  visibility: visible;
  align-items: flex-start;
  padding: 0;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open .feds-gnav-items {
  align-items: flex-start;
  padding: 12px 24px;
  width: calc(100% - 48px);
}

/* =========================================
   Nav Toggle (Hamburger)
   ========================================= */

.global-navigation nav .feds-nav-toggle {
  margin: 0;
  margin-left: 4px;
  padding: 0;
  border: none;
  background: transparent;
  box-shadow: none;
  color: var(--feds-color-hamburger);
  cursor: pointer;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 300;
}

.global-navigation nav .feds-nav-toggle svg {
  width: 14px;
  height: 7px;
  flex-shrink: 0;
  color: white;
}

.global-navigation.feds-header-scrolled nav .feds-nav-toggle svg {
  color: #000;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle svg {
  display: none;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle::before {
  content: "\\2715";
  color: var(--feds-color-black-v2);
  font-size: 20px;
  font-weight: 300;
}

/* =========================================
   Utilities (App Switcher, Profile)
   ========================================= */

.global-navigation .unav-comp-app-switcher.unav-comp-icon svg {
  fill: white;
}

.global-navigation.feds-header-scrolled .unav-comp-app-switcher.unav-comp-icon svg {
  fill: #000;
}

.global-navigation.feds-header-scrolled .universal-nav-container .profile-signed-out button {
  border: 1px solid #000;
}

header.global-navigation:has(.feds-popup:popover-open) .unav-comp-app-switcher.unav-comp-icon svg {
  fill: inherit;
}

/* =========================================
   Popup (Mega Menu Container)
   ========================================= */

body:has(:popover-open) {
  overflow: hidden;
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
  background: #f8f8f8;
}

.feds-popup > * {
  width: min(1200px, 100%);
  margin: 0 auto;
  box-sizing: border-box;
}

.feds-popup .feds-popup-header {
  display: flex;
  align-items: center;
  padding: 10px 24px;
  gap: 6px;
}

.feds-popup .feds-popup-back-button {
  border: 0;
  background: transparent;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: #2c2c2c;
  cursor: pointer;
}

.feds-popup .feds-popup-back-button svg {
  width: 100%;
  height: 100%;
}

.feds-popup .feds-popup-title {
  font-size: 32px;
  font-weight: 700;
  color: #2c2c2c;
}

/* =========================================
   Link Groups
   ========================================= */

.feds-popup .feds-link-group {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr);
  gap: 10px;
  min-height: 52px;
  align-items: start;
  border-radius: 16px;
  padding: 16px;
  text-decoration: none;
  color: #2c2c2c;
}

.feds-popup .product-list .tab-content [role="tabpanel"] .feds-link-group:hover {
  background: #000;
}

.feds-popup .product-list .tab-content [role="tabpanel"] .feds-link-group:hover .feds-link-group__title {
  color: #fff;
}

.feds-popup .feds-link-group:hover .feds-link-group__title,
.feds-popup .feds-link-group:hover .feds-link-group__subtitle {
  color: #fff;
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

.feds-popup .feds-link-group__badges {
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 6px;
  margin-bottom: 8px;
}

.feds-popup .feds-link-group__badge {
  display: inline-flex;
  align-items: center;
  min-height: 28px;
  padding: 0 14px;
  border: 1px solid #2c2c2c;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 700;
  line-height: 1;
  color: #2c2c2c;
}

.feds-popup .feds-link-group__badge--filled {
  border-color: #000;
  background: #000;
  color: #fff;
}

.feds-popup .feds-link-group__subtitle {
  margin-top: 2px;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.35;
  color: #5c5c5c;
}

.feds-popup .feds-link-group__price {
  display: flex;
  align-items: baseline;
  gap: 6px;
  margin-top: 10px;
}

.feds-popup .feds-link-group__old-price {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  text-decoration: line-through;
  color: #6e6e73;
}

.feds-popup .feds-link-group__new-price {
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  color: #000;
}

.feds-popup .feds-link-group--blue {
  background: #e8f2ff;
}

.feds-popup .feds-link-group--blue:hover {
  background: #dcecff;
}

.feds-popup .feds-link-group:hover .feds-link-group__old-price,
.feds-popup .feds-link-group:hover .feds-link-group__new-price,
.feds-popup .feds-link-group:hover .feds-link-group__badge {
  color: #fff;
  border-color: #fff;
}

.feds-popup .feds-link-group:hover .feds-link-group__badge--filled {
  background: #fff;
  color: #000;
}

.feds-link-group .feds-link-header {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

/* =========================================
   Secondary CTAs
   ========================================= */

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

/* =========================================
   Responsive: Desktop (min-width: 900px)
   ========================================= */

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
    padding-left: 24px;
    justify-content: flex-start;
  }

  .global-navigation nav .feds-gnav-items {
    align-items: center;
    padding-left: 0;
    margin: 0;
    display: flex;
  }

  .global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link {
    opacity: 60%;
    font-size: 14px;
  }

  .global-navigation.site-pivot .feds-gnav-items > li > .mega-menu.feds-link {
    position: relative;
  }

  .global-navigation.site-pivot .feds-gnav-items > li > .mega-menu.feds-link::after {
    content: "";
    position: static;
    right: auto;
    width: 6px;
    height: 6px;
    margin-left: 6px;
    border-top: 0;
    border-left: 0;
    border-right: 1px solid currentColor;
    border-bottom: 1px solid currentColor;
    transform: rotate(45deg) translateY(-1px);
  }

  .global-navigation.site-pivot .feds-gnav-items > li > .mega-menu.feds-link:has(~ .feds-popup:popover-open)::after {
    transform: rotate(-135deg) translateY(-4px);
    margin-left: 10px;
  }

  .feds-popup .feds-popup-header {
    display: none;
  }
}

/* =========================================
   Responsive: Tablet (max-width: 1199px)
   ========================================= */

@media (max-width: 1199px) {
  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* =========================================
   Responsive: Mobile (max-width: 899px)
   ========================================= */

@media (max-width: 899px) {
  .global-navigation.site-pivot .feds-gnav-items > li > .mega-menu.feds-link {
    width: 100%;
    justify-content: space-between;
  }

  .global-navigation.site-pivot .feds-gnav-items > li > .mega-menu.feds-link::before {
    content: "";
    display: inline-block;
    order: 2;
    margin-left: 8px;
    width: 7px;
    height: 7px;
    border-top: 1px solid currentColor;
    border-right: 1px solid currentColor;
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  .feds-popup {
    inset: var(--feds-nav-height) 0 0 0;
  }

  .feds-popup .product-list {
    grid-template-columns: 1fr;
    gap: 14px;
    padding: 22px 16px 28px;
  }

  .product-list .tabs {
    display: flex;
    flex-wrap: nowrap;
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }

  .product-list .tabs::-webkit-scrollbar {
    display: none;
  }

  .product-list .tabs li {
    list-style: none;
    flex: 0 0 auto;
  }

  .product-list .tabs button.tab {
    width: max-content;
    white-space: nowrap;
    min-height: 36px;
    border-radius: 999px;
    padding: 7px 12px;
  }

  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: 1fr;
  }
}

/* =========================================
   Scroll Animations
   ========================================= */

@supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
  @keyframes scroll-transition-main-nav {
    from {
      background-color: transparent;
      width: 100%;
      border-radius: 0px;
      border: solid 0px rgba(0, 0, 0, 0);
      transform: translate(0, 0);
      backdrop-filter: blur(0px);
    }
    to {
      background-color: rgba(255, 255, 255, 0.51);
      width: calc(100% - 8px);
      border-radius: 6px;
      border: solid 1px rgba(0, 0, 0, 0.05);
      transform: translate(4px, 4px);
      backdrop-filter: blur(16.5px);
    }
  }

  @keyframes color-transition {
    from {
      color: white;
    }
    to {
      color: black;
    }
  }

  header.global-navigation:not(:has(:popover-open)) {
    animation: scroll-transition-main-nav linear forwards;
    animation-timeline: scroll();
    animation-range: 0px 100px;
  }

  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) .feds-brand-image svg,
  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) .feds-nav-toggle svg {
    animation: color-transition linear forwards;
    animation-timeline: scroll();
    animation-range: 0px 100px;
  }
}

@supports (not ((animation-timeline: scroll()) and (animation-range: 0% 100%))) {
  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) {
    background-color: rgba(255, 255, 255, 0.51);
    border-radius: 6px;
    width: calc(100% - 8px);
    margin: 4px 4px 0;
    border: solid 1px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(16.5px);
  }

  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) .feds-brand-image svg,
  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) .feds-nav-toggle svg {
    color: black;
  }
}
`,fe=document.createElement("style");fe.textContent=st;document.head.appendChild(fe);var Mi=async n=>{let{gnavSource:e,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:i}=n;if(!(e instanceof URL))throw k(`gnavSource is invalid: ${e}`),new l("gnavSource needs to be a URL object");try{dn(o)}catch(y){throw k(`Failed to initialize MiloConfig: ${y}`),new l(`Failed to initialize MiloConfig: ${y}`)}Mn(i),kn(wn(n));let a=await ue(n);if(a instanceof l)throw k(a.message),a;let{mainNav:s,aside:d}=a;if(s instanceof l)throw k(s.message),s;let c=ce(s,r);if(c instanceof l)throw k(c.message),c;return await lt(c)(t),ct(n)},lt=n=>async e=>{let t=dt(n);e.innerHTML=t,e.classList.add("site-pivot");let r=[...e.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=n.components.filter(s=>s.type==="MegaMenu"),i=o.map(s=>s.content),a=await Promise.all(i.map(async(s,d)=>{let[c,y]=await s,x=o[d].title;return r[d].innerHTML=ie(c,r[d].id,x),y}).flat());return e},dt=({components:n,productCTA:e,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=n.find(d=>d.type==="Brand")??null,o=n.filter(d=>d.type!=="Brand"),i=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 7" fill="currentColor" aria-hidden="true">
            <path d="M13.25 5.5H0.75C0.33594 5.5 0 5.83594 0 6.25C0 6.66406 0.33594 7 0.75 7H13.25C13.6641 7 14 6.66406 14 6.25C14 5.83594 13.6641 5.5 13.25 5.5Z"/>
            <path d="M0.75 1.5H13.25C13.6641 1.5 14 1.16406 14 0.75C14 0.33594 13.6641 0 13.25 0H0.75C0.33594 0 0 0.33594 0 0.75C0 1.16406 0.33594 1.5 0.75 1.5Z"/>
          </svg>
        </button>
      `.trim(),a=r?xn(r):"",s=_n(o,xn);return`
        <li class="feds-brand-wrapper">
          ${i}
          ${a}
        </li>
        <li
          id="feds-menu-wrapper"
          popover
          class="feds-menu-wrapper"
          aria-hidden="true"
        >
          <ul class="feds-gnav-items">
            ${s}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${e===null?"":Nn(e)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,ct=async n=>{let e=new Set,t=await tn(n.mountpoint);t instanceof g?(e.add(t),k(t.message)):t.errors.forEach(o=>e.add(o)),pe(n.mountpoint),vn(n.mountpoint),pt(n.mountpoint),ut(n.mountpoint),gt(n.mountpoint);let r=t instanceof g?()=>{}:t.reloadUnav;return{closeEverything:ft,reloadUnav:r,errors:e,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},pt=n=>{let e=n.querySelector("#feds-menu-wrapper"),t=n.querySelector(".feds-nav-toggle");e?.addEventListener("toggle",()=>{let o=e.matches(":popover-open");t?.setAttribute("aria-expanded",String(o)),e.setAttribute("aria-hidden",String(!o)),o&&e.classList.add("feds-menu-active")}),e?.addEventListener("transitionend",()=>{e.matches(":popover-open")||e.classList.remove("feds-menu-active")}),n.querySelectorAll(".feds-popup[popover]").forEach(o=>{o.addEventListener("toggle",()=>{n.querySelector(`[popovertarget="${o.id}"]`)?.setAttribute("aria-expanded",String(o.matches(":popover-open")))})})},ut=n=>{D.addEventListener("change",()=>{let e=n.querySelector("#feds-menu-wrapper");e?.classList.remove("feds-menu-active"),e?.hidePopover?.(),n.querySelector(".feds-popup:popover-open")?.hidePopover?.()})},ft=()=>{},gt=n=>{let e=n.closest("header");if(!e)return;let t=n.querySelector("#feds-menu-wrapper"),r=()=>t?.matches(":popover-open")??!1,o=()=>window.scrollY>100,i=()=>{if(r()){e.classList.remove("feds-header-scrolled");return}if(o()){e.classList.add("feds-header-scrolled");return}e.classList.remove("feds-header-scrolled")};i(),window.addEventListener("scroll",i,{passive:!0}),t?.addEventListener("toggle",i)};export{Mi as main,ct as postRenderingTasks,lt as renderGnav,dt as renderGnavString};
//# sourceMappingURL=main.js.map
