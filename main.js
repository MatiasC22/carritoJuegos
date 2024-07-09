let carrito = [];

function mostrarJuegos() {
    let listaJuegos = "Juegos disponibles:\n\n";
    juegos.forEach(juego => {
        listaJuegos += `${juego.codigo}: ${juego.nombre} - $${juego.precio}\n\n`;
    });
    alert(listaJuegos);
}

function agregarAlCarrito(codigo) {
    let juego = juegos.find(juego => juego.codigo === codigo);
    if (juego) {
        carrito.push(juego);
        alert(`${juego.nombre} ha sido añadido al carrito.`);
    } else {
        alert("Codigo de juego no valido. Intentalo de nuevo.");
    }
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito esta vacio.");
        return;
    }

    let listaCarrito = "Carrito de compras:\n";
    let total = 0;
    carrito.forEach(juego => {
        listaCarrito += `${juego.nombre} - $${juego.precio}\n`;
        total += juego.precio;
    });
    listaCarrito += `\nTotal: $${total}`;
    alert(listaCarrito);
}

function comprarJuegos() {
    let continuar;
    do {
        mostrarJuegos();
        let codigo = prompt("Ingresa el codigo del juego que deseas agregar al carrito (o 'salir' para finalizar):");
        if (codigo.toLowerCase() === 'salir') {
            break;
        }
        agregarAlCarrito(codigo);
        continuar = confirm(" Quieres agregar otro juego? (Aceptar para si, Cancelar para no)");
    } while (continuar);
    mostrarCarrito();
}

comprarJuegos();



