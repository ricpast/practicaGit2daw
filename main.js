"use strict";
 
Array.from(document.getElementsByTagName("li")).map((li) => {
    li.addEventListener("click", e=> {
        alert(`Has pulsado en el botón ${li.textContent}`);
    });
});

Array.from(document.getElementsByTagName("article")).map((articulo) => {
    articulo.addEventListener("click", e=> {
        alert(`Has pulsado en un articulo.`);
    });
});