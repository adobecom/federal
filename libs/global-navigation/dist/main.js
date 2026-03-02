var mn=async n=>{let{placeholders:e}=n,{locale:t}=y(),o=`${j()}${t.prefix}/federal/globalnav/placeholders.json`,[a,i]=await Promise.all([e,de(o)]);return new Map([...i,...a])},de=async n=>{try{let e=await fetch(n);if(!e.ok)throw new p(`Federal placeholders not found at ${n}`);let t=pe(await e.json());if(t instanceof p)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(e){if(e instanceof p)console.error(e.message);else{let t=new p(e.message);console.error(t.message)}return v(`Failed to fetch placeholders from ${n}`),new Map([])}},pe=n=>{try{let{data:e}=n;if(!e.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return n}catch(e){return new p(e.message)}};function hn(n,e){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(n)?n.replace(t,(o,a,i)=>{let s=a??i??"";return e.get(s)??s}):n}var[vn,bn]=(()=>{let n;return[e=>{n||(n=e)},()=>{if(!n)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return n}]})();var I=window.matchMedia("(min-width: 900px)"),H={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var yn=n=>{let e=[],t=n.nextElementSibling??null;for(;t!==null;)e.push(t),t=t.nextElementSibling??null;return e},G=n=>({eval:n,or:e=>G(t=>{try{return n(t)}catch{return e(t)}})}),C=(n,e)=>n.reduce(([t,r],o)=>{try{let[a,i]=e(o);return[[...t,a],[...r,...i]]}catch(a){return a instanceof l?[t,[a,...r]]:[t,r]}},[[],[]]),xn=({mobileEventListeners:n,desktopEventListeners:e})=>t=>{let r;I.matches?r=e(t):r=n(t),I.addEventListener("change",()=>{r?.(),r=I.matches?e(t):n(t);let o=t.querySelector("#feds-menu-wrapper");o?.matches(":popover-open")===!0&&o.hidePopover?.()})},[wn,ue]=(()=>{let n,e=!1;return[t=>{e||(n=t,e=!0)},()=>{if(!n)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return n}]})(),R=async n=>{try{if(n===null)return new l("URL is null");let e=en(`${n.origin}${n.pathname.replace(/(\.html$|$)/,".plain.html")}${n.hash}`),t=await fetch(e);if(!t.ok)return v(`Request for ${e} failed`),new l(`Request for ${e} failed`);let r=await t.text(),o=await bn(),a=hn(r,o),{body:i}=new DOMParser().parseFromString(a,"text/html");try{let{handleCommands:s,commands:c}=ue();s(c,i)}catch(s){v(`Personalization not applied: ${s?.message}`)}return i}catch(e){return new l(e?.message)}},$,j=()=>{if($)return $;let n=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if($)return $;let e=window.location.origin;$=n.some(o=>{let a=e.replace(".stage","");return o.startsWith("https://")?a===o:a.endsWith(o)})?e:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(e.includes("localhost")||e.includes(`.${r}.`))&&($=`https://main--federal--adobecom.aem.${e.endsWith(".live")?"live":"page"}`),$},en=(n="")=>{if(n.includes("c2-poc--milo--adobecom"))return n.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(n.includes("c2-poc-feds-gnav--milo--adobecom"))return n.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(n.includes("localhost:3000"))return n.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof n!="string"||!n.includes("/federal/"))return n;if(n.startsWith("/"))return`${j()}${n}`;try{let{pathname:e,search:t,hash:r}=new URL(n);return`${j()}${e}${t}${r}`}catch(e){let t=e instanceof Error?e.message:String(e);console.warn(`getFederatedUrl errored parsing the URL: ${n}: ${t}`)}return n},Cn=(n,e)=>{let t=(r,o)=>{e.querySelectorAll(`${r}[${o}^="./media_"]`).forEach(i=>{let s=i.getAttribute(o);if(!s)return;let c=en(new URL(s,new URL(n,window.location.href)).href);(i instanceof HTMLImageElement||i instanceof HTMLSourceElement)&&(i[o]=c)})};t("img","src"),t("source","srcset")},kn=async n=>{let e=async(t,r)=>{if(t instanceof l)return t;try{let a=[...t.querySelectorAll('a[href*="#_inline"]')].map(async i=>{try{if(r.has(i.href))return;let s=en(i.href),c=new URL(s),d=await R(c);if(r.add(i.href),d instanceof l)throw d;await e(d,r),i.replaceWith(...d.children);return}catch{return}},[]);return await Promise.all(a),t}catch(o){return new l(JSON.stringify(o))}};return e(n,new Set)},Ln=(n,e)=>n.map(t=>`<li>${e(t)}</li>`).join(""),N=n=>n.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),E=(n,e)=>{let t=n!==null&&n!==""?` daa-lh="${n}"`:"",r=e!==null&&e!==""?` daa-ll="${e}"`:"";return`${t}${r}`},En=()=>!0;function ge(n,{id:e,as:t,callback:r,crossorigin:o,rel:a,fetchpriority:i}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${n}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",a),e!==void 0&&c.setAttribute("id",e),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),i!==void 0&&c.setAttribute("fetchpriority",i),c.setAttribute("href",n),r&&(c.onload=d=>r(d.type),c.onerror=d=>r(typeof d=="string"?"error":d.type)),document.head.appendChild(c),c}function fe(n,e){return ge(n,{rel:"stylesheet",callback:e})}function tn(n,e=!1){e&&fe(n)}var rn=(n,e,{mode:t,id:r}={})=>new Promise((o,a)=>{let i=document.querySelector(`head > script[src="${n}"]`);if(!i){let{head:d}=document;i=document.createElement("script"),i.setAttribute("src",n),r!=null&&i.setAttribute("id",r),e!=null&&i.setAttribute("type",e),t&&["async","defer"].includes(t)&&i.setAttribute(t,""),d.append(i)}let s=i.dataset.loaded;if(s!=null){o(i);return}let c=d=>{i.removeEventListener("load",c),i.removeEventListener("error",c),d.type==="error"?a(new Error(`error loading script: ${i.src}`)):d.type==="load"&&(i.dataset.loaded="true",o(i))};i.addEventListener("load",c),i.addEventListener("error",c)});function B(n,e=document){let t=n&&n.includes(":")?"property":"name";return e.head.querySelector(`meta[${t}="${n}"]`)?.content??null}var me=n=>{let e=n,t=a=>a==null||typeof a!="object";if(t(e)||t(e.locale)||typeof e.locale.prefix!="string"||t(e.env)||typeof e.env.name!="string")return!1;if(e.unav!==void 0){if(typeof e.unav!="object"||e.unav===null)return!1;let a=e.unav;if(a.profile!==void 0){if(typeof a.profile!="object"||a.profile===null)return!1;let i=a.profile;if(i.signInCtaStyle!==void 0&&i.signInCtaStyle!=="primary"&&i.signInCtaStyle!=="secondary"||i.messageEventListener!==void 0&&typeof i.messageEventListener!="function")return!1}}return!(e.jarvis!==void 0&&(typeof e.jarvis!="object"||e.jarvis===null||typeof e.jarvis.id!="string"))},[on,y]=(()=>{let n,e=!1;return[t=>{if(!e){if(!me(t))throw new Error("MiloConfig validation failed: Invalid structure");n=t,e=!0}},()=>{if(!n)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return n}]})(),he={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},_n={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function ve(n){let e=he[n];return!e&&_n[n]&&(e=n),!e&&n.includes("-")&&([e]=n.split("-")),e||"US"}var nn="langstore/";function Mn(n){let t=(n?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(_n[t]??t).split("_",2);if(t.startsWith(nn)||window.location.pathname.startsWith(`/${nn}`)){let a=t.replace(nn,"").toLowerCase();r=ve(a),o=a}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var F={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},h=n=>{if(n===null)throw new l(F.elementNull);if(n.tagName!=="A")throw new l(F.notAnchor);let e=n?.textContent??"";if(e==="")throw new l(F.textContentNotFound);let t=n?.getAttribute("href")??"";if(t==="")throw new l(F.hrefNotFound);let r=n.getAttribute("daa-ll");return[{type:"Link",text:e,href:t,daaLl:r},[]]};var an=n=>G(ye).or(be).or(xe).eval(n),_={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},be=n=>{let e=new Set;if(!n)throw new l(_.elementNull);let t=n.querySelector("p a")??n.querySelector("div ~ div > a");if(!t)throw new l(_.noTitleAnchor);let r=t.textContent??"";r===""&&e.add(new p(_.noTitle));let o=t.getAttribute("href")??"";o===""&&e.add(new p(_.noHref));let a=t.getAttribute("daa-ll"),i=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||e.add(new p(_.noSubtitleP));let c=s?.textContent??"";c===""&&e.add(new p(_.noSubtitle));let d=[],g=null,f=null;n.classList.contains("new")&&d.push("New"),n.classList.contains("show-offer")&&(d.push("Save 20%"),g="$29.99",f="$19.99");let[k,b=null]=(n.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(x=>x.trim());return[{type:"LinkGroupLink",iconHref:k,iconAlt:b,title:r,href:o,subtitle:c,badges:d,oldPrice:g,newPrice:f,daaLl:a,daaLh:i},[...e]]},ye=n=>{if(!n)throw new l(_.elementNull);let e=[...n.classList];if(!e.includes("header"))throw new l(_.notAHeader);let t=n.querySelector("a")?.textContent??"",r=n.querySelector("a")?.getAttribute("daa-ll")??null,o=n.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(_.noTitle);return[{type:"LinkGroupHeader",title:t,classes:e,daaLl:r,daaLh:o},[]]},xe=n=>{if(!n)throw new l(_.elementNull);if(!n.classList.contains("blue"))throw new Error("Not a Blue Link Group");let e=n.querySelector("a"),[t,r]=h(e),o=e?.getAttribute("daa-ll")??null,a=e?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:a},r]};var sn=n=>{switch(n.type){case"LinkGroupHeader":return we(n);case"LinkGroupLink":return Ce(n);case"LinkGroupBlue":return ke(n);default:return console.error(n),""}},we=({title:n,classes:e,daaLl:t,daaLh:r})=>{let o=e.slice(1).map(i=>`feds-link-group--${i}`).join(" "),a=E(r,t??n);return`
    <div role="heading" class="feds-link-group ${o}"${a}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n}</div>
      </div>
    </div>
  `},Ce=({iconHref:n,iconAlt:e,title:t,href:r,subtitle:o,badges:a=[],oldPrice:i=null,newPrice:s=null,daaLl:c,daaLh:d})=>{let g=e!==null&&n!==null,f=E(d,c??t),k=g?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${n}"
          alt="${e}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"",b=a.length===0?"":`
      <div class="feds-link-group__badges">
        ${a.map((P,u)=>`
          <span class="feds-link-group__badge${u>0?" feds-link-group__badge--filled":""}">
            ${P}
          </span>
        `).join("")}
      </div>
    `,x=o===""?"":`<div class="feds-link-group__subtitle">${o}</div>`,w=i===null&&s===null?"":`
      <div class="feds-link-group__price">
        ${i===null?"":`<span class="feds-link-group__old-price">${i}</span>`}
        ${s===null?"":`<span class="feds-link-group__new-price">${s}</span>`}
      </div>
    `;return`
    <a class="feds-link-group" href="${r}"${f}>
      <div class="feds-link-header">
        ${k}
        ${b}
      </div>
      <div class="feds-link-group__content">
       
        <div class="feds-link-group__title">${t}</div>
        ${x}
        ${w}
      </div>
    </a>
  `},ke=({link:n,daaLl:e,daaLh:t})=>{let r=E(t,e??n.text);return`
  <a href="${n.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${n.text}</div>
      </div>
  </a>
`};var q={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},U=/(\.png|\.jpg|\.jpeg|\.svg)/i,Le=n=>{let e=n.querySelector("picture img")?.getAttribute("src")??null;if(e!==null&&e!=="")return e;let t=n.textContent?.trim();if(t!==void 0&&t!==""&&U.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=n.getAttribute("href");return r!==null&&r!==""&&U.test(r)?r:null},Ee=n=>{let e=n.textContent?.trim();if(e?.includes("|")===!0){let r=e.split("|")[1]?.trim();if(r)return r}return n.querySelector("img")?.getAttribute("alt")??""},ln=n=>{if(n===null)throw new l(q.elementNull);let e=n.querySelector(".gnav-brand");if(e===null)throw new l(q.elementNull);let t=[...e.querySelectorAll("a")];if(t.length===0)throw new l(q.noLinks);let r=t.find(u=>{let m=u.textContent??"";return!U.test(u.href)&&!U.test(m)});if(!r)throw new l(q.noPrimaryLink);let o=e.matches(".brand-image-only"),a=e.matches(".no-logo"),i=e.matches(".image-only"),s=!a,c=!o&&!i,d=t.filter(u=>{let m=u.textContent??"";return U.test(u.href)||U.test(m)}),[g,f,k]=(()=>{let u=o?H.brand:H.company,[m=null,A=null]=[...e.querySelectorAll('picture img[src$=".svg"]')].map(Q=>Q?.src).filter(Q=>Q?.length>0),[O=null,le=null]=d.map(Le),ce=d[0]instanceof Element?Ee(d[0]):r.textContent?.trim()??"";return[O??m??u,le??A,ce]})(),b=r.textContent?.trim()??"",x=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let w=(u,m)=>{let A=m!=null&&m!=="";return En()&&A?m:u},P=g.startsWith("<svg")?{type:"inline-svg",svgContent:w(g,f),alt:k}:{type:"image",src:w(g,f),alt:k};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:x,label:b,image:P}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:x,image:P,alt:k}},[]]:s&&i?[{type:"Brand",data:{type:"ImageOnlyBrand",href:x,image:P,alt:k}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:x,label:b}},[]]};var _e=`.feds-brand-container {
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
}`,Tn=document.createElement("style");Tn.textContent=_e;document.head.appendChild(Tn);var cn=(n,e)=>{let t=`feds-brand-image${e?" brand-image-only":""}`;if(n.type==="inline-svg")return`<span class="${t}">${n.svgContent}</span>`;let r=n.alt?` alt="${n.alt}"`:"";return`<span class="${t}"><img src="${n.src}"${r} /></span>`},W=(n,e,t="")=>`<div class="feds-brand-container">
    <a href="${n}" class="feds-brand" daa-ll="Brand"${t}>
      ${e}
    </a>
  </div>`.trim(),dn=n=>{let{data:e}=n;switch(e.type){case"LabelledBrand":return W(e.href,cn(e.image,!1)+`<span class="feds-brand-label">${e.label}</span>`);case"BrandImageOnly":{let t=e.alt?` aria-label="${e.alt}"`:"";return W(e.href,cn(e.image,!0),t)}case"ImageOnlyBrand":{let t=e.alt?` aria-label="${e.alt}"`:"";return W(e.href,cn(e.image,!1),t)}case"BrandLabelOnly":return W(e.href,`<span class="feds-brand-label">${e.label}</span>`);case"NoRender":return"";default:return""}};var pn=["appswitcher","help"],Z={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[D,Pn]=(()=>{let n,e,t,r=new Promise(o=>{e=o,t=setTimeout(()=>{n={},o(n)},5e3)});return[o=>{o&&!n&&(n=o,clearTimeout(t),e?.(n))},()=>r]})();function V(n,e=!1){let s=(/uc_carts=/.test(document.cookie)?n:n?.filter(d=>d!=="cart"))??[],c=s.length??3;if(e){let d=s.filter(f=>pn.includes(f)).length;return`calc(92px + ${d*32}px + ${d*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var K=n=>{if(!n.prefix||n.prefix==="/")return"en_US";let e=n.prefix.replace("/","");if(e.includes("_")){let[r,o]=e.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(e==="uk")return"en_GB";let t=Object.keys(Z).find(r=>Z[r].includes(e));return t?`${t.toLowerCase()}_${e.toUpperCase()}`:`${e.toLowerCase()}_${e.toUpperCase()}`},Me={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},J=()=>{let n=navigator.userAgent;for(let[e,t]of Object.entries(Me))if(n.includes(e))return t;return"linux"},Y=async()=>{let n=window;return n.alloy?await n.alloy("getIdentity").then(e=>e?.identity?.ECID).catch(()=>{}):void 0};var Sn=()=>{try{return y().signInContext||{}}catch{return{}}},Te=()=>{let n=y();return B("signin-cta-style")==="primary"||n?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Pe=()=>{let e=y()?.unav?.profile?.messageEventListener;return e||(t=>{let{name:r,payload:o,executeDefaultAction:a}=t.detail;if(!(!r||r!=="System"||!o||typeof a!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(i=>{D(i)}).catch(()=>{D({})});break;case"SignOut":a();break;case"ProfileSwitch":Promise.resolve(a()).then(i=>{i&&window.location.reload()});break;default:break}})};function Se(){let{unav:n}=y();return n?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var z=()=>{let n=y();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:n?.unav?.profile?.complexConfig||null,...n?.unav?.profile?.config},messageEventListener:Pe()},signInCtaStyle:Te(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn(Sn())},onSignUp:()=>{window.adobeIMS?.signIn(Sn())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:n?.unav?.uncAppId||"adobecom",...n?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Se()}},jarvis:{name:"jarvis",attributes:{appid:n?.jarvis?.id,callbacks:n?.jarvis?.callbacks}},cart:{name:"cart"}}};var An=(n,e)=>{n[0]&&"attributes"in n[0]&&n[0].attributes&&typeof n[0].attributes=="object"&&"isSignUpRequired"in n[0].attributes&&(n[0].attributes.isSignUpRequired=e)},X=async(n,e)=>{try{let t=n.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new p('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),a=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new p('metadata "universal-nav" is missing'));let i=a.trim();o instanceof HTMLMetaElement&&i.length===0&&r.add(new p('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=i.split(",").map(u=>u.trim()).filter(u=>Object.keys(z()).includes(u)||u==="signup");if(s){let u=V(c,s);t.style.setProperty("min-width",u)}let d;try{d=y()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let g=K(d.locale),f=d.env.name==="prod"?"prod":"stage",k=await Y(),b=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(b??"")||(b="1.5"),await Promise.all([rn(`https://${f}.adobeccstatic.com/unav/${b}/UniversalNav.js`),tn(`https://${f}.adobeccstatic.com/unav/${b}/UniversalNav.css`,!0)]);let x=()=>{let u=z(),m=[u.profile];return An(m,!1),c?.forEach(A=>{if(A==="profile")return;if(A==="signup"){An(m,!0);return}let O=u[A];O&&m.push(O)}),m},w=()=>({target:t,env:f,locale:g,countryCode:Mn(d?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:J(),os_version:navigator.platform},event:{visitor_guid:k}},children:x(),isSectionDividerRequired:!!d?.unav?.showSectionDivider,showTrayExperience:!I.matches});await window?.UniversalNav?.(w()),s||t?.style.removeProperty("min-width");let P=u=>{window?.UniversalNav?.reload(w())};return I.addEventListener("change",()=>{P()}),{reloadUnav:P,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new p(r)}};var Ae="feds-milo",v=(n,e="default",t="e")=>{let{locale:r}=y(),o=B("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${n} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Ae,sampleRate:1,tags:e,errorType:t})};var l=class n extends Error{constructor(e){super(e),Object.setPrototypeOf(this,n.prototype)}},p=class n extends Error{constructor(e,t="Minor"){super(e),Object.setPrototypeOf(this,n.prototype),t==="Critical"&&v(e)}};var $n=n=>e=>{if(e===null)throw new Error("");let t=e.querySelector($e(n));if(!t)throw new Error("");let[{text:r,href:o},a]=h(t);return[{type:n.type,text:r,href:o},a]},un=$n({type:"PrimaryCTA"}),M=$n({type:"SecondaryCTA"}),In=n=>G(un).or(M).eval(n),$e=({type:n})=>{switch(n){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var gn=({text:n,href:e})=>`
<a href="${e}" class="feds-primary-cta">
  ${n}
</a>
`,T=({text:n,href:e})=>`
<a href="${e}" class="feds-secondary-cta">
  ${n}
</a>
`,Rn=n=>n.type==="PrimaryCTA"?gn(n):T(n);var S=({text:n,href:e,daaLl:t})=>`<a class="feds-link" href="${e}"${E(null,t??n)}>${n}</a>`;var Un=n=>{let[e,t]=Ie(n);return[{type:"LinksCard",card:e},t]},Ie=n=>{let e=n.querySelector("h1, h2, h3")||null;if(!e)throw new l("Expected links card title");let t=n.querySelector("em > a"),r=[...n.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,a]=C(r,h),[i,s]=(()=>{try{return M(n)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:e.textContent??"",links:o,footerCTA:i},[...a,...s]]};var Hn=n=>{let e=[...n.querySelectorAll("li > div")],t=[...n.querySelectorAll("li > a")],[r,o]=C(e,Re),[a,i]=C(t,h);return[{type:"ProductList",categories:r,links:a},[...o,...i]]},Re=n=>{let e=n.firstElementChild;if(e?.nodeName!=="H2")throw new l("Expected H2");let t=e.textContent??"",r=e.textContent??"",o=yn(e),[a,i]=C(o,an);return[{type:"ProductCategory",name:t,daaLh:r,links:a},i]};var Gn=n=>{let[e,t]=Ue(n);return[{type:"FeaturedCard",card:e},t]},Ue=n=>{let e=n.querySelector("h3")||null;if(!e)throw new p("Eye brow element not found");let t=n.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[a,i]=h(o),[s,c]=M(n);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:a,footerCTA:s,eyeBrow:e.textContent??""},[...c,...i]]};var L={MissingBackgroundImageSection:"Promo card is missing background image section",MissingBackgroundImage:"Promo card is missing background image",MissingBackgroundImageAlt:"Promo card background image is missing alt text",MissingBackgroundImageSrc:"Promo card background image is missing src",MissingContentSection:"Promo card is missing card details section",MissingIcon:"Promo card is missing icon",MissingIconSrc:"Promo card icon is missing src",MissingIconAlt:"Promo card icon is missing alt text",MissingTitleElement:"Promo card is missing title element",MissingTitleText:"Promo card is missing title text",MissingPrimaryCtaAnchor:"Promo card is missing primary CTA anchor"},Nn=n=>{let[e,t]=n.querySelectorAll(":scope > div"),r=new Set;if(e===void 0)throw new l(L.MissingBackgroundImageSection);let o=e.querySelector(":scope picture:not(:scope p picture) img")??null;o===null&&r.add(new p(L.MissingBackgroundImage));let a=o?.getAttribute("alt")??"";a===""&&r.add(new p(L.MissingBackgroundImageAlt));let i=o?.getAttribute("src")??"";if(i===""&&r.add(new p(L.MissingBackgroundImageSrc)),t===void 0)throw new l(L.MissingContentSection);let s=t.querySelector('a[href$=".svg"]')??null;s===null&&r.add(new p(L.MissingIcon));let[c,d]=(s?.textContent?.split("|")??["",""]).map(w=>w.trim());c===""&&r.add(new p(L.MissingIconSrc)),d===""&&r.add(new p(L.MissingIconAlt));let g=t.querySelector("p > strong")??null;if(g===null)throw new l(L.MissingTitleElement);let f=g?.textContent??"";f===""&&r.add(new p(L.MissingTitleText)),t.querySelector("em > a")===null&&r.add(new p(L.MissingPrimaryCtaAnchor));let[b,x]=(()=>{try{return M(n)}catch{return[null,[]]}})();return x.forEach(w=>r.add(w)),[{type:"PromoCard",card:{bgImageAlt:a,bgImageSrc:i,iconAlt:d,iconSrc:c,title:f,cta:b}},[...r]]};var Dn=n=>{let e=new Set;if(n===null)throw new l(Bn.elementNull);let t=n.querySelector("h2")?.textContent??"";t===""&&e.add(new p(Bn.noTitle));let r=(async()=>{try{let o=n.querySelector("a"),a=new URL(o?.href??""),i=await R(a);if(i instanceof l)throw new Error(i.message);let s=await kn(i);if(s instanceof l)throw new Error(s.message);return Cn(a.href,s),n.classList.contains("product-list")?Hn(s):He(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...e]]},Bn={elementNull:"Element is null",noTitle:"Large Menu has no Title"},He=n=>{let e=[...n.children];if(e.length===0)throw new l("No mega menu items found (did you forget to add them correctly?)");let[t,r]=C(e,o=>Ge(o));if(t.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:t},r]},Ge=n=>{let e=[...n.querySelectorAll(".featured-card, .links-card, .promo-card")];if(e.length===0)throw new l("Column contains no cards (did you forget to label them correctly?)");let[t,r]=C(e,o=>Ne(o));if(t.length===0)throw new l("Failed to parse cards in column");return[{type:"GnavColumn",cards:t},r]},Ne=n=>{if(n.classList.contains("featured-card"))return Gn(n);if(n.classList.contains("links-card"))return Un(n);if(n.classList.contains("promo-card"))return Nn(n);throw new l("Unsupported gnav cards section")};var Be=`.feds-popup .featured-card .featured-eyebrow {
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
`,zn=document.createElement("style");zn.textContent=Be;document.head.appendChild(zn);var On=({card:n})=>De(n),De=({title:n,subtitle:e,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${n}</h4>
      <div class="featured-subtitle">${e}</div>
      ${S(o)}
    </div>
    <div class="footer-container">
      ${T(r)}
    </div>
  </article>
`.trim();var ze=`.feds-popup .links-card {
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
`,jn=document.createElement("style");jn.textContent=ze;document.head.appendChild(jn);var Fn=({card:n})=>Oe(n),Oe=({title:n,links:e,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${n}</h4>
      <ul class="links-card-links">
        ${e.map(r=>`<li>${S(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${T(t)}
    </div>`}
  </article>
`.trim();var je=`.feds-gnav-cards .promo-card {
    position: relative;
    height: 163px;
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

@media (min-width: 1024px) {
    .feds-gnav-cards .promo-card__bg-image {
        border-radius: 16px;
    }

    .feds-gnav-cards .promo-card__cta {
        display: block;
        margin-top: 16px;
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
    }
}


`,qn=document.createElement("style");qn.textContent=je;document.head.appendChild(qn);var Wn=({card:n})=>Fe(n),Fe=({bgImageAlt:n,bgImageSrc:e,iconAlt:t,iconSrc:r,title:o,cta:a})=>`
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
        ${a===null?"":`<div class="promo-card__cta">
                 ${T(a)}
               </div>`}
      </div>
    </div>
  </article>
`.trim();var qe=`.feds-popup .feds-gnav-cards {
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
`,Zn=document.createElement("style");Zn.textContent=qe;document.head.appendChild(Zn);var We=n=>{switch(n.type){case"FeaturedCard":return On(n);case"LinksCard":return Fn(n);case"PromoCard":return Wn(n);default:}return""},Vn=({sections:n})=>`
  <ul class="feds-gnav-cards">
    ${n.map(e=>`<li>${e.cards.map(t=>We(t)).join("")}</li>`).join("")}
  </ul>
`;var Ze=`.feds-popup .product-list {
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
}`,Kn=document.createElement("style");Kn.textContent=Ze;document.head.appendChild(Kn);var Jn=({categories:n,links:e})=>{let t=`
    <ul class="tabs" role="tablist">
      ${n.map(Ve).join("")}
       ${e.map(o=>`<li class="product-links">${S(o)}</li>`).join("")}
    </ul>
  `.trim(),r=`
    <ul class="tab-content">
      ${n.map(({links:o},a)=>`
      <li>
        <ul
          id="${a}"
          role="tabpanel"
          ${a===0?"":"hidden"}
        >
          ${o.map(i=>`<li>${sn(i)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${t}
      ${r}
    </div>
  `.trim()},Ve=({name:n,daaLh:e},t)=>`
      <li>
        <button
          role="tab"
          class="tab"
          aria-selected="${(t===0).toString()}"
          aria-controls="${t}"
          ${E(e,"")}
          >
            ${n}
          </button>
      </li>
  `.trim();var Yn=({title:n})=>`
  <button type="button"
          aria-controls="${N(n)}"
          class="mega-menu feds-link"
          popovertarget="${N(n)}"
          ${E(null,n)}
  >
    ${n}
  </button>
  <div id="${N(n)}" popover class="feds-popup">
  </div>
`,Xn=(n,e,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${N(e)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${H.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(n.type){case"ProductList":o=Jn(n);break;case"GnavCards":o=Vn(n);break;default:}return`${r}${o}`};var Qn={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},ne=n=>{if(n===null)return[{type:"Text",content:""},[new p(Qn.elementNull,"Minor")]];let e=n.textContent;return e===null?[{type:"Text",content:""},[new p(Qn.textContentNull,"Minor")]]:[{type:"Text",content:e},[]]};var ee=({content:n})=>n;var te=n=>{if(n===null)throw new l(Ke.elementNull);if(n.querySelector(".gnav-brand")!==null)return ln(n);let t=n.querySelector(".large-menu");return t!==null?Dn(t):n.querySelector("strong")!==null?un(n):n.querySelector("em")!==null?M(n):n.querySelector("a")===null?ne(n):h(n.querySelector("a"))},fn=n=>{switch(n.type){case"Text":return ee(n);case"Link":return S(n);case"SecondaryCTA":return T(n);case"PrimaryCTA":return gn(n);case"Brand":return dn(n);case"MegaMenu":return Yn(n);default:return console.error(`Failed to recognize component: ${n}`),""}},Ke={elementNull:"Element is null"};var re=(n,e)=>{let[t,r]=C([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],h),[o,a]=C([...n.children],te),i=n.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return In(i)}catch{return[null,[]]}})(),d=!1,g=[r,a,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:d,errors:g,unavEnabled:e}};var Je=n=>{let e=[...n.querySelectorAll('.tabs button[role="tab"]')],t=[...n.querySelectorAll(".tab-content ul")],r=e.map((o,a)=>()=>{e.forEach(i=>{i.setAttribute("aria-selected","false")}),t.forEach(i=>{i.setAttribute("hidden","true")}),t[a]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return e.forEach((o,a)=>{o.addEventListener("click",r[a])}),()=>{e.forEach((o,a)=>{o.removeEventListener("click",r[a])})}};var oe=Je;var Ye=n=>()=>console.log(n),Xe=n=>()=>console.log(n),ie=xn({mobileEventListeners:Xe,desktopEventListeners:Ye});var ae=async({gnavSource:n,asideSource:e})=>{let t=await R(n);if(t instanceof l)return t;let r=await R(e);return{mainNav:t,aside:r}};var Qe=`/**
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

@supports ((animation-timeline: scroll()) and (animation-range: 0% 100%)) {
  @keyframes scroll-transition-main-nav {
    from {
      background-color:transparent;
      width: 100%;
      border-radius: 0px;
      margin: 0;
      border: solid 0px rgba(0, 0, 0, 0);
    }
    to {
      background-color: rgba(255, 255, 255, 0.81);
      width: calc(100% - 8px);
      border-radius: 6px;
      margin: 4px 4px 0;
      border: solid 1px rgba(0, 0, 0, 0.05);
    }
  }

  header.global-navigation:not(:has(:popover-open)) {
    animation: scroll-transition-main-nav linear forwards;
    animation-timeline: scroll();
    animation-range: 0px 100px;
  }
}

@supports (not ((animation-timeline: scroll()) and (animation-range: 0% 100%))) {
  header.global-navigation.feds-header-scrolled:not(:has(:popover-open)) {
    background-color: rgba(255, 255, 255, 0.81);
    border-radius: 6px;
    width: calc(100% - 8px);
    margin: 4px 4px 0;
    border: solid 1px rgba(0, 0, 0, 0.05);
  }
}
`,se=document.createElement("style");se.textContent=Qe;document.head.appendChild(se);var mi=async n=>{let{gnavSource:e,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:a}=n;if(!(e instanceof URL))throw v(`gnavSource is invalid: ${e}`),new l("gnavSource needs to be a URL object");try{on(o)}catch(g){throw v(`Failed to initialize MiloConfig: ${g}`),new l(`Failed to initialize MiloConfig: ${g}`)}wn(a),vn(mn(n));let i=await ae(n);if(i instanceof l)throw v(i.message),i;let{mainNav:s,aside:c}=i;if(s instanceof l)throw v(s.message),s;let d=re(s,r);if(d instanceof l)throw v(d.message),d;return await nt(d)(t),tt(n)},nt=n=>async e=>{let t=et(n);e.innerHTML=t,e.classList.add("site-pivot");let r=[...e.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=n.components.filter(s=>s.type==="MegaMenu"),a=o.map(s=>s.content),i=await Promise.all(a.map(async(s,c)=>{let[d,g]=await s,f=o[c].title;return r[c].innerHTML=Xn(d,r[c].id,f),g}).flat());return e},et=({components:n,productCTA:e,unavEnabled:t})=>`
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
      `.trim(),i=r?fn(r):"",s=Ln(o,fn);return`
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
`,tt=async n=>{let e=new Set,t=await X(n.mountpoint);t instanceof p?(e.add(t),v(t.message)):t.errors.forEach(o=>e.add(o)),oe(n.mountpoint),ie(n.mountpoint),ot(n.mountpoint);let r=t instanceof p?()=>{}:t.reloadUnav;return{closeEverything:rt,reloadUnav:r,errors:e,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},rt=()=>{},ot=n=>{let e=n.closest("header");if(!e)return;let t=n.querySelector("#feds-menu-wrapper"),r=()=>t?.matches(":popover-open")??!1,o=()=>window.scrollY>100,a=()=>{if(r()){e.classList.remove("feds-header-scrolled");return}if(o()){e.classList.add("feds-header-scrolled");return}e.classList.remove("feds-header-scrolled")};a(),window.addEventListener("scroll",a,{passive:!0}),t?.addEventListener("toggle",a)};export{mi as main,tt as postRenderingTasks,nt as renderGnav,et as renderGnavString};
//# sourceMappingURL=main.js.map
