alert("Bienvenido a SuriaTickets!! \nEl mejor sitio de Argentina para comprar tus entradas!!")

const artistas = ["The Weeknd", "Taylor Swift", "Joji"];
const ubicaciones = ["Campo Delantero", "Campo Trasero", "Platea"];
const precios = [45000, 40000, 50000];

const comprarEntradas = () => {
    const deseaComprar = confirm("¿Desea comprar entradas?");

    if (!deseaComprar) {
        return;
    }

    let continuarComprando = true;

    while (continuarComprando) {
        const artista = prompt(
            "Ingrese el número correspondiente al artista:\n" +
            "1. The Weeknd\n" +
            "2. Taylor Swift\n" +
            "3. Joji"
        );
        const ubicacion = prompt(
            "Ingrese el número correspondiente a la ubicación:\n" +
            "1. Campo Delantero ($45000)\n" +
            "2. Campo Trasero ($40000)\n" +
            "3. Platea ($50000)"
        );
        const cantidadEntradas = prompt("Ingrese la cantidad de entradas a comprar:");
        const metodoPago = prompt(
            "Seleccione el método de pago:\n" +
            "1. Efectivo\n" +
            "2. 3 cuotas sin interés\n" +
            "3. 6 cuotas sin interés"
        );

        let artistaIndex, ubicacionIndex;
        switch (artista) {
            case '1':
                artistaIndex = 0;
                break;
            case '2':
                artistaIndex = 1;
                break;
            case '3':
                artistaIndex = 2;
                break;
            default:
                alert("Artista inválido. Por favor, ingrese un número válido.");
                continue;
        }

        switch (ubicacion) {
            case '1':
                ubicacionIndex = 0;
                break;
            case '2':
                ubicacionIndex = 1;
                break;
            case '3':
                ubicacionIndex = 2;
                break;
            default:
                alert("Ubicación inválida. Por favor, ingrese un número válido.");
                continue;
        }

        if (isNaN(cantidadEntradas) || cantidadEntradas <= 0) {
            alert("Por favor, ingrese una cantidad válida de entradas.");
            continue;
        }

        const precioTotal = precios[ubicacionIndex] * cantidadEntradas;
        let mensaje = "Ha comprado " + cantidadEntradas + " entradas para " + artistas[artistaIndex] + " en " + ubicaciones[ubicacionIndex] + ".\n" +
            "El precio total es de $" + precioTotal + ".";

        switch (metodoPago) {
            case '1':
                mensaje += "\nForma de pago: Efectivo.";
                break;
            case '2':
                const cuota3 = precioTotal / 3;
                mensaje += "\nForma de pago: 3 cuotas sin interés de $" + cuota3.toFixed(2) + " cada una.";
                break;
            case '3':
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