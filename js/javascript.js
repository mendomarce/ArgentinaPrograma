
// muestra la seccion correspondiente al link clikeado y oculta las demas
console.log(".");
document.getElementById("informacionLink").addEventListener("click", function() {
    document.getElementById("informacionDiv").style.display = "block";
    document.getElementById("habilidadesDiv").style.display = "none";
    document.getElementById("experienciaDiv").style.display = "none";
});

document.getElementById("experienciaLink").addEventListener("click", function() {
    document.getElementById("experienciaDiv").style.display = "block";
    document.getElementById("habilidadesDiv").style.display = "none";
    document.getElementById("informacionDiv").style.display = "none";
});

document.getElementById("habilidadesLink").addEventListener("click", function() {
    document.getElementById("habilidadesDiv").style.display = "block";
    document.getElementById("experienciaDiv").style.display = "none";
    document.getElementById("informacionDiv").style.display = "none";
});
document.getElementById("darkMode").addEventListener("click", function() {
    document.getElementById("habilidadesDiv").style.display = "block";
    document.getElementById("experienciaDiv").style.display = "none";
    document.getElementById("informacionDiv").style.display = "none";
});

// Al clickear en "+ informacion" muestra informacion extra y al clickear "- informacion" la oculta
const coleccionMasInformacion = document.getElementsByClassName("bloqueTrabajo");
for (i = 0; i < coleccionMasInformacion.length; i++) {
    masInfo([i]);
}

function masInfo(numeroBloque) {
    let elementoRaiz = coleccionMasInformacion[numeroBloque];
    elementoRaiz.lastElementChild.addEventListener("click", function() {
        if (elementoRaiz.lastElementChild.innerHTML == "+ Información") {
            document.getElementsByClassName("DuracionyUbicacion")[numeroBloque].style.display = "block";
            elementoRaiz.lastElementChild.innerHTML = "- Información";
        } else {
            document.getElementsByClassName("DuracionyUbicacion")[numeroBloque].style.display = "none";
            elementoRaiz.lastElementChild.innerHTML = "+ Información";
        }
    });

}