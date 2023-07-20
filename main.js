alert("Bienvenido a SuriaTickets!! \nEl mejor sitio de Argentina para comprar tus entradas!!")

const artistas = ["Taylor Swift", "Kendrick Lamar", "JOJI", "Tyler The Creator"];
const ubicaciones = ["Platea baja", "Campo delantero", "Campo trasero", "Platea alta"];
const precios = [50000, 45000, 40000, 35000];

const comprarEntradas = () => {
    const deseaComprar = confirm("¿Desea comprar entradas?");

    if (!deseaComprar) {
        return;
    }

    let continuarComprando = true;

    while (continuarComprando) {
        let errorEnValidacion = false;

        const artista = prompt(
            "Ingrese el número correspondiente al artista:\n" +
            "1. Taylor Swift - The Eras Tour\n" +
            "2. Kendrick Lamar - The Big Steppers Tour\n" +
            "3. JOJI - Smithereens tour\n" +
            "4. Tyler The Creator - Call Me If You Get Tour\n" +
            "5. Kanye West - Saint Pablo Tour (SHOW CANCELADO)\n" +
            "6. TheWeeknd - After Hours Till Dawn Tour (ENTRADAS AGOTADAS)\n" +
            "7. Childish Gambino - This Is America Tour(ENTRADAS AGOTADAS)"
        );

        if (artista === null) {
            continuarComprando = false;
            break;
        }

        switch (artista) {
            case "1":
            case "2":
            case "3":
            case "4":
                break;
            default:
                alert("Artista inválido. Por favor, ingrese un número válido o ingrese un artista con entradas disponibles.");
                errorEnValidacion = true;
        }

        if (errorEnValidacion) continue;
        const ubicacion = prompt(
            "Ingrese el número correspondiente a la ubicación:\n" +
            "1. Platea baja($50000)\n" +
            "2. Campo Delantero ($45000)\n" +
            "3. Campo Trasero ($40000)\n" +
            "4. Platea alta ($35000)"
        );

        if (ubicacion === null) {
            continuarComprando = false;
            break;
        }

        switch (ubicacion) {
            case "1":
            case "2":
            case "3":
            case "4":
                break;
            default:
                alert("Ubicación inválida. Por favor, ingrese un número válido.");
                errorEnValidacion = true;
        }

        if (errorEnValidacion) continue;

        const cantidadEntradas = prompt("Ingrese la cantidad de entradas a comprar:");

        if (cantidadEntradas === null) {
            continuarComprando = false;
            break;
        }

        if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
            alert("Por favor, ingrese una cantidad válida de entradas.");
            continue;
        }

        const metodoPago = prompt(
            "Seleccione el método de pago:\n" +
            "1. Efectivo\n" +
            "2. 3 cuotas sin interés\n" +
            "3. 6 cuotas sin interés"
        );

        if (metodoPago === null) {
            continuarComprando = false;
            break;
        }

        switch (metodoPago) {
            case "1":
            case "2":
            case "3":
                break;
            default:
                alert("Método de pago inválido. Se asumirá el pago en efectivo.");
                errorEnValidacion = true;
        }

        if (errorEnValidacion) continue;

        let artistaIndex, ubicacionIndex;
        switch (artista) {
            case "1":
                artistaIndex = 0;
                break;
            case "2":
                artistaIndex = 1;
                break;
            case "3":
                artistaIndex = 2;
                break;
            case "4":
                artistaIndex = 3;
                break;
        }

        switch (ubicacion) {
            case "1":
                ubicacionIndex = 0;
                break;
            case "2":
                ubicacionIndex = 1;
                break;
            case "3":
                ubicacionIndex = 2;
                break;
            case "4":
                ubicacionIndex = 3;
                break;
        }

        const disponibilidad = 5;
        if (cantidadEntradas > disponibilidad) {
            alert("Lo sentimos, no se puede comprar mas de 5 entradas por ingreso.");
            continue;
        }

        const precioTotal = precios[ubicacionIndex] * cantidadEntradas;
        let mensaje = "Ha comprado " + cantidadEntradas + " entradas para " + artistas[artistaIndex] + " en " + ubicaciones[ubicacionIndex] + ".\n" +
            "El precio total es de $" + precioTotal + ".";

        switch (metodoPago) {
            case "1":
                mensaje += "\nForma de pago: Efectivo.";
                break;
            case "2":
                const cuota3 = precioTotal / 3;
                mensaje += "\nForma de pago: 3 cuotas sin interés de $" + cuota3.toFixed(2) + " cada una.";
                break;
            case "3":
                const cuota6 = precioTotal / 6;
                mensaje += "\nForma de pago: 6 cuotas sin interés de $" + cuota6.toFixed(2) + " cada una.";
                break;
            default:
                alert("Método de pago inválido. Se asumirá el pago en efectivo.");
                mensaje += "\nForma de pago: Efectivo.";
                break;
        }

        alert(mensaje);
        continuarComprando = confirm("¿Desea comprar más entradas?");
    }

    alert("Gracias por su compra. ¡Hasta luego!\n-SuriaTickets");
};

comprarEntradas();

/*
let producto = { id: 1, nombre: "Arroz", precio: 125 };

let contenedor = document.createElement("div")

contenedor.innerHTML = `
<h3>ID: ${producto.id}</h3>
<p>Producto: ${producto.nombre}</p>
<b>$ ${producto.precio}</b>
`

document.body.appendChild(contenedor)

const cardsShows = () => {
    const contenedor = document.getElementsByClassName("cardContainer")

    shows.forEach(show => {
        const div = document.createElement("div")
        div.className = "card"
        div.innerHTML = `
        <a href="./assets/pages/TaylorSwift.html"><img src=${show.img}
                        class="indexCards" alt="Taylor Swift - Eras Tour"></a>
                <h1>${show.artista}</h1>
                <h2>${show.fechas}</h2>
                <h3>${show.lugar}</h3>
`
        contenedor.appendChild(div)
    })
}

cardsShows()

*/
