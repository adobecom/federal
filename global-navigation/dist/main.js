var D=e=>{switch(e.type){case"LinkGroupHeader":return xe(e);case"LinkGroupLink":return we(e);case"LinkGroupBlue":return Me(e);default:return console.error(e),""}},xe=({title:e,classes:r})=>`
  <div role="heading" class="${r.join(",")}">
    <div class="title">${e}</div>
  </div>
`,we=({iconHref:e,iconAlt:r,title:t,href:n,subtitle:i})=>{let s=r!==null&&e!==null?`
      <picture>
        <img
          loading="lazy"
          src="${e}"
          alt="${r}"
        >
      </picture>
    `:"";return`
    <a class="link-group" href="${n}">
      ${s}
      <div class="content">
        <div class="title">${t}</div>
        <div class="subtile">${i}</div>
      </div>
    </a>
  `},Me=({link:e})=>`
  <a href="${e.href}" class="link-group blue">
    ${e.text}
  </a>
`;var y=({text:e,href:r})=>`<a href="${r}">${e}</a>`;var M=({text:e,href:r})=>`
<a href="${r}" class="feds-primary-cta">
  ${e}
</a>
`,k=({text:e,href:r})=>`
<a href="${r}" class="feds-secondary-cta">
  ${e}
</a>
`,Z=e=>e.type==="PrimaryCTA"?M(e):k(e);var o=class e extends Error{constructor(r){super(r),Object.setPrototypeOf(this,e.prototype)}},p=class e extends Error{constructor(r,t="Minor"){super(r),Object.setPrototypeOf(this,e.prototype)}};var q=window.matchMedia("(min-width: 900px)"),U={brand:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 64.57 35"><defs><style>.cls-1{fill: #eb1000;}</style></defs><path class="cls-1" d="M6.27,10.22h4.39l6.2,14.94h-4.64l-3.92-9.92-2.59,6.51h3.08l1.23,3.41H0l6.27-14.94ZM22.03,13.32c.45,0,.94.04,1.43.16v-3.7h3.88v14.72c-.89.4-2.81.89-4.73.89-3.48,0-6.47-1.98-6.47-5.93s2.88-6.13,5.89-6.13ZM22.52,22.19c.36,0,.65-.07.94-.16v-5.42c-.29-.11-.58-.16-.96-.16-1.27,0-2.45.94-2.45,2.92s1.2,2.81,2.47,2.81ZM34.25,13.32c3.23,0,5.98,2.18,5.98,6.02s-2.74,6.02-5.98,6.02-6-2.18-6-6.02,2.72-6.02,6-6.02ZM34.25,22.13c1.11,0,2.14-.89,2.14-2.79s-1.03-2.79-2.14-2.79-2.12.89-2.12,2.79.96,2.79,2.12,2.79ZM41.16,9.78h3.9v3.7c.47-.09.96-.16,1.45-.16,3.03,0,5.84,1.98,5.84,5.86,0,4.1-2.99,6.18-6.53,6.18-1.52,0-3.46-.31-4.66-.87v-14.72ZM45.91,22.17c1.34,0,2.56-.96,2.56-2.94,0-1.85-1.2-2.72-2.5-2.72-.36,0-.65.04-.91.16v5.35c.22.09.51.16.85.16ZM58.97,13.32c2.92,0,5.6,1.87,5.6,5.64,0,.51-.02,1-.09,1.49h-7.27c.4,1.32,1.56,1.94,3.01,1.94,1.18,0,2.27-.29,3.5-.82v2.97c-1.14.58-2.5.82-3.9.82-3.7,0-6.58-2.23-6.58-6.02s2.61-6.02,5.73-6.02ZM60.93,18.02c-.2-1.27-1.05-1.78-1.92-1.78s-1.58.54-1.87,1.78h3.79Z"/></svg>',company:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none"><path d="M14.2353 21.6209L12.4925 16.7699H8.11657L11.7945 7.51237L17.3741 21.6209H24L15.1548 0.379395H8.90929L0 21.6209H14.2353Z" fill="#EB1000"/></svg>',search:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false"><path d="M14 2A8 8 0 0 0 7.4 14.5L2.4 19.4a1.5 1.5 0 0 0 2.1 2.1L9.5 16.6A8 8 0 1 0 14 2Zm0 14.1A6.1 6.1 0 1 1 20.1 10 6.1 6.1 0 0 1 14 16.1Z"></path></svg>',home:'<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" height="25" viewBox="0 0 18 18" width="25"><path fill="#6E6E6E" d="M17.666,10.125,9.375,1.834a.53151.53151,0,0,0-.75,0L.334,10.125a.53051.53051,0,0,0,0,.75l.979.9785A.5.5,0,0,0,1.6665,12H2v4.5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5v-5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5v5a.5.5,0,0,0,.5.5h4a.5.5,0,0,0,.5-.5V12h.3335a.5.5,0,0,0,.3535-.1465l.979-.9785A.53051.53051,0,0,0,17.666,10.125Z"/></svg>'},z=e=>r=>{let t=[],n=[];for(let i=0;i<r.length;i++){if(e(r[i])){t.push(n),n=[];continue}n.push(r[i])}return t.push(n),t},O=e=>r=>{if(r.length===0)return r;let[t,...n]=r;return e(t)?[t].concat(O(e)(n)):[]};var C=e=>{let r=[],t=e.nextElementSibling??null;for(;t!==null;)r.push(t),t=t.nextElementSibling??null;return r},h=e=>({eval:e,or:r=>h(t=>{try{return e(t)}catch{return r(t)}})}),f=(e,r)=>e.reduce(([t,n],i)=>{try{let[l,s]=r(i);return[[...t,l],[...n,...s]]}catch(l){return l instanceof o?[t,[l,...n]]:[t,n]}},[[],[]]),N=({mobileEventListeners:e,desktopEventListeners:r})=>t=>{let n;q.matches?n=r(t):n=e(t),q.addEventListener("change",()=>{n?.(),n=q.matches?r(t):e(t)})},T=async e=>{try{if(e===null)return new o("URL is null");let r=await fetch(K(e.href));if(!r.ok)return new o(`Request for ${e} failed`);let t=await r.text(),{body:n}=new DOMParser().parseFromString(t,"text/html");return n}catch(r){return new o(r?.message)}},K=e=>e.replace(/\.plain\.html(?=[?#]|$)/,".html").replace(/\.html(?=[?#]|$)|(?=[?#]|$)/,".plain.html"),W=async e=>{let r=async(t,n)=>{if(t instanceof o)return t;try{let l=[...t.querySelectorAll('a[href*="#_inline"]')].map(async s=>{try{if(n.has(s.href))return;let c=K(s.href),m=new URL(c),a=await T(m);if(n.add(s.href),a instanceof o)throw a;await r(a,n);let u=s.closest("div");u&&u.replaceChildren(...a.children);return}catch{return}},[]);return await Promise.all(l),t}catch(i){return new o(JSON.stringify(i))}};return r(e,new Set)},g=(e,r)=>e.map(t=>`<li>${r(t)}</li>`).join(""),S=e=>e.toLowerCase().trim().replace(/[^a-z0-9]/g,"-").replace(/-+/g,"-").replace(/^-+|-+$/g,"").replace(/^(\d)/,"id-$1");var G=e=>{switch(e.type){case"SingleColumnSection":return J(e);case"SingleColumnSectionList":return ke(e);case"MultiColumnSection":return Pe(e);case"MenuPromo":return F(e);default:return console.error(`Unexpected Column Type ${e}`),""}},J=({title:e,items:r})=>`
<ul>
  ${e===null?"":`<span class="column-section-title">${e}</span>`}
  ${g(r,V)}
</ul>
`,ke=({sections:e})=>`
  <ul>
    ${g(e,J)}
  </ul>
`,Pe=({title:e,columns:r})=>`
  <ul>
  ${e===null?"":`<span class="column-section-title">${e}</span>`}
  ${g(r,t=>g(t,V))}
  </ul>
`,F=({content:e})=>e,V=e=>{switch(e.type){case"LinkGroupHeader":case"LinkGroupLink":case"LinkGroupBlue":return D(e);case"Link":return y(e);case"PrimaryCTA":return M(e);case"SecondaryCTA":return k(e);default:return console.error(`Unexpected ColumnItem type ${e}`),""}};var $={elementNull:"Error when parsing Brand. Element is null",noLinks:"Error when parsing Brand. No links found",noPrimaryLink:"Error when parsing Brand. No primary link found"},x=/(\.png|\.jpg|\.jpeg|\.svg)/i,X=e=>{let r=e.querySelector("picture img");if(r!==null){let i=r.getAttribute("src");if(i!==null&&i.length>0)return i}let t=e.textContent?.trim();if(t!=null&&t.length>0&&x.test(t)){let[i]=t.split("|"),l=i.trim();if(l.length>0)return l}let n=e.getAttribute("href");return n!==null&&n.length>0&&x.test(n)?n:null},Ae=e=>{let r=e.textContent?.trim();if(r!=null&&r.includes("|")){let[,n]=r.split("|"),i=n?.trim();if(i!=null)return i}let t=e.querySelector("img");if(t!==null){let n=t.getAttribute("alt");if(n!==null)return n}return""},Q=e=>{if(e===null)throw new o($.elementNull);let r=e.querySelector(".gnav-brand");if(r===null)throw new o($.elementNull);let t=[...r.querySelectorAll("a")];if(t.length===0)throw new o($.noLinks);let n=t.find(E=>{let I=E.textContent??"";return!x.test(E.href)&&!x.test(I)});if(!n)throw new o($.noPrimaryLink);let i=r.matches(".brand-image-only"),l=r.matches(".no-logo"),s=r.matches(".image-only"),c=!l,m=!i&&!s,a=t.filter(E=>{let I=E.textContent??"";return x.test(E.href)||x.test(I)}),u="",v,b="";a.length>0?(u=X(a[0])??"",a.length>1&&(v=X(a[1])??void 0),b=Ae(a[0])):b=n.textContent?.trim()??"";let R=[...r.querySelectorAll('picture img[src$=".svg"]')];R.length>0&&(u=R[0].src,R.length>1&&(v=R[1].src)),u.length===0&&(u=i?U.brand:U.company);let Se=n.textContent?.trim()??"";return[{type:"Brand",imgSrc:u,imgSrcDark:v,altText:b,label:Se,href:n.href,renderImage:c,renderLabel:m,brandImageOnly:i},[]]};var He=()=>typeof window<"u"&&typeof window.matchMedia<"u"?window.matchMedia("(prefers-color-scheme: dark)").matches:!1,Re=({renderImage:e,imgSrc:r,imgSrcDark:t,altText:n,brandImageOnly:i})=>{if(!e)return"";let l=r;He()&&t!==null&&t!==void 0&&(l=t);let s=l.startsWith("<svg"),c=i?" brand-image-only":"";if(s)return`<span class="${`feds-brand-image${c}`}">${l}</span>`;let m=n.length>0?` alt="${n}"`:"";return`<span class="${`feds-brand-image${c}`}"><img src="${l}"${m} /></span>`},Ie=({renderLabel:e,label:r})=>!e||r.length===0?"":`<span class="feds-brand-label">${r}</span>`,Y=e=>{let{href:r,renderImage:t,renderLabel:n,altText:i}=e;if(!t&&!n)return"";let l=Re(e),s=Ie(e),c=!n&&i.length>0?` aria-label="${i}"`:"";return`
   <div class="feds-brand-container">
    <a href="${r}" class="feds-brand" daa-ll="Brand"${c}>
        ${l}
        ${s}
      </a>
    </div>`.trim()};var B={elementNull:"Error when parsing Link. Element is null",notAnchor:"Cannot parse non-anchor as Link",textContentNotFound:"Error when parsing Link. Element has no textContent",hrefNotFound:"Element has no href"},d=e=>{if(e===null)throw new o(B.elementNull);if(e.tagName!=="A")throw new o(B.notAnchor);let r=e?.textContent??"";if(r==="")throw new o(B.textContentNotFound);let t=e?.getAttribute("href")??"";if(t==="")throw new o(B.hrefNotFound);return[{type:"Link",text:r,href:t},[]]};var ee=e=>r=>{if(r===null)throw new Error("");let t=r.querySelector(Ne(e));if(!t)throw new Error("");let[{text:n,href:i},l]=d(t);return[{type:e.type,text:n,href:i},l]},P=ee({type:"PrimaryCTA"}),A=ee({type:"SecondaryCTA"}),re=e=>h(P).or(A).eval(e),Ne=({type:e})=>{switch(e){case"PrimaryCTA":return"strong > a";case"SecondaryCTA":return"em > a";default:throw new Error("")}};var te=e=>h($e).or(Ge).or(Be).eval(e),L={elementNull:"Element not found",noTitleAnchor:"Title anchor not found",noHref:"Title Anchor has no href",noTitle:"Title text not found",noSubtitleP:"Subtitle <p> not found",noSubtitle:"Subtitle text not found",notAHeader:"Expected a Header class"},Ge=e=>{let r=new Set;if(!e)throw new o(L.elementNull);let t=e.querySelector("p a");if(!t)throw new o(L.noTitleAnchor);let n=t.textContent??"";n===""&&r.add(new p(L.noTitle));let i=t.getAttribute("href")??"";i===""&&r.add(new p(L.noHref));let l=t?.closest("p")?.nextElementSibling;if(!l)throw new o(L.noSubtitleP);let s=l.textContent??"";s===""&&r.add(new p(L.noSubtitle));let[c=null,m=null]=(e.firstElementChild?.firstElementChild?.textContent?.split("|")??[]).map(a=>a.trim());return[{type:"LinkGroupLink",iconHref:c,iconAlt:m,title:n,href:i,subtitle:s},[...r]]},$e=e=>{if(!e)throw new o(L.elementNull);let r=[...e.classList];if(!r.includes("header"))throw new o(L.notAHeader);let t=e.querySelector("h5")?.textContent??"";if(t==="")throw new o(L.noTitle);return[{type:"LinkGroupHeader",title:t,classes:r},[]]},Be=e=>{if(!e)throw new o(L.elementNull);if(!e.classList.contains("blue"))throw new Error("Not a Blue Link Group");let r=e.querySelector("a"),[t,n]=d(r);return[{type:"LinkGroupBlue",link:t},n]};var ne=e=>h(_).or(le).or(qe).or(j).eval(e),oe=e=>f(e,r=>h(te).or(P).or(A).or(d).eval(r)),ie=e=>e.flatMap(r=>r.nodeName==="UL"?[...r.querySelectorAll("li > a")]:[r]),le=e=>{if(e.querySelector(".column-break"))throw new o("Has a column break");let r=e.firstElementChild;if(r===null)throw new o("No Children");let t=r.nodeName==="H5"?r.textContent??null:null,n=r.nodeName==="H5"?C(r):[...e.children],i=ie(n),[l,s]=oe(i);return[{type:"SingleColumnSection",title:t,items:l},s]},_=e=>{if(e.querySelector(".column-break"))throw new o("Has a column break");let r=[...e.querySelectorAll("h5")];if(r.length<=1)throw new o("Not a section list");let t=l=>{let s=document.createElement("div"),c=O(m=>m.nodeName!=="H5")(C(l));return s.append(l,...c),le(s)},[n,i]=f(r,t);return[{type:"SingleColumnSectionList",sections:n},i]},qe=e=>{if(!e.querySelector(".column-break"))throw new o("Expected a Column Break");let r=e.firstElementChild;if(r===null||r.nodeName!=="H5")throw new o(H.expectedH5);let t=r.textContent;if(t===""||t===null)throw new o(H.emptyTitle);let i=z(c=>c.classList.contains("column-break"))(C(r)).map(ie),[l,s]=f(i,oe);return[{type:"MultiColumnSection",title:t,columns:l},s]},j=e=>{if(e===null)throw new o(H.elementNull);let r=e.querySelector(".gnav-promo, .gnav-image");if(r===null)throw new o(H.noPromo);let t=r.innerHTML??"";if(t==="")throw new o(H.noPromoContent);return[{type:"MenuPromo",content:t},[]]},H={expectedH5:"Expected an H5 element for the title ",emptyTitle:"Expected Title to not be empty",elementNull:"Element is null",noPromo:"Promo or gnav image not found",noPromoContent:"Promo Content not found"};var ae=e=>{let r=new Set;if(e===null)throw new o(se.elementNull);let t=e.querySelector("h2")?.textContent??"";t===""&&r.add(new p(se.noTitle));let n=(async()=>{try{let m=e.querySelector("h2 > a"),a=new URL(m?.href??""),u=await T(a);if(u instanceof o)throw new Error(u.message);let v=await W(u);if(v instanceof o)throw new Error(v.message);let b=[...v.children].map(w=>w.firstElementChild??w);return b.forEach(w=>console.log(w.outerHTML)),f(b,ne)}catch(m){throw new o(JSON.stringify(m))}})(),i=e.querySelectorAll(".cross-cloud-menu ul > li > a"),[l,s]=f([...i],d),c=e.classList.contains("section");return[{type:"MegaMenu",title:t,columns:n,crossCloudMenu:l,isSection:c},[...s,...r]]},se={elementNull:"Element is null",noTitle:"Large Menu has no Title"};var ce=()=>`
  <li class="ghost-column">
    <div class="ghost-header"></div>
    <div class="ghost-item"></div>
    <div class="ghost-item"></div>
    <div class="ghost-item"></div>
  </li>
  <li class="ghost-column">
    <div class="ghost-header"></div>
    <div class="ghost-item"></div>
    <div class="ghost-item"></div>
    <div class="ghost-item"></div>
  </li>
  <li class="ghost-column">
    <div class="ghost-header"></div>
    <div class="ghost-item"></div>
    <div class="ghost-item"></div>
  </li>
`,ue=({title:e,crossCloudMenu:r,isSection:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${S(e)}"
          class="mega-menu"
  >
    ${e}
  </button>
  <div id="${S(e)}" class="feds-popup${t?"":" section"}">
    <ul>
    </ul>
    <ul class="cross-cloud-menu">
      ${g(r,y)}
    </ul>
  </div>
`;var pe=e=>{let r=[];if(e===null)throw new o(me.elementNull);let t=e.querySelector("h2"),n=t?.textContent??"";n===""&&r.push(new p(me.noTitle));let i=(()=>{if(t===null)return e;let a=document.createElement("div");return C(t).forEach(u=>a.appendChild(u)),a})(),[l,s]=h(_).or(a=>f([...a.children],Ue)).eval(i),[c,m]=(()=>{try{return j(e)}catch{return[null,[]]}})();return[{type:"SmallMenu",title:n,columns:l,promo:c},[...s,...m]]},Ue=e=>{if(e.nodeName!=="UL")throw new Error("");let r=[...e.querySelectorAll("ul > li > a")];return f(r,d)},me={elementNull:"The element to be parsed is null",noTitle:"Small menu has no title"};var de=({title:e,columns:r,promo:t})=>`
  <button type="button"
          aria-expanded="false"
          aria-controls="${S(e)}"
  >
    ${e}
  </button>
  <div class="feds-popup" id="${S(e)}">
    ${Oe(r)}
    ${t===null?"":`<li>${F(t)}</li>`}
  </div>
`,Oe=e=>!Array.isArray(e)&&e?.type==="SingleColumnSectionList"?G(e):`
  <ul>
    ${g(e,r=>`
      <ul>
        ${g(r,y)}
      </ul>
    `)}
  </ul>
  `;var fe={elementNull:"Error when parsing text. Element is null",textContentNull:"Error when parsing text. Element has no textContent"},ge=e=>{if(e===null)return[{type:"Text",content:""},[new p(fe.elementNull,"Minor")]];let r=e.textContent;return r===null?[{type:"Text",content:""},[new p(fe.textContentNull,"Minor")]]:[{type:"Text",content:r},[]]};var he=({content:e})=>e;var Le=e=>{if(e===null)throw new o(Fe.elementNull);if(e.querySelector(".gnav-brand")!==null)return Q(e);let t=e.querySelector(".large-menu");return t!==null?ae(t):e.querySelector("h5, ul, link-group")!==null?pe(e):e.querySelector("strong")!==null?P(e):e.querySelector("em")!==null?A(e):e.querySelector("a")===null?ge(e):d(e.querySelector("a"))},ye=e=>{switch(e.type){case"Text":return he(e);case"Link":return y(e);case"SecondaryCTA":return k(e);case"PrimaryCTA":return M(e);case"Brand":return Y(e);case"SmallMenu":return de(e);case"MegaMenu":return ue(e);default:return console.error(`Failed to recognize component: ${e}`),""}},Fe={elementNull:"Element is null"};var ve=e=>{let[r,t]=f([...document.querySelectorAll(".breadcrumbs ul > li > a")??[]],d),[n,i]=f([...e.children],Le),l=e.querySelector(".product-entry-cta"),[s,c]=(()=>{try{return re(l)}catch{return[null,[]]}})(),m=n.filter(u=>u.type==="MegaMenu"&&u.isSection).length===1,a=[t,i,c].flat();return{breadcrumbs:r,components:n,productCTA:s,localnav:m,errors:a}};var _e=e=>()=>console.log(e),je=e=>()=>console.log(e),Ee=N({mobileEventListeners:_e,desktopEventListeners:je});var De=e=>()=>console.log(e),Ze=e=>()=>console.log(e),be=N({mobileEventListeners:Ze,desktopEventListeners:De});var Ce=async({gnavSource:e,asideSource:r})=>{let t=await T(e);if(t instanceof o)return t;let n=await T(r);return{mainNav:t,aside:n}};var ze=`/**
 * Global Navigation Styles
 * Styles for the federal global navigation component
 */

/* ========================================
   Header Container
   ======================================== */

header.global-navigation.site-pivot {
  display: block;
  visibility: visible;
}

header.global-navigation.site-pivot ul {
  list-style: none;
}

.feds-brand-container {
  display: flex;
  flex-shrink: 0;
}

.feds-brand {
  display: flex;
}

.feds-brand, .feds-logo {
  align-items: center;
  outline-offset: 2px;
  padding: 0 var(--feds-gutter);
  column-gap: 10px;
}

.feds-brand-image, .feds-logo-image {
  width: 25px;
  flex-shrink: 0;
}

.feds-brand-image.brand-image-only {
  height: 36px;
  width: auto;
  min-width: 66px;
}

.feds-brand-image.brand-image-only picture, .feds-brand-image.brand-image-only img, .feds-brand-image.brand-image-only svg {
  width: auto;
  height: 100%;
}

.feds-brand-image picture, .feds-brand-image img, .feds-brand-image svg, .feds-logo-image picture, .feds-logo-image img, .feds-logo-image svg {
  width: 100%;
  display: block;
}
`,Te=document.createElement("style");Te.textContent=ze;document.head.appendChild(Te);var tn=async e=>{if(!(e.gnavSource instanceof URL))throw new o("gnavSource needs to be a URL object");let r=await Ce(e);if(r instanceof o)throw r;let{mainNav:t,aside:n}=r;if(t instanceof o)throw t;let i=ve(t);if(i instanceof o)throw i;return Ke(i)(e.mountpoint),Je(e)},Ke=e=>async r=>{let t=We(e);r.innerHTML=t,r.classList.add("site-pivot");let n=[...r.querySelectorAll(".mega-menu ~ .feds-popup > ul")];n.forEach(s=>{s.innerHTML=ce()});let i=e.components.filter(s=>s.type==="MegaMenu").map(s=>s.columns),l=await Promise.all(i.map(async(s,c)=>{let[m,a]=await s,u=g(m,G);return n[c].innerHTML=u,a}).flat());return r},We=({components:e,productCTA:r})=>`
<nav>
  <ul>
    ${g(e,ye)}
  </ul>
  ${r===null?"":Z(r)}
  <div class="feds-utilities">
  </div>
</nav>
`,Je=e=>{let r=new Set,t=Ve(e.mountpoint);t instanceof p?r.add(t):t.errors.forEach(r.add),Ee(e.mountpoint),be(e.mountpoint);let n=t instanceof p?()=>{}:t.reloadUnav;return{closeEverything:Xe,reloadUnav:n,errors:r,setGnavTopPosition:i=>{},getGnavTopPosition:()=>0}},Ve=(e,r)=>new p("loadUnav has not been implemented yet"),Xe=()=>{};export{tn as main,Je as postRenderingTasks,Ke as renderGnav,We as renderGnavString};
//# sourceMappingURL=main.js.map
