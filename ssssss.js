var FFAdblock1=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15),FFAdblock2=Math.random().toString(36).substring(2,7),e=document.getElementById("FFDetect");function init(){adsBlocked(function(t){document.getElementById(FFAdblock1).style.display=t?"block":"none"})}function adsBlocked(n){var t=new Request("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",{method:"HEAD",mode:"no-cors"});fetch(t).then(function(t){return t}).then(function(t){console.log(t),n(!1)}).catch(function(t){console.log(t),n(!0)})}e.setAttribute("id",FFAdblock1),e.classList.add("FFAnti_"+FFAdblock2),document.addEventListener("DOMContentLoaded",init,!1);
// Ad-Blocker Spin
$(document).ready(function(){$(".load-more").on("click",function(){$(this).addClass("loading"),setTimeout(function(){$(".load-more").removeClass("loading")},1000)})});
