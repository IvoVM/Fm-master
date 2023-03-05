// Import Carrousel Images

import carimg1 from "../assets/images/carousel/car1.jpg";
import carimg2 from "../assets/images/carousel/car2.jpg";
// import carimg3 from "../assets/images/carousel/car3.jpg";
import carimg4 from "../assets/images/carousel/car4.jpg";
import carimg5 from "../assets/images/carousel/car5-edit.jpg";
// import carimg6 from "../assets/images/carousel/car6.jpg";
import carimg7 from "../assets/images/carousel/car7.jpg";
import carimg8 from "../assets/images/carousel/car8.jpg";
import carimg9 from "../assets/images/carousel/car9.jpg";
import carimg10 from "../assets/images/carousel/car10.jpg";
import carimg11 from "../assets/images/carousel/car11.jpg";
import carimg12 from "../assets/images/carousel/car12-edit.jpg";
import carimg13 from "../assets/images/carousel/car13.jpg";
import carimg14 from "../assets/images/carousel/car14-edit.jpg";
import carimg15 from "../assets/images/carousel/car15.jpg";
import carimg16 from "../assets/images/carousel/car16.jpg";
import carimg17 from "../assets/images/carousel/car17-edit.jpg";
import carimg18 from "../assets/images/carousel/car18-edit.jpg";


// Import  TeamCards Component Images

import cardimg1 from "../assets/images/TeamCards/JUAN.jpg";
import cardimg2 from "../assets/images/TeamCards/dany 2.jpg";
import cardimg3 from "../assets/images/TeamCards/JORGE.jpg";
import cardimg4 from "../assets/images/TeamCards/HERNAN MARINO-edit.jpg";
import cardimg5 from "../assets/images/TeamCards/camila.jpg";
import cardimg6 from "../assets/images/TeamCards/CHINITO.jpg";
import cardimg7 from "../assets/images/TeamCards/Gelli.jpg";
import cardimg8 from "../assets/images/TeamCards/VERO.jpg";
import cardimg9 from "../assets/images/TeamCards/moni.jpg";




// Carrousel Component

const carouselContent = [
  {
    id: 1,
    img: carimg1,
  },
  {
    id: 2,
    img: carimg2,
  },
  
  {
    id: 4,
    img: carimg4,
  },
  {
    id: 5,
    img: carimg5,
  },
 
  {
    id: 7,
    img: carimg7,
  },
  {
    id: 8,
    img: carimg8,
  },
  {
    id: 9,
    img: carimg9,
  },
  {
    id: 10,
    img: carimg10,
  },
  {
    id: 11,
    img: carimg11,
  },
  {
    id: 12,
    img: carimg12,
  },
  {
    id: 13,
    img: carimg13,
  },
  {
    id: 14,
    img: carimg14,
  },
  {
    id: 15,
    img: carimg15,
  },
  {
    id: 16,
    img: carimg16,
  },
  {
    id: 17,
    img: carimg17,
  },
  {
    id: 18,
    img: carimg18,
  },
];

// Player Component
const players = [
  {
    id: 1,
    url: "https://www.solumedia.com.ar/radios/8776/index.html",
    title: "Master",
  },
  {
    id: 2,
    url: "https://www.solumedia.com.ar/radios/6240/index.html",
    title: "+MAS",
  },
];
// TeamCards Component

const teamCards = [
  {
    id: 1,
    name: "Juan Mastrángelo",
    img: cardimg1,
    participations: '"Resumen 24"',
  },
  {
    id: 2,
    name: 'Daniel "Gorrión" Cepeda',
    img: cardimg2,
    participations: '"La mañana del gorrión"',
  },
  {
    id: 3,
    name: "Veronica Morosinotto",
    img: cardimg8,
    participations: '"aasdsdasd"',
  },

  {
    id: 4,
    name: "Hernan Marino",
    img: cardimg4,
    participations: '"Batidos musicales"',
  },
  {
    id: 5,
    name: "Camila Lopez",
    img: cardimg5,
    participations: '"A Cami Tenes"',
  },
  {
    id: 6,
    name: 'Alberto "Chinito" Medrano',
    img: cardimg6,
    participations: '"Recorriendo el Litoral" y "Con Esencia Romántica"',
  },{
    id: 7,
    name: "Jorge Caraballo",
    img: cardimg3,
    participations: '"De todo un poco"',
  },
  {
    id: 8,
    name: "Gelli, Alejandra, Dylan",
    img: cardimg7,
    participations: '"Que lo sepa la calle"',
  },{
    id: 9,
    name: "Monica Gonzales",
    img: cardimg9,
    participations: '"Resumen 24"',
  },
  
];

// Schedule Component

const scheduleDays = [
  {
    day: "Lunes",
    id: 1,
  },
  {
    day: "Martes",
    id: 2,
  },
  {
    day: "Miercoles",
    id: 3,
  },
  {
    day: "Jueves",
    id: 4,
  },
  {
    day: "Viernes",
    id: 5,
  },
  {
    day: "Sábado",
    id: 6,
  },
  {
    day: "Domingo",
    id: 7,
  },
];
const scheduleDays6to8 = [
  {
    name: "La matera",
    id: 1,
  },
  {
    name: "La matera",
    id: 2,
  },
  {
    name: "La matera",
    id: 3,
  },
  {
    name: "La matera",
    id: 4,
  },
  {
    name: "La matera",
    id: 5,
  },
  {
    name: "la mañana del chinito medrano",
    id: 6,
  },
  {
    name: "la mañana del chinito medrano",
    id: 7,
  },
];
export { carouselContent, players, teamCards, scheduleDays, scheduleDays6to8 };
