$(document).ready(function() {
    const productos = [
        {
    id: 1,
    nombre: "audifonos bluetooth modelo A6S",
    precio: 120,
    imagen: "MEDIA/PRODUCTOS/A6S.jpg"
        },
    {
    id: 2,
    nombre: "audifonos bluetooth modelo AIR31 color negro",
    precio: 120,
    imagen: "MEDIA/PRODUCTOS/AIR31-NEGRO_resultado.png"
    },
    {
    id: 3,
    nombre: "audifonos LENOVO HT38 color negro",
    precio: 180,
    imagen: "MEDIA/PRODUCTOS/HT38-NEGRO.jpg"
    },
    {
    id: 4,
    nombre: "Memoria USB KINGSTONE de 128GB",
    precio: 160,
    imagen: "MEDIA/PRODUCTOS/KINGS-128GB_resultado.png"
    },
    {
    id: 5,
    nombre: "Memoria USB LENOVO de 64Gb",
    precio: 100,
    imagen: "MEDIA/PRODUCTOS/LENOVO-USB-64GB_resultado.png"
    },
    {
    id: 6,
    nombre: "Mini Memoria USB de 64GB",
    precio: 100,
    imagen: "MEDIA/PRODUCTOS/MINI-USB_resultado.png"
    },
    {
        id: 7,
        nombre: "audifonos alambricos AK6 color miel",
        precio: 60,
        imagen: "MEDIA/PRODUCTOS/AK6-MIEL.jpg"
    },
    {
        id: 8,
        nombre: "audifonos alambricos AK6 color negro",
        precio: 60,
        imagen: "MEDIA/PRODUCTOS/AK6-NEGRO.jpg"
    },
    {
        id: 9,
        nombre: "audifonos alambricos AK6 color rojo",
        precio: 60,
        imagen: "MEDIA/PRODUCTOS/AK6-ROJO.jpg"
    },
    {
        id: 10,
        nombre: "audifonos tipo pildora color negro",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/PILDORA-NEGRO_resultado.png"
        },
    {
        id: 11,
        nombre: "audifonos tipo pildira color rosa",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/PILDORA-ROSA_resultado.png"
    },
    {
        id: 12,
        nombre: "audifonos tipo pildira color verde",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/pildora-verde.jpg"
        },
    {
        id: 13,
        nombre: "Carteles ONE PIECE 42x28.5cm",
        precio: 180,
        imagen: "MEDIA/PRODUCTOS/POSTERS-ONE-PIECE.png"
    },
    {
        id: 14,
        nombre: "Audifonos inalambricos T2 color azul",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/T2-AZUL.jpg"
    },
    {
        id: 15,
        nombre: "Audifonos inalambricos T2 color negro",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/T2-NEGRO_resultado.png"
    },
    {
        id: 16,
        nombre: "Audifonos inalambricos T8 PRO color verde",
        precio: 135,
        imagen: "MEDIA/PRODUCTOS/T8-PRO-VERDE_resultado.png"
    },
    {
        id: 17,
        nombre: "audifonos bluetooth 0 delay",
        precio: 140,
        imagen: "MEDIA/PRODUCTOS/TWS_resultado.png"
    },
    {
        id: 18,
        nombre: "USB figura de zorro 64GB",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/USB-ZORRITO.png"
    },
    {
        id: 19,
        nombre: "audifonos bluetooth Y8 color negro",
        precio: 120,
        imagen: "MEDIA/PRODUCTOS/Y80-NEGRO_resultado.png"
    },
    {
        id: 20,
        nombre: "memoria MICRO SD 64GB",
        precio: 100,
        imagen: "MEDIA/PRODUCTOS/MICRO-SD-64GB.png"
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
    
              function actualizarUserOptions() {
            const nombreUsuario = localStorage.getItem("nombreUsuario");
            if (nombreUsuario) {
              $("#userOptions").html(`
                <a href="perfil.html" class="btn btn-link text-white" id="mostrarPerfil">${nombreUsuario}</a>
                <button id="btnCerrarSesion" class="btn btn-danger btn-sm">Cerrar Sesión</button>
              `);
            } else {
              $("#userOptions").html(`
                <a href="login.html" class="btn btn-light btn-sm">Iniciar Sesión</a>
                <a href="registro.html" class="btn btn-primary btn-sm">Registrar Usuario</a>
              `);
            }
          };
        
          actualizarUserOptions();
        
          // Evento para cerrar sesión
          $(document).on("click", "#btnCerrarSesion", function() {
            localStorage.removeItem("nombreUsuario");
            // Puedes remover también otros datos de usuario si es necesario
            actualizarUserOptions();
            window.location.href = "index.html"; // Redirige al inicio
          });
        
          // En la página de perfil, mostrar datos del usuario
          if ($("#nombreUsuario").length) {
            const nombreUsuario = localStorage.getItem("nombreUsuario");
            $("#nombreUsuario").text("Bienvenido, " + (nombreUsuario || "Usuario"));
            // Aquí puedes agregar más datos o lógica para cargar información del perfil
          }
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