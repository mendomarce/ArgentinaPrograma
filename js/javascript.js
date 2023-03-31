// muestra la seccion correspondiente al link clikeado y oculta las demas
console.log(".");
document.getElementById("informacionLink").addEventListener("click", function () {
    document.getElementById("informacionDiv").style.display = "block";
    document.getElementById("habilidadesDiv").style.display = "none";
    document.getElementById("experienciaDiv").style.display = "none";
});

document.getElementById("experienciaLink").addEventListener("click", function () {
    document.getElementById("experienciaDiv").style.display = "block";
    document.getElementById("habilidadesDiv").style.display = "none";
    document.getElementById("informacionDiv").style.display = "none";
});

document.getElementById("habilidadesLink").addEventListener("click", function () {
    document.getElementById("habilidadesDiv").style.display = "block";
    document.getElementById("experienciaDiv").style.display = "none";
    document.getElementById("informacionDiv").style.display = "none";
});
//modo nocturno
var interruptor = 0;
document.getElementById("darkMode").addEventListener("click", function () {
    if (interruptor == 0) {
        document.getElementsByTagName("body")[0].style.backgroundColor = "rgb(28, 105, 157)";
        document.getElementsByTagName("body")[0].style.color = "rgb(197, 193, 186)";
        document.getElementById("pagina").style.backgroundColor = "rgb(23, 25, 26)";
        var coleccionCajas = document.getElementsByClassName("cajasHabilidades");
        for (let i = 0; i < coleccionCajas.length; i++) {
            coleccionCajas[i].style.backgroundColor = "#303030";
        }
        var coleccionBloqueTrabajo = document.getElementsByClassName("bloqueTrabajo");
        for (let i = 0; i < coleccionBloqueTrabajo.length; i++) {
            coleccionBloqueTrabajo[i].style.backgroundColor = "#303030";
        }
        var coleccionMasInformacion = document.getElementsByClassName("masInformacion");
        for (let i = 0; i < coleccionMasInformacion.length; i++) {
            coleccionMasInformacion[i].style.color = "rgb(255,255,255)";
        }
        interruptor = 1;
        document.getElementById("darkMode").getElementsByTagName("img")[0].src = "imagenes/sol.png"

    }
    else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "#3498DB";
        document.getElementsByTagName("body")[0].style.color = "#505050";
        document.getElementById("pagina").style.backgroundColor = "#ffffff";
        var coleccionCajas = document.getElementsByClassName("cajasHabilidades");
        for (let i = 0; i < coleccionCajas.length; i++) {
            coleccionCajas[i].style.backgroundColor = "rgb(245, 245, 245)";
        }
        var coleccionBloqueTrabajo = document.getElementsByClassName("bloqueTrabajo");
        for (let i = 0; i < coleccionBloqueTrabajo.length; i++) {
            coleccionBloqueTrabajo[i].style.backgroundColor = "rgb(245, 245, 245)";
        }
        var coleccionMasInformacion = document.getElementsByClassName("masInformacion");
        for (let i = 0; i < coleccionMasInformacion.length; i++) {
            coleccionMasInformacion[i].style.color = "rgb(0,0,238)";
        }
        interruptor = 0;
        document.getElementById("darkMode").getElementsByTagName("img")[0].src = "imagenes/luna.png"

    }
});

// Al clickear en "+ informacion" muestra informacion extra y al clickear "- informacion" la oculta
const coleccionMasInformacion = document.getElementsByClassName("bloqueTrabajo");
for (i = 0; i < coleccionMasInformacion.length; i++) {
    masInfo([i]);
}

function masInfo(numeroBloque) {
    let elementoRaiz = coleccionMasInformacion[numeroBloque];
    elementoRaiz.lastElementChild.addEventListener("click", function () {
        if (elementoRaiz.lastElementChild.innerHTML == "+ Información") {
            document.getElementsByClassName("DuracionyUbicacion")[numeroBloque].style.display = "block";
            elementoRaiz.lastElementChild.innerHTML = "- Información";
        } else {
            document.getElementsByClassName("DuracionyUbicacion")[numeroBloque].style.display = "none";
            elementoRaiz.lastElementChild.innerHTML = "+ Información";
        }
    });

}