let entradas = []

const productoContenedor = document.getElementById("entradasPopUp");

productoContenedor.addEventListener('click', (e) => {
    if (e.target.classList.contains('agregar')) {
        validarProductoEnCarrito(e.target.id);
    }
})

const validarProductoEnCarrito = (id) => {
    const estaRepetido = carrito.some(producto => producto.id == id)

    if (!estaRepetido) {
        const producto = productos.find(producto => producto.id == id)
        carrito.push(producto)
        pintarProductoCarrito(producto)
    } else {
        const producto = carrito.find(producto => producto.id == id)
        const cantidad = document.getElementById(`cantidad${producto.id}`)
        producto.cantidad++
        cantidad.innerText = `Cantidad: ${producto.cantidad}`
    }
}

const pintarProductoCarrito = (producto) => {
    const contenedor = document.getElementById('entradasPopUp')
    const div = document.createElement('div')
    div.classList.add('productoEnCarrito')

    div.innerHTML = `
    <p>${producto.nombre}</p>
    <p>$ ${producto.precio}</p>
    <p id=cantidad${producto.id}>Cantidad: ${producto.cantidad}</p>
    <button class="btn waves-effect waves-ligth boton-eliminar" value="${producto.id}">X</button>
    `
    contenedor.appendChild(div)
}