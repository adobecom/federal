var be=async e=>{let{placeholders:n}=e,{locale:t}=C(),o=`${W()}${t.prefix}/federal/globalnav/placeholders.json`,[i,a]=await Promise.all([n,cn(o)]);return new Map([...a,...i])},cn=async e=>{try{let n=await fetch(e);if(!n.ok)throw new v(`Federal placeholders not found at ${e}`);let t=dn(await n.json());if(t instanceof v)throw t;return new Map(t.data.map(({key:r,value:o})=>[r,o]))}catch(n){if(n instanceof v)console.error(n.message);else{let t=new v(n.message);console.error(t.message)}return k(`Failed to fetch placeholders from ${e}`),new Map([])}},dn=e=>{try{let{data:n}=e;if(!n.every(({key:r,value:o})=>typeof r=="string"&&typeof o=="string"))throw new Error("data is not valid");return e}catch(n){return new v(n.message)}};function ye(e,n){let t=/{{(.*?)}}|%7B%7B(.*?)%7D%7D/g;return t.test(e)?e.replace(t,(o,i,a)=>{let s=i??a??"";return n.get(s)??s}):e}var[xe,we]=(()=>{let e;return[n=>{e||(e=n)},()=>{if(!e)throw new Error("Placeholders not initialized. Call setPlaceholders() first.");return e}]})();var G=window.matchMedia("(min-width: 900px)"),N={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>',arrowBack:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="currentColor"/></svg>'};var Le=e=>{let n=[],t=e.nextElementSibling??null;for(;t!==null;)n.push(t),t=t.nextElementSibling??null;return n},D=e=>({eval:e,or:n=>D(t=>{try{return e(t)}catch{return n(t)}})}),E=(e,n)=>e.reduce(([t,r],o)=>{try{let[i,a]=n(o);return[[...t,i],[...r,...a]]}catch(i){return i instanceof l?[t,[i,...r]]:[t,r]}},[[],[]]),[ke,pn]=(()=>{let e,n=!1;return[t=>{n||(e=t,n=!0)},()=>{if(!e)throw new Error("PersonalizationConfig not initialized. Call setPersonalizationConfig() first.");return e}]})(),I=async e=>{try{if(e===null)return new l("URL is null");let n=Ce(`${e.origin}${e.pathname.replace(/(\.html$|$)/,".plain.html")}${e.hash}`),t=await fetch(n);if(!t.ok)return k(`Request for ${n} failed`),new l(`Request for ${n} failed`);let r=await t.text(),o=await we(),i=ye(r,o),{body:a}=new DOMParser().parseFromString(i,"text/html");try{let{handleCommands:s,commands:c}=pn();s(c,a)}catch(s){k(`Personalization not applied: ${s?.message}`)}return a}catch(n){return new l(n?.message)}},A,W=()=>{if(A)return A;let e=["https://www.adobe.com","https://business.adobe.com","https://blog.adobe.com","https://milo.adobe.com","https://news.adobe.com","graybox.adobe.com"];if(A)return A;let n=window.location.origin;A=e.some(o=>{let i=n.replace(".stage","");return o.startsWith("https://")?i===o:i.endsWith(o)})?n:"https://www.adobe.com";let r=window.location.hostname.includes(".aem.")?"aem":"hlx";return(n.includes("localhost")||n.includes(`.${r}.`))&&(A=`https://main--federal--adobecom.aem.${n.endsWith(".live")?"live":"page"}`),A},Ce=(e="")=>{if(e.includes("c2-poc--milo--adobecom"))return e.replace("c2-poc--milo--adobecom","main--federal--adobecom");if(e.includes("c2-poc-feds-gnav--milo--adobecom"))return e.replace("c2-poc-feds-gnav--milo--adobecom","main--federal--adobecom");if(e.includes("localhost:3000"))return e.replace("localhost:3000","main--federal--adobecom.aem.page");if(typeof e!="string"||!e.includes("/federal/"))return e;if(e.startsWith("/"))return`${W()}${e}`;try{let{pathname:n,search:t,hash:r}=new URL(e);return`${W()}${n}${t}${r}`}catch(n){let t=n instanceof Error?n.message:String(n);console.warn(`getFederatedUrl errored parsing the URL: ${e}: ${t}`)}return e},Ee=async e=>{let n=async(t,r)=>{if(t instanceof l)return t;try{let i=[...t.querySelectorAll('a[href*="#_inline"]')].map(async a=>{try{if(r.has(a.href))return;let s=Ce(a.href),c=new URL(s),p=await I(c);if(r.add(a.href),p instanceof l)throw p;await n(p,r),a.replaceWith(...p.children);return}catch{return}},[]);return await Promise.all(i),t}catch(o){return new l(JSON.stringify(o))}};return n(e,new Set)},Te=(e,n)=>e.map(t=>`<li>${n(t)}</li>`).join(""),B=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1"),T=(e,n)=>{let t=e!==null&&e!==""?` daa-lh="${e}"`:"",r=n!==null&&n!==""?` daa-ll="${n}"`:"";return`${t}${r}`},Me=()=>!0;function un(e,{id:n,as:t,callback:r,crossorigin:o,rel:i,fetchpriority:a}={rel:"stylesheet"}){let s=document.head.querySelector(`link[href="${e}"]`);if(s)return r?.("noop"),s;let c=document.createElement("link");return c.setAttribute("rel",i),n!==void 0&&c.setAttribute("id",n),t!==void 0&&c.setAttribute("as",t),o!==void 0&&c.setAttribute("crossorigin",o),a!==void 0&&c.setAttribute("fetchpriority",a),c.setAttribute("href",e),r&&(c.onload=p=>r(p.type),c.onerror=p=>r(typeof p=="string"?"error":p.type)),document.head.appendChild(c),c}function fn(e,n){return un(e,{rel:"stylesheet",callback:n})}function oe(e,n=!1){n&&fn(e)}var ie=(e,n,{mode:t,id:r}={})=>new Promise((o,i)=>{let a=document.querySelector(`head > script[src="${e}"]`);if(!a){let{head:p}=document;a=document.createElement("script"),a.setAttribute("src",e),r!=null&&a.setAttribute("id",r),n!=null&&a.setAttribute("type",n),t&&["async","defer"].includes(t)&&a.setAttribute(t,""),p.append(a)}let s=a.dataset.loaded;if(s!=null){o(a);return}let c=p=>{a.removeEventListener("load",c),a.removeEventListener("error",c),p.type==="error"?i(new Error(`error loading script: ${a.src}`)):p.type==="load"&&(a.dataset.loaded="true",o(a))};a.addEventListener("load",c),a.addEventListener("error",c)});function O(e,n=document){let t=e&&e.includes(":")?"property":"name";return n.head.querySelector(`meta[${t}="${e}"]`)?.content??null}var gn=e=>{let n=e,t=i=>i==null||typeof i!="object";if(t(n)||t(n.locale)||typeof n.locale.prefix!="string"||t(n.env)||typeof n.env.name!="string")return!1;if(n.unav!==void 0){if(typeof n.unav!="object"||n.unav===null)return!1;let i=n.unav;if(i.profile!==void 0){if(typeof i.profile!="object"||i.profile===null)return!1;let a=i.profile;if(a.signInCtaStyle!==void 0&&a.signInCtaStyle!=="primary"&&a.signInCtaStyle!=="secondary"||a.messageEventListener!==void 0&&typeof a.messageEventListener!="function")return!1}}return!(n.jarvis!==void 0&&(typeof n.jarvis!="object"||n.jarvis===null||typeof n.jarvis.id!="string"))},[ae,C]=(()=>{let e,n=!1;return[t=>{if(!n){if(!gn(t))throw new Error("MiloConfig validation failed: Invalid structure");e=t,n=!0}},()=>{if(!e)throw new Error("MiloConfig not initialized. Call setMiloConfig() first.");return e}]})(),mn={en:"US","en-gb":"GB","es-mx":"MX","fr-ca":"CA",da:"DK",et:"EE",ar:"DZ",el:"GR",iw:"IL",he:"IL",id:"ID",ms:"MY",nb:"NO",sl:"SI",sv:"SE",cs:"CZ",uk:"UA",hi:"IN","zh-hans":"CN","zh-hant":"TW",ja:"JP",ko:"KR",fil:"PH",th:"TH",vi:"VN"},Se={ar:"AR_es",be_en:"BE_en",be_fr:"BE_fr",be_nl:"BE_nl",br:"BR_pt",ca:"CA_en",ch_de:"CH_de",ch_fr:"CH_fr",ch_it:"CH_it",cl:"CL_es",co:"CO_es",la:"DO_es",mx:"MX_es",pe:"PE_es",africa:"MU_en",dk:"DK_da",de:"DE_de",ee:"EE_et",eg_ar:"EG_ar",eg_en:"EG_en",es:"ES_es",fr:"FR_fr",gr_el:"GR_el",gr_en:"GR_en",ie:"IE_en",il_he:"IL_iw",it:"IT_it",lv:"LV_lv",lt:"LT_lt",lu_de:"LU_de",lu_en:"LU_en",lu_fr:"LU_fr",my_en:"MY_en",my_ms:"MY_ms",hu:"HU_hu",mt:"MT_en",mena_en:"DZ_en",mena_ar:"DZ_ar",nl:"NL_nl",no:"NO_nb",pl:"PL_pl",pt:"PT_pt",ro:"RO_ro",si:"SI_sl",sk:"SK_sk",fi:"FI_fi",se:"SE_sv",tr:"TR_tr",uk:"GB_en",at:"AT_de",cz:"CZ_cs",bg:"BG_bg",ru:"RU_ru",ua:"UA_uk",au:"AU_en",in_en:"IN_en",in_hi:"IN_hi",id_en:"ID_en",id_id:"ID_id",nz:"NZ_en",sa_ar:"SA_ar",sa_en:"SA_en",sg:"SG_en",cn:"CN_zh-Hans",tw:"TW_zh-Hant",hk_zh:"HK_zh-hant",jp:"JP_ja",kr:"KR_ko",za:"ZA_en",ng:"NG_en",cr:"CR_es",ec:"EC_es",pr:"US_es",gt:"GT_es",cis_en:"TM_en",cis_ru:"TM_ru",sea:"SG_en",th_en:"TH_en",th_th:"TH_th"};function hn(e){let n=mn[e];return!n&&Se[e]&&(n=e),!n&&e.includes("-")&&([n]=e.split("-")),n||"US"}var re="langstore/";function Pe(e){let t=(e?.prefix||"US_en").replace("/","")??"",[r="US",o="en"]=(Se[t]??t).split("_",2);if(t.startsWith(re)||window.location.pathname.startsWith(`/${re}`)){let i=t.replace(re,"").toLowerCase();r=hn(i),o=i}return r=r.toUpperCase(),o=o.toLowerCase(),{language:o,country:r,locale:`${o}_${r}`}}var Z={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},L=e=>{if(e===null)throw new l(Z.elementNull);if(e.tagName!=="A")throw new l(Z.notAnchor);let n=e?.textContent??"";if(n==="")throw new l(Z.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new l(Z.hrefNotFound);let r=e.getAttribute("daa-ll");return[{type:"Link",text:n,href:t,daaLl:r},[]]};var se=e=>D(bn).or(vn).or(yn).eval(e),M={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},vn=e=>{let n=new Set;if(!e)throw new l(M.elementNull);let t=e.querySelector("p a")??e.querySelector("div ~ div > a");if(!t)throw new l(M.noTitleAnchor);let r=t.textContent??"";r===""&&n.add(new v(M.noTitle));let o=t.getAttribute("href")??"";o===""&&n.add(new v(M.noHref));let i=t.getAttribute("daa-ll"),a=t.getAttribute("daa-lh"),s=t?.closest("p")?.nextElementSibling;s||n.add(new v(M.noSubtitleP));let c=s?.textContent??"";c===""&&n.add(new v(M.noSubtitle));let p=[],y=null,x=null;e.classList.contains("new")&&p.push("New"),e.classList.contains("show-offer")&&(p.push("Save 20%"),y="$29.99",x="$19.99");let[u,d=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(f=>f.trim());return[{type:"LinkGroupLink",iconHref:u,iconAlt:d,title:r,href:o,subtitle:c,badges:p,oldPrice:y,newPrice:x,daaLl:i,daaLh:a},[...n]]},bn=e=>{if(!e)throw new l(M.elementNull);let n=[...e.classList];if(!n.includes("header"))throw new l(M.notAHeader);let t=e.querySelector("a")?.textContent??"",r=e.querySelector("a")?.getAttribute("daa-ll")??null,o=e.querySelector("a")?.getAttribute("daa-lh")??null;if(t==="")throw new l(M.noTitle);return[{type:"LinkGroupHeader",title:t,classes:n,daaLl:r,daaLh:o},[]]},yn=e=>{if(!e)throw new l(M.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let n=e.querySelector("a"),[t,r]=L(n),o=n?.getAttribute("daa-ll")??null,i=n?.getAttribute("daa-lh")??null;return[{type:"LinkGroupBlue",link:t,daaLl:o,daaLh:i},r]};var le=e=>{switch(e.type){case"LinkGroupHeader":return xn(e);case"LinkGroupLink":return wn(e);case"LinkGroupBlue":return Ln(e);default:return console.error(e),""}},xn=({title:e,classes:n,daaLl:t,daaLh:r})=>{let o=n.slice(1).map(a=>`feds-link-group--${a}`).join(" "),i=T(r,t??e);return`
    <div role="heading" class="feds-link-group ${o}"${i}>
      <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e}</div>
      </div>
    </div>
  `},wn=({iconHref:e,iconAlt:n,title:t,href:r,subtitle:o,badges:i=[],oldPrice:a=null,newPrice:s=null,daaLl:c,daaLh:p})=>{let y=n!==null&&e!==null,x=T(p,c??t),u=y?`
      <picture class="feds-link-group__icon">
        <img
          loading="lazy"
          src="${e}"
          alt="${n}"
          class="feds-link-group__icon-img"
        >
      </picture>
    `:"",d=i.length===0?"":`
      <div class="feds-link-group__badges">
        ${i.map((b,g)=>`
          <span class="feds-link-group__badge${g>0?" feds-link-group__badge--filled":""}">
            ${b}
          </span>
        `).join("")}
      </div>
    `,f=o===""?"":`<div class="feds-link-group__subtitle">${o}</div>`,m=a===null&&s===null?"":`
      <div class="feds-link-group__price">
        ${a===null?"":`<span class="feds-link-group__old-price">${a}</span>`}
        ${s===null?"":`<span class="feds-link-group__new-price">${s}</span>`}
      </div>
    `;return`
    <a class="feds-link-group" href="${r}"${x}>
      <div class="feds-link-header">
        ${u}
        ${d}
      </div>
      <div class="feds-link-group__content">
       
        <div class="feds-link-group__title">${t}</div>
        ${f}
        ${m}
      </div>
    </a>
  `},Ln=({link:e,daaLl:n,daaLh:t})=>{let r=T(t,n??e.text);return`
  <a href="${e.href}" class="feds-link-group feds-link-group--blue"${r}>
    <div class="feds-link-group__content">
        <div class="feds-link-group__title">${e.text}</div>
      </div>
  </a>
`};var K={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},H=/(\.png|\.jpg|\.jpeg|\.svg)/i,kn=e=>{let n=e.querySelector("picture img")?.getAttribute("src")??null;if(n!==null&&n!=="")return n;let t=e.textContent?.trim();if(t!==void 0&&t!==""&&H.test(t)){let o=t.split("|")[0]?.trim();if(o!==void 0&&o!=="")return o}let r=e.getAttribute("href");return r!==null&&r!==""&&H.test(r)?r:null},Cn=e=>{let n=e.textContent?.trim();if(n?.includes("|")===!0){let r=n.split("|")[1]?.trim();if(r)return r}return e.querySelector("img")?.getAttribute("alt")??""},ce=e=>{if(e===null)throw new l(K.elementNull);let n=e.querySelector(".gnav-brand");if(n===null)throw new l(K.elementNull);let t=[...n.querySelectorAll("a")];if(t.length===0)throw new l(K.noLinks);let r=t.find(g=>{let h=g.textContent??"";return!H.test(g.href)&&!H.test(h)});if(!r)throw new l(K.noPrimaryLink);let o=n.matches(".brand-image-only"),i=n.matches(".no-logo"),a=n.matches(".image-only"),s=!i,c=!o&&!a,p=t.filter(g=>{let h=g.textContent??"";return H.test(g.href)||H.test(h)}),[y,x,u]=(()=>{let g=o?N.brand:N.company,[h=null,w=null]=[...n.querySelectorAll('picture img[src$=".svg"]')].map(te=>te?.src).filter(te=>te?.length>0),[R=null,F=null]=p.map(kn),ln=p[0]instanceof Element?Cn(p[0]):r.textContent?.trim()??"";return[R??h??g,F??w,ln]})(),d=r.textContent?.trim()??"",f=r.href;if(!s&&!c)return[{type:"Brand",data:{type:"NoRender"}},[]];let m=(g,h)=>{let w=h!=null&&h!=="";return Me()&&w?h:g},b=y.startsWith("<svg")?{type:"inline-svg",svgContent:m(y,x),alt:u}:{type:"image",src:m(y,x),alt:u};return s&&c?[{type:"Brand",data:{type:"LabelledBrand",href:f,label:d,image:b}},[]]:s&&o?[{type:"Brand",data:{type:"BrandImageOnly",href:f,image:b,alt:u}},[]]:s&&a?[{type:"Brand",data:{type:"ImageOnlyBrand",href:f,image:b,alt:u}},[]]:[{type:"Brand",data:{type:"BrandLabelOnly",href:f,label:d}},[]]};var En=`.feds-brand-container {
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
}`,Ae=document.createElement("style");Ae.textContent=En;document.head.appendChild(Ae);var de=(e,n)=>{let t=`feds-brand-image${n?" brand-image-only":""}`;if(e.type==="inline-svg")return`<span class="${t}">${e.svgContent}</span>`;let r=e.alt?` alt="${e.alt}"`:"";return`<span class="${t}"><img src="${e.src}"${r} /></span>`},V=(e,n,t="")=>`<div class="feds-brand-container">
    <a href="${e}" class="feds-brand" daa-ll="Brand"${t}>
      ${n}
    </a>
  </div>`.trim(),pe=e=>{let{data:n}=e;switch(n.type){case"LabelledBrand":return V(n.href,de(n.image,!1)+`<span class="feds-brand-label">${n.label}</span>`);case"BrandImageOnly":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,de(n.image,!0),t)}case"ImageOnlyBrand":{let t=n.alt?` aria-label="${n.alt}"`:"";return V(n.href,de(n.image,!1),t)}case"BrandLabelOnly":return V(n.href,`<span class="feds-brand-label">${n.label}</span>`);case"NoRender":return"";default:return""}};var ue=["appswitcher","help"],J={cs:["cz"],da:["dk"],de:["at"],en:["africa","au","ca","ie","in","mt","ng","nz","sg","za"],es:["ar","cl","co","cr","ec","gt","la","mx","pe","pr"],et:["ee"],ja:["jp"],ko:["kr"],nb:["no"],pt:["br"],sl:["si"],sv:["se"],uk:["ua"],zh:["cn","tw"]},[z,_e]=(()=>{let e,n,t,r=new Promise(o=>{n=o,t=setTimeout(()=>{e={},o(e)},5e3)});return[o=>{o&&!e&&(e=o,clearTimeout(t),n?.(e))},()=>r]})();function Y(e,n=!1){let s=(/uc_carts=/.test(document.cookie)?e:e?.filter(p=>p!=="cart"))??[],c=s.length??3;if(n){let p=s.filter(x=>ue.includes(x)).length;return`calc(92px + ${p*32}px + ${p*.25}rem)`}return`calc(${c*32}px + ${(c-1)*.25}rem)`}var X=e=>{if(!e.prefix||e.prefix==="/")return"en_US";let n=e.prefix.replace("/","");if(n.includes("_")){let[r,o]=n.split("_").reverse();return`${r.toLowerCase()}_${o.toUpperCase()}`}if(n==="uk")return"en_GB";let t=Object.keys(J).find(r=>J[r].includes(n));return t?`${t.toLowerCase()}_${n.toUpperCase()}`:`${n.toLowerCase()}_${n.toUpperCase()}`},Tn={Mac:"macOS",Win:"windows",Linux:"linux",CrOS:"chromeOS",Android:"android",iPad:"iPadOS",iPhone:"iOS"},Q=()=>{let e=navigator.userAgent;for(let[n,t]of Object.entries(Tn))if(e.includes(n))return t;return"linux"},ee=async()=>{let e=window;return e.alloy?await e.alloy("getIdentity").then(n=>n?.identity?.ECID).catch(()=>{}):void 0};var $e=()=>{try{return C().signInContext||{}}catch{return{}}},Mn=()=>{let e=C();return O("signin-cta-style")==="primary"||e?.unav?.profile?.signInCtaStyle==="primary"?"primary":"secondary"},Sn=()=>{let n=C()?.unav?.profile?.messageEventListener;return n||(t=>{let{name:r,payload:o,executeDefaultAction:i}=t.detail;if(!(!r||r!=="System"||!o||typeof i!="function"))switch(o.subType){case"AppInitiated":window.adobeProfile?.getUserProfile().then(a=>{z(a)}).catch(()=>{z({})});break;case"SignOut":i();break;case"ProfileSwitch":Promise.resolve(i()).then(a=>{a&&window.location.reload()});break;default:break}})};function Pn(){let{unav:e}=C();return e?.unavHelpChildren||[{type:"Support"},{type:"Community"}]}var j=()=>{let e=C();return{profile:{name:"profile",attributes:{accountMenuContext:{sharedContextConfig:{enableLocalSection:!0,enableProfileSwitcher:!0,miniAppContext:{logger:{trace:()=>{},debug:()=>{},info:()=>{},warn:()=>{},error:()=>{}}},complexConfig:e?.unav?.profile?.complexConfig||null,...e?.unav?.profile?.config},messageEventListener:Sn()},signInCtaStyle:Mn(),isSignUpRequired:!1,callbacks:{onSignIn:()=>{window.adobeIMS?.signIn($e())},onSignUp:()=>{window.adobeIMS?.signIn($e())}}}},appswitcher:{name:"app-switcher"},notifications:{name:"notifications",attributes:{notificationsConfig:{applicationContext:{appID:e?.unav?.uncAppId||"adobecom",...e?.unav?.uncConfig}}}},help:{name:"help",attributes:{children:Pn()}},jarvis:{name:"jarvis",attributes:{appid:e?.jarvis?.id,callbacks:e?.jarvis?.callbacks}},cart:{name:"cart"}}};var Re=(e,n)=>{e[0]&&"attributes"in e[0]&&e[0].attributes&&typeof e[0].attributes=="object"&&"isSignUpRequired"in e[0].attributes&&(e[0].attributes.isSignUpRequired=n)},ne=async(e,n)=>{try{let t=e.querySelector(".feds-utilities");if(!(t instanceof HTMLElement))return new v('missing ".feds-utilities" container');let r=new Set,o=document.head.querySelector('meta[name="universal-nav"]'),i=o instanceof HTMLMetaElement?o.content??"":"";o instanceof HTMLMetaElement||r.add(new v('metadata "universal-nav" is missing'));let a=i.trim();o instanceof HTMLMetaElement&&a.length===0&&r.add(new v('metadata "universal-nav" has no value'));let s=!window.adobeIMS?.isSignedInUser(),c=a.split(",").map(g=>g.trim()).filter(g=>Object.keys(j()).includes(g)||g==="signup");if(s){let g=Y(c,s);t.style.setProperty("min-width",g)}let p;try{p=C()}catch{throw new Error("MiloConfig not available for UNAV initialization")}let y=X(p.locale),x=p.env.name==="prod"?"prod":"stage",u=await ee(),d=new URLSearchParams(window.location.search).get("unavVersion");/^\d+(\.\d+)?$/.test(d??"")||(d="1.5"),await Promise.all([ie(`https://${x}.adobeccstatic.com/unav/${d}/UniversalNav.js`),oe(`https://${x}.adobeccstatic.com/unav/${d}/UniversalNav.css`,!0)]);let f=()=>{let g=j(),h=[g.profile];return Re(h,!1),c?.forEach(w=>{if(w==="profile")return;if(w==="signup"){Re(h,!0);return}let R=g[w];R&&h.push(R)}),h},m=()=>({target:t,env:x,locale:y,countryCode:Pe(p?.locale)?.country||"US",imsClientId:window?.adobeid?.client_id,theme:"light",analyticsContext:{consumer:{name:"adobecom",version:"1.0",platform:"Web",device:Q(),os_version:navigator.platform},event:{visitor_guid:u}},children:f(),isSectionDividerRequired:!!p?.unav?.showSectionDivider,showTrayExperience:!G.matches});await window?.UniversalNav?.(m()),s||t?.style.removeProperty("min-width");let b=g=>{window?.UniversalNav?.reload(m())};return G.addEventListener("change",()=>{b()}),{reloadUnav:b,errors:r}}catch(t){let r=t instanceof Error?t.message:"failed to load universal nav";return new v(r)}};function S(e,n){return[...e.querySelectorAll(n)]}function q(e,n,t){S(e,n).forEach(r=>t?r.removeAttribute("tabindex"):r.setAttribute("tabindex","-1"))}var U={ArrowLeft:-1,ArrowRight:1,ArrowUp:-1,ArrowDown:1},Ie=new Set(["ArrowLeft","ArrowRight"]),An=new Set(["ArrowUp","ArrowDown"]),_n='.tabs [role="tab"][aria-selected="true"]';function fe(e,n,t){return(e+n+t)%t}function $n(e,n,t,r){let o=U[t];if(Ie.has(t)){let d=n+o;return d>=0&&d<e.length?d:null}let i=getComputedStyle(r).gridTemplateColumns.split(" ").length,a=[...r.children],s=d=>{let f=e[d].parentElement;return f?a.indexOf(f):-1},c=s(n)%i,p=Math.floor(s(n)/i)+(t==="ArrowDown"?1:-1),y=Math.floor((a.length-1)/i);if(p<0||p>y)return null;let x=null,u=1/0;for(let d=0;d<e.length;d++){let f=Math.abs(s(d)%i-c);Math.floor(s(d)/i)===p&&f<u&&(u=f,x=d)}return x}function ge(e){q(e,'.tab-content [role="tabpanel"] a',!1);let n=[];S(e,".feds-popup[popover]").forEach(u=>{let d=()=>{u.matches(":popover-open")||q(u,'[role="tabpanel"] a',!1)};u.addEventListener("toggle",d),n.push(()=>u.removeEventListener("toggle",d))});let t=(u,d)=>{u.focus(),d.preventDefault()},r=()=>e.querySelector(".feds-popup:popover-open"),o=u=>u.querySelector(_n),i=u=>u.querySelector('[role="tabpanel"]:not([hidden])');function a(u){let d=r(),f=e.querySelector("#feds-menu-wrapper");if(!f)return!1;let m=d??(f?.matches(":popover-open")?f:null);if(!m)return!1;m.hidePopover?.();let b=d?`[popovertarget="${m.id}"]`:".feds-nav-toggle";return e.querySelector(b)?.focus(),u.preventDefault(),!0}function s(u,d,f){if(!Ie.has(d))return!1;let m=S(e,".feds-gnav-items > li > .feds-link"),b=m.indexOf(u);return b<0?!1:(t(m[fe(b,U[d],m.length)],f),!0)}function c(u,d,f,m){let b=S(d,'.tabs :is([role="tab"], .product-links a)'),g=b.indexOf(u);if(g<0)return!1;if(U[f]){let h=b[fe(g,U[f],b.length)];return h.matches('[role="tab"]')&&h.click(),t(h,m),!0}if(f==="Tab"&&!m.shiftKey&&u.matches('[aria-selected="true"]')){let h=i(d);if(!h)return!1;q(h,"a",!0);let w=h.querySelector("a");return w&&t(w,m),!0}return!1}function p(u,d,f,m){let b=i(d);if(!b)return!1;let g=S(b,"a"),h=g.indexOf(u);if(h<0)return!1;if(U[f]){let w=$n(g,h,f,b);return w!==null?(t(g[w],m),!0):f==="ArrowUp"?(q(b,"a",!1),t(o(d)??g[0],m),!0):!1}if(f==="Tab"&&!m.shiftKey){if(h+1<g.length)t(g[h+1],m);else{let w=S(d,'.tabs [role="tab"]'),R=o(d),F=w[w.indexOf(R)+1]??d.querySelector(".product-links a");if(F)t(F,m);else return!1}return!0}if(f==="Tab"&&m.shiftKey){if(h>0)t(g[h-1],m);else{q(b,"a",!1);let w=o(d)??S(d,'.tabs :is([role="tab"], .product-links a)')[0];w&&t(w,m)}return!0}return!1}function y(u,d,f,m){if(!An.has(f))return!1;let b=S(d,".feds-gnav-cards a"),g=b.indexOf(u);return g<0?!1:(t(b[fe(g,U[f],b.length)],m),!0)}function x(u){let d=document.activeElement??u.target;if(u.key==="Escape"){a(u);return}let f=r();f&&(f.matches(":has(.product-list)")&&(c(d,f,u.key,u)||p(d,f,u.key,u))||f.matches(":has(.feds-gnav-cards)")&&y(d,f,u.key,u))||s(d,u.key,u)}return e.addEventListener("keydown",x),n.push(()=>e.removeEventListener("keydown",x)),()=>n.forEach(u=>u())}var Rn="feds-milo",k=(e,n="default",t="e")=>{let{locale:r}=C(),o=O("gnav-source")??`${r.contentRoot??""}/gnav`;window.lana||console.warn("lana logging unavailable in the gnav"),window?.lana?.log(`${e} | gnav-source: ${o} | href: ${window.location.href}`,{clientId:Rn,sampleRate:1,tags:n,errorType:t})};var l=class e extends Error{constructor(n){super(n),Object.setPrototypeOf(this,e.prototype)}},v=class e extends Error{constructor(n,t="Minor"){super(n),Object.setPrototypeOf(this,e.prototype),t==="Critical"&&k(n)}};var He=e=>n=>{if(n===null)throw new Error("");let t=n.querySelector(In(e));if(!t)throw new Error("");let[{text:r,href:o},i]=L(t);return[{type:e.type,text:r,href:o},i]},me=He({type:"PrimaryCTA"}),_=He({type:"SecondaryCTA"}),Ue=e=>D(me).or(_).eval(e),In=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var he=({text:e,href:n})=>`
<a href="${n}" class="feds-primary-cta">
  ${e}
</a>
`,$=({text:e,href:n})=>`
<a href="${n}" class="feds-secondary-cta">
  ${e}
</a>
`,Ge=e=>e.type==="PrimaryCTA"?he(e):$(e);var P=({text:e,href:n,daaLl:t})=>`<a class="feds-link" href="${n}"${T(null,t??e)}>${e}</a>`;var Ne=e=>{let[n,t]=Hn(e);return[{type:"LinksCard",card:n},t]},Hn=e=>{let n=e.querySelector("h1, h2, h3")||null;if(!n)throw new l("Expected links card title");let t=e.querySelector("em > a"),r=[...e.querySelectorAll("a")].filter(c=>c!==t);if(r.length===0)throw new l("Expected at least one link");let[o,i]=E(r,L),[a,s]=(()=>{try{return _(e)}catch{return[null,[]]}})();return[{type:"LinksCardItem",title:n.textContent??"",links:o,footerCTA:a},[...i,...s]]};var De=e=>{let n=[...e.querySelectorAll("li > div")],t=[...e.querySelectorAll("li > a")],[r,o]=E(n,Un),[i,a]=E(t,L);return[{type:"ProductList",categories:r,links:i},[...o,...a]]},Un=e=>{let n=e.firstElementChild;if(n?.nodeName!=="H2")throw new l("Expected H2");let t=n.textContent??"",r=n.textContent??"",o=Le(n),[i,a]=E(o,se);return[{type:"ProductCategory",name:t,daaLh:r,links:i},a]};var Be=e=>{let[n,t]=Gn(e);return[{type:"FeaturedCard",card:n},t]},Gn=e=>{let n=e.querySelector("h3")||null;if(!n)throw new v("Eye brow element not found");let t=e.querySelector("h1")||null,r=t?.nextElementSibling||null;if(!t)throw new l("Expected title");if(!r)throw new l("Expected subtitle");let o=r.nextElementSibling?.firstElementChild||null;if(!o)throw new l("Expected card link after subtitle");let[i,a]=L(o),[s,c]=_(e);return[{type:"Card",title:t.textContent??"",subtitle:r.textContent??"",bodyLink:i,footerCTA:s,eyeBrow:n.textContent??""},[...c,...a]]};var ze=e=>{let n=new Set;if(e===null)throw new l(Oe.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&n.add(new v(Oe.noTitle));let r=(async()=>{try{let o=e.querySelector("a"),i=new URL(o?.href??""),a=await I(i);if(a instanceof l)throw new Error(a.message);let s=await Ee(a);if(s instanceof l)throw new Error(s.message);return e.classList.contains("product-list")?De(s):Nn(s)}catch(o){throw new l(o?.message)}})();if(r instanceof l)throw r;return[{type:"MegaMenu",title:t,content:r},[...n]]},Oe={elementNull:"Element is null",noTitle:"Large Menu has no Title"},Nn=e=>{let n=[...e.children].filter(i=>i.classList.contains("featured-card")||i.classList.contains("links-card")),t=n.length>0?n:[...e.querySelectorAll(".featured-card, .links-card")];if(t.length===0)throw new l("Unrecognized mega menu item (did you forget to label it correctly?)");let[r,o]=E(t,Dn);if(r.length===0)throw new l("Failed to parse gnav cards sections");return[{type:"GnavCards",sections:r},o]},Dn=e=>{if(e.classList.contains("featured-card"))return Be(e);if(e.classList.contains("links-card"))return Ne(e);throw new l("Unsupported gnav cards section")};var Bn=`.feds-popup .featured-card .featured-eyebrow {
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
`,je=document.createElement("style");je.textContent=Bn;document.head.appendChild(je);var qe=({card:e})=>On(e),On=({title:e,subtitle:n,eyeBrow:t,footerCTA:r,bodyLink:o})=>`
  <article class="featured-card">
    <div>
      <div class="featured-eyebrow">${t}</div>
      <h4>${e}</h4>
      <div class="featured-subtitle">${n}</div>
      ${P(o)}
    </div>
    <div class="footer-container">
      ${$(r)}
    </div>
  </article>
`.trim();var zn=`.feds-popup .links-card {
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
`,Fe=document.createElement("style");Fe.textContent=zn;document.head.appendChild(Fe);var We=({card:e})=>jn(e),jn=({title:e,links:n,footerCTA:t})=>`
  <article class="links-card">
    <div>
      <h4 class="links-card-title">${e}</h4>
      <ul class="links-card-links">
        ${n.map(r=>`<li>${P(r)}</li>`).join("")}
      </ul>
    </div>
    ${t===null?"":`
    <div class="links-card-footer">
      ${$(t)}
    </div>`}
  </article>
`.trim();var qn=`.feds-popup .feds-gnav-cards {
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
`,Ze=document.createElement("style");Ze.textContent=qn;document.head.appendChild(Ze);var Ke=({sections:e})=>`
  <ul class="feds-gnav-cards">
    ${e.map(n=>{switch(n.type){case"FeaturedCard":return`<li>${qe(n)}</li>`;case"LinksCard":return`<li>${We(n)}</li>`;default:}return""}).join("")}
  </ul>
`;var Fn=`.feds-popup .product-list {
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
}`,Ve=document.createElement("style");Ve.textContent=Fn;document.head.appendChild(Ve);var Je=({categories:e,links:n})=>{let t=`
    <ul class="tabs" role="tablist">
      ${e.map(Wn).join("")}
       ${n.map(o=>`<li class="product-links">${P(o)}</li>`).join("")}
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
          ${o.map(a=>`<li>${le(a)}</li>`).join("")}
        </ul>
      </li>
      `.trim()).join("")}
    </ul>
  `.trim();return`
    <div class="product-list">
      ${t}
      ${r}
    </div>
  `.trim()},Wn=({name:e,daaLh:n},t)=>`
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
  `.trim();var Ye=({title:e})=>`
  <button type="button"
          aria-controls="${B(e)}"
          aria-haspopup="true"
          class="mega-menu feds-link"
          popovertarget="${B(e)}"
          ${T(null,e)}
  >
    ${e}
  </button>
  <div id="${B(e)}" popover class="feds-popup">
  </div>
`,Xe=(e,n,t)=>{let r=`
    <div class="feds-popup-header">
      <button
        type="button"
        class="feds-popup-back-button"
        popovertarget="${B(n)}"
        popovertargetaction="hide"
        aria-label="Back"
      >
        ${N.arrowBack}
      </button>
      <span class="feds-popup-title">${t}</span>
    </div>
  `.trim(),o="";switch(e.type){case"ProductList":o=Je(e);break;case"GnavCards":o=Ke(e);break;default:}return`${r}${o}`};var Qe={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},en=e=>{if(e===null)return[{type:"Text",content:""},[new v(Qe.elementNull,"Minor")]];let n=e.textContent;return n===null?[{type:"Text",content:""},[new v(Qe.textContentNull,"Minor")]]:[{type:"Text",content:n},[]]};var nn=({content:e})=>e;var tn=e=>{if(e===null)throw new l(Zn.elementNull);if(e.querySelector(".gnav-brand")!==null)return ce(e);let t=e.querySelector(".large-menu");return t!==null?ze(t):e.querySelector("strong")!==null?me(e):e.querySelector("em")!==null?_(e):e.querySelector("a")===null?en(e):L(e.querySelector("a"))},ve=e=>{switch(e.type){case"Text":return nn(e);case"Link":return P(e);case"SecondaryCTA":return $(e);case"PrimaryCTA":return he(e);case"Brand":return pe(e);case"MegaMenu":return Ye(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Zn={elementNull:"Element is null"};var rn=(e,n)=>{let[t,r]=E([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],L),[o,i]=E([...e.children],tn),a=e.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return Ue(a)}catch{return[null,[]]}})(),p=!1,y=[r,i,c].flat();return{breadcrumbs:t,components:o,productCTA:s,localnav:p,errors:y,unavEnabled:n}};var on=e=>{let n=[...e.querySelectorAll('.tabs button[role="tab"]')],t=[...e.querySelectorAll(".tab-content ul")],r=n.map((o,i)=>()=>{n.forEach(a=>{a.setAttribute("aria-selected","false")}),t.forEach(a=>{a.setAttribute("hidden","true")}),t[i]?.removeAttribute("hidden"),o.setAttribute("aria-selected","true")});return n.forEach((o,i)=>{o.addEventListener("click",r[i])}),()=>{n.forEach((o,i)=>{o.removeEventListener("click",r[i])})}};var an=async({gnavSource:e,asideSource:n})=>{let t=await I(e);if(t instanceof l)return t;let r=await I(n);return{mainNav:t,aside:r}};var Kn=`/**
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

  header.global-navigation:not(:has(:popover-open)) {
    animation: scroll-transition-main-nav linear forwards;
    animation-timeline: scroll();
    animation-range: 0px 100px;
    transform: translateZ(0);
    will-change: scroll-position;
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
}
`,sn=document.createElement("style");sn.textContent=Kn;document.head.appendChild(sn);var ti=async e=>{let{gnavSource:n,mountpoint:t,unavEnabled:r,miloConfig:o,personalization:i}=e;if(!(n instanceof URL))throw k(`gnavSource is invalid: ${n}`),new l("gnavSource needs to be a URL object");try{ae(o)}catch(y){throw k(`Failed to initialize MiloConfig: ${y}`),new l(`Failed to initialize MiloConfig: ${y}`)}ke(i),xe(be(e));let a=await an(e);if(a instanceof l)throw k(a.message),a;let{mainNav:s,aside:c}=a;if(s instanceof l)throw k(s.message),s;let p=rn(s,r);if(p instanceof l)throw k(p.message),p;return await Vn(p)(t),Yn(e)},Vn=e=>async n=>{let t=Jn(e);n.innerHTML=t,n.classList.add("site-pivot");let r=[...n.querySelectorAll(".mega-menu ~ .feds-popup")];r.forEach(s=>{s.innerHTML=""});let o=e.components.filter(s=>s.type==="MegaMenu"),i=o.map(s=>s.content),a=await Promise.all(i.map(async(s,c)=>{let[p,y]=await s,x=o[c].title;return r[c].innerHTML=Xe(p,r[c].id,x),y}).flat());return n},Jn=({components:e,productCTA:n,unavEnabled:t})=>`
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
      `.trim(),a=r?ve(r):"",s=Te(o,ve);return`
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
  ${n===null?"":Ge(n)}
  ${t?'<div class="feds-utilities"></div>':""}
</nav>
`,Yn=async e=>{let n=new Set,t=await ne(e.mountpoint);t instanceof v?(n.add(t),k(t.message)):t.errors.forEach(o=>n.add(o)),on(e.mountpoint),ge(e.mountpoint),Xn(e.mountpoint),Qn(e.mountpoint),nt(e.mountpoint);let r=t instanceof v?()=>{}:t.reloadUnav;return{closeEverything:et,reloadUnav:r,errors:n,setGnavTopPosition:o=>{},getGnavTopPosition:()=>0}},Xn=e=>{let n=e.querySelector("#feds-menu-wrapper"),t=e.querySelector(".feds-nav-toggle");n?.addEventListener("toggle",()=>{let o=n.matches(":popover-open");t?.setAttribute("aria-expanded",String(o)),n.setAttribute("aria-hidden",String(!o))}),e.querySelectorAll(".feds-popup[popover]").forEach(o=>{o.addEventListener("toggle",()=>{e.querySelector(`[popovertarget="${o.id}"]`)?.setAttribute("aria-expanded",String(o.matches(":popover-open")))})})},Qn=e=>{G.addEventListener("change",()=>{let n=e.querySelector("#feds-menu-wrapper");n?.matches(":popover-open")===!0&&n.hidePopover?.()})},et=()=>{},nt=e=>{let n=e.closest("header");if(!n)return;let t=e.querySelector("#feds-menu-wrapper"),r=()=>t?.matches(":popover-open")??!1,o=()=>window.scrollY>100,i=()=>{if(r()){n.classList.remove("feds-header-scrolled");return}if(o()){n.classList.add("feds-header-scrolled");return}n.classList.remove("feds-header-scrolled")};i(),window.addEventListener("scroll",i,{passive:!0}),t?.addEventListener("toggle",i)};export{ti as main,Yn as postRenderingTasks,Vn as renderGnav,Jn as renderGnavString};
//# sourceMappingURL=main.js.map
