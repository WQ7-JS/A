xhr = new XMLHttpRequest();
xhr.open("GET", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", false);
xhr.send();
eval(xhr.responseText);
