var ue=async e=>{let{placeholders:n}=e,{locale:t}=b(),o=`${O()}${t.prefix}/federal/globalnav/placeholders.json`,[i,a]=await Promise.all([n,on(o)]);return new Map([...a,...i])},on=async e=>{try{let n=await fetch(e);if(!n.ok)throw new p(`Federal placeholders not found at ${e}`);let t=an(await n.json());if(t instanceof p)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof p)console.error(n.message);else{let t=new p(n.message);console.error(t.message)}return h(`Failed to fetch placeholders from ${e}`),new Map([])}},an=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new p(n.message)}};function fe(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,i,a)=>{let s=i??a??"";return n.get(s)??s}):e}var[ge,me]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var $=window.matchMedia("(min-width: 900px)"),U={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var ve=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},H=e=>({eval:e,or:n=>H(t=>{try{return e(t)}catch{return n(t)}})}),x=(e,n)=>e.reduce(([t,r],o)=>{try{let[i,a]=n(o);return[[...t,i],[...r,...a]]}catch(i){return i instanceof l?[t,[i,...r]]:[t,r]}},[[],[]]),he=({mobileEventListeners:e,desktopEventListeners:n})=>t=>{let r;$.matches?r=n(t):r=e(t),$.addEventListener("change",()=>{r?.(),r=$.matches?n(t):e(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},[be,sn]=(()=>{let e,n=!1;return[t=>{n||(e=t,n=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),R=async e=>{try{if(e===null)return new l("URL is null");let n=ye(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return h(`Request for ${n} failed`),new l(`Request for ${n} failed`);let r=await t.text(),o=await me(),i=fe(r,o),{body:a}=new DOMParser().parseFromString(i,"text/html");try{let{handleCommands:s,commands:c}=sn();s(c,a)}catch(s){h(`Personalization not applied: ${s?.message}`)}return a}catch(n){return new l(n?.message)}},P,O=()=>{if(P)return P;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(P)return P;let n=window.location.origin;P=e.some(o=>{let i=n.replace(".stage","");return o.startsWith("https://")?i===o:i.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(P=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),P},ye=(e="")=>{if(e.includes("c2-poc--milo--adobecom"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(e.includes("c2-poc-feds-gnav--milo--adobecom"))return e.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(e.includes("localhost:3000"))return e.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${O()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${O()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},xe=async e=>{let n=async(t,r)=>{if(t instanceof l)return t;try{let i=[...t.querySelectorAll('a[href*="#_inline"]')].map(async a=>{try{if(r.has(a.href))return;let s=ye(a.href),c=new URL(s),d=await R(c);if(r.add(a.href),d instanceof l)throw d;await n(d,r),a.replaceWith(...d.children);return}catch{return}},[]);return await Promise.all(i),t}catch(o){return new l(JSON.stringify(o))}};return n(e,new Set)},we=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),G=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),C=(e,n)=>{let t=e!==null&&e!==""?` daa-lh="${e}"`:"",r=n!==null&&n!==""?` daa-ll="${n}"`:"";return`${t}${r}`},ke=()=>!0;function ln(e,{id:n,as:t,callback:r,crossorigin:o,rel:i,fetchpriority:a}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${e}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",i),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),a!==void 0&&c.setAttribute("fetchpriority",a),c.setAttribute("href",e),r&&(c.onload=d=>r(d.type),c.onerror=d=>r(typeof d=="string"?"error":d.type)),document.head.appendChild(c),c}function cn(e,n){return ln(e,{rel:"stylesheet",callback:n})}function ee(e,n=!1){n&&cn(e)}var ne=(e,n,{mode:t,id:r}={})=>new Promise((o,i)=>{let a=document.querySelector(`head > script[src="${e}"]`);if(!a){let{head:d}=document;a=document.createElement("script"),a.setAttribute("src",e),r!=null&&a.setAttribute("id",r),n!=null&&a.setAttribute("type",n),t&&["async","defer"].includes(t)&&a.setAttribute(t,""),d.append(a)}let s=a.dataset.loaded;if(s!=null){o(a);return}let c=d=>{a.removeEventListener("load",c),a.removeEventListener("error",c),d.type==="error"?i(new Error(`error loading script: ${a.src}`)):d.type==="load"&&(a.dataset.loaded="true",o(a))};a.addEventListener("load",c),a.addEventListener("error",c)});function N(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var dn=e=>{let n=e,t=i=>i==null||typeof i!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let i=n.unav;if(i.profile!==void 0){if(typeof i.profile!="object"||i.profile===null)return!1;let a=i.profile;if(a.signInCtaStyle!==void 0&&a.signInCtaStyle!=="primary"&&a.signInCtaStyle!=="secondary"||a.messageEventListener!==void 0&&typeof a.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[te,b]=(()=>{let e,n=!1;return[t=>{if(!n){if(!dn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),pn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Ce={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function un(e){let n=pn[e];return!n&&Ce[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var Q="langstore/";function Le(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Ce[t]??t).split("_",2);if(t.startsWith(Q)||window.location.pathname.startsWith(`/${Q}`)){let i=t.replace(Q,"").toLowerCase();r=un(i),o=i}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var j={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},v=e=>{if(e===null)throw new l(j.elementNull);if(e.tagName!=="A")throw new l(j.notAnchor);let n=e?.textContent??"";if(n==="")throw new l(j.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new l(j.hrefNotFound);let r=e.getAttribute("daa-ll");return[{type:"Link",text:n,href:t,daaLl:r},[]]};var re=e=>H(gn).or(fn).or(mn).eval(e),L={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},fn=e=>{let n=new Set;if(!e)throw new l(L.elementNull);let t=e.querySelector("p a")??e.querySelector("div ~ div > a");if(!t)throw new l(L.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new p(L.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new p(L.noHref));let i=t.getAttribute("daa-ll"),a=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||n.add(new p(L.noSubtitleP));let c=s?.textContent??"";c===""&&n.add(new p(L.noSubtitle));let d=[],f=null,g=null;e.classList.contains("new")&&d.push("New"),e.classList.contains("show-offer")&&(d.push("Save 20%"),f="$29.99",g="$19.99");let[w,y=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(k=>k.trim());return[{type:"LinkGroupLink",iconHref:w,iconAlt:y,title:r,href:o,subtitle:c,badges:d,oldPrice:f,newPrice:g,daaLl:i,daaLh:a},[...n]]},gn=e=>{if(!e)throw new l(L.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new l(L.notAHeader);let t=e.querySelector("a")?.textContent??"",r=e.querySelector("a")?.getAttribute("daa-ll")??null,o=e.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(L.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n,daaLl:r,daaLh:o},[]]},mn=e=>{if(!e)throw new l(L.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=v(n),o=n?.getAttribute("daa-ll")??null,i=n?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:i},r]};var oe=e=>{switch(e.type){case"LinkGroupHeader":return vn(e);case"LinkGroupLink":return hn(e);case"LinkGroupBlue":return bn(e);default:return console.error(e),""}},vn=({title:e,classes:n,daaLl:t,daaLh:r})=>{let o=n.slice(1).map(a=>`feds-link-group--${a}`).join(" "),i=C(r,t??e);return`
    <div role="heading" class="feds-link-group ${o}"${i}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `},hn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o,badges:i=[],oldPrice:a=null,newPrice:s=null,daaLl:c,daaLh:d})=>{let f=n!==null&&e!==null,g=C(d,c??t),w=f?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"",y=i.length===0?"":`
      <div class="feds-link-group__badges">
        ${i.map((E,u)=>`
          <span class="feds-link-group__badge${u>0?" feds-link-group__badge--filled":""}">
            ${E}
          </span>
        `).join("")}
      </div>
    `,k=o===""?"":`<div class="feds-link-group__subtitle">${o}</div>`,M=a===null&&s===null?"":`
      <div class="feds-link-group__price">
        ${a===null?"":`<span class="feds-link-group__old-price">${a}</span>`}
        ${s===null?"":`<span class="feds-link-group__new-price">${s}</span>`}
      </div>
    `;return`
    <a class="feds-link-group" href="${r}"${g}>
      <div class="feds-link-header">
        ${w}
        ${y}
      </div>
      <div class="feds-link-group__content">
       
        <div class="feds-link-group__title">${t}</div>
        ${k}
        ${M}
      </div>
    </a>
  `},bn=({link:e,daaLl:n,daaLh:t})=>{let r=C(t,n??e.text);return`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`};var F={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},I=/(\.png|\.jpg|\.jpeg|\.svg)/i,yn=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&I.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&I.test(r)?r:null},xn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},ie=e=>{if(e===null)throw new l(F.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new l(F.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new l(F.noLinks);let r=t.find(u=>{let m=u.textContent??"";return!I.test(u.href)&&!I.test(m)});if(!r)throw new l(F.noPrimaryLink);let o=n.matches(".brand-image-only"),i=n.matches(".no-logo"),a=n.matches(".image-only"),s=!i,c=!o&&!a,d=t.filter(u=>{let m=u.textContent??"";return I.test(u.href)||I.test(m)}),[f,g,w]=(()=>{let u=o?U.brand:U.company,[m=null,S=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(X=>X?.src).filter(X=>X?.length>0),[z=null,tn=null]=d.map(yn),rn=d[0]instanceof Element?xn(d[0]):r.textContent?.trim()??"";return[z??m??u,tn??S,rn]})(),y=r.textContent?.trim()??"",k=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let M=(u,m)=>{let S=m!=null&&m!=="";return ke()&&S?m:u},E=f.startsWith("<svg")?{type:"inline-svg",svgContent:M(f,g),alt:w}:{type:"image",src:M(f,g),alt:w};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:k,label:y,image:E}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:k,image:E,alt:w}},[]]:s&&a?[{type:"Brand",data:{type:"ImageOnlyBrand",href:k,image:E,alt:w}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:k,label:y}},[]]};var wn=`.feds-brand-container {
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
  </div>`.trim(),se=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return q(n.href,ae(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return q(n.href,ae(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return q(n.href,ae(n.image,!1),t)}case"BrandLabelOnly":return q(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var le=["appswitcher","help"],W={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[B,Te]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function Z(e,n=!1){let s=(/uc_carts=/.test(document.cookie)?e:e?.filter(d=>d!=="cart"))??[],c=s.length??3;if(n){let d=s.filter(g=>le.includes(g)).length;return`calc(92px + ${d*32}px + ${d*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var V=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(W).find(r=>W[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},kn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},K=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(kn))if(e.includes(n))return t;return"linux"},J=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var Me=()=>{try{return b().signInContext||{}}catch{return{}}},Cn=()=>{let e=b();return N("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Ln=()=>{let n=b()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:i}=t.detail;if(!(!r||r!=="System"||!o||typeof i!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(a=>{B(a)}).catch(()=>{B({})});break;case"SignOut":i();break;case"ProfileSwitch":Promise.resolve(i()).then(a=>{a&&window.location.reload()});break;default:break}})};function En(){let{unav:e}=b();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var D=()=>{let e=b();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Ln()},signInCtaStyle:Cn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Me())},onSignUp:()=>{window.adobeIMS?.signIn(Me())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:En()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var Se=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},Y=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new p('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),i=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new p('metadata "universal-nav" is missing'));let a=i.trim();o instanceof HTMLMetaElement&&a.length===0&&r.add(new p('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=a.split(",").map(u=>u.trim()).filter(u=>Object.keys(D()).includes(u)||u==="signup");if(s){let u=Z(c,s);t.style.setProperty("min-width",u)}let d;try{d=b()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let f=V(d.locale),g=d.env.name==="prod"?"prod":"stage",w=await J(),y=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(y??"")||(y="1.5"),await Promise.all([ne(`https://${g}.adobeccstatic.com/unav/${y}/UniversalNav.js`),ee(`https://${g}.adobeccstatic.com/unav/${y}/UniversalNav.css`,!0)]);let k=()=>{let u=D(),m=[u.profile];return Se(m,!1),c?.forEach(S=>{if(S==="profile")return;if(S==="signup"){Se(m,!0);return}let z=u[S];z&&m.push(z)}),m},M=()=>({target:t,env:g,locale:f,countryCode:Le(d?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:K(),os_version:navigator.platform},event:{visitor_guid:w}},children:k(),isSectionDividerRequired:!!d?.unav?.showSectionDivider,showTrayExperience:!$.matches});await window?.UniversalNav?.(M()),s||t?.style.removeProperty("min-width");let E=u=>{window?.UniversalNav?.reload(M())};return $.addEventListener("change",()=>{E()}),{reloadUnav:E,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new p(r)}};var Tn="feds-milo",h=(e,n="default",t="e")=>{let{locale:r}=b(),o=N("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Tn,sampleRate:1,tags:n,errorType:t})};var l=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},p=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&h(n)}};var Pe=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(Mn(e));if(!t)throw new Error("");let[{text:r,href:o},i]=v(t);return[{type:e.type,text:r,href:o},i]},ce=Pe({type:"PrimaryCTA"}),_=Pe({type:"SecondaryCTA"}),_e=e=>H(ce).or(_).eval(e),Mn=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var de=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,A=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,Ae=e=>e.type==="PrimaryCTA"?de(e):A(e);var T=({text:e,href:n,daaLl:t})=>`<a class="feds-link" href="${n}"${C(null,t??e)}>${e}</a>`;var $e=e=>{let[n,t]=Sn(e);return[{type:"LinksCard",card:n},t]},Sn=e=>{let n=e.querySelector("h1, h2, h3")||null;if(!n)throw new l("Expected links card title");let t=e.querySelector("em > a"),r=[...e.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,i]=x(r,v),[a,s]=(()=>{try{return _(e)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:n.textContent??"",links:o,footerCTA:a},[...i,...s]]};var Re=e=>{let n=[...e.querySelectorAll("li > div")],t=[...e.querySelectorAll("li > a")],[r,o]=x(n,Pn),[i,a]=x(t,v);return[{type:"ProductList",categories:r,links:i},[...o,...a]]},Pn=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new l("Expected H2");let t=n.textContent??"",r=n.textContent??"",o=ve(n),[i,a]=x(o,re);return[{type:"ProductCategory",name:t,daaLh:r,links:i},a]};var Ie=e=>{let[n,t]=_n(e);return[{type:"FeaturedCard",card:n},t]},_n=e=>{let n=e.querySelector("h3")||null;if(!n)throw new p("Eye brow element not found");let t=e.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[i,a]=v(o),[s,c]=_(e);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:i,footerCTA:s,eyeBrow:n.textContent??""},[...c,...a]]};var He=e=>{let n=new Set;if(e===null)throw new l(Ue.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new p(Ue.noTitle));let r=(async()=>{try{let o=e.querySelector("a"),i=new URL(o?.href??""),a=await R(i);if(a instanceof l)throw new Error(a.message);let s=await xe(a);if(s instanceof l)throw new Error(s.message);return e.classList.contains("product-list")?Re(s):An(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...n]]},Ue={elementNull:"Element is null",noTitle:"Large Menu has no Title"},An=e=>{let n=[...e.children].filter(i=>i.classList.contains("featured-card")||i.classList.contains("links-card")),t=n.length>0?n:[...e.querySelectorAll(".featured-card, .links-card")];if(t.length===0)throw new l("Unrecognized mega menu item (did you forget to label it correctly?)");let[r,o]=x(t,$n);if(r.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:r},o]},$n=e=>{if(e.classList.contains("featured-card"))return Ie(e);if(e.classList.contains("links-card"))return $e(e);throw new l("Unsupported gnav cards section")};var Rn=`.feds-popup .featured-card .featured-eyebrow {
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
`,Ge=document.createElement("style");Ge.textContent=Rn;document.head.appendChild(Ge);var Ne=({card:e})=>In(e),In=({title:e,subtitle:n,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${e}</h4>
      <div class="featured-subtitle">${n}</div>
      ${T(o)}
    </div>
    <div class="footer-container">
      ${A(r)}
    </div>
  </article>
`.trim();var Un=`.feds-popup .links-card {
  border-radius: 14px;
  background: white;
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
        ${n.map(r=>`<li>${T(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${A(t)}
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
}`,je=document.createElement("style");je.textContent=Nn;document.head.appendChild(je);var Fe=({categories:e,links:n})=>{let t=`
    <ul class="tabs" role="tablist">
      ${e.map(Bn).join("")}
       ${n.map(o=>`<li class="product-links">${T(o)}</li>`).join("")}
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
          ${o.map(a=>`<li>${oe(a)}</li>`).join("")}
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
          ${C(n,"")}
          >
            ${e}
          </button>
      </li>
  `.trim();var qe=({title:e})=>`
  <button type="button"
          aria-controls="${G(e)}"
          class="mega-menu feds-link"
          popovertarget="${G(e)}"
          ${C(null,e)}
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
  `.trim(),o="";switch(e.type){case"ProductList":o=Fe(e);break;case"GnavCards":o=Oe(e);break;default:}return`${r}${o}`};var Ze={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},Ve=e=>{if(e===null)return[{type:"Text",content:""},[new p(Ze.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new p(Ze.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var Ke=({content:e})=>e;var Je=e=>{if(e===null)throw new l(Dn.elementNull);if(e.querySelector(".gnav-brand")!==null)return ie(e);let t=e.querySelector(".large-menu");return t!==null?He(t):e.querySelector("strong")!==null?ce(e):e.querySelector("em")!==null?_(e):e.querySelector("a")===null?Ve(e):v(e.querySelector("a"))},pe=e=>{switch(e.type){case"Text":return Ke(e);case"Link":return T(e);case"SecondaryCTA":return A(e);case"PrimaryCTA":return de(e);case"Brand":return se(e);case"MegaMenu":return qe(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Dn={elementNull:"Element is null"};var Ye=(e,n)=>{let[t,r]=x([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],v),[o,i]=x([...e.children],Je),a=e.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return _e(a)}catch{return[null,[]]}})(),d=!1,f=[r,i,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:d,errors:f,unavEnabled:n}};var zn=e=>{let n=[...e.querySelectorAll('.tabs button[role="tab"]')],t=[...e.querySelectorAll(".tab-content ul")],r=n.map((o,i)=>()=>{n.forEach(a=>{a.setAttribute("aria-selected","false")}),t.forEach(a=>{a.setAttribute("hidden","true")}),t[i]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,i)=>{o.addEventListener("click",r[i])}),()=>{n.forEach((o,i)=>{o.removeEventListener("click",r[i])})}};var Xe=zn;var On=e=>()=>console.log(e),jn=e=>()=>console.log(e),Qe=he({mobileEventListeners:jn,desktopEventListeners:On});var en=async({gnavSource:e,asideSource:n})=>{let t=await R(e);if(t instanceof l)return t;let r=await R(n);return{mainNav:t,aside:r}};var Fn=`/**
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

header.global-navigation { 
  width: 100%;
}

header.feds-header-scrolled {
  background-color: rgba(255, 255, 255, 0.81);
  border-radius: 4px;
  width: calc(100% - 8px);
  border-radius: 6px;
  margin: 4px 4px 0;
  border: solid 1px rgba(0, 0, 0, 0.05);
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
    padding: 0;
}

.global-navigation nav > ul > li.feds-menu-wrapper:popover-open .feds-gnav-items {
    align-items: flex-start;
    padding: 12px 24px;
    width: calc(100% - 48px);
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

.global-navigation.feds-header-scrolled nav .feds-nav-toggle::before {
  color: #000;
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

`,nn=document.createElement("style");nn.textContent=Fn;document.head.appendChild(nn);var Jo=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:i}=e;if(!(n instanceof URL))throw h(`gnavSource is invalid: ${n}`),new l("gnavSource needs to be a URL object");try{te(o)}catch(f){throw h(`Failed to initialize MiloConfig: ${f}`),new l(`Failed to initialize MiloConfig: ${f}`)}be(i),ge(ue(e));let a=await en(e);if(a instanceof l)throw h(a.message),a;let{mainNav:s,aside:c}=a;if(s instanceof l)throw h(s.message),s;let d=Ye(s,r);if(d instanceof l)throw h(d.message),d;return await qn(d)(t),Zn(e)},qn=e=>async n=>{let t=Wn(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=e.components.filter(s=>s.type==="MegaMenu"),i=o.map(s=>s.content),a=await Promise.all(i.map(async(s,c)=>{let[d,f]=await s,g=o[c].title;return r[c].innerHTML=We(d,r[c].id,g),f}).flat());return n},Wn=({components:e,productCTA:n,unavEnabled:t})=>`
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
        </button>
      `.trim(),a=r?pe(r):"",s=we(o,pe);return`
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
  ${n===null?"":Ae(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,Zn=async e=>{let n=new Set,t=await Y(e.mountpoint);t instanceof p?(n.add(t),h(t.message)):t.errors.forEach(o=>n.add(o)),Xe(e.mountpoint),Qe(e.mountpoint),Kn(e.mountpoint);let r=t instanceof p?()=>{}:t.reloadUnav;return{closeEverything:Vn,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Vn=()=>{},Kn=e=>{let n=e.closest("header");if(!n)return;let t=e.querySelector("#feds-menu-wrapper"),r=()=>t?.matches(":popover-open")??!1,o=()=>window.scrollY>100,i=()=>{if(r()){n.classList.remove("feds-header-scrolled");return}if(o()){n.classList.add("feds-header-scrolled");return}n.classList.remove("feds-header-scrolled")};i(),window.addEventListener("scroll",i,{passive:!0}),t?.addEventListener("toggle",i)};export{Jo as main,Zn as postRenderingTasks,qn as renderGnav,Wn as renderGnavString};
//# sourceMappingURL=main.js.map
