$(document).ready(function() {
    const peliculas = [
    {
    id: 21,
    nombre: "actividad paranormal 0 el origen",
    año: 2010,
    imagen: "MEDIA/PELIS/actividad0.png"
    },
    {
    id: 22,
    nombre: "actividad paranormal 01",
    año: 2007,
    imagen: "MEDIA/PELIS/ACTIVIDAD1.jpg"
    },
    {
    id: 23,
    nombre: "actividad paranormal 02",
    año: 2010,
    imagen: "MEDIA/PELIS/ACTIVIDAD2.jpg"
    },
    {
    id: 24,
    nombre: "actividad paranormal 01",
    año: 2007,
    imagen: "MEDIA/PELIS/ACTIVIDAD1.jpg"
    },
    {
    id: 1,
    nombre: "Avatar 1",
    año: 10,
    imagen: "MEDIA/PELIS/AVATAR.JPG"
    },
    {
    id: 5,
    nombre: "Avatar 2",
    año: 10,
    imagen: "MEDIA/PELIS/AVATAR 2.PNG"
    },
    {
    id: 3,
    nombre: "AVATAR 3",
    año: 2010,
    imagen: "MEDIA/PELIS/AVATAR 3.jpg"
    },
    {
    id: 4,
    nombre: "Memoria USB KINGSTONE de 128GB",
    precio: 160,
    imagen: "MEDIA/PRODUCTOS/KINGS-128GB_resultado.png"
    },
    {
    id: 2,
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

    
    
    peliculas.forEach(pelicula =>{
        $('.productos').append(`
            <div class="producto">
            <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
            <h3>${pelicula.nombre}</h3>
            <h5>AÑO: ${pelicula.año}</h5>
            </div>
            `);
     });
     function mostrarPeliculas(lista){

        $(".productos").empty();
    
        lista.forEach(pelicula=>{
    
            $(".productos").append(`
                <div class="producto">
                    <img src="${pelicula.imagen}">
                    <h3>${pelicula.nombre}</h3>
                    <h5>AÑO: ${pelicula.año}</h5>
                </div>
            `);
    
        });
    
    }
    
    mostrarPeliculas(peliculas);
     $("#buscador").on("keyup", function(){

        const texto = $(this).val().toLowerCase();
    
        const resultado = peliculas.filter(pelicula =>
            pelicula.nombre.toLowerCase().includes(texto)
        );
    
        mostrarPeliculas(resultado);
    
    });
 });
