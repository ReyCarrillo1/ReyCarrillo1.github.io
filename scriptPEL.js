$(document).ready(function() {
    const peliculas = [
    {
    id: 21,
    nombre: "actividad paranormal 0 el origen",
    año: 2010,
    imagen: "https://www.bfdistribution.cl/wp-content/uploads/2018/05/afiche_actividadparanormalelorigen_ok.jpg",
    },
    {
    id: 22,
    nombre: "actividad paranormal 01",
    año: 2007,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/c7c564d8921a0e28119a61ad93b52f7670c3b793de0be0b8e828a657aa0602b8.jpg"
    },
    {
    id: 23,
    nombre: "actividad paranormal 02",
    año: 2010,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlyHRWaIQJWeFbDMeBAC_KLD8NGsyHj7lxgvl7wrlf261pizQCKkDVAEfS&s=10"
    },
    {
    id: 24,
    nombre: "actividad paranormal 03",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/282c2cc1d135372d00592d57b95d583b4ce7f6ec92d506515f55212a03dd2fd1.jpg"
    },
    {
    id: 25,
    nombre: "actividad paranormal 04",
    año: 2012,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d050f8e8401f06d0c375e97543746b86356809735b33a679c24649a3385aa47c.jpg"
    },
    {
    id: 26,
    nombre: "actividad paranormal 05 Los Marcados",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/I/81pRYJKauBL._AC_UF894,1000_QL80_.jpg"
    },
    {
    id: 27,
    nombre: "actividad paranormal 06 Dimension Fantasma",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjQxMjE5OTA3OF5BMl5BanBnXkFtZTgwMDAxNTg4NjE@._V1_.jpg"
    },
    {
    id: 28,
    nombre: "actividad paranormal 07 Vinculos Familiares",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BNjgzY2MyZmMtYTI3YS00NTc3LWE3M2UtMmI2ZjE4OTRkZjRmXkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 29,
    nombre: "After: aquí empieza todo",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BYmI3YWYwZDEtNmJmOS00ODU2LTg5NmYtMjM1N2U3ZjFlODdjXkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 33,
    nombre: "al filo de la oscuridad",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d33e812714fbcde83c92d58b8e793a24ce60305ba65cf53726cbf3bacce8adbd.jpg"
    },
    {
    id: 34,
    nombre: "Al filo del mañana",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/59e64a922cc579e91302b4ab2053ce96eba0f31218fa6d7cb4a7457670ddf91e.jpg"
    },
    {
    id: 36,
    nombre: "Alicia En El Pais De Las Maravillas",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BZTllYThmMDYtYzU1ZC00MmRkLWI2OGItNjc0NTcxNGY3Y2M4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
    id: 43,
    nombre: "Alicia a traves del espejo",
    año: 2016,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR483aJDSApbOY9fMgsxjpiEtTAcwgv2qRAlrfYDa6SIExKl6dsQTMXlQs&s=10"
    },
    {
    id: 44,
    nombre: "alicia en el pais de las pesadillas",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/65f3d56d709f2716045d53b4da748b8194f1bf06fe77579928bc4bdf602de560.jpg"
    },
    {
    id: 45,
    nombre: "Alpha",
    año: 2018,
    imagen: "https://m.media-amazon.com/images/M/MV5BNzkzMzNmZTUtODU3ZS00MmNkLWI2MzMtYzExMWY4ZDNiZjBiXkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 46,
    nombre: "amenaza en el aire",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/77bb43e5e8b0cf319e503d6ad2d602d8b3c0fd745e561e03a308257faf124047.jpg"
    },
    {
    id: 47,
    nombre: "Amigos Imaginarios",
    año: 2024,
    imagen: "https://play-lh.googleusercontent.com/eXzgi_FilA2J63nfGZjab_diNyCtOsimSCy-5COwwRaWdKoQwmeiZ_2-e7KucwWGTTnNhYzbihy7gADZ3w"
    },
    {
    id: 48,
    nombre: "Amor Ciego",
    año: 2001,
    imagen: "https://m.media-amazon.com/images/M/MV5BM2U3OWFmY2ItYTExYi00NWU0LWFjZjAtY2Y0ZDJjMTUyNGU2XkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 49,
    nombre: "Amores Materialistas",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BNTYzMGVkYjktNmU0NS00MzA0LWFjZTItZmEwZjJiMTM3OWM0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
    id: 37,
    nombre: "Amos Del Universo",
    año: 2026,
    imagen: "https://m.media-amazon.com/images/M/MV5BZjBmODIxYzAtNWQ4My00Y2E3LWFjNzktMTE0NTE4NDE2OTYzXkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 38,
    nombre: "Angeles y demonios",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d45637c4a1852aa5cbfd0efa31d27aa3c0803049281cb4644d3eab86bb8c5d13.jpg"
    },
    {
    id: 39,
    nombre: "Animales Fantasticos 2 Los Crimenes De Grindelwald",
    año: 2018,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/a30ca549f049952d95495295765c8c67ae655aadd49b3ae391893da0e429a550.jpg"
    },
    {
    id: 40,
    nombre: "Annabelle",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/84acdb04fedf5cb042e358ec9d1bcc20128477f34a0ef7c822bd70eff2870dcf.jpg"
    },
    {
    id: 41,
    nombre: "Annabelle 2 creation",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BOGI0NTMxNWMtMzIzNy00MjcyLWIyMDItZmM3Mjk0Yjg2ZTliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
    id: 42,
    nombre: "Annabelle 3 Viene A Casa",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/8132aaabb01a84fdc8ce09d6b434e918e394f2190cd1437110b41e9758417dae.jpg"
    },
    {
    id: 35,
    nombre: "Ant-Man and the Wasp Quantumania",
    año: 2023,
    imagen: "https://m.media-amazon.com/images/M/MV5BMThkYWY5ZjQtYjJlMS00MDFmLWFkYzEtODEzZjg5YWFmMGY4XkEyXkFqcGc@._V1_.jpg"
    },
    {
    id: 1,
    nombre: "Apocalipsis Z El principio del fin",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/I/71IPHtyiiHL._AC_UF1000,1000_QL80_.jpg"
    },
    {
    id: 5,
    nombre: "Apocalypto",
    año: 2006,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/b118e53244c5870afcdc9ed33f5fb90d5443610a77b6d3b99accedaba65d0cb2.jpg"
    },
    {
    id: 3,
    nombre: "aquaman 2 el reino perdido",
    año: 2023,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt81k9_cJuHayL7zXSMdsMeWvPU1qS6rEaUjO1P7j7ke57C-DJQrsN2kE&s=10"
    },
    {
    id: 4,
    nombre: "Aquellos Que Desean Mi Muerte",
    año: 2021,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnZZHN2mD8wezy9UXcTOoLO3EFh3jbjxwaV8S1UYwZ6b03MV563hcRXdk&s=10"
    },
    {
    id: 2,
    nombre: "Automata",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/628fd4ff750d701e5fba915127c0b51d4bcb27aadf97f62954645c178a104fbf.jpg"
    },
    {
    id: 6,
    nombre: "Avatar",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/M/MV5BYTFkODA4MGItNWIwYS00NzNhLTljMGMtNTFkMTM1OGVhZDI1XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 7,
        nombre: "avatar 2 el camino del agua",
        año: 2022,
        imagen: "https://m.media-amazon.com/images/M/MV5BNWI0Y2NkOWEtMmM2OC00MjQ3LWI1YzItZGQxYzQ3NzI4NWZmXkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 8,
        nombre: "avatar 3 fuego y ceniza",
        año: 2025,
        imagen: "https://pics.filmaffinity.com/Avatar_Fuego_y_ceniza-573008793-large.jpg"
    },
    {
        id: 9,
        nombre: "audifonos alambricos AK6 color rojo",
        año: 60,
        imagen: "MEDIA/PRODUCTOS/AK6-ROJO.jpg"
    },
    {
        id: 10,
        nombre: "audifonos tipo pildora color negro",
        año: 120,
        imagen: "MEDIA/PRODUCTOS/PILDORA-NEGRO_resultado.png"
        },
    {
        id: 11,
        nombre: "audifonos tipo pildira color rosa",
        año: 120,
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
    {
    id: 30,
    nombre: "Los Ilusionistas",
    año: 2013,
    imagen: "MEDIA/PELIS/ilusion1.jpg"
    },
    {
    id: 31,
    nombre: "Los Ilusionistas 2",
    año: 2016,
    imagen: "MEDIA/PELIS/ilusion2.jpg"
    },
    {
    id: 32,
    nombre: "Los Ilusionistas 3",
    año: 2021,
    imagen: "MEDIA/PELIS/ilusion3.jpg"
    },
    ];
     function mostrarPeliculas(lista){

        $(".productos").empty();
    
        lista.forEach(pelicula=>{
    
            $(".productos").append(`
                <div class="producto">
                    <img height="500" src="${pelicula.imagen}">
                    <h2>${pelicula.nombre}</h2>
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
