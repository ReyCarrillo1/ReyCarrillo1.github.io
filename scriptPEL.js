$(document).ready(function() {
    const peliculas = [
    {
    id: 21,
    nombre: "actividad paranormal 0 el origen",
    año: 2010,
    imagen: "https://www.bfdistribution.cl/wp-content/uploads/2018/05/afiche_actividadparanormalelorigen_ok.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++3 Metros Sobre El Cielo+2010+&type=phone_number&app_absent=0"
    },
    {
    id: 22,
    nombre: "actividad paranormal 01",
    año: 2007,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/c7c564d8921a0e28119a61ad93b52f7670c3b793de0be0b8e828a657aa0602b8.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++50+sobras+liberadas+2018+&type=phone_number&app_absent=0"
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
        nombre: "Back to Black ",
        año: 2024,
        imagen: "https://m.media-amazon.com/images/M/MV5BOWMyZTJmMTUtNDNiYy00ZGE2LWIzZjAtZmQyZWQ0NjdiMjI5XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 10,
        nombre: "bad boys 4 hasta la muerte",
        año: 2024,
        imagen: "https://m.media-amazon.com/images/M/MV5BZWNjZWUwNDgtYTM4ZC00Zjk0LTg3ZWItNGEyZmVkZTIxZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
    {
        id: 11,
        nombre: "Bajo el muelle",
        año: 2023,
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/72edb09f32b71425aea02f1037e5a0d3fbfd14b8b348368a31fa8b76be2efd5d.jpg"
    },
    {
        id: 12,
        nombre: "Bajo la misma estrella",
        año: 2014,
        imagen: "https://pics.filmaffinity.com/Bajo_la_misma_estrella-457483777-large.jpg"
        },
    {
        id: 13,
        nombre: "Ballerina",
        año: 2016,
        imagen: "https://m.media-amazon.com/images/M/MV5BMGM4YWQ5YjktNzlhZS00MTlkLTg2MjItNjFiOGVmNDcxODJhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 14,
        nombre: "Barbie En Las 12 Princesas Bailarinas",
        año: 2006,
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/e8cdb50d6d43014a2b6d344faa6952f52863251782b59b5734f60e527262157d.jpg"
    },
    {
        id: 15,
        nombre: "Batman Azteca",
        año: 2025,
        imagen: "https://m.media-amazon.com/images/M/MV5BYmMzNWY1NGYtZDI2Mi00MWU2LWI4MGEtMzcyMGNkOWRmZjhjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 16,
        nombre: "Beetlejuice Beetlejuice",
        año: 2024,
        imagen: "https://m.media-amazon.com/images/M/MV5BODA1MGZjNjYtZjVjYi00ZGI5LWExMzEtM2Q0M2NiYWE4NmY5XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 17,
        nombre: "Bestia",
        año: 2022,
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/a1c06b55a293a24983b55308ad49a29929490c81b6864370c52da7bf09b7e68a.jpg"
    },
    {
        id: 18,
        nombre: "Better man",
        año: 2024,
        imagen: "https://m.media-amazon.com/images/M/MV5BMTBiZGI4NDItYjM0OC00ODg4LThkOGQtZDEzN2U2MzgxZTk4XkEyXkFqcGc@._V1_.jpg"
    },
    {
        id: 19,
        nombre: "Bichos una aventura en miniatura",
        año: 1998,
        imagen: "https://m.media-amazon.com/images/M/MV5BMzRmZmZkZjctMmJiOS00MTFiLTg2YmUtY2E3ZjZiZjA2MzA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
        id: 20,
        nombre: "Aves De Presa",
        año: 2020,
        imagen: "https://m.media-amazon.com/images/S/pv-target-images/f2da438bf0a46c7124c613f90898b0469aaf69615588014231b6ab5ec4196315.jpg"
    },
    {
    id: 30,
    nombre: "Black Adam",
    año: 2022,
    imagen: "https://m.media-amazon.com/images/I/91v-MfuWyWL._AC_UF894,1000_QL80_.jpg"
    },
    {
    id: 31,
    nombre: "Black and blue",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BMmFmZjE5NmUtZGFjYi00Zjc0LWIyYzYtZDhlYzVlZDUxY2JlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
    },
    {
    id: 32,
    nombre: "Black Widow",
    año: 2021,
    imagen: "https://lumiere-a.akamaihd.net/v1/images/blueb_007d_g_spa-ar_70x100_43a5cf52.jpeg"
    },
    {
    id: 50,
    nombre: "Blanca Nieves",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BODhhMjU4ZGItZjEzZC00MzM1LWEyMTEtMDhmOTNiN2Y3MDg5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 51,
    nombre: "Blue Beetle",
    año: 2023,
    imagen: "https://m.media-amazon.com/images/M/MV5BMDlkMmM1YjItOGI5Ny00MDVmLTg2ZjYtMmVlZmQxZTIyZWYzXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 52,
    nombre: "Bob Esponja En Busca De Los Pantalones Cuadrados",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BZmE3NTIyOTgtMTI4Ny00N2Q1LTlkNTctNjgwNmVjYmUyYmIxXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 53,
    nombre: "Brave Citizen",
    año: 2023,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Rze3JI0sve4QRySF9D0QoR4fKbyhnc5LZbEocVZnNq90t8_FEasZgLo-&s=10"
},
{
    id: 54,
    nombre: "Brigada 49",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/f990694b537312cdb26478dcc24abf6d887be75e439ec449d9a79150f43c0e8f.jpg"
},
{
    id: 55,
    nombre: "Burbujas",
    año: 2022,
    imagen: "https://pics.filmaffinity.com/bubble-245164454-large.jpg"
},
{
    id: 56,
    nombre: "buscando a nemo",
    año: 2003,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/93070eaf535856645544357f3ad17c626945ec8c0f8c1b707c8fa405728447a2.jpg"
},
{
    id: 57,
    nombre: "Buscando A Dory",
    año: 2016,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/f376d089a91798287747dc6c76644f7b76e9738ce177777db52c1f4167582b23.jpg"
},
{
    id: 58,
    nombre: "BUSQUEDA IMPLACABLE",
    año: 2008,
    imagen: "https://m.media-amazon.com/images/M/MV5BNzgwN2YzNjEtZjA2ZC00YTE1LWI4ZjEtZmFlNGU5MmIxNzFjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 161,
    nombre: "cada dia",
    año: 2018,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI3st5hJi7WAq7_fVYDIlZQ7DVnz5ZhibBk0cfENKoGBAfT6M45l2Af1k&s=10",
    trailer: "https://www.youtube.com/watch?v=IU7AstOtKaI"
},
{
    id: 59,
    nombre: "Camina O Muere",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BNmE4YmIxNWQtMzJhMy00NDI5LWFmYjEtMGYyMmFhNzdjODVmXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 60,
    nombre: "Capitan America Un Nuevo Mundo",
    año: 2025,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpRxYg19Dl5p4LB6FWDCd4yHC_P4C5nfsgL-qgO6oMIQ&s"
},
{
    id: 61,
    nombre: "Cars 1",
    año: 2006,
    imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/14/05/28/11/24/435900.jpg"
},
{
    id: 62,
    nombre: "Cars 2",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/M/MV5BMTUzNTc3MTU3M15BMl5BanBnXkFtZTcwMzIxNTc3NA@@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 63,
    nombre: "Cars 3",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 64,
    nombre: "Chip y Dale Al Rescate",
    año: 2022,
    imagen: "https://pics.filmaffinity.com/chip_n_dale_rescue_rangers-335785940-large.jpg"
},
{
    id: 65,
    nombre: "COCO",
    año: 2017,
    imagen: "https://pics.filmaffinity.com/Coco-155051069-large.jpg"
},
{
    id: 66,
    nombre: "Codigo Traje Rojo",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BYzgzNGJiMDItZmEwNS00ZjY2LTgzMWMtMTRlMjhhZjk3YThmXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 67,
    nombre: "Como Entrenar A Tu Dragon 1",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTQ2M2I3ZTktNGE5NS00YmE3LTk1NDEtNzQzZTY3NTlmNTY3XkEyXkFqcGc@._V1_.jpg"
},
{
    id: 68,
    nombre: "Como Entrenar A Tu Dragon 2",
    año: 2014,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdpiXBTWY4vfAMPP4mExmHmAYP7pPpX-Ew8NEfd9ZlBSj5dW2926CldAY&s=10"
},
{
    id: 69,
    nombre: "Como Entrenar A Tu Dragon 3",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/daf0864124d5b8b8bf1881a9b0b9e577b3ea10d8af5ec1ffb8e46c5a290d745c.jpg"
},
{
    id: 70,
    nombre: "Como Entrenar A Tu Dragon 1 LIVE ACCION",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/6254d757cc0c61cbe9dbe81e8e367101cd5c08bc680d6c87f1f448ed1004ba52.jpg"
},
{
    id: 71,
    nombre: "Como Por Casualidad",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/267116df6b1a634af12c4741c9aaa293414c73ecc6819d4105fcbfc5537b7b68.jpg"
},
{
    id: 72,
    nombre: "como si fuera la primera vez",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/ae4fdf5c052fbf3c7ce49d6cf693381fe861bee1ea3f4ad3a10a2e380c9272b7.jpg"
},
{
    id: 73,
    nombre: "Compañera Perfecta",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BYjkyZTA5NzAtYWU3Zi00MWM4LTgxNzAtNDQxY2JmNjMwYjk4XkEyXkFqcGc@._V1_.jpg"
},
{
    id: 74,
    nombre: "Contraataque",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BYmExM2ZiOGItMDcxZi00NDc3LTk3MmItNGQyZWNlYzBiOTI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 75,
    nombre: "Coraline",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/272cac634d75633052a6e94d1772753a62dabbf340f86201acc0b0b306a4e6ca.jpg"
},
{
    id: 76,
    nombre: "CREPUSCULO 1",
    año: 2008,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/619aa3dbef63db9021bd82b5e6b902709b75080a7816241156b20eed2efcad06.jpg"
},
{
    id: 77,
    nombre: "CREPUSCULO 2 Luna Nueva",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/cbf37c5102917893071d1661b39f607809d687b90bfd476c4e8a143df954be4d.jpg"
},
{
    id: 78,
    nombre: "CREPUSCULO 3 eclipse",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/621e538ab04734648b4bd1e417ca63a4baa5c98268cacfeec5785ccde216a16d.jpg"
},
{
    id: 79,
    nombre: "CREPUSCULO 4 Amanecer PARTE 1",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/017d32d8df814289ffbf74e07b4a247cfdc71ecd0da44ce02dac84b04574e22d.jpg"
},
{
    id: 80,
    nombre: "CREPUSCULO 5 Amanecer Parte2",
    año: 2012,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/db04699c978d6cd6e7f3d54e78164ebd2b58a8bb8630fdd9ab52dffcf2319407.jpg"
},
{
    id: 81,
    nombre: "cuando cupido no esta",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BYWQ4Y2RkZmQtNjRlYy00OGJlLTgzODMtYjYzZmM2YmM3OTg3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 82,
    nombre: "cuarto de guerra",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/da9aa925dfdc83f3712b51f456a74c1bde3b0424fbfe40b6590fd99c229683d5.jpg"
},
{
    id: 83,
    nombre: "Cuentos Que No Son Cuentos",
    año: 2008,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/9c2a751cf79824d64bf056d10cbc3ad540e34f71e9db43ad6850f6857c139658.jpg"
},
{
    id: 84,
    nombre: "CUPIDO MOTORIZADO",
    año: 1968,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/f1046d882adfddcfa8b1b3e879f43bdd4a1fa194e5344ea169384eff5ecb61c2.jpg"
},
{
    id: 85,
    nombre: "Danza con Lobos",
    año: 1990,
    imagen: "https://m.media-amazon.com/images/I/71kiEpiKnsL._AC_UF894,1000_QL80_.jpg"
},
{
    id: 86,
    nombre: "David",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BODczZDkzMDgtYzRjMi00YWNkLWJhNzMtNGNiMzQxNzE1ZDc3XkEyXkFqcGc@._V1_.jpg"
},
{
    id: 87,
    nombre: "Deadpool & Wolverine",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/dd6fb66997dd4cb5606b587bb255d2cd2cec20ecbd11852a8f6b07a1358d09a1.jpg"
},
{
    id: 88,
    nombre: "DEBIERON IRSE",
    año: 2020,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv47l3It-dwluWPQz8fT70KElInzq55hfV1LXsjVrl8nCI26ElP1-Iexj-&s=10"
},
{
    id: 89,
    nombre: "Depredador",
    año: 2022,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTc2Y2NmY2MtYWQ2ZS00ZGRjLTk2NTItNzVmNDViOTJhNThhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 90,
    nombre: "Depredador Tierras salvajes",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BNTdjZGUxMTItNjRkNS00N2VhLWE4MjMtMjVhODMwMGIxNjUwXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 91,
    nombre: "Descendientes 1",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/M/MV5BMTA5MTE2Mzc5MjReQTJeQWpwZ15BbWU4MDk0Njg2ODUx._V1_FMjpg_UX1000_.jpg"
},
{
    id: 92,
    nombre: "Descendientes 2",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BYWJiNWY2ZjAtYmU3ZS00MjU2LTk3MWMtMmRmM2U2OTdlMmE1XkEyXkFqcGc@._V1_.jpg"
},
{
    id: 93,
    nombre: "Descendientes 3",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjM1MTgyNDQyOF5BMl5BanBnXkFtZTgwOTgwMjQ4NzM@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 94,
    nombre: "Descendientes 4 El Ascenso De Red",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/4566a535678635a5b46fa19b0d7d4f30d3eb7f4eb61b9881fdb3f1314e7cfef1.jpg"
},
{
    id: 95,
    nombre: "Destino Final 1",
    año: 2000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8I5uAXclSSMWmaF9QC2rOQTsRFc7NGrosjtU8vKZhtw&s=10"
},
{
    id: 96,
    nombre: "Destino Final 2",
    año: 2002,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThY5c7JgyOahgGqQl8W4a0Sva309uHOxlNbRCjB2_3zpXCtvWASUgYK6IA&s=10"
},
{
    id: 97,
    nombre: "Destino Final 3",
    año: 2006,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d25394e6b36477545038c0e2609ad1db16be5a3f9155c0b8db1089b63abf5f10.jpg"
},
{
    id: 98,
    nombre: "Destino Final 4",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/44e330d3ef22bfa6b8ee2e5e07078cbe3d2fa5d006690e23966c0cbf4e5ed998.jpg"
},
{
    id: 99,
    nombre: "Destino Final 5",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/24ac12b5746775db5eba627202fe2cb0ed2858f5cf01ce09e3208c46b524bdf7.jpg"
},
{
    id: 100,
    nombre: "Destino Final 6 Lazos de sangre",
    año: 2021,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCqE-CxqkR-F2J_NTXO7s3_MtMCYdyC3mYh3n1q0VLVQ&s=10"
},
{
    id: 101,
    nombre: "Dia de muertos",
    año: 2022,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6UQCU7exC-8Oivmumil9IslBWZ5uizvlX3FQY92ZWiFxvmNB2egUTuhU&s=10"
},
{
    id: 102,
    nombre: "Diabólica tentación",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/I/81J0g5AbvUL._AC_UF894,1000_QL80_.jpg"
},
{
    id: 103,
    nombre: "Diamante De Sangre",
    año: 2021,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-aKd8qhDSltVwxDlkaWWkV8n6SUn5r3F3wbX5qyATRaKgrS4N2vv6fL4s&s=10"
},
{
    id: 104,
    nombre: "Diario De Una Pasion",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/M/MV5BM2RiMzcxYmYtNzQ3MC00NTQ4LWE0ZjktNGUwODI1MzhjNDNkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 105,
    nombre: "Django Unchained",
    año: 2012,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg"
},
{
    id: 106,
    nombre: "Dracula",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BY2IyZTVkOWMtOTJjZS00NzM2LWFmYTgtM2NlMjhkY2E5NWZjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 107,
    nombre: "Drop Amenaza Anonima",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BOWUyOTNlMjItNWUyZC00ZGJiLTg3MDMtODJmMGQyMGY3NzU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 108,
    nombre: "El año de mi graduacion",
    año: 2022,
    imagen: "https://image.tmdb.org/t/p/original/7gEHpcvQmXJ143tHUdUfVZDo9ok.jpg"
},
{
    id: 109,
    nombre: "el apocalipsis de san juan",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTk3NGZlYjQtY2U2Ni00ZDk1LWE3MTQtM2ZlNzUzOTM1OTk1XkEyXkFqcGc@._V1_.jpg"
},
{
    id: 110,
    nombre: "El bebe de Rosemary",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/519508ee2f67afcf9677c70f4a88d887c72429fb64e204879df765f904d23e6c.jpg"
},
{
    id: 111,
    nombre: "El buen amigo gigante",
    año: 2016,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQORWP2W-aQcuQ-EpmahB1IozPDXjjs7ZTOdAghIZMaVE4SWFRupT6ELyVv&s=10"
},
{
    id: 112,
    nombre: "EL CADAVER DE LA NOVIA",
    año: 2005,
    imagen: "https://decine21.com/img/upload/obras/la-novia-cadaver-58/la-novia-cadaver-58-c.jpg"
},
{
    id: 113,
    nombre: "El Chico Y La Garza",
    año: 2023,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/5a2645512671e87d49e07bbd4f1da06d0d2ae0ab1759714673810abb5b417134.png"
},
{
    id: 114,
    nombre: "EL CONJURO 1",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/M/MV5BYWQyNTQwNTAtZDE2Yy00NjlhLWE4N2YtYjBkYTM4ZmM3ZDk0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 115,
    nombre: "EL CONJURO 2",
    año: 2016,
    imagen: "https://m.media-amazon.com/images/M/MV5BMzM2OTE4ZWUtMzNiNy00MzhmLWE0YmMtZGE3ZTg2ZmUwODUzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 116,
    nombre: "EL CONJURO 3",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/dfd59666ac852c49e8e810afa5ce1e9e1c9bb359ef09ad0254bf3a096e37c27b.jpg"
},
{
    id: 117,
    nombre: "EL CONJURO 4",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/5a2513e2cb9e247637cf4e01ed62e082951260afbd8dcd8bfd049ea5d1ee6490.jpg"
},
{
    id: 118,
    nombre: "EL CONTADOR",
    año: 2016,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/aef518788c8bae890ae30e320498a99336972901be0e698ada310c831cf5f992.jpg"
},
{
    id: 119,
    nombre: "EL CONTADOR 2",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BYjFiY2I0NTEtNjdjNy00MTljLThkOWYtMzNiYjYyMDcxYjhkXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 120,
    nombre: "EL DURO",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BODVkYjlkM2UtNWVlMS00N2U1LTgxOTYtODlmNmE1YTgzMjczXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 121,
    nombre: "EL ESPANTA TIBURONES",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/ad1aaf1372ae00240624091d77d19f979b3c203caefb3e56d89c28b85aef1a6d.jpg"
},
{
    id: 122,
    nombre: "El Expreso Del Miedo",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/I/91H3DMJfBnL._AC_UF894,1000_QL80_.jpg"
},
{
    id: 123,
    nombre: "EL EXPRESO POLAR",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/M/MV5BNmE2ODgzOTUtNmY1NS00ZTc3LThjZjQtN2VjYjdlN2RlMmU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 124,
    nombre: "EL EXTRANO MUNDO DE JACK",
    año: 1993,
    imagen: "https://m.media-amazon.com/images/M/MV5BN2M4YTBhODQtNjU1Zi00MDcwLThkODgtYmY1ZWUxOTBiMGZmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 125,
    nombre: "EL GRINCH",
    año: 2000,
    imagen: "https://m.media-amazon.com/images/M/MV5BMDJiMjFhN2YtM2ZmZi00MDMwLTkzNjQtYjFlYmExNGEzMmIyXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 126,
    nombre: "GRINCH",
    año: 2018,
    imagen: "https://m.media-amazon.com/images/I/811QWEMy64L._AC_UF894,1000_QL80_.jpg"
},
{
    id: 127,
    nombre: "El Increíble Castillo Vagabundo",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/I/71PoeocDlkL._AC_UF894,1000_QL80_.jpg"
},
{
    id: 128,
    nombre: "El Joven Manos De Tijera",
    año: 1990,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTkzMjliNjgtNGE0MC00MTM4LWI3ZWQtZTI4OWEwNDQ5MTI1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 129,
    nombre: "El Justiciero Capítulo Final",
    año: 2023,
    imagen: "https://m.media-amazon.com/images/M/MV5BMzMyY2ZkMTMtNjU0Ni00OWU4LThkODEtZGU1MDFjNTU0YzcyXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 130,
    nombre: "El libro de la vida",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/M/MV5BODM1OTRjYjktZjU5Zi00M2Y2LTgxZTctODEwMzAyZDdmNTBjXkEyXkFqcGc@._V1_.jpg"
},
{
    id: 131,
    nombre: "EL MENU",
    año: 2022,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8yTNia08Ge5yN3klpj8i4dY_Su_kQv19Kpgj5YLmqc4Rnq3Bq98WeDU&s=10"
},
{
    id: 132,
    nombre: "El mesero",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/c3380ba5781e3075636304018b9cc524860c6d9d67bfd38bb6e88664dde276bd.jpg"
},
{
    id: 133,
    nombre: "El Mono",
    año: 2025,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTONiaEU6Ri_nDHhb4ee-fBvqTWEilmypElsoKI2wIfbzP9avmAmyLEIMhH&s=10"
},
{
    id: 134,
    nombre: "EL NIÑO Y LA BESTIA",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/cb71bf950ce8f2a1f571e02bcbf83f619f2e20186a5508591c916a9307be10f0.jpg"
},
{
    id: 135,
    nombre: "EL PLANETA DEL TESORO",
    año: 2002,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQza45fyNiDrivMF2bkShkczGLIPFq3jVrcWHGjayztwXYBKXEaHPUtaHiH&s=10"
},
{
    id: 136,
    nombre: "el Principe de egipto",
    año: 1998,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d08a47b3b6a35303e00d86c85e4368f8c9a3d4df19d8c81379e082bbfad8484e.jpg"
},
{
    id: 137,
    nombre: "El progreso del peregrino",
    año: 2019,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuK1i3C9PaPShS56XDuiEYY4DFYkemt8PY97gnO3whEh3B1up_ClppJ6YU&s=10"
},
{
    id: 138,
    nombre: "El Rey Arturo La Leyenda de la Espada",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/6879a12b8d910e32186b3ca136f3f5da77668d03c6cdac926a3c872b9bbc7cf1.jpg"
},
{
    id: 139,
    nombre: "El Rey de Reyes",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/523fc6facda72af9e4a8f3693d259f31450a43b834bf41f95ae82a7102ad5dec.png"
},
{
    id: 140,
    nombre: "el rey leon 1",
    año: 1994,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTk0YjM0YmMtZTNiOC00ZjU5LWEzNmUtNTRiYzAxMTg0MzVkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 141,
    nombre: " el rey leon 2",
    año: 1998,
    imagen: "https://es.web.img2.acsta.net/pictures/15/06/11/11/59/479737.jpg"
},
{
    id: 142,
    nombre: "el rey leon 3",
    año: 2004,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lV1vjMm3ew6n6ggJSboKaTuo0t7Ny0FOoCp4zPlz8quI6cGNdQ-8PCN1&s=10"
},
{
    id: 143,
    nombre: "el rey leon LIVE ACCION",
    año: 2019,
    imagen: "https://es.web.img3.acsta.net/pictures/19/07/09/11/22/4517830.jpg"
},
{
    id: 144,
    nombre: "El salario del miedo",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BM2RlMmNlZmQtMWU0NC00ZTZhLTk4MDMtZGI3ZTIzMGE3OGI5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 145,
    nombre: "El Show de Truman",
    año: 1998,
    imagen: "https://m.media-amazon.com/images/I/71zEnyA+49L._AC_UF894,1000_QL80_.jpg"
},
{
    id: 146,
    nombre: "El Telefono Negro",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BYmEwODM0N2QtNzA2MC00NjIyLTg1NTYtZTM1MTMzYTA2MjJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 147,
    nombre: "El Telefono Negro 2",
    año: 2025,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOIBxSIsdLshJSs5vGbJHMJu9t6WLTikVkp6dWenkVMDHaNhRSWt97qRc&s=10"
},
{
    id: 148,
    nombre: "el ultimo regalo",
    año: 2006,
    imagen: "https://m.media-amazon.com/images/M/MV5BZTY1YmEwMWEtODEyMi00ZDNmLTk2ZmEtODU4OTllNzk4N2FjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 149,
    nombre: "el unico sobreviviente",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTI2OGVhNWEtYWYxZS00YTgyLWIxNmUtNWRjMjc1NzVmNmI0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
},
{
    id: 150,
    nombre: "El Viaje De Chihiro",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BMWI1OTdjN2EtOGUxYy00ZDBmLWFlNzAtNmRkZjhiMTIzOTNhXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=5Fgq4Osh6XQ"
},
{
    id: 151,
    nombre: "El Zorro y el Sabueso",
    año: 1981,
    imagen: "https://m.media-amazon.com/images/I/81XDZabvuFL._AC_UF894,1000_QL80_.jpg",
    trailer: "https://www.dailymotion.com/video/x88a3b0"
},
{
    id: 152,
    nombre: "El descenso",
    año: 2001,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjA5NzQ1NTgwNV5BMl5BanBnXkFtZTcwNjUxMzUzMw@@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=2S0ImYzRxKE"
},
{
    id: 153,
    nombre: "Elementos",
    año: 2023,
    imagen: "https://pics.filmaffinity.com/Elementos-522221727-large.jpg",
    trailer: "https://www.youtube.com/watch?v=7KIWqmLsJRM"
},
{
    id: 154,
    nombre: "El unico",
    año: 2001,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/f834a26f32ce1844130f6fd6948ec111889af3166abc928bbf3cbd5c37361f5e.jpg",
    trailer: "https://www.youtube.com/watch?v=GSU29boUvKg"
},
{
    id: 155,
    nombre: "En Busca De La Felicidad",
    año: 2006,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/1f9562c4320675137a0ee2a3f9c72d2381a61b0645281252ac19c884ac3e9a8e.jpg",
    trailer: "https://www.youtube.com/watch?v=rxtGMH7OrLc"
},
{
    id: 156,
    nombre: "Encanto",
    año: 2021,
    imagen: "https://i0.wp.com/depauliaonline.com/wp-content/uploads/2021/12/IMG_5812.jpg?fit=728%2C900&ssl=1",
    trailer: "https://www.youtube.com/watch?v=SuvaNfzF2AI"
},
{
    id: 157,
    nombre: "Enemigo Publico",
    año: 1998,
    imagen: "https://m.media-amazon.com/images/M/MV5BZTcwMGM5NDUtOGNlZS00NzViLWI1NjUtYmU4MjczMWI0OTZkXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=0L1C6Kqinrg"
},
{
    id: 158,
    nombre: "Equipaje de mano",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BMDMyZWYwYTEtMmUwNy00NTE4LTkxNmUtY2Y1YzllYTUwYTQ5XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=9Xtod7Nlsxk"
},
{
    id: 160,
    nombre: "espias con disfras",
    año: 2019,
    imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/19/10/28/16/48/0116830.jpg",
    trailer: "https://www.youtube.com/watch?v=g8_384TLh1U"
},
{
    id: 162,
    nombre: "evolucion",
    año: 2001,
    imagen: "https://pics.filmaffinity.com/evolution-621971388-large.jpg",
    trailer: "https://www.youtube.com/watch?v=vWYNyqqnPfE"
},
{
    id: 163,
    nombre: "F1",
    año: 2025,
    imagen: "https://decine21.com/img/upload/obras/largometraje-de-formula-1-48762/largometraje-de-formula-1-48762-c.jpg",
    trailer: "https://www.youtube.com/watch?v=Zz1wgJS7UeI"
},
{
    id: 164,
    nombre: "Familia En Renta",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/4e7a19c51b5bb8d81a83277c94584ad76b87cb8a0199c58026c61d6604624ea6.jpg",
    trailer: "https://www.youtube.com/watch?v=wE0YeRAJK6w"
},
{
    id: 165,
    nombre: "Five Nights At Freddys",
    año: 2023,
    imagen: "https://es.web.img3.acsta.net/pictures/23/09/20/15/05/0470801.jpg",
    trailer: "https://www.youtube.com/watch?v=FRffQncR1HQ"
},
{
    id: 166,
    nombre: "Five Nights At Freddys 2",
    año: 2025,
    imagen: "https://www.universalpictures.com.mx/tl_files/content/movies/five_nights_2/posters/01.jpg",
    trailer: "https://www.youtube.com/watch?v=E8M-iJ0p-Xk"
},
{
    id: 167,
    nombre: "FLASH",
    año: 2023,
    imagen: "https://pics.filmaffinity.com/Flash-698849219-large.jpg",
    trailer: "https://www.youtube.com/watch?v=8dFTgXriXWg"
},
{
    id: 168,
    nombre: "FLOW",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTM5ODBlOTAtYjcwZi00YzkzLWIzODEtMTM2MTZlNDFmMWU2XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=izIuFUnZkjA"
},
{
    id: 169,
    nombre: "Frankenstein De Mary Shelley",
    año: 1994,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINszds4NxpcOMclmykklEPMnCzPGctrJJROaRiZ3Eo8MJF-kemcuLLEs&s=10",
    trailer: "https://www.youtube.com/watch?v=bDsuyb_zZio"
},
{
    id: 170,
    nombre: "Frankenweenie",
    año: 2012,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgMeSDpL4PV8atUG0t-BcXaPrMUO8AebqX5XsYOqj2w&s=10",
    trailer: "https://www.youtube.com/watch?v=wHi7HRmxqWI"
},
{
    id: 171,
    nombre: "Free Guy",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BN2I0MGMxYjUtZTZiMS00MzMxLTkzNWYtMDUyZmUwY2ViYTljXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=eOrSeFGLrRU"
},
{
    id: 172,
    nombre: "FROZEN",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/I/61yo34xjLHL._AC_UF1000,1000_QL80_.jpg",
    trailer: "https://www.youtube.com/watch?v=84ieTKsn1Qk"
},
{
    id: 173,
    nombre: "FROZEN 2",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BZTE1YjlmZjctNjIwNi00NDQ0LTlmMzgtYWZkY2RkZTMwNTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=I-oJ5QjrX9M"
},
{
    id: 174,
    nombre: "Garfield Fuera De Casa",
    año: 2024,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTapgOumHEkfWCpKSSjL2jdP4b8Qq4FldoqRS5Klo3QiLELeoTbxxpyJNY&s=10",
    trailer: "https://www.youtube.com/watch?v=GeR3YxTv_zU"
},
{
    id: 175,
    nombre: "Gato Con Botas El ultimo Deseo",
    año: 2022,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/31a37f45dc3b5d2ab74148f6b9342708254f76ab6ff1bc1a4aeffd6f231659b0.jpg",
    trailer: "https://www.youtube.com/watch?v=7afDrYLajRk"
},
{
    id: 176,
    nombre: "Gladiador",
    año: 2000,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoDrXczirbIoXatREHtWwvtep3oSeCc5JyyJE1fncdlc9FKlnDyZ3_lVxa&s=10",
    trailer: "https://www.youtube.com/watch?v=nx9c0SeGy3k"
},
{
    id: 177,
    nombre: "Gladiador 2",
    año: 2024,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrbTzenW_NNZbb5RpXUfPRmGw8Jp9orePgb9IjxS9WItlAvUkA6m4hFCE&s=10",
    trailer: "https://www.youtube.com/watch?v=qwMbpO20_YY"
},
{
    id: 178,
    nombre: "Glass",
    año: 2019,
    imagen: "https://es.web.img2.acsta.net/pictures/18/12/03/12/00/1528300.jpg",
    trailer: "https://www.youtube.com/watch?v=8aLVcGPYoN4"
},
{
    id: 179,
    nombre: "godzilla 2 el rey de los monstruos",
    año: 2019,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOctdztiOb147IMmhjuksXshXWZxTafKUwuZWVphQzw&s=10",
    trailer: "https://www.youtube.com/watch?v=KA94TLkE8eY"
},
{
    id: 180,
    nombre: "Godzilla vs Kong",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjZlYjUwZjItZmQ1ZS00NDU2LWFhNWMtMGRmMmZiMzliY2NhXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=EPdgdn5eOcw"
},
{
    id: 181,
    nombre: "Godzilla y Kong el Nuevo Imperio",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=Y5nq2APYURE"
},
{
    id: 182,
    nombre: "Good Boy",
    año: 2025,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvikssy77MKABjiScsviJGI3GrRO91cUPjWbZiPtn_YIQDyRbOmFMJLUW&s=10",
    trailer: "https://www.youtube.com/watch?v=_QpkrIN7BAs"
},
{
    id: 183,
    nombre: "guardianes de la bahia",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BYmFlMzdlZjYtYTAyMi00YzMyLTk4NWYtZmQ1MTYwN2RkNDliXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=cHTugS4aHdY"
},
{
    id: 184,
    nombre: "Guardianes De La Galaxia Vol 3",
    año: 2023,
    imagen: "https://lumiere-a.akamaihd.net/v1/images/lat_2ae5e247.jpeg",
    trailer: "https://www.youtube.com/watch?v=nFYA2kdHy0s"
},
{
    id: 186,
    nombre: "Guason",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BYjliNTJlYWYtYTU2Yy00YzI3LWI3NzgtOTJlMzg3YmQ3ZDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=TobNCFMK_bs"
},
{
    id: 185,
    nombre: "Guason 2",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/395bae3dfd483139923010e36b7f7c8d9919c154f10172717c59c7bb15f79813.jpg",
    trailer: "https://www.youtube.com/watch?v=BQGdRG13Zb4"
},
{
    id: 187,
    nombre: "Habia una vez en Hollywood",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BMDQ0OTk0NTQtN2M4Mi00ZjMzLTg3MzctNDM4YzRhMzc3ZjMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=J0rFGJV3cYw"
},
{
    id: 188,
    nombre: "Hambre de Poder (El Fundador)",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BZmJiMTVmNWItN2YxYi00MTZhLTlhZWEtMjgwM2I4OWQxNzlkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=Jn0wDroANyY"
},
{
    id: 189,
    nombre: "Harry Potter y la piedra filosofal",
    año: 2001,
    imagen: "https://play-lh.googleusercontent.com/AX7s9Y3EyhUCRwp_OUymBZhno9CFNl_h9KfLj64bHzQ1wBT-1HbI27ovhkL9RFsq0RRX52vAs7oALlLf8RU",
    trailer: "https://www.youtube.com/watch?v=tXRXEqd5AhQ"
},
{
    id: 190,
    nombre: "Harry Potter y la cámara secreta",
    año: 2002,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/94ed57bfd293d326fc19b840f0e25c137ab97a9db7eba886c84098f39c065dab.jpg",
    trailer: "https://www.youtube.com/watch?v=8upL2xQrPbc"
},
{
    id: 191,
    nombre: "Harry Potter y el prisionero de Azkaban",
    año: 2004,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/5abd8217a74c31735cf5f5532f3614324d5ff9aa13d858b2a00bf875e8e94be6.jpg",
    trailer: "https://www.youtube.com/watch?v=FqMlockFN9k"
},
{
    id: 192,
    nombre: "Harry Potter y el Caliz de Fuego",
    año: 2005,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/8747ca39c225c5643d40e1be5b78e8844ca779f126273507fec3f0c8b084885b.jpg",
    trailer: "https://www.youtube.com/watch?v=h1Xm9ynJKDM"
},
{
    id: 193,
    nombre: "Harry Potter y la orden del Fénix",
    año: 2007,
    imagen: "https://play-lh.googleusercontent.com/C8P107DqiTSF4ZvOhNP2HUi-vfY3xvdbccedbakmFnXENo26tTGvmqjVQSH6AfFeD6Mtx9qoxDLUMyVNMpjl=w240-h480-rw",
    trailer: "https://www.youtube.com/watch?v=gh8eOzf_fos"
},
{
    id: 194,
    nombre: "Harry Potter y el misterio del príncipe mestizo",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/0cdc1db866e5c78488ebbc51286feccefbd020cec01f069109218845ce9452e2.jpg",
    trailer: "https://www.youtube.com/watch?v=8bgLXigzeso"
},
{
    id: 195,
    nombre: "Harry Potter y las reliquias de la muerte Parte 1",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/d41d911189bb4b7ce08ce980e2ea187dbfca3e600d42a860f191345ddcc1efef.jpg",
    trailer: "https://www.youtube.com/watch?v=5T0xco4iM5E"
},
{
    id: 196,
    nombre: "Harry Potter y las reliquias de la muerte Parte 2",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/M/MV5BNDgxOTEyYzktOTg1NC00OWZmLWEzOTAtZTRhZGRkZTQzYWE5XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=I8KCaGH780w"
},
{
    id: 197,
    nombre: "harta",
    año: 2025,
    imagen: "https://assets.cineol.net/g4vk1nhp5butvp323ym60vwp5s6c",
    trailer: "https://www.youtube.com/watch?v=bIKVgIp1Rns"
},
{
    id: 198,
    nombre: "Herbie a Toda Marcha",
    año: 2005,
    imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj2GGhtsKSyPkNzTra0PK4SwX3p5rd2ZMcbn-l1312LT9cEEabnNQo_M9_yrTZlltaRL773f6x9BAf0F3DDuHa_uLbNTxN-FKNB-BNMvcHLva7JM_K5301x76k_RsLkuJPRIVw4LhLuRPgp/s1600/Herbie+a+toda+marcha+argentina+cinema.jpg",
    trailer: "https://www.youtube.com/watch?v=3HT75TrhHTM"
},
{
    id: 199,
    nombre: "High Ground En La Tierra De Los Justos",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BZmI0ZmZmYTktNTcwZS00ZDQyLTliMzgtZDY2ZWI2M2ZmZjhiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://www.youtube.com/watch?v=aHXkfwajXf8"
},
{
    id: 200,
    nombre: "hombres de negro 3",
    año: 2012,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW33_068Ymb0MDJtOIYbN_IYmSBFheJenn6_JXeAU-cuJ9WAgzMQVkRrk&s=10",
    trailer: "https://www.youtube.com/watch?v=4j3W7o71vGE"
},
{
    id: 201,
    nombre: "HOME",
    año: 2015,
    imagen: "https://play-lh.googleusercontent.com/EmyYQt6maMSrdKvJMgd29w-4viw9QBw84PGIvmuwxEVqZGKH5k_l2wOqGQTidKh3VL0Z",
    trailer: "https://www.youtube.com/watch?v=dUPn60ivIow"
},
{
    id: 202,
    nombre: "Hotel Transilvania",
    año: 2012,
    imagen: "https://www.sonypictures.com.mx/sites/mexico/files/2022-04/608871_HotelTransylvania_2012_LSR_2000x3000_UK_1333x2000_thumbnail.jpg",
    trailer: "https://www.youtube.com/watch?v=qqUQJKVDq9A"
},
{
    id: 203,
    nombre: "Hotel Transilvania 2",
    año: 2015,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8a_4cwlp-VqWXKHdbcTU3-C4ZL_zQXJF6D37nOwrlkJ8FQ8vk2ftmQB8&s=10",
    trailer: "https://www.youtube.com/watch?v=kR0q1pFVC5Y"
},
{
    id: 204,
    nombre: "Hotel Transilvania 3",
    año: 2018,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvp36oqCU40_J2mFSjzEJERsU-dEc9iYbqGGw-3q1_aYshP7lll3uqMRM&s=10",
    trailer: "https://www.youtube.com/watch?v=7RaXr6h7aQM"
},
{
    id: 205,
    nombre: "Hotel Transilvania 4",
    año: 2022,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO75SYORqRpk31S_JlSbU0DbQIv4DZsnyhmMwO7kSICnsKip8IjptgNDga&s=10",
    trailer: "https://www.youtube.com/watch?v=TlfFn-u4nI8"
},
{
    id: 206,
    nombre: "Huevitos Congelados",
    año: 2022,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/b57b46250fed1201eb8e0b809a5c257cdc164d2f90ddf6ea473222cfbb9aaf65.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Huevitos+Congelados+2022+&type=phone_number&app_absent=0"
},
{
    id: 207,
    nombre: "Identidad Desbloqueada",
    año: 2023,
    imagen: "https://m.media-amazon.com/images/M/MV5BNzBhN2IzMmYtOGY5MC00ZDkwLTkxYWUtMDkzZmJmZWFiYmRhXkEyXkFqcGc@._V1_QL75_UY281_CR6,0,190,281_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++identidad+desbloqueada+2023+&type=phone_number&app_absent=0"
},
{
    id: 208,
    nombre: "idiocracia",
    año: 2006,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRluntXCyIstcGroqTUpPaPQpHGAfrBms1mikT1shXXlYcqkmXZeI7VbZU&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++idiocracia+2006+&type=phone_number&app_absent=0"
},
{
    id: 209,
    nombre: "Inteligencia Artificail",
    año: 2001,
    imagen: "https://m.media-amazon.com/images/M/MV5BODA1YjhhZDctM2Y1ZS00ODkyLWFmMTAtZGY5YWEzNzRjYzA1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Inteligencia+Artificial+2001+&type=phone_number&app_absent=0"
},
{
    id: 210,
    nombre: "IntensaMente",
    año: 2015,
    imagen: "https://mx.web.img3.acsta.net/pictures/17/08/07/21/43/466493.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++IntensaMente+&type=phone_number&app_absent=0"
},
{
    id: 211,
    nombre: "INTENSAMENTE 2",
    año: 2024,
    imagen: "https://lumiere-a.akamaihd.net/v1/images/1_intensamente_2_payoff_banner_pre_1_aa3d9114.png",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++INTENSAMENTE02+2024+&type=phone_number&app_absent=0"
},
{
    id: 212,
    nombre: "Intercambiados",
    año: 2026,
    imagen: "https://m.media-amazon.com/images/M/MV5BNWFlNWM2Y2YtY2VhOC00MWFiLWExNWYtYWViYzJhMDQyMTJiXkEyXkFqcGc@._V1_QL75_UX190_CR0,0,190,281_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Intercambiados+2026+&type=phone_number&app_absent=0"
},
{
    id: 213,
    nombre: "Invencible - Un niño fuera de serie",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BM2QyMGYxYmItN2ExOS00NjA4LWFjNzYtNzVhZGJlMTI2ODRlXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Invencible+Un+niño+fuera+de+serie+2025+&type=phone_number&app_absent=0"
},
{
    id: 214,
    nombre: "IRON MAN 1",
    año: 2008,
    imagen: "https://m.media-amazon.com/images/I/61kVKNYa8cL._AC_UF894,1000_QL80_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++IRON+MAN+1+2008+&type=phone_number&app_absent=0"
},
{
    id: 215,
    nombre: "IRON MAN 2",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/I/91lDYIZAu4L._AC_UF894,1000_QL80_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++IRON+MAN+1+2010+&type=phone_number&app_absent=0"
},
{
    id: 216,
    nombre: "IRON MAN 3",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/M/MV5BMjIzMzAzMjQyM15BMl5BanBnXkFtZTcwNzM2NjcyOQ@@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++IRON+MAN+3+2013+&type=phone_number&app_absent=0"
},
{
    id: 159,
    nombre: "IT",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BZGZmOTZjNzUtOTE4OS00OGM3LWJiNGEtZjk4Yzg2M2Q1YzYxXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://www.youtube.com/watch?v=-4q5S5BWH8A"
},
{
    id: 217,
    nombre: "IT Capitulo Dos",
    año: 2019,
    imagen: "https://es.web.img3.acsta.net/pictures/19/07/30/09/09/0763744.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++IT+Capitulo+Dos+2019+&type=phone_number&app_absent=0"
},
{
    id: 218,
    nombre: "Jack reacher never go back",
    año: 2016,
    imagen: "https://m.media-amazon.com/images/M/MV5BODQ3ODQ3NDI4NV5BMl5BanBnXkFtZTgwMDY1Mzk5OTE@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jack+reacher+never+go+back+2016+&type=phone_number&app_absent=0"
},
{
    id: 219,
    nombre: "Jackpot",
    año: 2024,
    imagen: "https://m.media-amazon.com/images/M/MV5BYjVkNzI4NjQtMmU4OC00YmZkLTk5NDAtMjY5ZTEzZTk3NTAzXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jackpot+2024+&type=phone_number&app_absent=0"
},
{
    id: 220,
    nombre: "John Wick 4-Baba Yaga",
    año: 2023,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMlvTJ6SAY9xxwg0alDWLqU6h-8A_STKEmlp4kSM8--1oYgh4gxwzdNjc&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++John+Wick+4-Baba+Yaga+2023+&type=phone_number&app_absent=0"
},
{
    id: 221,
    nombre: "Jovenes y brujas nueva hermandad",
    año: 2020,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/ad0cb34f16b037bbf6f03a809c60e349fdfe43c2c3deec13d8dee33f3a1b96a5.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jovenes+y+brujas+nuev+hermandad+2020+&type=phone_number&app_absent=0"
},
{
    id: 222,
    nombre: "Jungle Cruise",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/5da7c6eacb61e6b052a997caab7e978f3958c2247d37ba1257bc86c34d523a12.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jungle+Cruise+2021+&type=phone_number&app_absent=0"
},
{
    id: 223,
    nombre: "JUNTO A LOS DIOSES LOS ULTIMOS 49 DIAS",
    año: 2013,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/021972ae3166e86e5d4fac8c5fe3c2d26f4244a87b92eb99034fbe95a7e6951c.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++JUNTO+A+LOS+DIOSES+LOS+ULTIMOS+49+DIAS+2013+&type=phone_number&app_absent=0"
},
{
    id: 224,
    nombre: "Jurassic World Dominio",
    año: 2022,
    imagen: "https://m.media-amazon.com/images/M/MV5BZGExMWU2NWMtNzczYi00NjQ4LTk2YzctZGZkYmRmMDdhMjllXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jurassic+World+Dominio+2022+&type=phone_number&app_absent=0"
},
{
    id: 225,
    nombre: "Jurassic world renacer",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BNjg2NTcwYWQtYzk4NS00MTJhLWEzZjItMzIxNjk3YzlkYzU0XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Jurassic+world+rebirth+2025+&type=phone_number&app_absent=0"
},
{
    id: 226,
    nombre: "Karate Kid Leyenda",
    año: 2021,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEe_0UH6AQAW63rS6JeVorPrcelJjWP7e-oLWfBKq0N1lFwZu28yHeHw&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Karate+Kid+Leyenda+2025+&type=phone_number&app_absent=0"
},
{
    id: 227,
    nombre: "Kick-Ass 1",
    año: 2010,
    imagen: "https://m.media-amazon.com/images/M/MV5BYzRmZTY1ZjYtOWQ0NC00NzUyLTg1YjktY2FkMDY1NjY1NmIwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kick-Ass+1+2010+&type=phone_number&app_absent=0"
},
{
    id: 228,
    nombre: "Kick-Ass 2",
    año: 2013,
    imagen: "https://es.web.img2.acsta.net/pictures/210/148/21014812_20130624133931115.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kick-Ass+2+2013+&type=phone_number&app_absent=0"
},
{
    id: 229,
    nombre: "Kimi to Nami ni Noretara",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/M/MV5BZDM5YTliZDgtZWYwZC00OWM4LWFiOTYtNDc0N2IxZjNiMjUzXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kimi+to+Nami+ni+Noretara+2019+&type=phone_number&app_absent=0"
},
{
    id: 230,
    nombre: "King's Man El origen",
    año: 2021,
    imagen: "https://m.media-amazon.com/images/M/MV5BZDIxOGUyNTMtMzVjZS00ZmVlLWFkN2EtMDVkMjViZmI1YTVkXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++King's+Man+El+origen+2021+&type=phone_number&app_absent=0"
},
{
    id: 231,
    nombre: "Krampus",
    año: 2015,
    imagen: "https://m.media-amazon.com/images/M/MV5BNWNiZDQ1MjMtOGRlZi00N2EzLTk5YTctMTkxZDU4YmE2NmMzXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Krampus+&type=phone_number&app_absent=0"
},
{
    id: 232,
    nombre: "Kung Fu Panda 1",
    año: 2008,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNkqtg-MoCgzeaQEc0G84Wo3dMm5Jg6C5Rq9gqu5TUv1V5kcHTO3X5K3k&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kung+Fu+Panda+1+2008+&type=phone_number&app_absent=0"
},
{
    id: 233,
    nombre: "Kung Fu Panda 2",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/M/MV5BOWY1YjZkOWItZDI0NS00NzQ5LThiMTUtMzg0YmQ5NjM1MzdiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kung+Fu+Panda+2+2011+&type=phone_number&app_absent=0"
},
{
    id: 234,
    nombre: "Kung Fu Panda 3",
    año: 2016,
    imagen: "https://juliomatag.wordpress.com/wp-content/uploads/2016/03/23616360933_d34468ef16_o.jpg?w=718&h=1000&crop=1",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kung+Fu+Panda+3+2016+&type=phone_number&app_absent=0"
},
{
    id: 235,
    nombre: "Kung Fu Panda 4",
    año: 2024,
    imagen: "https://i.pinimg.com/736x/f2/8c/17/f28c17ba6cf88cc64b4d914a7fa304a4.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++Kung+Fu+Panda+4+2024+&type=phone_number&app_absent=0"
},
{
    id: 236,
    nombre: "la bella y la bestia",
    año: 2014,
    imagen: "https://m.media-amazon.com/images/M/MV5BZjBiNGExMTMtZTRiNy00ZjIwLWI4NmYtYjEyZDdmYjU1YjgyXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+bella+y+la+bestia+2014+&type=phone_number&app_absent=0"
},
{
    id: 237,
    nombre: "la bella y la bestia",
    año: 2017,
    imagen: "https://es.web.img3.acsta.net/pictures/17/01/09/09/56/256507.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+bella+y+la+bestia+2017+&type=phone_number&app_absent=0"
},
{
    id: 238,
    nombre: "La Bruja",
    año: 2015,
    imagen: "https://es.web.img3.acsta.net/c_310_420/pictures/16/02/02/12/33/062603.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++LA+BRUJA+2015+&type=phone_number&app_absent=0"
},
{
    id: 239,
    nombre: "La Cabaña",
    año: 2017,
    imagen: "https://m.media-amazon.com/images/M/MV5BZTQ4MGU3ZTMtYzgxOS00NDE2LTgxOGYtOTNlNWJlMTI4ZmNkXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Cabaña+2017+&type=phone_number&app_absent=0"
},
{
    id: 240,
    nombre: "La Cabra Que Cambio El Juego-Goat",
    año: 2026,
    imagen: "https://m.media-amazon.com/images/M/MV5BZmFiZWM5YzgtNzQ0MC00MjBjLWI0ODktYjU4MDJmNGUxZWQ3XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Cabra+Que+Cambio+El+Juego-Goat+2026+&type=phone_number&app_absent=0"
},
{
    id: 241,
    nombre: "la colina de las amapolas",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/M/MV5BNzRmYzY2ODktZWM4NS00OTc5LWE5NGEtYWY3NTRmYzM4ZmE5XkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+colina+de+las+amapolas+2011+&type=phone_number&app_absent=0"
},
{
    id: 242,
    nombre: "la era de hielo 1",
    año: 2002,
    imagen: "https://es.web.img2.acsta.net/medias/nmedia/18/68/20/43/19014748.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+1+2002+&type=phone_number&app_absent=0"
},
{
    id: 243,
    nombre: "la era de hielo 2",
    año: 2005,
    imagen: "https://es.web.img3.acsta.net/medias/nmedia/18/68/25/85/20062854.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+2+2005+&type=phone_number&app_absent=0"
},
{
    id: 244,
    nombre: "la era de hielo 3",
    año: 2009,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/7cd16eaf094f33efecf640d7b25d359191e604c0f78ee0deeb5475e0792565d5.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+3+2009+&type=phone_number&app_absent=0"
},
{
    id: 245,
    nombre: "la era de hielo 4",
    año: 2012,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFtSPpaxbMHZE9bXKz1jl1NIP-eYklVAv3kMgtLgnVy36DrU1GicGBbu8&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+4+2012+&type=phone_number&app_absent=0"
},
{
    id: 246,
    nombre: "la era de hielo 5",
    año: 2016,
    imagen: "https://m.media-amazon.com/images/M/MV5BMDYyMGJhYmEtYzMzYi00YmJiLWFjMmItODMyMTRhNzg1OGNkXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+5+2016+&type=phone_number&app_absent=0"
},
{
    id: 247,
    nombre: "la era de hielo Las Avanturas De Buck",
    año: 2022,
    imagen: "https://pics.filmaffinity.com/Ice_Age_Las_aventuras_de_Buck-954979338-mmed.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+era+de+hielo+Las+Aventuras+De+Buck+2022+&type=phone_number&app_absent=0"
},
{
    id: 248,
    nombre: "La Familia del Futuro",
    año: 2007,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnlUhAeBuKLD-ActofNwTCwkxnVPwpXesPymWU_OgPkD6iBoxx-qY-Dew&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Familia+del+Futuro+2007+&type=phone_number&app_absent=0"
},
{
    id: 249,
    nombre: "La Forja",
    año: 2024,
    imagen: "https://pics.filmaffinity.com/La_forja-939217210-large.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Forja+2024+&type=phone_number&app_absent=0"
},
{
    id: 250,
    nombre: "La Gran Aventura De Winnie The Pooh",
    año: 1997,
    imagen: "https://m.media-amazon.com/images/M/MV5BZDhiYWRlZGQtYTY2Ni00ODM2LWJhZTQtMGFkYjg4MzdkNWJjXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Gran+Aventura+De+Winnie+The+Pooh+1997+&type=phone_number&app_absent=0"
},
{
    id: 251,
    nombre: "La Hermanastra Fea",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/0fe2dda8b11d299fa313d6be1207f67db2e6c118faefbe880e1cba684a6a0d56.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Hermanastra+Fea+2025+&type=phone_number&app_absent=0"
},
{
    id: 252,
    nombre: "La hora de la desaparición",
    año: 2025,
    imagen: "https://m.media-amazon.com/images/M/MV5BOTA4N2JlNmEtZTRjNi00MDBlLTkzYWQtYjU2ZmEzOGU4M2IwXkEyXkFqcGc@._V1_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+hora+de+la+desaparición+2025+&type=phone_number&app_absent=0"
},
{
    id: 253,
    nombre: "la invencion de hugo cabre",
    año: 2011,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5edZjWvgaApi8VtCD8oQJT0f75SovcWwf4VraJmZB1Zq1ytfpPkRSFxA&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++la+invencion+de+hugo+cabre+2011+&type=phone_number&app_absent=0"
},
{
    id: 254,
    nombre: "La Isla",
    año: 2005,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/554d222d0892bdb8412e58d2d98f57c7e5aa048ab11faf779ecca76b050e4727.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Isla+2005+&type=phone_number&app_absent=0"
},
{
    id: 255,
    nombre: "La leyenda de Hei",
    año: 2019,
    imagen: "https://m.media-amazon.com/images/S/pv-target-images/e557ffb5826867bda7b8ea99298eaca8280c36152f5622cb5c3d6551e63c1469.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+leyenda+de+Hei+2019+&type=phone_number&app_absent=0"
},
{
    id: 256,
    nombre: "La Leyenda De La Llorona",
    año: 2011,
    imagen: "https://m.media-amazon.com/images/M/MV5BMTYxMjcxNjU2NF5BMl5BanBnXkFtZTcwNDI1OTE5Ng@@._V1_FMjpg_UX1000_.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Leyenda+De+La+Llorona+2011+&type=phone_number&app_absent=0"
},
{
    id: 257,
    nombre: "La Leyenda De La Nahuala",
    año: 2021,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2dqNgoeN0t5z27EL8Q14by9EhEGrT65on169dmq2_4ZFbVqSnqVW_n_h&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Leyenda+De+La+Nahuala+2007+&type=phone_number&app_absent=0"
},
{
    id: 258,
    nombre: "La Leyenda De Los Chaneques",
    año: 2023,
    imagen: "https://corporate.televisaunivision.com/wp-content/uploads/sites/5/2023/07/1_LasLeyendasDeLosChaneques_VIX_Portrait_1200x1800.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Leyenda+De+Los+Chaneques+2023+&type=phone_number&app_absent=0"
},
{
    id: 259,
    nombre: "La leyenda del charro negro",
    año: 2018,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhm8M-wysiQPCFTcireTxu7r13HTT1OpK5tpYlKnaGOnn9LQXslFU2LVy&s=10",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+leyenda+del+charro+negro+2018+&type=phone_number&app_absent=0"
},
{
    id: 260,
    nombre: "La Leyenda del Rey Saloman",
    año: 2017,
    imagen: "https://pics.filmaffinity.com/The_Legend_of_King_Solomon-532308768-large.jpg",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Leyenda+del+Rey+Saloman+2017+&type=phone_number&app_absent=0"
},
{
    id: 261,
    nombre: "La Leyenda Del Tesoro Perdido 2 El Libro De Los Secretos",
    año: 2007,
    imagen: "https://play-lh.googleusercontent.com/R-3B-WWr7ulyIQE8lLVLwqpvUASHvbk36tjIORbwN3o5qT-7CympNJzZKn2ZK8p8rRlg6w",
    trailer: "https://api.whatsapp.com/send/?phone=%2B5212881048888&text=Hola%2C+me+podria+vender+la+pelicula%3A++La+Leyenda+Del+Tesoro+Perdido+2+El+Libro+De+Los+Secretos+2007+&type=phone_number&app_absent=0"
},
{
    id: 262,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 263,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 264,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 265,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 266,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 267,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 268,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 269,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 270,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 271,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 272,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 273,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 274,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 275,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 276,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 277,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 278,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 279,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 280,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 281,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 282,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 283,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 284,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 285,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 286,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 287,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 288,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 289,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 290,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 291,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 292,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 293,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 294,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 295,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 296,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 297,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 298,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 299,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
{
    id: 300,
    nombre: "",
    año: 2021,
    imagen: "",
    trailer: ""
},
    ];
    function mostrarPeliculas(lista){

        $(".productos").empty();
    
        lista.forEach(pelicula=>{
    
            $(".productos").append(`
                <div class="producto">
    
                    <img src="${pelicula.imagen}" alt="${pelicula.nombre}">
    
                    <h3>${pelicula.nombre}</h3>
    
                    <h5>AÑO: ${pelicula.año}</h5>
    
                    <button class="verTrailer"
                            data-trailer="${pelicula.trailer || ''}">
                        🎬 Pedir Pelicula
                    </button>
    
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
    $(document).on("click", ".verTrailer", function(){

    const trailer = $(this).data("trailer");

    if(trailer){
        window.open(trailer, "_blank");
    }else{
        alert("Esta película aún no tiene tráiler.");
    }

});
});
