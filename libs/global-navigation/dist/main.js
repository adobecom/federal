var ue=async e=>{let{placeholders:n}=e,{locale:t}=y(),o=`${O()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([n,on(o)]);return new Map([...i,...a])},on=async e=>{try{let n=await fetch(e);if(!n.ok)throw new p(`Federal placeholders not found at ${e}`);let t=an(await n.json());if(t instanceof p)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof p)console.error(n.message);else{let t=new p(n.message);console.error(t.message)}return v(`Failed to fetch placeholders from ${e}`),new Map([])}},an=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new p(n.message)}};function fe(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,a,i)=>{let s=a??i??"";return n.get(s)??s}):e}var[ge,me]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var _=window.matchMedia("(min-width: 900px)"),U={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var ve=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},H=e=>({eval:e,or:n=>H(t=>{try{return e(t)}catch{return n(t)}})}),b=(e,n)=>e.reduce(([t,r],o)=>{try{let[a,i]=n(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof l?[t,[a,...r]]:[t,r]}},[[],[]]),he=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;_.matches?r=n(t):r=e(t),_.addEventListener("change",()=>{r?.(),r=_.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},[ye,sn]=(()=>{let e,n=!1;return[t=>{n||(e=t,n=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),$=async e=>{try{if(e===null)return new l("URL is null");let n=be(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return v(`Request for ${n} failed`),new l(`Request for ${n} failed`);let r=await t.text(),o=await me(),a=fe(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");try{let{handleCommands:s,commands:c}=sn();s(c,i)}catch(s){v(`Personalization not applied: ${s?.message}`)}return i}catch(n){return new l(n?.message)}},E,O=()=>{if(E)return E;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(E)return E;let n=window.location.origin;E=e.some(o=>{let a=n.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(E=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),E},be=(e="")=>{if(e.includes("c2-poc--milo--adobecom"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(e.includes("c2-poc-feds-gnav--milo--adobecom"))return e.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(e.includes("localhost:3000"))return e.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${O()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${O()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},xe=async e=>{let n=async(t,r)=>{if(t instanceof l)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let s=be(i.href),c=new URL(s),d=await $(c);if(r.add(i.href),d instanceof l)throw d;await n(d,r),i.replaceWith(...d.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new l(JSON.stringify(o))}};return n(e,new Set)},we=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),G=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),w=(e,n)=>{let t=e!==null&&e!==""?` daa-lh="${e}"`:"",r=n!==null&&n!==""?` daa-ll="${n}"`:"";return`${t}${r}`},Ce=()=>!0;function ln(e,{id:n,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${e}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",a),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),i!==void 0&&c.setAttribute("fetchpriority",i),c.setAttribute("href",e),r&&(c.onload=d=>r(d.type),c.onerror=d=>r(typeof d=="string"?"error":d.type)),document.head.appendChild(c),c}function cn(e,n){return ln(e,{rel:"stylesheet",callback:n})}function ee(e,n=!1){n&&cn(e)}var ne=(e,n,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${e}"]`);if(!i){let{head:d}=document;i=document.createElement("script"),i.setAttribute("src",e),r!=null&&i.setAttribute("id",r),n!=null&&i.setAttribute("type",n),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),d.append(i)}let s=i.dataset.loaded;if(s!=null){o(i);return}let c=d=>{i.removeEventListener("load",c),i.removeEventListener("error",c),d.type==="error"?a(new Error(`error loading script: ${i.src}`)):d.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",c),i.addEventListener("error",c)});function N(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var dn=e=>{let n=e,t=a=>a==null||typeof a!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let a=n.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[te,y]=(()=>{let e,n=!1;return[t=>{if(!n){if(!dn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),pn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Le={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function un(e){let n=pn[e];return!n&&Le[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var Q="langstore/";function ke(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Le[t]??t).split("_",2);if(t.startsWith(Q)||window.location.pathname.startsWith(`/${Q}`)){let a=t.replace(Q,"").toLowerCase();r=un(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var F={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},m=e=>{if(e===null)throw new l(F.elementNull);if(e.tagName!=="A")throw new l(F.notAnchor);let n=e?.textContent??"";if(n==="")throw new l(F.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new l(F.hrefNotFound);let r=e.getAttribute("daa-ll");return[{type:"Link",text:n,href:t,daaLl:r},[]]};var re=e=>H(gn).or(fn).or(mn).eval(e),x={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},fn=e=>{let n=new Set;if(!e)throw new l(x.elementNull);let t=e.querySelector("p a")??e.querySelector("div ~ div > a");if(!t)throw new l(x.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new p(x.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new p(x.noHref));let a=t.getAttribute("daa-ll"),i=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||n.add(new p(x.noSubtitleP));let c=s?.textContent??"";c===""&&n.add(new p(x.noSubtitle));let[d,f=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(h=>h.trim());return[{type:"LinkGroupLink",iconHref:d,iconAlt:f,title:r,href:o,subtitle:c,daaLl:a,daaLh:i},[...n]]},gn=e=>{if(!e)throw new l(x.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new l(x.notAHeader);let t=e.querySelector("a")?.textContent??"",r=e.querySelector("a")?.getAttribute("daa-ll")??null,o=e.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(x.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n,daaLl:r,daaLh:o},[]]},mn=e=>{if(!e)throw new l(x.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=m(n),o=n?.getAttribute("daa-ll")??null,a=n?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:a},r]};var oe=e=>{switch(e.type){case"LinkGroupHeader":return vn(e);case"LinkGroupLink":return hn(e);case"LinkGroupBlue":return yn(e);default:return console.error(e),""}},vn=({title:e,classes:n,daaLl:t,daaLh:r})=>{let o=n.slice(1).map(i=>`feds-link-group--${i}`).join(" "),a=w(r,t??e);return`
    <div role="heading" class="feds-link-group ${o}"${a}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `},hn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o,daaLl:a,daaLh:i})=>{let s=n!==null&&e!==null,c=w(i,a??t),d=s?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"";return`
    <a class="feds-link-group" href="${r}"${c}>
      ${d}
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${t}</div>
        <div class="feds-link-group__subtitle">${o}</div>
      </div>
    </a>
  `},yn=({link:e,daaLl:n,daaLh:t})=>{let r=w(t,n??e.text);return`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`};var j={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},R=/(\.png|\.jpg|\.jpeg|\.svg)/i,bn=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&R.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&R.test(r)?r:null},xn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},ie=e=>{if(e===null)throw new l(j.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new l(j.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new l(j.noLinks);let r=t.find(u=>{let g=u.textContent??"";return!R.test(u.href)&&!R.test(g)});if(!r)throw new l(j.noPrimaryLink);let o=n.matches(".brand-image-only"),a=n.matches(".no-logo"),i=n.matches(".image-only"),s=!a,c=!o&&!i,d=t.filter(u=>{let g=u.textContent??"";return R.test(u.href)||R.test(g)}),[f,h,S]=(()=>{let u=o?U.brand:U.company,[g=null,k=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(Y=>Y?.src).filter(Y=>Y?.length>0),[z=null,tn=null]=d.map(bn),rn=d[0]instanceof Element?xn(d[0]):r.textContent?.trim()??"";return[z??g??u,tn??k,rn]})(),L=r.textContent?.trim()??"",P=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let I=(u,g)=>{let k=g!=null&&g!=="";return Ce()&&k?g:u},A=f.startsWith("<svg")?{type:"inline-svg",svgContent:I(f,h),alt:S}:{type:"image",src:I(f,h),alt:S};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:P,label:L,image:A}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:P,image:A,alt:S}},[]]:s&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:P,image:A,alt:S}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:P,label:L}},[]]};var wn=`.feds-brand-container {
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
}`,Ee=document.createElement("style");Ee.textContent=wn;document.head.appendChild(Ee);var ae=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},q=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),se=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return q(n.href,ae(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return q(n.href,ae(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return q(n.href,ae(n.image,!1),t)}case"BrandLabelOnly":return q(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var le=["appswitcher","help"],W={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[B,Te]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function Z(e,n=!1){let s=(/uc_carts=/.test(document.cookie)?e:e?.filter(d=>d!=="cart"))??[],c=s.length??3;if(n){let d=s.filter(h=>le.includes(h)).length;return`calc(92px + ${d*32}px + ${d*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var V=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(W).find(r=>W[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},Cn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},K=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(Cn))if(e.includes(n))return t;return"linux"},J=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var Me=()=>{try{return y().signInContext||{}}catch{return{}}},Ln=()=>{let e=y();return N("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},kn=()=>{let n=y()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{B(i)}).catch(()=>{B({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function En(){let{unav:e}=y();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var D=()=>{let e=y();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:kn()},signInCtaStyle:Ln(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Me())},onSignUp:()=>{window.adobeIMS?.signIn(Me())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:En()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var Se=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},X=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new p('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new p('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new p('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=i.split(",").map(u=>u.trim()).filter(u=>Object.keys(D()).includes(u)||u==="signup");if(s){let u=Z(c,s);t.style.setProperty("min-width",u)}let d;try{d=y()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let f=V(d.locale),h=d.env.name==="prod"?"prod":"stage",S=await J(),L=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(L??"")||(L="1.5"),await Promise.all([ne(`https://${h}.adobeccstatic.com/unav/${L}/UniversalNav.js`),ee(`https://${h}.adobeccstatic.com/unav/${L}/UniversalNav.css`,!0)]);let P=()=>{let u=D(),g=[u.profile];return Se(g,!1),c?.forEach(k=>{if(k==="profile")return;if(k==="signup"){Se(g,!0);return}let z=u[k];z&&g.push(z)}),g},I=()=>({target:t,env:h,locale:f,countryCode:ke(d?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:K(),os_version:navigator.platform},event:{visitor_guid:S}},children:P(),isSectionDividerRequired:!!d?.unav?.showSectionDivider,showTrayExperience:!_.matches});await window?.UniversalNav?.(I()),s||t?.style.removeProperty("min-width");let A=u=>{window?.UniversalNav?.reload(I())};return _.addEventListener("change",()=>{A()}),{reloadUnav:A,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new p(r)}};var Tn="feds-milo",v=(e,n="default",t="e")=>{let{locale:r}=y(),o=N("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Tn,sampleRate:1,tags:n,errorType:t})};var l=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},p=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&v(n)}};var Pe=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(Mn(e));if(!t)throw new Error("");let[{text:r,href:o},a]=m(t);return[{type:e.type,text:r,href:o},a]},ce=Pe({type:"PrimaryCTA"}),T=Pe({type:"SecondaryCTA"}),Ae=e=>H(ce).or(T).eval(e),Mn=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var de=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,M=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,_e=e=>e.type==="PrimaryCTA"?de(e):M(e);var C=({text:e,href:n,daaLl:t})=>`<a class="feds-link" href="${n}"${w(null,t??e)}>${e}</a>`;var $e=e=>{let[n,t]=Sn(e);return[{type:"LinksCard",card:n},t]},Sn=e=>{let n=e.querySelector("h1, h2, h3")||null;if(!n)throw new l("Expected links card title");let t=e.querySelector("em > a"),r=[...e.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,a]=b(r,m),[i,s]=(()=>{try{return T(e)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:n.textContent??"",links:o,footerCTA:i},[...a,...s]]};var Re=e=>{let n=[...e.querySelectorAll("li > div")],t=[...e.querySelectorAll("li > a")],[r,o]=b(n,Pn),[a,i]=b(t,m);return[{type:"ProductList",categories:r,links:a},[...o,...i]]},Pn=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new l("Expected H2");let t=n.textContent??"",r=n.textContent??"",o=ve(n),[a,i]=b(o,re);return[{type:"ProductCategory",name:t,daaLh:r,links:a},i]};var Ie=e=>{let[n,t]=An(e);return[{type:"FeaturedCard",card:n},t]},An=e=>{let n=e.querySelector("h3")||null;if(!n)throw new p("Eye brow element not found");let t=e.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[a,i]=m(o),[s,c]=T(e);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:a,footerCTA:s,eyeBrow:n.textContent??""},[...c,...i]]};var He=e=>{let n=new Set;if(e===null)throw new l(Ue.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new p(Ue.noTitle));let r=(async()=>{try{let o=e.querySelector("a"),a=new URL(o?.href??""),i=await $(a);if(i instanceof l)throw new Error(i.message);let s=await xe(i);if(s instanceof l)throw new Error(s.message);return e.classList.contains("product-list")?Re(s):_n(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...n]]},Ue={elementNull:"Element is null",noTitle:"Large Menu has no Title"},_n=e=>{let n=[...e.children].filter(a=>a.classList.contains("featured-card")||a.classList.contains("links-card")),t=n.length>0?n:[...e.querySelectorAll(".featured-card, .links-card")];if(t.length===0)throw new l("Unrecognized mega menu item (did you forget to label it correctly?)");let[r,o]=b(t,$n);if(r.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:r},o]},$n=e=>{if(e.classList.contains("featured-card"))return Ie(e);if(e.classList.contains("links-card"))return $e(e);throw new l("Unsupported gnav cards section")};var Rn=`.feds-popup .featured-card .featured-eyebrow {
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
}
`,Ge=document.createElement("style");Ge.textContent=Rn;document.head.appendChild(Ge);var Ne=({card:e})=>In(e),In=({title:e,subtitle:n,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${e}</h4>
      <div class="featured-subtitle">${n}</div>
      ${C(o)}
    </div>
    <div class="footer-container">
      ${M(r)}
    </div>
  </article>
`.trim();var Un=`.feds-popup .links-card {
  border-radius: 14px;
  background: #fffg;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
  width: 342px;
  height: 359px;
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
`,Be=document.createElement("style");Be.textContent=Un;document.head.appendChild(Be);var De=({card:e})=>Hn(e),Hn=({title:e,links:n,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${e}</h4>
      <ul class="links-card-links">
        ${n.map(r=>`<li>${C(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${M(t)}
    </div>`}
  </article>
`.trim();var Gn=`.feds-popup .feds-gnav-cards {
  list-style: none;
  margin: 0;
  padding: 12px 24px 24px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  align-items: start;
}

.feds-popup .feds-gnav-cards > li {
  min-width: 0;
}

@media (min-width: 900px) {
  .feds-popup .feds-gnav-cards {
    display: flex;
    flex-wrap: nowrap;
    gap: 12px;
    overflow-x: auto;
    width: 100%;
  }

  .feds-popup .feds-gnav-cards > li {
    flex: 0 0 auto;
  }
}
`,ze=document.createElement("style");ze.textContent=Gn;document.head.appendChild(ze);var Oe=({sections:e})=>`
  <ul class="feds-gnav-cards">
    ${e.map(n=>{switch(n.type){case"FeaturedCard":return`<li>${Ne(n)}</li>`;case"LinksCard":return`<li>${De(n)}</li>`;default:}return""}).join("")}
  </ul>
`;var Nn=`.feds-popup .product-list {
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
  height: 120px;
  background-color: white;
}

.product-list .product-links a {
  color: #2c2c2c;
}

.product-list .product-links .feds-link::after {
  content: " >";
  padding-left: 4px;
  font-size: 16px;
}`,Fe=document.createElement("style");Fe.textContent=Nn;document.head.appendChild(Fe);var je=({categories:e,links:n})=>{let t=`
    <ul class="tabs" role="tablist">
      ${e.map(Bn).join("")}
       ${n.map(o=>`<li class="product-links">${C(o)}</li>`).join("")}
    </ul>
  `.trim(),r=`
    <ul class="tab-content">
      ${e.map(({links:o},a)=>`
      <li>
        <ul
          id="${a}"
          role="tabpanel"
          ${a===0?"":"hidden"}
        >
          ${o.map(i=>`<li>${oe(i)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${t}
      ${r}
    </div>
  `.trim()},Bn=({name:e,daaLh:n},t)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(t===0).toString()}"
          aria-controls="${t}"
          ${w(n,"")}
          >
            ${e}
          </button>
      </li>
  `.trim();var qe=({title:e})=>`
  <button type="button"
          aria-controls="${G(e)}"
          class="mega-menu feds-link"
          popovertarget="${G(e)}"
  >
    ${e}
  </button>
  <div id="${G(e)}" popover class="feds-popup">
  </div>
`,We=(e,n,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${G(n)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${U.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(e.type){case"ProductList":o=je(e);break;case"GnavCards":o=Oe(e);break;default:}return`${r}${o}`};var Ze={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Ve=e=>{if(e===null)return[{type:"Text",content:""},[new p(Ze.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new p(Ze.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var Ke=({content:e})=>e;var Je=e=>{if(e===null)throw new l(Dn.elementNull);if(e.querySelector(".gnav-brand")!==null)return ie(e);let t=e.querySelector(".large-menu");return t!==null?He(t):e.querySelector("strong")!==null?ce(e):e.querySelector("em")!==null?T(e):e.querySelector("a")===null?Ve(e):m(e.querySelector("a"))},pe=e=>{switch(e.type){case"Text":return Ke(e);case"Link":return C(e);case"SecondaryCTA":return M(e);case"PrimaryCTA":return de(e);case"Brand":return se(e);case"MegaMenu":return qe(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Dn={elementNull:"Element is null"};var Xe=(e,n)=>{let[t,r]=b([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],m),[o,a]=b([...e.children],Je),i=e.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return Ae(i)}catch{return[null,[]]}})(),d=!1,f=[r,a,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:d,errors:f,unavEnabled:n}};var zn=e=>{let n=[...e.querySelectorAll('.tabs button[role="tab"]')],t=[...e.querySelectorAll(".tab-content ul")],r=n.map((o,a)=>()=>{n.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{n.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var Ye=zn;var On=e=>()=>console.log(e),Fn=e=>()=>console.log(e),Qe=he({mobileEventListeners:Fn,desktopEventListeners:On});var en=async({gnavSource:e,asideSource:n})=>{let t=await $(e);if(t instanceof l)return t;let r=await $(n);return{mainNav:t,aside:r}};var jn=`/**
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
  background: #F8F8F8;
  opacity: 1;
}

.global-navigation.site-pivot .universal-nav-container .profile-signed-out button {
  color: white;
}
.global-navigation.site-pivot:has(:popover-open) .universal-nav-container .profile-signed-out button,
.global-navigation.site-pivot .universal-nav-container .profile-signed-out button:hover {
  color: inherit;
}

.global-navigation.site-pivot .feds-utilities {
  margin-left:auto;
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

.global-navigation nav {
  background-color: inherit;
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
    border: 0;
    width: 100%;
    translate: -200vw 0;
    opacity: 0;
    transition: translate 0.4s ease-out, opacity 0.4s ease, visibility 0s linear 0.5s;
    display: flex;
    visibility: hidden;
    color: var(--feds-link-color-dark);
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
    color: var(--feds-color-white-v2);
}

.global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) .feds-nav-toggle::before {
    content: "\\2715"; 
    color: var(--feds-color-black-v2);
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

  .global-navigation.site-pivot:has(.feds-popup:popover-open),
  .global-navigation.site-pivot:has(.feds-menu-wrapper:popover-open) {
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
    flex-wrap: wrap;
    gap: 8px;
  }

  .product-list .tabs li {
    list-style: none;
  }

  .product-list .tabs button.tab {
    width: auto;
    min-height: 36px;
    border-radius: 999px;
    padding: 7px 12px;
  }

  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: 1fr;
  }
}

`,nn=document.createElement("style");nn.textContent=jn;document.head.appendChild(nn);var Ko=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:a}=e;if(!(n instanceof URL))throw v(`gnavSource is invalid: ${n}`),new l("gnavSource needs to be a URL object");try{te(o)}catch(f){throw v(`Failed to initialize MiloConfig: ${f}`),new l(`Failed to initialize MiloConfig: ${f}`)}ye(a),ge(ue(e));let i=await en(e);if(i instanceof l)throw v(i.message),i;let{mainNav:s,aside:c}=i;if(s instanceof l)throw v(s.message),s;let d=Xe(s,r);if(d instanceof l)throw v(d.message),d;return await qn(d)(t),Zn(e)},qn=e=>async n=>{let t=Wn(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=e.components.filter(s=>s.type==="MegaMenu"),a=o.map(s=>s.content),i=await Promise.all(a.map(async(s,c)=>{let[d,f]=await s,h=o[c].title;return r[c].innerHTML=We(d,r[c].id,h),f}).flat());return n},Wn=({components:e,productCTA:n,unavEnabled:t})=>`
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
      `.trim(),i=r?pe(r):"",s=we(o,pe);return`
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
            ${s}
          </ul>
        </li>
      `.trim()})()}
  </ul>
  ${n===null?"":_e(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,Zn=async e=>{let n=new Set,t=await X(e.mountpoint);t instanceof p?(n.add(t),v(t.message)):t.errors.forEach(o=>n.add(o)),Ye(e.mountpoint),Qe(e.mountpoint);let r=t instanceof p?()=>{}:t.reloadUnav;return{closeEverything:Vn,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Vn=()=>{};export{Ko as main,Zn as postRenderingTasks,qn as renderGnav,Wn as renderGnavString};
//# sourceMappingURL=main.js.map
