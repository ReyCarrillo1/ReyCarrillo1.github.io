$(document).ready(function() {
    const productos = [
        {
    id: 1,
    nombre: "Recarga de 100 diamantes mas 10 de regalo",
    precio: 22,
    imagen: "MEDIA/recargasFREE/100+10.png"
        },
    {
    id: 2,
    nombre: "Recarga de 310 diamantes mas 31 de regalo",
    precio: 69,
    imagen: "MEDIA/recargasFREE/310+31.png"
    },
    {
    id: 3,
    nombre: "Recarga de 520 diamantes mas 52 de regalo",
    precio: 107,
    imagen: "MEDIA/recargasFREE/520+52.png"
    },
    {
    id: 4,
    nombre: "Recarga de 1060 diamantes mas 106 de regalo",
    precio: 229,
    imagen: "MEDIA/recargasFREE/1060+106.png"
    },
    {
    id: 5,
    nombre: "Recarga de 2180 diamantes mas 218 de regalo",
    precio: 439,
    imagen: "MEDIA/recargasFREE/2180+218.png"
    },
    {
    id: 6,
    nombre: "Recarga de 5600 diamantes mas 560 de regalo",
    precio: 1054,
    imagen: "MEDIA/recargasFREE/5600+560.png"
    },
    {
        id: 7,
        nombre: "Recarga semanal",
        precio: 45,
        imagen: "MEDIA/recargasFREE/SEMANAL-$45.00.png"
    },
    {
        id: 8,
        nombre: "Recarga mensual",
        precio: 237,
        imagen: "MEDIA/recargasFREE/MENSUAL-$249.00.png"
    },
    ];
    
    const carrito = [];
    function actualizarCarrito() {
    let total = 0;
    $('.carrito-lista').empty();
    carrito.forEach(item => {
    const producto = productos.find(p => p.id === item.id);
    total += producto.precio * item.cantidad;
    
    $('.carrito-lista').append(`
        <li>
        <span>${producto.nombre} x ${item.cantidad}</span>
        <span>$${(producto.precio * item.cantidad).toFixed(2)}</span>
        <button class="eliminar"
        data-id="${producto.id}">Eliminar</button>
        </li>
        `);
    });
    
    $('#total').text(total.toFixed(2));
    }
     function agregarAlCarrito(id) {
        const productoEnCarrito = carrito.find(item => item.id === id);
    
        if(productoEnCarrito) {
            productoEnCarrito.cantidad++;
            
        } else {
            carrito.push({ id, cantidad: 1});
        }
    
        actualizarCarrito();
     }
    
     function eliminarDelCarrito(id) {
        const index = carrito.findIndex(item => item.id === id);
    
        if (index !== -1) {
            carrito.splice(index, 1);
        }
        actualizarCarrito();
     }
    
     productos.forEach(producto =>{
        $('.productos').append(`
            <div class="producto">
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio.toFixed(2)}</p>
            <button class="agregar" data-id="${producto.id}">Agregar al Carrito</button>
            </div>
            `);
     });
     $('.productos').on('click', '.agregar', function() {
        const id = $(this).data('id');
        agregarAlCarrito(id);
     });
     $('.carrito').on('click', '.eliminar', function(){
        const id = $(this).data('id');
        eliminarDelCarrito(id);
     });
     document.addEventListener("DOMContentLoaded", function () {
        const usuario = JSON.parse(localStorage.getItem("datosUsuario"));
        const sesionActiva = localStorage.getItem("sesionActiva");
        const authButtons = document.querySelector(".auth-buttons");

        if (usuario && sesionActiva === "true") {
            authButtons.innerHTML = `
                <span class="text-light mr-2">Hola, ${usuario.nombre}</span>
                <a href="#" id="cerrarSesion" class="btn btn-danger btn-sm">Cerrar Sesión</a>
            `;

            document.getElementById("cerrarSesion").addEventListener("click", function () {
                localStorage.removeItem("sesionActiva");
                alert("Has cerrado sesión.");
                window.location.href = "iniciosesion.html";
            });
        }
    });
      });
      document.addEventListener("DOMContentLoaded", function () {
        const usuario = JSON.parse(localStorage.getItem("datosUsuario"));
        const sesionActiva = localStorage.getItem("sesionActiva");
        const authButtons = document.querySelector(".auth-buttons");

        if (usuario && sesionActiva === "true") {
            authButtons.innerHTML = `
                <span class="text-light mr-2">Hola, ${usuario.nombre}</span>
                <a href="#" id="cerrarSesion" class="btn btn-danger btn-sm">Cerrar Sesión</a>
            `;

            document.getElementById("cerrarSesion").addEventListener("click", function () {
                localStorage.removeItem("sesionActiva");
                alert("Has cerrado sesión.");
                window.location.href = "iniciosesion.html";
            });
        }
    });
