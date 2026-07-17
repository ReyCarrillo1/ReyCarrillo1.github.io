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
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 73,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 74,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 75,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 76,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 77,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 78,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 79,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 80,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 81,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 82,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 83,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 84,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 85,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 86,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 87,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 88,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 89,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 90,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 91,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 92,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 93,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 94,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 95,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 96,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 97,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 98,
    nombre: "",
    año: 2021,
    imagen: ""
},
{
    id: 99,
    nombre: "",
    año: 2021,
    imagen: ""
},
    ];
     function mostrarPeliculas(lista){

        $(".productos").empty();
    
        lista.forEach(pelicula=>{
    
            $(".productos").append(`
                <div class="producto">
                    <img src="${pelicula.imagen}">
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
