const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");t.addEventListener("click",(function(){if(n)return;n=setInterval(o,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(n),n=null,t.disabled=!1}));let n=null;function o(){const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}
//# sourceMappingURL=01-color-switcher.f5b3f5fd.js.map