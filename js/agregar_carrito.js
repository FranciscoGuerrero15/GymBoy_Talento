  /* ProteínaWheySaborChocolate = document.getElementById("ProteínaWheySaborChocolate");
AminoacidosBcaaSaborNaranja = document.getElementById("AminoacidosBcaaSaborNaranja");



ProteínaWheySaborChocolate.addEventListerner("click", () => {
    alert("ProteínaWheySaborChocolate agregado al carrito");
});
AminoacidosBcaaSaborNaranja.addEventListerner("click", () =>{
    alert("AminoacidosBcaaSaborNaranja agregado al carrito");
});
*/




// archivo: agregarcarrito.js
document.addEventListener('DOMContentLoaded', function () {
    const botonesAgregar = document.querySelectorAll('.btn-agregar');

    botonesAgregar.forEach(boton => {
        boton.addEventListener('click', function (e) {
            e.preventDefault();

            // Obtener información del producto desde los atributos data-*
            const nombre = e.target.getAttribute('data-nombre');
            const precio = parseFloat(e.target.getAttribute('data-precio'));

            // Crear el objeto del producto
            const producto = {
                nombre: nombre,
                precio: precio,
                cantidad: 1
            };

            // Obtener el carrito del localStorage o crear uno vacío si no existe
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

            // Verificar si el producto ya está en el carrito
            const productoExistente = carrito.find(item => item.nombre === nombre);

            if (productoExistente) {
                productoExistente.cantidad++; // Si ya está, solo incrementa la cantidad
            } else {
                carrito.push(producto); // Si no está, agrega el producto al carrito
            }

            // Guardar el carrito actualizado en el localStorage
            localStorage.setItem('carrito', JSON.stringify(carrito));

            // Confirmación de agregado
            alert(`${nombre} ha sido agregado al carrito.`);

        });
    });
});


