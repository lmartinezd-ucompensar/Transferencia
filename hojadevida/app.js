// Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");

function mostrarOcultarMenu() {
    if (!menu_visible) {
        menu.style.display = "block";
        menu_visible = true;
    } else {
        menu.style.display = "none";
        menu_visible = false;
    }
}

// Oculta el menú al hacer clic en un enlace
let links = document.querySelectorAll("nav a");
for (let x = 0; x < links.length; x++) {
    links[x].onclick = function () {
        menu.style.display = "none";
        menu_visible = false;
    };
}

// Configuración de habilidades y porcentajes
const habilidades = [
    { id: "html", porcentaje: 70 },
    { id: "php", porcentaje: 60 },
    { id: "sql", porcentaje: 85 },
    { id: "linux", porcentaje: 80 },
];

// Crear las barras dinámicamente
function crearBarra(id_barra) {
    for (let i = 0; i < 17; i++) {
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

// Inicializar las barras
habilidades.forEach(hab => {
    const elemento = document.getElementById(hab.id);
    if (elemento) crearBarra(elemento);
});

// Contadores por cada barra
let contadores = Array(habilidades.length).fill(-1);
let entro = false;

// Animar las barras cuando se hace scroll
function efectoHabilidades() {
    const seccion = document.getElementById("habilidades");
    const distancia = window.innerHeight - seccion.getBoundingClientRect().top;

    if (distancia >= 300 && !entro) {
        entro = true;
        habilidades.forEach((hab, i) => {
            const cantidad = Math.round(hab.porcentaje * 17 / 100);
            const barra = document.getElementById(hab.id);
            const intervalo = setInterval(() => {
                pintarBarra(barra, cantidad, i, intervalo);
            }, 100);
        });
    }
}

// Pintar cada barra progresivamente
function pintarBarra(id_barra, cantidad, indice, interval) {
    contadores[indice]++;
    let x = contadores[indice];
    if (x < cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        if (elementos[x]) {
            elementos[x].style.backgroundColor = "#00ffe7";
        }
    } else {
        clearInterval(interval);
    }
}

// Detectar scroll
window.onscroll = function () {
    efectoHabilidades();
};

