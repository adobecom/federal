var fn=async n=>{let{placeholders:e}=n,{locale:t}=w(),o=`${O()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([e,de(o)]);return new Map([...i,...a])},de=async n=>{try{let e=await fetch(n);if(!e.ok)throw new d(`Federal placeholders not found at ${n}`);let t=ue(await e.json());if(t instanceof d)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(e){if(e instanceof d)console.error(e.message);else{let t=new d(e.message);console.error(t.message)}return y(`Failed to fetch placeholders from ${n}`),new Map([])}},ue=n=>{try{let{data:e}=n;if(!e.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return n}catch(e){return new d(e.message)}};function mn(n,e){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(n)?n.replace(t,(o,a,i)=>{let s=a??i??"";return e.get(s)??s}):n}var[hn,vn]=(()=>{let n;return[e=>{n||(n=e)},()=>{if(!n)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return n}]})();var _=window.matchMedia("(min-width: 900px)"),H={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var bn=n=>{let e=[],t=n.nextElementSibling??null;for(;t!==null;)e.push(t),t=t.nextElementSibling??null;return e},U=n=>({eval:n,or:e=>U(t=>{try{return n(t)}catch{return e(t)}})}),b=(n,e)=>n.reduce(([t,r],o)=>{try{let[a,i]=e(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof l?[t,[a,...r]]:[t,r]}},[[],[]]),yn=({mobileEventListeners:n,desktopEventListeners:e})=>t=>{let r;_.matches?r=e(t):r=n(t),_.addEventListener("change",()=>{r?.(),r=_.matches?e(t):n(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},[xn,ge]=(()=>{let n,e=!1;return[t=>{e||(n=t,e=!0)},()=>{if(!n)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return n}]})(),R=async n=>{try{if(n===null)return new l("URL is null");let e=wn(`${n.origin}${n.pathname.replace(/(\.html$|$)/,".plain.html")}${n.hash}`),t=await fetch(e);if(!t.ok)return y(`Request for ${e} failed`),new l(`Request for ${e} failed`);let r=await t.text(),o=await vn(),a=mn(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");try{let{handleCommands:s,commands:c}=ge();s(c,i)}catch(s){y(`Personalization not applied: ${s?.message}`)}return i}catch(e){return new l(e?.message)}},A,O=()=>{if(A)return A;let n=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(A)return A;let e=window.location.origin;A=n.some(o=>{let a=e.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?e:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(e.includes("localhost")||e.includes(`.${r}.`))&&(A=`https://main--federal--adobecom.aem.${e.endsWith(".live")?"live":"page"}`),A},wn=(n="")=>{if(n.includes("c2-poc--milo--adobecom"))return n.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(n.includes("c2-poc-feds-gnav--milo--adobecom"))return n.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(n.includes("localhost:3000"))return n.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof n!="string"||!n.includes("/federal/"))return n;if(n.startsWith("/"))return`${O()}${n}`;try{let{pathname:e,search:t,hash:r}=new URL(n);return`${O()}${e}${t}${r}`}catch(e){let t=e instanceof Error?e.message:String(e);console.warn(`getFederatedUrl errored parsing the URL: ${n}: ${t}`)}return n},kn=async n=>{let e=async(t,r)=>{if(t instanceof l)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let s=wn(i.href),c=new URL(s),p=await R(c);if(r.add(i.href),p instanceof l)throw p;await e(p,r),i.replaceWith(...p.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new l(JSON.stringify(o))}};return e(n,new Set)},Ln=(n,e)=>n.map(t=>`<li>${e(t)}</li>`).join(""),G=n=>n.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),Cn=()=>!0;function fe(n,{id:e,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${n}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",a),e!==void 0&&c.setAttribute("id",e),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),i!==void 0&&c.setAttribute("fetchpriority",i),c.setAttribute("href",n),r&&(c.onload=p=>r(p.type),c.onerror=p=>r(typeof p=="string"?"error":p.type)),document.head.appendChild(c),c}function me(n,e){return fe(n,{rel:"stylesheet",callback:e})}function en(n,e=!1){e&&me(n)}var tn=(n,e,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${n}"]`);if(!i){let{head:p}=document;i=document.createElement("script"),i.setAttribute("src",n),r!=null&&i.setAttribute("id",r),e!=null&&i.setAttribute("type",e),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),p.append(i)}let s=i.dataset.loaded;if(s!=null){o(i);return}let c=p=>{i.removeEventListener("load",c),i.removeEventListener("error",c),p.type==="error"?a(new Error(`error loading script: ${i.src}`)):p.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",c),i.addEventListener("error",c)});function N(n,e=document){let t=n&&n.includes(":")?"property":"name";return e.head.querySelector(`meta[${t}="${n}"]`)?.content??null}var he=n=>{let e=n,t=a=>a==null||typeof a!="object";if(t(e)||t(e.locale)||typeof e.locale.prefix!="string"||t(e.env)||typeof e.env.name!="string")return!1;if(e.unav!==void 0){if(typeof e.unav!="object"||e.unav===null)return!1;let a=e.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(e.jarvis!==void 0&&(typeof e.jarvis!="object"||e.jarvis===null||typeof e.jarvis.id!="string"))},[rn,w]=(()=>{let n,e=!1;return[t=>{if(!e){if(!he(t))throw new Error("MiloConfig validation failed: Invalid structure");n=t,e=!0}},()=>{if(!n)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return n}]})(),ve={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},En={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function be(n){let e=ve[n];return!e&&En[n]&&(e=n),!e&&n.includes("-")&&([e]=n.split("-")),e||"US"}var nn="langstore/";function Pn(n){let t=(n?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(En[t]??t).split("_",2);if(t.startsWith(nn)||window.location.pathname.startsWith(`/${nn}`)){let a=t.replace(nn,"").toLowerCase();r=be(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var j={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},h=n=>{if(n===null)throw new l(j.elementNull);if(n.tagName!=="A")throw new l(j.notAnchor);let e=n?.textContent??"";if(e==="")throw new l(j.textContentNotFound);let t=n?.getAttribute("href")??"";if(t==="")throw new l(j.hrefNotFound);return[{type:"Link",text:e,href:t},[]]};var on=n=>U(xe).or(ye).or(we).eval(n),P={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},ye=n=>{let e=new Set;if(!n)throw new l(P.elementNull);let t=n.querySelector("p a")??n.querySelector("div ~ div > a");if(!t)throw new l(P.noTitleAnchor);let r=t.textContent??"";r===""&&e.add(new d(P.noTitle));let o=t.getAttribute("href")??"";o===""&&e.add(new d(P.noHref));let a=t?.closest("p")?.nextElementSibling;a||e.add(new d(P.noSubtitleP));let i=a?.textContent??"";i===""&&e.add(new d(P.noSubtitle));let[s,c=null]=(n.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(p=>p.trim());return[{type:"LinkGroupLink",iconHref:s,iconAlt:c,title:r,href:o,subtitle:i},[...e]]},xe=n=>{if(!n)throw new l(P.elementNull);let e=[...n.classList];if(!e.includes("header"))throw new l(P.notAHeader);let t=n.querySelector("a")?.textContent??"";if(t==="")throw new l(P.noTitle);return[{type:"LinkGroupHeader",title:t,classes:e},[]]},we=n=>{if(!n)throw new l(P.elementNull);if(!n.classList.contains("blue"))throw new Error("Not a Blue Link Group");let e=n.querySelector("a"),[t,r]=h(e);return[{type:"LinkGroupBlue",link:t},r]};var an=n=>{switch(n.type){case"LinkGroupHeader":return ke(n);case"LinkGroupLink":return Le(n);case"LinkGroupBlue":return Ce(n);default:return console.error(n),""}},ke=({title:n,classes:e})=>`
    <div role="heading" class="feds-link-group ${e.slice(1).map(r=>`feds-link-group--${r}`).join(" ")}">
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n}</div>
      </div>
    </div>
  `,Le=({iconHref:n,iconAlt:e,title:t,href:r,subtitle:o})=>{let i=e!==null&&n!==null?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${n}"
          alt="${e}"
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
  `},Ce=({link:n})=>`
  <a href="${n.href}" class="feds-link-group feds-link-group--blue" daa-ll="${n.text}">
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n.text}</div>
      </div>
  </a>
`;var q={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},$=/(\.png|\.jpg|\.jpeg|\.svg)/i,Ee=n=>{let e=n.querySelector("picture img")?.getAttribute("src")??null;if(e!==null&&e!=="")return e;let t=n.textContent?.trim();if(t!==void 0&&t!==""&&$.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=n.getAttribute("href");return r!==null&&r!==""&&$.test(r)?r:null},Pe=n=>{let e=n.textContent?.trim();if(e?.includes("|")===!0){let r=e.split("|")[1]?.trim();if(r)return r}return n.querySelector("img")?.getAttribute("alt")??""},sn=n=>{if(n===null)throw new l(q.elementNull);let e=n.querySelector(".gnav-brand");if(e===null)throw new l(q.elementNull);let t=[...e.querySelectorAll("a")];if(t.length===0)throw new l(q.noLinks);let r=t.find(f=>{let v=f.textContent??"";return!$.test(f.href)&&!$.test(v)});if(!r)throw new l(q.noPrimaryLink);let o=e.matches(".brand-image-only"),a=e.matches(".no-logo"),i=e.matches(".image-only"),s=!a,c=!o&&!i,p=t.filter(f=>{let v=f.textContent??"";return $.test(f.href)||$.test(v)}),[g,m,C]=(()=>{let f=o?H.brand:H.company,[v=null,S=null]=[...e.querySelectorAll('picture img[src$=".svg"]')].map(Q=>Q?.src).filter(Q=>Q?.length>0),[F=null,ce=null]=p.map(Ee),pe=p[0]instanceof Element?Pe(p[0]):r.textContent?.trim()??"";return[F??v??f,ce??S,pe]})(),x=r.textContent?.trim()??"",L=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let E=(f,v)=>{let S=v!=null&&v!=="";return Cn()&&S?v:f},k=g.startsWith("<svg")?{type:"inline-svg",svgContent:E(g,m),alt:C}:{type:"image",src:E(g,m),alt:C};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:L,label:x,image:k}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:L,image:k,alt:C}},[]]:s&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:L,image:k,alt:C}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:L,label:x}},[]]};var Te=`.feds-brand-container {
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
}`,Tn=document.createElement("style");Tn.textContent=Te;document.head.appendChild(Tn);var ln=(n,e)=>{let t=`feds-brand-image${e?" brand-image-only":""}`;if(n.type==="inline-svg")return`<span class="${t}">${n.svgContent}</span>`;let r=n.alt?` alt="${n.alt}"`:"";return`<span class="${t}"><img src="${n.src}"${r} /></span>`},W=(n,e,t="")=>`<div class="feds-brand-container">
    <a href="${n}" class="feds-brand" daa-ll="Brand"${t}>
      ${e}
    </a>
  </div>`.trim(),cn=n=>{let{data:e}=n;switch(e.type){case"LabelledBrand":return W(e.href,ln(e.image,!1)+`<span class="feds-brand-label">${e.label}</span>`);case"BrandImageOnly":{let t=e.alt?` aria-label="${e.alt}"`:"";return W(e.href,ln(e.image,!0),t)}case"ImageOnlyBrand":{let t=e.alt?` aria-label="${e.alt}"`:"";return W(e.href,ln(e.image,!1),t)}case"BrandLabelOnly":return W(e.href,`<span class="feds-brand-label">${e.label}</span>`);case"NoRender":return"";default:return""}};var pn=["appswitcher","help"],Z={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[B,Mn]=(()=>{let n,e,t,r=new Promise(o=>{e=o,t=setTimeout(()=>{n={},o(n)},5e3)});return[o=>{o&&!n&&(n=o,clearTimeout(t),e?.(n))},()=>r]})();function V(n,e=!1){let s=(/uc_carts=/.test(document.cookie)?n:n?.filter(p=>p!=="cart"))??[],c=s.length??3;if(e){let p=s.filter(m=>pn.includes(m)).length;return`calc(92px + ${p*32}px + ${p*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var K=n=>{if(!n.prefix||n.prefix==="/")return"en_US";let e=n.prefix.replace("/","");if(e.includes("_")){let[r,o]=e.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(e==="uk")return"en_GB";let t=Object.keys(Z).find(r=>Z[r].includes(e));return t?`${t.toLowerCase()}_${e.toUpperCase()}`:`${e.toLowerCase()}_${e.toUpperCase()}`},Me={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},X=()=>{let n=navigator.userAgent;for(let[e,t]of Object.entries(Me))if(n.includes(e))return t;return"linux"},J=async()=>{let n=window;return n.alloy?await n.alloy("getIdentity").then(e=>e?.identity?.ECID).catch(()=>{}):void 0};var Sn=()=>{try{return w().signInContext||{}}catch{return{}}},Se=()=>{let n=w();return N("signin-cta-style")==="primary"||n?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Ae=()=>{let e=w()?.unav?.profile?.messageEventListener;return e||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{B(i)}).catch(()=>{B({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function Ie(){let{unav:n}=w();return n?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var z=()=>{let n=w();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:n?.unav?.profile?.complexConfig||null,...n?.unav?.profile?.config},messageEventListener:Ae()},signInCtaStyle:Se(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Sn())},onSignUp:()=>{window.adobeIMS?.signIn(Sn())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:n?.unav?.uncAppId||"adobecom",...n?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Ie()}},jarvis:{name:"jarvis",attributes:{appid:n?.jarvis?.id,callbacks:n?.jarvis?.callbacks}},cart:{name:"cart"}}};var An=(n,e)=>{n[0]&&"attributes"in n[0]&&n[0].attributes&&typeof n[0].attributes=="object"&&"isSignUpRequired"in n[0].attributes&&(n[0].attributes.isSignUpRequired=e)},Y=async(n,e)=>{try{let t=n.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new d('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new d('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new d('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=i.split(",").map(f=>f.trim()).filter(f=>Object.keys(z()).includes(f)||f==="signup");if(s){let f=V(c,s);t.style.setProperty("min-width",f)}let p;try{p=w()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let g=K(p.locale),m=p.env.name==="prod"?"prod":"stage",C=await J(),x=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(x??"")||(x="1.5"),await Promise.all([tn(`https://${m}.adobeccstatic.com/unav/${x}/UniversalNav.js`),en(`https://${m}.adobeccstatic.com/unav/${x}/UniversalNav.css`,!0)]);let L=()=>{let f=z(),v=[f.profile];return An(v,!1),c?.forEach(S=>{if(S==="profile")return;if(S==="signup"){An(v,!0);return}let F=f[S];F&&v.push(F)}),v},E=()=>({target:t,env:m,locale:g,countryCode:Pn(p?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:X(),os_version:navigator.platform},event:{visitor_guid:C}},children:L(),isSectionDividerRequired:!!p?.unav?.showSectionDivider,showTrayExperience:!_.matches});await window?.UniversalNav?.(E()),s||t?.style.removeProperty("min-width");let k=f=>{window?.UniversalNav?.reload(E())};return _.addEventListener("change",()=>{k()}),{reloadUnav:k,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new d(r)}};var _e="feds-milo",y=(n,e="default",t="e")=>{let{locale:r}=w(),o=N("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${n} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:_e,sampleRate:1,tags:e,errorType:t})};var l=class n extends Error{constructor(e){super(e),Object.setPrototypeOf(this,n.prototype)}},d=class n extends Error{constructor(e,t="Minor"){super(e),Object.setPrototypeOf(this,n.prototype),t==="Critical"&&y(e)}};var In=n=>e=>{if(e===null)throw new Error("");let t=e.querySelector(Re(n));if(!t)throw new Error("");let[{text:r,href:o},a]=h(t);return[{type:n.type,text:r,href:o},a]},dn=In({type:"PrimaryCTA"}),I=In({type:"SecondaryCTA"}),_n=n=>U(dn).or(I).eval(n),Re=({type:n})=>{switch(n){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var un=({text:n,href:e})=>`
<a href="${e}" class="feds-primary-cta">
  ${n}
</a>
`,M=({text:n,href:e})=>`
<a href="${e}" class="feds-secondary-cta">
  ${n}
</a>
`,Rn=n=>n.type==="PrimaryCTA"?un(n):M(n);var T=({text:n,href:e})=>`<a class="feds-link" href="${e}">${n}</a>`;var $n=n=>{let[e,t]=b([...n.children],$e);return[{type:"LinksCard",cards:e},t]},$e=n=>{let e=n.querySelector("h1, h2, h3")||null;if(!e)throw new l("Expected links card title");let t=n.querySelector("em > a"),r=[...n.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,a]=b(r,h),[i,s]=(()=>{try{return I(n)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:e.textContent??"",links:o,footerCTA:i},[...a,...s]]};var Gn=n=>{let[e,t]=Ge(n),r=[...n.children].filter(i=>i.querySelector(".panel-metadata")!==null),[o,a]=b(r,i=>He(i,e));return console.log(o),[{type:"Panels",layout:e,panels:o},[...t,...a]]},He=(n,e)=>{let t=n.querySelector(".panel-metadata");if(!t)throw new l(u.noPanelMetadata);let[r,o]=Ne(t,e),a=n.querySelector(".image-panel");return a?Be(a,r,o):D(t,"use-image-with-list")?.toLowerCase()==="true"?De(n,r,o):ze(n,r,o)},u={noLayoutMetadata:"panels-layout-metadata block not found",noGridColumns:"Grid columns not specified in layout metadata",noGridRows:"Grid rows not specified in layout metadata",invalidGridTrack:n=>`Invalid grid track value: "${n}"`,noPanelMetadata:"panel-metadata block not found on panel",invalidSpan:(n,e)=>`Invalid ${n} value: "${e}". Expected two comma-separated integers`,columnOutOfBounds:(n,e)=>`Column position ${n} exceeds grid column count ${e}`,rowOutOfBounds:(n,e)=>`Row position ${n} exceeds grid row count ${e}`,spanStartAfterEnd:(n,e,t)=>`${n} start (${e}) is greater than end (${t})`,noPanelTitle:"Panel is missing an <h2> title",noLinks:"Panel has no <ul> with links",listWithImageMissingImage:"List-with-image panel is missing the image link",imagePanelMissingIcon:"Image panel is missing the icon link",imagePanelMissingIconHref:"Image panel icon link has no href",imagePanelMissingImage:"Image panel is missing the image link",imagePanelMissingImageHref:"Image panel image link has no href",imagePanelMissingPrice:"Image panel is missing a price",imagePanelMissingTitle:"Image panel is missing a title",imagePanelMissingCtaText:"Image panel is missing CTA text",imagePanelMissingCtaHref:"Image panel is missing CTA href"},D=(n,e)=>{let t=[...n.children];for(let r of t){let o=[...r.children];if(o.length>=2&&(o[0].textContent?.trim().toLowerCase()??"")===e.toLowerCase())return o[1].textContent?.trim()??null}return null},Ue=/^\d+(\.\d+)?fr$/,Hn=(n,e)=>{let t=[],r=n.split(",").map(o=>o.trim()).filter(Boolean);for(let o of r)Ue.test(o)||t.push(new d(u.invalidGridTrack(o)));return[r,t]},Un=(n,e)=>{let t=n.split(",").map(a=>a.trim());if(t.length!==2)throw new l(u.invalidSpan(e,n));let r=Number(t[0]),o=Number(t[1]);if(!Number.isInteger(r)||!Number.isInteger(o)||r<1||o<1)throw new l(u.invalidSpan(e,n));if(r>o)throw new l(u.spanStartAfterEnd(e,r,o));return[r,o]},Ge=n=>{let e=n.querySelector(".panels-layout-metadata");if(!e)throw new l(u.noLayoutMetadata);let t=D(e,"grid columns");if(t===null)throw new l(u.noGridColumns);let r=D(e,"grid rows");if(r===null)throw new l(u.noGridRows);let[o,a]=Hn(t,"grid columns"),[i,s]=Hn(r,"grid rows");return[{type:"PanelsLayout",gridColumns:o,gridRows:i},[...a,...s]]},Ne=(n,e)=>{let t=[],r=D(n,"column span");if(r===null)throw new l(u.invalidSpan("column span",""));let o=D(n,"row span");if(o===null)throw new l(u.invalidSpan("row span",""));let[a,i]=Un(r,"column span"),[s,c]=Un(o,"row span");return i>e.gridColumns.length&&t.push(new d(u.columnOutOfBounds(i,e.gridColumns.length))),c>e.gridRows.length&&t.push(new d(u.rowOutOfBounds(c,e.gridRows.length))),[{type:"PanelPosition",columnStart:a,columnEnd:i,rowStart:s,rowEnd:c},t]},Nn=n=>{let e=n.querySelector(".panel-footer-link");if(!e)return[null,[]];let t=e.querySelector("a"),[r,o]=h(t),a=e.classList.contains("cta");return[{type:"FooterLink",link:r,isCta:a},o]},Be=(n,e,t)=>{let r=[...t],o=[...n.children],a=k=>o[k]?.querySelector("a")??null,i=k=>o[k]?.querySelector("div")?.textContent?.trim()??"",s=a(0);s||r.push(new d(u.imagePanelMissingIcon));let c=s?.getAttribute("href")??"";s&&c===""&&r.push(new d(u.imagePanelMissingIconHref));let[,p=""]=(s?.textContent??"").split("|").map(k=>k.trim()),g=a(1);g||r.push(new d(u.imagePanelMissingImage));let m=g?.getAttribute("href")??"";g&&m===""&&r.push(new d(u.imagePanelMissingImageHref));let C=i(2);C===""&&r.push(new d(u.imagePanelMissingPrice));let x=i(3);x===""&&r.push(new d(u.imagePanelMissingTitle));let L=i(4);L===""&&r.push(new d(u.imagePanelMissingCtaText));let E=i(5);return E===""&&r.push(new d(u.imagePanelMissingCtaHref)),[{type:"ImagePanel",position:e,iconHref:c,iconAlt:p,imageHref:m,price:C,title:x,ctaText:L,ctaHref:E},r]},ze=(n,e,t)=>{let r=[...t],o=n.querySelector("h2");if(!o)throw new l(u.noPanelTitle);let a=o.textContent??"",i=n.querySelector("ul");if(!i)throw new l(u.noLinks);let s=[...i.querySelectorAll("li > a")],[c,p]=b(s,h);r.push(...p);let[g,m]=Nn(n);return r.push(...m),[{type:"LinkPanel",position:e,title:a,links:c,footer:g},r]},De=(n,e,t)=>{let r=[...t],o=n.querySelector(".list-with-image"),a=o??n,i=a.querySelector("h2");if(!i)throw new l(u.noPanelTitle);let s=i.textContent??"",c=a.querySelector("ul");if(!c)throw new l(u.noLinks);let p=[...c.querySelectorAll("li > a")],[g,m]=b(p,h);r.push(...m);let x=o?.querySelector(":scope > div > div:last-child a")?.getAttribute("href")??"";x===""&&r.push(new d(u.listWithImageMissingImage));let[L,E]=Nn(n);return r.push(...E),[{type:"ListWithImagePanel",position:e,title:s,links:g,imageHref:x,footer:L},r]};var Bn=n=>{let e=[...n.querySelectorAll("li > div")],[t,r]=b(e,Fe);return console.log(t),[{type:"ProductList",categories:t},r]},Fe=n=>{let e=n.firstElementChild;if(e?.nodeName!=="H2")throw new l("Expected H2");let t=e.textContent??"",r=bn(e),[o,a]=b(r,on);return[{type:"ProductCategory",name:t,links:o},a]};var zn=n=>{let[e,t]=b([...n.children],Oe);return[{type:"FeaturedCards",cards:e},t]},Oe=n=>{let e=n.querySelector("h3")||null;if(!e)throw new d("Eye brow element not found");let t=n.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[a,i]=h(o),[s,c]=I(n);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:a,footerCTA:s,eyeBrow:e.textContent??""},[...c,...i]]};var Fn=n=>{let e=new Set;if(n===null)throw new l(Dn.elementNull);let t=n.querySelector("h2")?.textContent??"";t===""&&e.add(new d(Dn.noTitle));let r=(async()=>{try{let o=n.querySelector("a"),a=new URL(o?.href??""),i=await R(a);if(i instanceof l)throw new Error(i.message);let s=await kn(i);if(s instanceof l)throw new Error(s.message);if(n.classList.contains("product-list"))return Bn(s);if(n.classList.contains("featured-cards"))return zn(s);if(n.classList.contains("links-card"))return $n(s);if(n.classList.contains("panels"))return Gn(s);throw new l("unrecognized mega menu item (did you forget to label it correctly?")}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...e]]},Dn={elementNull:"Element is null",noTitle:"Large Menu has no Title"};var je=`.global-navigation .feds-popup ul.links-cards {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  padding: 12px 24px 24px;
  gap: 8px;
  width: 100%;
  color: #000;
}

.feds-popup .links-cards > li {
  min-width: 0;
}

.feds-popup .links-card {
  border-radius: 14px;
  background: #f6f6f6;
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
  font-size: 38px;
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

@media (min-width: 900px) {
  .global-navigation .feds-popup ul.links-cards {
    grid-template-columns: repeat(auto-fit, 342px);
    gap: 12px;
    justify-content: start;
  }
}
`,On=document.createElement("style");On.textContent=je;document.head.appendChild(On);var jn=({cards:n})=>`
  <ul class="links-cards">
    ${n.map(e=>`<li>${qe(e)}</li>`).join("")}
  </ul>
`,qe=({title:n,links:e,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${n}</h4>
      <ul class="links-card-links">
        ${e.map(r=>`<li>${T(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${M(t)}
    </div>`}
  </article>
`.trim();var We=`.global-navigation .panels {
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
  position: relative;
}

.panels .list-image-panel li:hover .feds-link {
  color: black;
}

.panels .list-image-panel .feds-secondary-cta:hover{
  color: black;
}

.panels .list-image-panel li:hover .feds-link::after {
  content: "";
  position: absolute;
  right: 12px;
  width: 4px;
  height: 4px;
  border-right: 2px solid #000;
  border-top: 2px solid #000;
  transform: translateY(8%) translateX(100%) rotate(45deg);
}


.panels h4 {
  font-family: var(--feds-heading-font);
  font-size: 24px;
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
  margin-top: auto;
}

.global-navigation.site-pivot .panels .link-panel + .feds-link::after {
  content: "";
  width: 4px;
  height: 4px;
  border-right: 2px solid #000;
  border-top: 2px solid #000;
  transform: translateY(8%) translateX(8px) rotate(45deg);

}

.panels .link-panel .feds-link,
.panels .panel-footer-link .feds-link {
  display: inline-flex;
  align-items: center;
  margin: 0;
  padding: 12px 0;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.35;
  color: #000;
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
`,qn=document.createElement("style");qn.textContent=We;document.head.appendChild(qn);var Wn=({layout:n,panels:e})=>`
    <ul class="panels" style="${`
    display: grid;
    grid-template-rows: ${n.gridRows.join(" ")};
    grid-template-columns: ${n.gridColumns.join(" ")};
  `}">
      ${e.map(r=>`<li style="${Je(r.position)}">${Ze(r)}</li>`).join("")}
    </ul>
  `.trim(),Ze=n=>{switch(n.type){case"LinkPanel":return Ve(n);case"ListWithImagePanel":return Ke(n);case"ImagePanel":return Xe(n)}},Ve=({title:n,links:e,footer:t})=>`
  <h4>${n}</h4>
  <ul class="link-panel">
    ${e.map(r=>`<li>${T(r)}</li>`).join("")}
  </ul>
  ${t===null?"":Zn(t)}
`.trim(),Ke=({title:n,links:e,imageHref:t,footer:r})=>`
  <div class="list-image-panel">
    <div class="link-panel-container">
      <h4>${n}</h4>
      <ul class="link-panel">
        ${e.map(o=>`<li>${T(o)}</li>`).join("")}
      </ul>
      ${r===null?"":Zn(r)}
    </div>
    <picture>
      <img src="https://main--federal--adobecom.aem.page${t}">
    </picture>
  </div>
`.trim(),Xe=({iconHref:n,iconAlt:e,imageHref:t,price:r,title:o,ctaText:a,ctaHref:i})=>`
  <div class="image-panel">
    <picture>
      <img src="https://main--federal--adobecom.aem.page${t}">
    </picture>
    <div class="overlay">
      <picture class="icon">
        <img src="https://main--federal--adobecom.aem.page${n}" alt="${e}">
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
`,Je=({columnStart:n,columnEnd:e,rowStart:t,rowEnd:r})=>`
  grid-area: ${t} / ${n} / ${r} / ${e}
`.trim(),Zn=n=>n.isCta?M({type:"SecondaryCTA",text:n.link.text,href:n.link.href}):T(n.link);var Ye=`.feds-popup .product-list {
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
`,Vn=document.createElement("style");Vn.textContent=Ye;document.head.appendChild(Vn);var Kn=({categories:n})=>{let e=`
    <ul class="tabs" role="tablist">
      ${n.map(({name:r},o)=>`
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
      ${n.map(({links:r},o)=>`
      <li>
        <ul
          id="${o}"
          role="tabpanel"
          ${o===0?"":"hidden"}
        >
          ${r.map(a=>`<li>${an(a)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${e}
      ${t}
    </div>
  `.trim()};var Qe=`.global-navigation .feds-popup ul.featured-cards {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  padding: 12px 24px 24px 24px;
  gap: 8px;
  width: 100%;
  color: #000;

  .feds-link {
    padding: 16px 0;
    color: #000;
  }
}

.global-navigation .feds-popup ul.featured-cards .card .featured-eyebrow {
  color: #7a7474;
  font-family: var(--body-font-family);
  font-size: 14px;
  font-weight: 700;
}

.featured-subtitle {
  font-size: 14px;
  line-height: 120%;
}

.featured-cards .card > div > a.feds-link::after {
  content: ">";
  margin-left: 6px;
  font-weight: 700;
}


.global-navigation .feds-popup ul.featured-cards a.feds-secondary-cta {
  background: #000;
  color: white;
}

.feds-popup .featured-cards > li {
  min-width: 0;
}

.feds-popup .card {
  max-height: 307px;
  height: 307px;
  border-radius: 14px;
  background: #f6f6f6;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 24px;
  justify-content: space-between;
  align-items: center;
}

.feds-popup .card h4 {
  margin: 0;
  font-family: var(--feds-heading-font);
  font-size: 24px;
  line-height: 24px;
  color: #000;
  padding: 16px 0 8px 0;
  font-weight: 900;
}

.featured-cards .footer-container {
  width: 100%;

  a {
    width: 100%;
    box-sizing: border-box;
  }
}

@media (min-width: 900px) {
  .global-navigation .feds-popup ul.featured-cards {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 8px;
  }

  .global-navigation .feds-popup ul.featured-cards .card a.feds-link-group:hover {
    background: black;
    color: white;
  }

  .global-navigation .feds-popup ul.featured-cards .card:hover a.feds-secondary-cta {
    background: white;
    color: #000;
  }

  .global-navigation .feds-popup ul.featured-cards .card:hover {
    background: black;
  }
  
  .global-navigation .feds-popup ul.featured-cards .card:hover {
    h4, .featured-subtitle, .feds-link {
      color: white;
    }
  }
}
`,Xn=document.createElement("style");Xn.textContent=Qe;document.head.appendChild(Xn);var Jn=({cards:n})=>`
  <ul class="featured-cards">
    ${n.map(e=>`<li>${nt(e)}</li>`).join("")}
  </ul>
`,nt=({title:n,subtitle:e,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${n}</h4>
      <div class="featured-subtitle">${e}</div>
      ${T(o)}
    </div>
    <div class="footer-container">
      ${M(r)}
    </div>
  </article>
`.trim();var Yn=({title:n})=>`
  <button type="button"
          aria-controls="${G(n)}"
          class="mega-menu feds-link"
          popovertarget="${G(n)}"
  >
    ${n}
  </button>
  <div id="${G(n)}" popover class="feds-popup">
  </div>
`,Qn=(n,e,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${G(e)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${H.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(n.type){case"ProductList":o=Kn(n);break;case"FeaturedCards":o=Jn(n);break;case"LinksCard":o=jn(n);break;case"Panels":o=Wn(n);break;default:}return`${r}${o}`};var ne={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},ee=n=>{if(n===null)return[{type:"Text",content:""},[new d(ne.elementNull,"Minor")]];let e=n.textContent;return e===null?[{type:"Text",content:""},[new d(ne.textContentNull,"Minor")]]:[{type:"Text",content:e},[]]};var te=({content:n})=>n;var re=n=>{if(n===null)throw new l(et.elementNull);if(n.querySelector(".gnav-brand")!==null)return sn(n);let t=n.querySelector(".large-menu");return t!==null?Fn(t):n.querySelector("strong")!==null?dn(n):n.querySelector("em")!==null?I(n):n.querySelector("a")===null?ee(n):h(n.querySelector("a"))},gn=n=>{switch(n.type){case"Text":return te(n);case"Link":return T(n);case"SecondaryCTA":return M(n);case"PrimaryCTA":return un(n);case"Brand":return cn(n);case"MegaMenu":return Yn(n);default:return console.error(`Failed to recognize component: ${n}`),""}},et={elementNull:"Element is null"};var oe=(n,e)=>{let[t,r]=b([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],h),[o,a]=b([...n.children],re),i=n.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return _n(i)}catch{return[null,[]]}})(),p=!1,g=[r,a,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:p,errors:g,unavEnabled:e}};var tt=n=>{let e=[...n.querySelectorAll('.tabs button[role="tab"]')],t=[...n.querySelectorAll(".tab-content ul")],r=e.map((o,a)=>()=>{e.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return e.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{e.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var ie=tt;var rt=n=>()=>console.log(n),ot=n=>()=>console.log(n),ae=yn({mobileEventListeners:ot,desktopEventListeners:rt});var se=async({gnavSource:n,asideSource:e})=>{let t=await R(n);if(t instanceof l)return t;let r=await R(e);return{mainNav:t,aside:r}};var it=`/**
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

.global-navigation.site-pivot:has(:popover-open) .feds-gnav-items > li > .feds-link::after {
  content: '';
  position: absolute;
  width: 9.271px;
  height: 9.179px;
  transform: rotate(45deg);
  border-color: var(--feds-color-black-v2);
  right: 24px;
  border-right: 2px solid var(--feds-color-black-v2);
  border-top: 2px solid var(--feds-color-black-v2);
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
  gap: 12px;
  padding: 16px;
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
  font-size: 16px;
  font-weight: 700;
  color: #2c2c2c;
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
    border: 1px solid #d7d7d7;
    border-radius: 999px;
    padding: 7px 12px;
  }

  .product-list .tab-content [role="tabpanel"] {
    grid-template-columns: 1fr;
  }
}

`,le=document.createElement("style");le.textContent=it;document.head.appendChild(le);var gi=async n=>{let{gnavSource:e,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:a}=n;if(!(e instanceof URL))throw y(`gnavSource is invalid: ${e}`),new l("gnavSource needs to be a URL object");try{rn(o)}catch(g){throw y(`Failed to initialize MiloConfig: ${g}`),new l(`Failed to initialize MiloConfig: ${g}`)}xn(a),hn(fn(n));let i=await se(n);if(i instanceof l)throw y(i.message),i;let{mainNav:s,aside:c}=i;if(s instanceof l)throw y(s.message),s;let p=oe(s,r);if(p instanceof l)throw y(p.message),p;return await at(p)(t),lt(n)},at=n=>async e=>{let t=st(n);e.innerHTML=t,e.classList.add("site-pivot");let r=[...e.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=n.components.filter(s=>s.type==="MegaMenu"),a=o.map(s=>s.content),i=await Promise.all(a.map(async(s,c)=>{let[p,g]=await s,m=o[c].title;return r[c].innerHTML=Qn(p,r[c].id,m),g}).flat());return e},st=({components:n,productCTA:e,unavEnabled:t})=>`
<nav>
  <ul>
    ${(()=>{let r=n.find(c=>c.type==="Brand")??null,o=n.filter(c=>c.type!=="Brand"),a=`
        <button
          class="feds-nav-toggle"
          type="button"
          aria-label="Navigation menu"
          aria-expanded="false"
          aria-controls="feds-menu-wrapper"
          popovertarget="feds-menu-wrapper"
        >
        </button>
      `.trim(),i=r?gn(r):"",s=Ln(o,gn);return`
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
  ${e===null?"":Rn(e)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,lt=async n=>{let e=new Set,t=await Y(n.mountpoint);t instanceof d?(e.add(t),y(t.message)):t.errors.forEach(o=>e.add(o)),ie(n.mountpoint),ae(n.mountpoint);let r=t instanceof d?()=>{}:t.reloadUnav;return{closeEverything:ct,reloadUnav:r,errors:e,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},ct=()=>{};export{gi as main,lt as postRenderingTasks,at as renderGnav,st as renderGnavString};
//# sourceMappingURL=main.js.map
