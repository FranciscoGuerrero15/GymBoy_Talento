document.addEventListener("DOMContentLoaded", () => {
    const tablaCarrito = document.getElementById("tablaCarritoBody");
    const totalCarrito = document.getElementById("totalCarrito");
    const weatherStatus = document.getElementById("weather-status");
    const weatherTemp = document.getElementById("weather-temp");
    const weatherHumidity = document.getElementById("weather-humidity");
    // Obtener el carrito del localStorage
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    // Función para renderizar los productos del carrito
    const renderizarCarrito = () => {
        tablaCarrito.innerHTML = "";
        if (carrito.length === 0) {
            tablaCarrito.innerHTML = "<tr><td colspan='5'>El carrito está vacío.</td></tr>";
            totalCarrito.textContent = "0.00";
            return;
        }

        carrito.forEach((producto, index) => {
            const fila = document.createElement("tr");
            const precioTotal = producto.precio * producto.cantidad; // Cálculo de subtotal

            fila.innerHTML = `
                <td>${producto.nombre}</td>
                <td>${producto.precio.toFixed(2)}$</td>
                <td>${producto.cantidad}</td>
                <td>${precioTotal.toFixed(2)}$</td>
                <td>
                    <button class="btn btn-danger btn-sm" data-index="${index}">Eliminar</button>
                </td>
            `;
            tablaCarrito.appendChild(fila);
        });

        calcularTotal();
    };

    // Función para calcular el total del carrito
    const calcularTotal = () => {
        const total = carrito.reduce((suma, producto) => suma + (producto.precio * producto.cantidad), 0);
        totalCarrito.textContent = `$${total.toFixed(2)}`;
    };

    // EventListener para eliminar productos
    tablaCarrito.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-danger")) {
            const index = event.target.getAttribute("data-index");
            carrito.splice(index, 1); // Eliminar producto del carrito
            localStorage.setItem("carrito", JSON.stringify(carrito)); // Actualizar el localStorage
            renderizarCarrito(); // Volver a renderizar el carrito
        }
    });

    renderizarCarrito();
});




