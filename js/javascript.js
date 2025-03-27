var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];
var totalTarjetas = grupoTarjetas.concat(grupoTarjetas); // Duplicamos las cartas

// Función para barajar las tarjetas (Fisher-Yates Shuffle)
function barajaTarjetas() {
    for (let i = totalTarjetas.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [totalTarjetas[i], totalTarjetas[j]] = [totalTarjetas[j], totalTarjetas[i]];
    }
}

// Función para repartir las tarjetas en la mesa
function reparteTarjetas() {
    var mesa = document.getElementById("mesa");
    mesa.innerHTML = ""; // Limpiar la mesa antes de repartir

    totalTarjetas.forEach(function (elemento) {
        var tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        // Crear el contenido interno de la tarjeta
        tarjeta.innerHTML = `<div class="tarjeta__contenido">${elemento}</div>`;

        // Agregar la tarjeta a la mesa
        mesa.appendChild(tarjeta);

        // Añadir un evento de clic a cada tarjeta para revelar el emoticono
        tarjeta.addEventListener("click", function() {
            tarjeta.classList.toggle("descubierta"); // Revela o esconde el contenido
        });
    });
}

// Evento para el botón "Repartir cartas"
document.getElementById("btnRepartir").addEventListener("click", function () {
    barajaTarjetas(); // Barajar antes de repartir
    reparteTarjetas();
});
