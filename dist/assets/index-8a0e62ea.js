(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const m=document.querySelector("#menuToggle"),u=document.querySelector(".Menu aside");window.matchMedia("(min-width: 679px)");window.matchMedia("(max-width: 679px)");document.addEventListener("DOMContentLoaded",o=>{u.style.width="0px"});m.addEventListener("click",o=>{o.target.checked?u.style.width="100vw":u.style.width="0vw"});const g=[{bgImage:"/Image/south-park.jpeg",birthdate:"August 12 2022",name:"Jesus Velez",title:"South Park REST API",description:"Simple REST API for South Park Cartoon that return in JSON format Characters from the Cartoon",tools:["./Icons/express.svg","./Icons/nodejs.svg","./Icons/css.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]},{bgImage:"/Image/Camera_bus.jpg",birthdate:"November 3 2022",name:"Jesus Velez",title:"AI - CV System for Pubic Transport",description:"AI system that recognizes people who have a criminal history of vehicular assault",tools:["./Icons/python.svg","./Icons/cpp.svg","./Icons/espressif.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]},{bgImage:"/Image/Bike-safety.jpg",birthdate:"December 15, 2022",name:"Jesus Velez",title:"Safety System for Cycling",description:"security system that Using a gyroscope, it checks if there has been an accident and makes a call using Bluetooth.",tools:["./Icons/c.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]},{bgImage:"/Image/USB.webp",birthdate:"June 13, 2023",name:"Jesus Velez",title:"Pic USB Keyboard",description:"alternative to the stream deck with custom features to control lights and audio",tools:["./Icons/cpp.svg","./Icons/cSharp.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]},{bgImage:"/Image/Encripter.png",birthdate:"February 10, 2020",name:"Jesus Velez",title:"Password File Encrypter",description:"by CLI encrypts and desencrypts a file that contains password, by using a Key",tools:["./Icons/cpp.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]},{bgImage:"/Image/Stringify.webp",birthdate:"April 12, 2023",name:"Jesus Velez",title:"Stringify Library",description:"New Custom Library to Manage String in C, with the feature that JS offers",tools:["./Icons/cpp.svg"],links:[{icon:"bi-box-arrow-up-right",href:""}]}],f=document.querySelector(".ProjectsGrid");g.forEach(o=>{const n=document.createElement("div");n.className=o.tools.length>0?"Front":"Embedded",n.style.setProperty("--bg-image",`url('${o.bgImage}')`);const c=document.createElement("h2");c.className="Birthdate",c.textContent=o.birthdate;const r=document.createElement("div");r.className="Info";const e=document.createElement("h2");e.textContent=o.name;const t=document.createElement("h3");t.textContent=o.title;const a=document.createElement("p");a.textContent=o.description;const l=document.createElement("div");l.className="Tools",o.tools.forEach(d=>{const s=document.createElement("img");s.src=d,s.width="12px",s.height="20px",l.appendChild(s)});const p=document.createElement("div");p.className="Links",o.links.forEach(d=>{const s=document.createElement("a");s.href=d.href;const i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("width","16"),i.setAttribute("height","16"),i.setAttribute("fill","currentColor"),i.class=`bi ${d.icon}`,i.setAttribute("viewBox","0 0 16 16");const h=document.createElementNS("http://www.w3.org/2000/svg","path");h.setAttribute("fill-rule","evenodd"),h.setAttribute("d","..."),i.appendChild(h),s.appendChild(i),p.appendChild(s)}),r.appendChild(e),r.appendChild(t),r.appendChild(a),r.appendChild(l),r.appendChild(p),n.appendChild(c),n.appendChild(r),f.appendChild(n)});
