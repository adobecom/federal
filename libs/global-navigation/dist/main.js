var xe=async e=>{let{placeholders:n}=e,{locale:t}=L(),o=`${Z()}${t.prefix}/federal/globalnav/placeholders.json`,[i,a]=await Promise.all([n,mn(o)]);return new Map([...a,...i])},mn=async e=>{try{let n=await fetch(e);if(!n.ok)throw new g(`Federal placeholders not found at ${e}`);let t=hn(await n.json());if(t instanceof g)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof g)console.error(n.message);else{let t=new g(n.message);console.error(t.message)}return k(`Failed to fetch placeholders from ${e}`),new Map([])}},hn=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new g(n.message)}};function we(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,i,a)=>{let s=i??a??"";return n.get(s)??s}):e}var[Ce,ke]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var N=window.matchMedia("(min-width: 900px)"),B={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var Le=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},D=e=>({eval:e,or:n=>D(t=>{try{return e(t)}catch{return n(t)}})}),E=(e,n)=>e.reduce(([t,r],o)=>{try{let[i,a]=n(o);return[[...t,i],[...r,...a]]}catch(i){return i instanceof l?[t,[i,...r]]:[t,r]}},[[],[]]),[Ee,vn]=(()=>{let e,n=!1;return[t=>{n||(e=t,n=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),R=async e=>{try{if(e===null)return new l("URL is null");let n=ie(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return k(`Request for ${n} failed`),new l(`Request for ${n} failed`);let r=await t.text(),o=await ke(),i=we(r,o),{body:a}=new DOMParser().parseFromString(i,"text/html");try{let{handleCommands:s,commands:c}=vn();s(c,a)}catch(s){k(`Personalization not applied: ${s?.message}`)}return a}catch(n){return new l(n?.message)}},I,Z=()=>{if(I)return I;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(I)return I;let n=window.location.origin;I=e.some(o=>{let i=n.replace(".stage","");return o.startsWith("https://")?i===o:i.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(I=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),I},ie=(e="")=>{if(e.includes("c2-poc--milo--adobecom"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(e.includes("c2-poc-feds-gnav--milo--adobecom"))return e.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(e.includes("localhost:3000"))return e.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${Z()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${Z()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},Me=(e,n)=>{let t=(r,o)=>{let i=`${r}[${o}^="./media_"]`;n.querySelectorAll(i).forEach(s=>{let c=s.getAttribute(o);if(c)try{let d=ie(new URL(c,new URL(e,window.location.href)).href);s.setAttribute(o,d)}catch(d){console.warn(`[MediaPathError]: Failed to process relative media path (${c}) for ${r}`,d)}})};t("img","src"),t("source","srcset")},Te=async e=>{let n=async(t,r)=>{if(t instanceof l)return t;try{let i=[...t.querySelectorAll('a[href*="#_inline"]')].map(async a=>{try{if(r.has(a.href))return;let s=ie(a.href),c=new URL(s),d=await R(c);if(r.add(a.href),d instanceof l)throw d;await n(d,r),a.replaceWith(...d.children);return}catch{return}},[]);return await Promise.all(i),t}catch(o){return new l(JSON.stringify(o))}};return n(e,new Set)},_e=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),O=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),T=(e,n)=>{let t=e!==null&&e!==""?` daa-lh="${e}"`:"",r=n!==null&&n!==""?` daa-ll="${n}"`:"";return`${t}${r}`},Se=()=>!0;function bn(e,{id:n,as:t,callback:r,crossorigin:o,rel:i,fetchpriority:a}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${e}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",i),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),a!==void 0&&c.setAttribute("fetchpriority",a),c.setAttribute("href",e),r&&(c.onload=d=>r(d.type),c.onerror=d=>r(typeof d=="string"?"error":d.type)),document.head.appendChild(c),c}function yn(e,n){return bn(e,{rel:"stylesheet",callback:n})}function ae(e,n=!1){n&&yn(e)}var se=(e,n,{mode:t,id:r}={})=>new Promise((o,i)=>{let a=document.querySelector(`head > script[src="${e}"]`);if(!a){let{head:d}=document;a=document.createElement("script"),a.setAttribute("src",e),r!=null&&a.setAttribute("id",r),n!=null&&a.setAttribute("type",n),t&&["async","defer"].includes(t)&&a.setAttribute(t,""),d.append(a)}let s=a.dataset.loaded;if(s!=null){o(a);return}let c=d=>{a.removeEventListener("load",c),a.removeEventListener("error",c),d.type==="error"?i(new Error(`error loading script: ${a.src}`)):d.type==="load"&&(a.dataset.loaded="true",o(a))};a.addEventListener("load",c),a.addEventListener("error",c)});function z(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var xn=e=>{let n=e,t=i=>i==null||typeof i!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let i=n.unav;if(i.profile!==void 0){if(typeof i.profile!="object"||i.profile===null)return!1;let a=i.profile;if(a.signInCtaStyle!==void 0&&a.signInCtaStyle!=="primary"&&a.signInCtaStyle!=="secondary"||a.messageEventListener!==void 0&&typeof a.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[le,L]=(()=>{let e,n=!1;return[t=>{if(!n){if(!xn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),wn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Pe={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function Cn(e){let n=wn[e];return!n&&Pe[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var oe="langstore/";function Ae(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Pe[t]??t).split("_",2);if(t.startsWith(oe)||window.location.pathname.startsWith(`/${oe}`)){let i=t.replace(oe,"").toLowerCase();r=Cn(i),o=i}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var K={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},C=e=>{if(e===null)throw new l(K.elementNull);if(e.tagName!=="A")throw new l(K.notAnchor);let n=e?.textContent??"";if(n==="")throw new l(K.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new l(K.hrefNotFound);let r=e.getAttribute("daa-ll");return[{type:"Link",text:n,href:t,daaLl:r},[]]};var ce=e=>D(Ln).or(kn).or(En).eval(e),_={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},kn=e=>{let n=new Set;if(!e)throw new l(_.elementNull);let t=e.querySelector("p a")??e.querySelector("div ~ div > a");if(!t)throw new l(_.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new g(_.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new g(_.noHref));let i=t.getAttribute("daa-ll"),a=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||n.add(new g(_.noSubtitleP));let c=s?.textContent??"";c===""&&n.add(new g(_.noSubtitle));let d=[],y=null,x=null;e.classList.contains("new")&&d.push("New"),e.classList.contains("show-offer")&&(d.push("Save 20%"),y="$29.99",x="$19.99");let[u,p=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(f=>f.trim());return[{type:"LinkGroupLink",iconHref:u,iconAlt:p,title:r,href:o,subtitle:c,badges:d,oldPrice:y,newPrice:x,daaLl:i,daaLh:a},[...n]]},Ln=e=>{if(!e)throw new l(_.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new l(_.notAHeader);let t=e.querySelector("a")?.textContent??"",r=e.querySelector("a")?.getAttribute("daa-ll")??null,o=e.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(_.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n,daaLl:r,daaLh:o},[]]},En=e=>{if(!e)throw new l(_.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=C(n),o=n?.getAttribute("daa-ll")??null,i=n?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:i},r]};var de=e=>{switch(e.type){case"LinkGroupHeader":return Mn(e);case"LinkGroupLink":return Tn(e);case"LinkGroupBlue":return _n(e);default:return console.error(e),""}},Mn=({title:e,classes:n,daaLl:t,daaLh:r})=>{let o=n.slice(1).map(a=>`feds-link-group--${a}`).join(" "),i=T(r,t??e);return`
    <div role="heading" class="feds-link-group ${o}"${i}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `},Tn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o,badges:i=[],oldPrice:a=null,newPrice:s=null,daaLl:c,daaLh:d})=>{let y=n!==null&&e!==null,x=T(d,c??t),u=y?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
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
  `},_n=({link:e,daaLl:n,daaLh:t})=>{let r=T(t,n??e.text);return`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`};var V={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},U=/(\.png|\.jpg|\.jpeg|\.svg)/i,Sn=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&U.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&U.test(r)?r:null},Pn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},pe=e=>{if(e===null)throw new l(V.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new l(V.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new l(V.noLinks);let r=t.find(m=>{let v=m.textContent??"";return!U.test(m.href)&&!U.test(v)});if(!r)throw new l(V.noPrimaryLink);let o=n.matches(".brand-image-only"),i=n.matches(".no-logo"),a=n.matches(".image-only"),s=!i,c=!o&&!a,d=t.filter(m=>{let v=m.textContent??"";return U.test(m.href)||U.test(v)}),[y,x,u]=(()=>{let m=o?B.brand:B.company,[v=null,w=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(re=>re?.src).filter(re=>re?.length>0),[H=null,W=null]=d.map(Sn),gn=d[0]instanceof Element?Pn(d[0]):r.textContent?.trim()??"";return[H??v??m,W??w,gn]})(),p=r.textContent?.trim()??"",f=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let h=(m,v)=>{let w=v!=null&&v!=="";return Se()&&w?v:m},b=y.startsWith("<svg")?{type:"inline-svg",svgContent:h(y,x),alt:u}:{type:"image",src:h(y,x),alt:u};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:f,label:p,image:b}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:f,image:b,alt:u}},[]]:s&&a?[{type:"Brand",data:{type:"ImageOnlyBrand",href:f,image:b,alt:u}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:f,label:p}},[]]};var An=`.feds-brand-container {
    display: flex;
    flex-shrink: 0;
}

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

li.feds-brand-wrapper {
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  padding-left: 20px;
}

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

@media (min-width: 900px) {
    li.feds-brand-wrapper {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      padding-left: 0;
    }
    .feds-brand-image+.feds-brand-label {
        display: flex;
    }
    .feds-brand-image.desktop-brand{
      display: inherit;
    }
    header:has(:popover-open) .feds-brand-image svg {
      color: black;
    }
    .feds-brand-image.mobile-brand {
      display: none;
    }
}
`,$e=document.createElement("style");$e.textContent=An;document.head.appendChild($e);var ue=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},$n=`
<?xml
version="1.0" encoding="UTF-8"?>
<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64.57 35" fill="currentColor">
    <path d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/>
</svg>
`.trim(),In=`
<svg preserveAspectRatio="none" width="100%" height="100%" overflow="visible" style="display: block;" viewBox="0 0 18 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path id="Logo" d="M17.5512 15.9999H13.8827C13.7233 16.0027 13.5666 15.9587 13.4326 15.8735C13.2987 15.7882 13.1934 15.6656 13.1303 15.5211L9.1476 6.3291C9.1372 6.29332 9.11539 6.26179 9.08542 6.23919C9.05545 6.2166 9.0189 6.20413 8.98118 6.20365C8.94347 6.20316 8.9066 6.21469 8.87605 6.2365C8.84549 6.25832 8.82286 6.28928 8.81152 6.32478L6.32954 12.161C6.31607 12.1925 6.31072 12.2269 6.31397 12.261C6.31721 12.2951 6.32896 12.3279 6.34815 12.3565C6.36735 12.385 6.39339 12.4084 6.42398 12.4246C6.45456 12.4408 6.48872 12.4493 6.52343 12.4493H9.25162C9.33426 12.4493 9.41508 12.4733 9.48398 12.5183C9.55288 12.5634 9.60681 12.6275 9.63905 12.7026L10.8335 15.3264C10.8652 15.4 10.8778 15.4802 10.8704 15.5599C10.863 15.6395 10.8357 15.7161 10.791 15.7828C10.7463 15.8495 10.6856 15.9042 10.6142 15.9421C10.5429 15.98 10.4631 15.9998 10.3821 15.9999H0.450101C0.375399 15.9994 0.301967 15.9808 0.236351 15.9455C0.170735 15.9103 0.114973 15.8595 0.0740362 15.7979C0.0330997 15.7362 0.00826021 15.6655 0.00173221 15.592C-0.00479579 15.5185 0.00719033 15.4446 0.0366223 15.3769L6.35412 0.526466C6.41869 0.369291 6.52976 0.234984 6.67284 0.141079C6.81593 0.0471732 6.98437 -0.00196688 7.15618 7.38373e-05H10.7999C10.9718 -0.00217252 11.1403 0.0468839 11.2835 0.140814C11.4266 0.234745 11.5377 0.369168 11.6021 0.526466L17.9633 15.3769C17.9927 15.4445 18.0048 15.5183 17.9983 15.5917C17.9919 15.665 17.9672 15.7357 17.9264 15.7973C17.8856 15.859 17.83 15.9097 17.7646 15.9451C17.6991 15.9804 17.6258 15.9992 17.5512 15.9999V15.9999Z" />
</svg>
`.trim(),J=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      <span class="feds-brand-image brand-image-only desktop-brand">
        ${$n}
      </span>
      <span class="feds-brand-image brand-image-only mobile-brand">
        ${In}
      </span>
    </a>
  </div>`.trim(),fe=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return J(n.href,ue(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return J(n.href,ue(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return J(n.href,ue(n.image,!1),t)}case"BrandLabelOnly":return J(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var ge=["appswitcher","help"],Y={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[j,Ie]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function X(e,n=!1){let s=(/uc_carts=/.test(document.cookie)?e:e?.filter(d=>d!=="cart"))??[],c=s.length??3;if(n){let d=s.filter(x=>ge.includes(x)).length;return`calc(92px + ${d*32}px + ${d*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var Q=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(Y).find(r=>Y[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},Hn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},ee=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(Hn))if(e.includes(n))return t;return"linux"},ne=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var He=()=>{try{return L().signInContext||{}}catch{return{}}},Rn=()=>{let e=L();return z("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Un=()=>{let n=L()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:i}=t.detail;if(!(!r||r!=="System"||!o||typeof i!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(a=>{j(a)}).catch(()=>{j({})});break;case"SignOut":i();break;case"ProfileSwitch":Promise.resolve(i()).then(a=>{a&&window.location.reload()});break;default:break}})};function Gn(){let{unav:e}=L();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var q=()=>{let e=L();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Un()},signInCtaStyle:Rn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(He())},onSignUp:()=>{window.adobeIMS?.signIn(He())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Gn()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var Re=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},te=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new g('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),i=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new g('metadata "universal-nav" is missing'));let a=i.trim();o instanceof HTMLMetaElement&&a.length===0&&r.add(new g('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=a.split(",").map(m=>m.trim()).filter(m=>Object.keys(q()).includes(m)||m==="signup");if(s){let m=X(c,s);t.style.setProperty("min-width",m)}let d;try{d=L()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let y=Q(d.locale),x=d.env.name==="prod"?"prod":"stage",u=await ne(),p=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(p??"")||(p="1.5"),await Promise.all([se(`https://${x}.adobeccstatic.com/unav/${p}/UniversalNav.js`),ae(`https://${x}.adobeccstatic.com/unav/${p}/UniversalNav.css`,!0)]);let f=()=>{let m=q(),v=[m.profile];return Re(v,!1),c?.forEach(w=>{if(w==="profile")return;if(w==="signup"){Re(v,!0);return}let H=m[w];H&&v.push(H)}),v},h=()=>({target:t,env:x,locale:y,countryCode:Ae(d?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:ee(),os_version:navigator.platform},event:{visitor_guid:u}},children:f(),isSectionDividerRequired:!!d?.unav?.showSectionDivider,showTrayExperience:!N.matches});await window?.UniversalNav?.(h()),s||t?.style.removeProperty("min-width");let b=m=>{window?.UniversalNav?.reload(h())};return N.addEventListener("change",()=>{b()}),{reloadUnav:b,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new g(r)}};function A(e,n){return[...e.querySelectorAll(n)]}function F(e,n,t){A(e,n).forEach(r=>t?r.removeAttribute("tabindex"):r.setAttribute("tabindex","-1"))}var G={ArrowLeft:-1,ArrowRight:1,ArrowUp:-1,ArrowDown:1},Ue=new Set(["ArrowLeft","ArrowRight"]),Nn=new Set(["ArrowUp","ArrowDown"]),Bn='.tabs [role="tab"][aria-selected="true"]';function me(e,n,t){return(e+n+t)%t}function Dn(e,n,t,r){let o=G[t];if(Ue.has(t)){let p=n+o;return p>=0&&p<e.length?p:null}let i=getComputedStyle(r).gridTemplateColumns.split(" ").length,a=[...r.children],s=p=>{let f=e[p].parentElement;return f?a.indexOf(f):-1},c=s(n)%i,d=Math.floor(s(n)/i)+(t==="ArrowDown"?1:-1),y=Math.floor((a.length-1)/i);if(d<0||d>y)return null;let x=null,u=1/0;for(let p=0;p<e.length;p++){let f=Math.abs(s(p)%i-c);Math.floor(s(p)/i)===d&&f<u&&(u=f,x=p)}return x}function he(e){F(e,'.tab-content [role="tabpanel"] a',!1);let n=[];A(e,".feds-popup[popover]").forEach(u=>{let p=()=>{u.matches(":popover-open")||F(u,'[role="tabpanel"] a',!1)};u.addEventListener("toggle",p),n.push(()=>u.removeEventListener("toggle",p))});let t=(u,p)=>{u.focus(),p.preventDefault()},r=()=>e.querySelector(".feds-popup:popover-open"),o=u=>u.querySelector(Bn),i=u=>u.querySelector('[role="tabpanel"]:not([hidden])');function a(u){let p=r(),f=e.querySelector("#feds-menu-wrapper");if(!f)return!1;let h=p??(f?.matches(":popover-open")?f:null);if(!h)return!1;h.hidePopover?.();let b=p?`[popovertarget="${h.id}"]`:".feds-nav-toggle";return e.querySelector(b)?.focus(),u.preventDefault(),!0}function s(u,p,f){if(!Ue.has(p))return!1;let h=A(e,".feds-gnav-items > li > .feds-link"),b=h.indexOf(u);return b<0?!1:(t(h[me(b,G[p],h.length)],f),!0)}function c(u,p,f,h){let b=A(p,'.tabs :is([role="tab"], .product-links a)'),m=b.indexOf(u);if(m<0)return!1;if(G[f]){let v=b[me(m,G[f],b.length)];return v.matches('[role="tab"]')&&v.click(),t(v,h),!0}if(f==="Tab"&&!h.shiftKey&&u.matches('[aria-selected="true"]')){let v=i(p);if(!v)return!1;F(v,"a",!0);let w=v.querySelector("a");return w&&t(w,h),!0}return!1}function d(u,p,f,h){let b=i(p);if(!b)return!1;let m=A(b,"a"),v=m.indexOf(u);if(v<0)return!1;if(G[f]){let w=Dn(m,v,f,b);return w!==null?(t(m[w],h),!0):f==="ArrowUp"?(F(b,"a",!1),t(o(p)??m[0],h),!0):!1}if(f==="Tab"&&!h.shiftKey){if(v+1<m.length)t(m[v+1],h);else{let w=A(p,'.tabs [role="tab"]'),H=o(p),W=w[w.indexOf(H)+1]??p.querySelector(".product-links a");if(W)t(W,h);else return!1}return!0}if(f==="Tab"&&h.shiftKey){if(v>0)t(m[v-1],h);else{F(b,"a",!1);let w=o(p)??A(p,'.tabs :is([role="tab"], .product-links a)')[0];w&&t(w,h)}return!0}return!1}function y(u,p,f,h){if(!Nn.has(f))return!1;let b=A(p,".feds-gnav-cards a"),m=b.indexOf(u);return m<0?!1:(t(b[me(m,G[f],b.length)],h),!0)}function x(u){let p=document.activeElement??u.target;if(u.key==="Escape"){a(u);return}let f=r();f&&(f.matches(":has(.product-list)")&&(c(p,f,u.key,u)||d(p,f,u.key,u))||f.matches(":has(.feds-gnav-cards)")&&y(p,f,u.key,u))||s(p,u.key,u)}return e.addEventListener("keydown",x),n.push(()=>e.removeEventListener("keydown",x)),()=>n.forEach(u=>u())}var On="feds-milo",k=(e,n="default",t="e")=>{let{locale:r}=L(),o=z("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:On,sampleRate:1,tags:n,errorType:t})};var l=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},g=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&k(n)}};var Ge=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(zn(e));if(!t)throw new Error("");let[{text:r,href:o},i]=C(t);return[{type:e.type,text:r,href:o},i]},ve=Ge({type:"PrimaryCTA"}),S=Ge({type:"SecondaryCTA"}),Ne=e=>D(ve).or(S).eval(e),zn=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var be=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,P=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,Be=e=>e.type==="PrimaryCTA"?be(e):P(e);var $=({text:e,href:n,daaLl:t})=>`<a class="feds-link" href="${n}"${T(null,t??e)}>${e}</a>`;var De=e=>{let[n,t]=jn(e);return[{type:"LinksCard",card:n},t]},jn=e=>{let n=e.querySelector("h1, h2, h3")||null;if(!n)throw new l("Expected links card title");let t=e.querySelector("em > a"),r=[...e.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,i]=E(r,C),[a,s]=(()=>{try{return S(e)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:n.textContent??"",links:o,footerCTA:a},[...i,...s]]};var Oe=e=>{let n=[...e.querySelectorAll("li > div")],t=[...e.querySelectorAll("li > a")],[r,o]=E(n,qn),[i,a]=E(t,C);return[{type:"ProductList",categories:r,links:i},[...o,...a]]},qn=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new l("Expected H2");let t=n.textContent??"",r=n.textContent??"",o=Le(n),[i,a]=E(o,ce);return[{type:"ProductCategory",name:t,daaLh:r,links:i},a]};var ze=e=>{let[n,t]=Fn(e);return[{type:"FeaturedCard",card:n},t]},Fn=e=>{let n=e.querySelector("h3")||null;if(!n)throw new g("Eye brow element not found");let t=e.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[i,a]=C(o),[s,c]=S(e);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:i,footerCTA:s,eyeBrow:n.textContent??""},[...c,...a]]};var M={MissingBackgroundImageSection:"Promo card is missing background image section",MissingBackgroundImage:"Promo card is missing background image",MissingBackgroundImageAlt:"Promo card background image is missing alt text",MissingBackgroundImageSrc:"Promo card background image is missing src",MissingContentSection:"Promo card is missing card details section",MissingIcon:"Promo card is missing icon",MissingIconSrc:"Promo card icon is missing src",MissingIconAlt:"Promo card icon is missing alt text",MissingTitleElement:"Promo card is missing title element",MissingTitleText:"Promo card is missing title text",MissingSecondaryCtaAnchor:"Promo card is missing secondary CTA anchor"},je=e=>{let[n,t]=e.querySelectorAll(":scope > div"),r=new Set;if(n===void 0)throw new l(M.MissingBackgroundImageSection);let o=n.querySelector(":scope picture:not(:scope p picture) img")??null;o===null&&r.add(new g(M.MissingBackgroundImage));let i=o?.getAttribute("alt")??"";i===""&&r.add(new g(M.MissingBackgroundImageAlt));let a=o?.getAttribute("src")??"";if(a===""&&r.add(new g(M.MissingBackgroundImageSrc)),t===void 0)throw new l(M.MissingContentSection);let s=t.querySelector('a[href$=".svg"]')??null;s===null&&r.add(new g(M.MissingIcon));let[c,d]=(s?.textContent?.split("|")??["",""]).map(h=>h.trim());c===""&&r.add(new g(M.MissingIconSrc)),d===""&&r.add(new g(M.MissingIconAlt));let y=t.querySelector("p > strong")??null;if(y===null)throw new l(M.MissingTitleElement);let x=y?.textContent??"";x===""&&r.add(new g(M.MissingTitleText)),t.querySelector("em > a")===null&&r.add(new g(M.MissingSecondaryCtaAnchor));let[p,f]=(()=>{try{return S(e)}catch{return[null,[]]}})();return f.forEach(h=>r.add(h)),[{type:"PromoCard",card:{bgImageAlt:i,bgImageSrc:a,iconAlt:d,iconSrc:c,title:x,cta:p}},[...r]]};var Wn=`/* Mega Menu specific grid structure styles for links-card and promo-card */
.feds-gnav-cards > li:has(> :nth-child(2)) {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

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
`,qe=document.createElement("style");qe.textContent=Wn;document.head.appendChild(qe);var We=e=>{let n=new Set;if(e===null)throw new l(Fe.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new g(Fe.noTitle));let r=(async()=>{try{let o=e.querySelector("a"),i=new URL(o?.href??""),a=await R(i);if(a instanceof l)throw new Error(a.message);let s=await Te(a);if(s instanceof l)throw new Error(s.message);return Me(i.href,s),e.classList.contains("product-list")?Oe(s):Zn(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...n]]},Fe={elementNull:"Element is null",noTitle:"Large Menu has no Title"},Zn=e=>{let n=[...e.children];if(n.length===0)throw new l("No mega menu items found (did you forget to add them correctly?)");let[t,r]=E(n,o=>Kn(o));if(t.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:t},r]},Kn=e=>{let n=[...e.querySelectorAll(".featured-card, .links-card, .promo-card")];if(n.length===0)throw new l("Column contains no cards (did you forget to label them correctly?)");let[t,r]=E(n,o=>Vn(o));if(t.length===0)throw new l("Failed to parse cards in column");return[{type:"GnavColumn",cards:t},r]},Vn=e=>{if(e.classList.contains("featured-card"))return ze(e);if(e.classList.contains("links-card"))return De(e);if(e.classList.contains("promo-card"))return je(e);throw new l("Unsupported gnav cards section")};var Jn=`.feds-popup .featured-card .featured-eyebrow {
  color: #7a7474;
  font-family: var(--body-font-family);
  font-size: 14px;
  font-weight: 700;
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

.feds-popup .featured-card h4 {
  margin: 0;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 24px;
  color: #000;
  padding: 16px 0 8px 0;
  font-weight: 900;
}

.featured-card .footer-container {
  width: 100%;

  a {
    width: 100%;
    box-sizing: border-box;
  }
}

@media (min-width: 900px) {
  .featured-card a.feds-link-group:hover {
    background: black;
    color: white;
  }

  .featured-card:hover a.feds-secondary-cta {
    background: white;
    color: #000;
  }

  .featured-card:hover {
    background: black;
  }
  
  .featured-card:hover {
    h4, .featured-subtitle, .feds-link {
      color: white;
    }
  }
  .feds-popup .feds-gnav-cards:has(.featured-card) {
    flex-wrap: wrap;
  }
}
`,Ze=document.createElement("style");Ze.textContent=Jn;document.head.appendChild(Ze);var Ke=({card:e})=>Yn(e),Yn=({title:e,subtitle:n,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${e}</h4>
      <div class="featured-subtitle">${n}</div>
      ${$(o)}
    </div>
    <div class="footer-container">
      ${P(r)}
    </div>
  </article>
`.trim();var Xn=`.feds-popup .links-card {
  border-radius: 14px;
  background: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  /* width: 342px;
  height: 359px; */
}

.feds-popup .links-card .links-card-title {
  margin: 0 0 16px;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 42px;
  font-weight: 900;
  color: #000;
}

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

.feds-popup .links-card .links-card-footer {
  width: 100%;
  margin-top: 20px;
}

.feds-popup .links-card .links-card-footer .feds-secondary-cta {
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
`,Ve=document.createElement("style");Ve.textContent=Xn;document.head.appendChild(Ve);var Je=({card:e})=>Qn(e),Qn=({title:e,links:n,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${e}</h4>
      <ul class="links-card-links">
        ${n.map(r=>`<li>${$(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${P(t)}
    </div>`}
  </article>
`.trim();var et=`.feds-gnav-cards .promo-card {
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

.feds-gnav-cards .promo-card__cta {
    display: none;
}

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


`,Ye=document.createElement("style");Ye.textContent=et;document.head.appendChild(Ye);var Xe=({card:e})=>nt(e),nt=({bgImageAlt:e,bgImageSrc:n,iconAlt:t,iconSrc:r,title:o,cta:i})=>`
  <article class="promo-card">
    ${n?`<picture class="promo-card__bg">
             <img src="${n}" alt="${e}" class="promo-card__bg-image">
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
`.trim();var tt=`.feds-popup .feds-gnav-cards {
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
`,Qe=document.createElement("style");Qe.textContent=tt;document.head.appendChild(Qe);var rt=e=>{switch(e.type){case"FeaturedCard":return Ke(e);case"LinksCard":return Je(e);case"PromoCard":return Xe(e);default:}return""},en=({sections:e})=>`
  <ul class="feds-gnav-cards">
    ${e.map(n=>`<li>${n.cards.map(t=>rt(t)).join("")}</li>`).join("")}
  </ul>
`;var ot=`.feds-popup .product-list {
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

.product-list .product-links a {
  color: #2c2c2c;
}

.product-list .product-links .feds-link::after {
  content: " >";
  padding-left: 4px;
  font-size: 16px;
}`,nn=document.createElement("style");nn.textContent=ot;document.head.appendChild(nn);var tn=({categories:e,links:n})=>{let t=`
    <ul class="tabs" role="tablist">
      ${e.map(it).join("")}
       ${n.map(o=>`<li class="product-links">${$(o)}</li>`).join("")}
    </ul>
  `.trim(),r=`
    <ul class="tab-content">
      ${e.map(({links:o},i)=>`
      <li>
        <ul
          id="${i}"
          role="tabpanel"
          ${i===0?"":"hidden"}
        >
          ${o.map(a=>`<li>${de(a)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${t}
      ${r}
    </div>
  `.trim()},it=({name:e,daaLh:n},t)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(t===0).toString()}"
          aria-controls="${t}"
          ${T(n,"")}
          >
            ${e}
          </button>
      </li>
  `.trim();var rn=({title:e})=>`
  <button type="button"
          aria-controls="${O(e)}"
          aria-haspopup="true"
          class="mega-menu feds-link"
          popovertarget="${O(e)}"
          ${T(null,e)}
  >
    ${e}
  </button>
  <div id="${O(e)}" popover class="feds-popup">
  </div>
`,on=(e,n,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${O(n)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${B.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(e.type){case"ProductList":o=tn(e);break;case"GnavCards":o=en(e);break;default:}return`${r}${o}`};var an={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},sn=e=>{if(e===null)return[{type:"Text",content:""},[new g(an.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new g(an.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var ln=({content:e})=>e;var cn=e=>{if(e===null)throw new l(at.elementNull);if(e.querySelector(".gnav-brand")!==null)return pe(e);let t=e.querySelector(".large-menu");return t!==null?We(t):e.querySelector("strong")!==null?ve(e):e.querySelector("em")!==null?S(e):e.querySelector("a")===null?sn(e):C(e.querySelector("a"))},ye=e=>{switch(e.type){case"Text":return ln(e);case"Link":return $(e);case"SecondaryCTA":return P(e);case"PrimaryCTA":return be(e);case"Brand":return fe(e);case"MegaMenu":return rn(e);default:return console.error(`Failed to recognize component: ${e}`),""}},at={elementNull:"Element is null"};var dn=(e,n)=>{let[t,r]=E([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],C),[o,i]=E([...e.children],cn),a=e.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return Ne(a)}catch{return[null,[]]}})(),d=!1,y=[r,i,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:d,errors:y,unavEnabled:n}};var pn=e=>{let n=[...e.querySelectorAll('.tabs button[role="tab"]')],t=[...e.querySelectorAll(".tab-content ul")],r=n.map((o,i)=>()=>{n.forEach(a=>{a.setAttribute("aria-selected","false")}),t.forEach(a=>{a.setAttribute("hidden","true")}),t[i]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,i)=>{o.addEventListener("click",r[i])}),()=>{n.forEach((o,i)=>{o.removeEventListener("click",r[i])})}};var un=async({gnavSource:e,asideSource:n})=>{let t=await R(e);if(t instanceof l)return t;let r=await R(n);return{mainNav:t,aside:r}};var st=`/**
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
  margin-left:auto;
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-brand-container {
  display: none;
}

::backdrop {
  opacity: 1;
}

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link {
  color: var(--feds-link-color-dark);
  font-family: var(--feds-heading-font);
  font-size: 32px;
  font-weight: 900;
}

.global-navigation .feds-gnav-items > li > .feds-link:hover {
  color: #fff;
}

/* .global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link::after {
  content: '';
  position: absolute;
  width: 9.271px;
  height: 9.179px;
  transform: rotate(45deg);
  border-color: var(--feds-color-black-v2);
  right: 24px;
  border-right: 2px solid var(--feds-color-black-v2);
  border-top: 2px solid var(--feds-color-black-v2);
} */

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link:has(~ :popover-open) {
  opacity: 100%;
}


.global-navigation nav > ul {
    display: flex;
    width: 100%;
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

.global-navigation.site-pivot ul {
    list-style: none;
    margin: 0;
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

body:has(:popover-open) {
  overflow: hidden;
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
  .feds-link-group__title {
    color: #fff;
  }
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


@media (max-width: 1199px) {
  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

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
    /* max-height: none; */
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

@supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
  @keyframes scroll-transition-main-nav {
    from {
      background-color:transparent;
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
`,fn=document.createElement("style");fn.textContent=st;document.head.appendChild(fn);var Mi=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:i}=e;if(!(n instanceof URL))throw k(`gnavSource is invalid: ${n}`),new l("gnavSource needs to be a URL object");try{le(o)}catch(y){throw k(`Failed to initialize MiloConfig: ${y}`),new l(`Failed to initialize MiloConfig: ${y}`)}Ee(i),Ce(xe(e));let a=await un(e);if(a instanceof l)throw k(a.message),a;let{mainNav:s,aside:c}=a;if(s instanceof l)throw k(s.message),s;let d=dn(s,r);if(d instanceof l)throw k(d.message),d;return await lt(d)(t),dt(e)},lt=e=>async n=>{let t=ct(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=e.components.filter(s=>s.type==="MegaMenu"),i=o.map(s=>s.content),a=await Promise.all(i.map(async(s,c)=>{let[d,y]=await s,x=o[c].title;return r[c].innerHTML=on(d,r[c].id,x),y}).flat());return n},ct=({components:e,productCTA:n,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=e.find(c=>c.type==="Brand")??null,o=e.filter(c=>c.type!=="Brand"),i=`
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
      `.trim(),a=r?ye(r):"",s=_e(o,ye);return`
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
  ${n===null?"":Be(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,dt=async e=>{let n=new Set,t=await te(e.mountpoint);t instanceof g?(n.add(t),k(t.message)):t.errors.forEach(o=>n.add(o)),pn(e.mountpoint),he(e.mountpoint),pt(e.mountpoint),ut(e.mountpoint),gt(e.mountpoint);let r=t instanceof g?()=>{}:t.reloadUnav;return{closeEverything:ft,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},pt=e=>{let n=e.querySelector("#feds-menu-wrapper"),t=e.querySelector(".feds-nav-toggle");n?.addEventListener("toggle",()=>{let o=n.matches(":popover-open");t?.setAttribute("aria-expanded",String(o)),n.setAttribute("aria-hidden",String(!o)),o&&n.classList.add("feds-menu-active")}),n?.addEventListener("transitionend",()=>{n.matches(":popover-open")||n.classList.remove("feds-menu-active")}),e.querySelectorAll(".feds-popup[popover]").forEach(o=>{o.addEventListener("toggle",()=>{e.querySelector(`[popovertarget="${o.id}"]`)?.setAttribute("aria-expanded",String(o.matches(":popover-open")))})})},ut=e=>{N.addEventListener("change",()=>{let n=e.querySelector("#feds-menu-wrapper");n&&(n.classList.remove("feds-menu-active"),n.matches(":popover-open")===!0&&n.hidePopover?.())})},ft=()=>{},gt=e=>{let n=e.closest("header");if(!n)return;let t=e.querySelector("#feds-menu-wrapper"),r=()=>t?.matches(":popover-open")??!1,o=()=>window.scrollY>100,i=()=>{if(r()){n.classList.remove("feds-header-scrolled");return}if(o()){n.classList.add("feds-header-scrolled");return}n.classList.remove("feds-header-scrolled")};i(),window.addEventListener("scroll",i,{passive:!0}),t?.addEventListener("toggle",i)};export{Mi as main,dt as postRenderingTasks,lt as renderGnav,ct as renderGnavString};
//# sourceMappingURL=main.js.map
