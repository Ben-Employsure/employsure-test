var images,checkbox=document.querySelector("#side-menu"),container=document.querySelector(".mobile-nav");checkbox.addEventListener("change",()=>{checkbox.checked?container.classList.add("open-menu"):container.classList.remove("open-menu")}),document.querySelectorAll("[data-open-dropdown]").forEach(function(e){e.addEventListener("click",function(){document.querySelector('[data-dropdown="'+e.getAttribute("data-open-dropdown")+'"]').classList.toggle("submenu-open")})});var searchGo=document.querySelector("#searchGo");if(searchGo.addEventListener("click",function(){document.getElementById("searchIndustry").value;var e=document.getElementById("searchCategory").value;window.location.href="https://employsure.com.au/guides/"+e+"/"}),"loading"in HTMLImageElement.prototype)document.querySelectorAll("img.lazyload").forEach(e=>{e.src=e.dataset.src});else{var e=document.createElement("script");e.async=!0,e.src="https://cdnjs.cloudflare.com/ajax/libs/lazysizes/4.1.8/lazysizes.min.js",document.body.appendChild(e)}MktoForms2.loadForm("//mk.employsure.com.au","146-AHK-965",1264);
