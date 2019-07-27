const mongoose = require("mongoose");
const Equipo = require("../models/Equipo");
const equipos = [
  {
    name: "Club Santos Laguna",
    logo:
      "http://as00.epimg.net/img/comunes/fotos/fichas/equipos/large/4250.png",
    liga: "LigaMX",
    juegos: [
      "Chivas",
      "Bravos",
      "Atlas",
      "Puebla",
      "Necaxa",
      "Monterrey",
      "Leon",
      "Pachuca",
      "Atletico San Luis",
      "Varacruz",
      "Pumas",
      "Tigres",
      "Tijuana",
      "Monarcas",
      "Queretaro",
      "America",
      "Cruz Azul"
    ]
  },
  {
    name: "Chivas",
    logo:
      "https://cdn.freebiesupply.com/logos/large/2x/chivas-guadalajara-logo-png-transparent.png",
    liga: "LigaMX",
    juegos: [
      "Club Santos Laguna",
      "Tigres",
      "Puebla",
      "Atletico San Luis",
      "Leon",
      "Necaxa",
      "Cruz Azul",
      "Atlas",
      "Monarcas",
      "Pachuca",
      "America",
      "Pumas",
      "Monterrey",
      "Bravos",
      "Tijuana",
      "Toluca",
      "Queretaro",
      "Veracruz"
    ]
  },
  {
    name: "Bravos",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/f/f7/Bravos_de_Ciudad_Juárez_Logo.png",
    liga: "LigaMX",
    juegos: [
      "Atlas",
      "Club Santos Laguna",
      "Toluca",
      "Cruz Azul",
      "Queretaro",
      "Puebla",
      "Monterrey",
      "Leon",
      "Veracruz",
      "America",
      "Necaxa",
      "Atletico San Luis",
      "Pachuca",
      "Chivas",
      "Monarcas",
      "Tijuana",
      "Pumas",
      "Tigres"
    ]
  },
  {
    name: "Atlas",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/8d/Club_Atlas_de_Guadalajara_logo.svg/913px-Club_Atlas_de_Guadalajara_logo.svg.png",
    liga: "LigaMX",
    juegos: [
      "Bravos",
      "Monarcas",
      "Club Santos Laguna",
      "Veracruz",
      "Cruz Azul",
      "Pachuca",
      "Tigres",
      "America",
      "Chivas",
      "Toluca",
      "Leon",
      "Queretaro",
      "Tijuana",
      "Puebla",
      "Atlas",
      "Pumas",
      "Atletico San Luis",
      "Monterrey"
    ]
  },
  {
    name: "Puebla",
    logo:
      "https://clipart.info/images/ccovers/1503438225puebla-fc-football-logo-png-1.png",
    liga: "LigaMX",
    juegos: [
      "Tijuana",
      "Chivas",
      "Club Santos Laguna",
      "Pachuca",
      "Cruz Azul",
      "Puebla",
      "Queretaro",
      "Atletico San Luis",
      "Monterrey",
      "Tigres",
      "Leon",
      "Toluca",
      "Atlas",
      "America",
      "Veracruz",
      "Pumas",
      "Monarcas",
      "Necaxa"
    ]
  },
  {
    name: "Necaxa",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Club_Necaxa_2.svg/830px-Club_Necaxa_2.svg.png",
    liga: "LigaMX",
    juegos: [
      "Cruz Azul",
      "Pumas",
      "Veracruz",
      "Tigres",
      "Club Santos Laguna",
      "Chivas",
      "Toluca",
      "Tijuana",
      "Monterrey",
      "Leon",
      "Queretaro",
      "Bravos",
      "Monarcas",
      "America",
      "Atlas",
      "Pachuca",
      "Atletico San Luis",
      "Puebla"
    ]
  },
  {
    name: "Monterrey",
    logo:
      "https://seeklogo.com/images/C/club-de-futbol-monterrey-logo-C8EE5381BC-seeklogo.com.png",
    liga: "LigaMX",
    juegos: [
      "America",
      "Atletico San Luis",
      "Leon",
      "Monarcas",
      "Toluca",
      "Club Santos Laguna",
      "Pumas",
      "Bravos",
      "Necaxa",
      "Puebla",
      "Cruz Azul",
      "Tigres",
      "Queretaro",
      "Chivas",
      "Pachuca",
      "Veracruz",
      "Tijuana",
      "Atlas"
    ]
  },
  {
    name: "Leon",
    logo:
      "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/10746/10746.png",
    liga: "LigaMX",
    juegos: [
      "Pachuca",
      "America",
      "Monterrey",
      "Chivas",
      "Queretaro",
      "Club Santos Laguna",
      "Tigres",
      "Bravos",
      "Necaxa",
      "Atlas",
      "Puebla",
      "Veracruz",
      "Pumas",
      "Atletico San Luis",
      "Cruz Azul",
      "Monarcas",
      "Toluca",
      "Tijuana"
    ]
  },
  {
    name: "Pachuca",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Pachuca_Tuzos_logo.svg/1200px-Pachuca_Tuzos_logo.svg.png",
    liga: "LigaMX",
    juegos: [
      "Pachuca",
      "Veracruz",
      "Atlas",
      "Monarcas",
      "Queretaro",
      "Puebla",
      "Atlas",
      "America",
      "Atletico San Luis",
      "Club Santos Laguna",
      "Atletico San Luis",
      "Club Tijuana",
      "Chivas",
      "Cruz Azul",
      "Bravos",
      "Toluca",
      "Monterrey",
      "Necaxa",
      "Tigres",
      "Pumas"
    ]
  },
  {
    name: "Atletico San Luis",
    logo:
      "https://s3.amazonaws.com/lmxwebsite/docs/archdgtl/AfldDrct/logos/11220/11220.png",
    liga: "LigaMX",
    juegos: [
      "Pumas",
      "Monterrey",
      "Chivas",
      "Tigres",
      "Veracruz",
      "Monarcas",
      "Pachuca",
      "Puebla",
      "Club Santos Laguna",
      "Toluca",
      "Tijuana",
      "Bravos",
      "Queretaro",
      "Leon",
      "America",
      "Atlas",
      "Necaxa",
      "Cruz Azul"
    ]
  },
  {
    name: "Veracruz",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Tiburones_Rojos_Veracruz.png/200px-Tiburones_Rojos_Veracruz.png",
    liga: "LigaMX",
    juegos: [
      "Pachuca",
      "Necaxa",
      "Atlas",
      "Pumas",
      "Atletico San Luis",
      "Queretaro",
      "Monarcas",
      "Cruz Azul",
      "Bravos",
      "Club Santos Laguna",
      "Toluca",
      "Leon",
      "Tigres",
      "Tijuana",
      "Puebla",
      "Monterrey",
      "America",
      "Chivas"
    ]
  },
  {
    name: "Pumas",
    logo:
      "https://clipart.info/images/ccovers/1503438055pumas-unam-football-logo-png.png",
    liga: "LigaMX",
    juegos: [
      "Atletico San Luis",
      "Necaxa",
      "Tigres",
      "Tijuana",
      "Veracruz",
      "Monarcas",
      "Monterrey",
      "Toluca",
      "America",
      "Cruz Azul",
      "Club Santos Laguna",
      "Chivas",
      "Leon",
      "Queretaro",
      "Atlas",
      "Puebla",
      "Bravos",
      "Pachuca"
    ]
  },
  {
    name: "Tigres",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/55/Logo_Tigres_2018.png",
    liga: "LigaMX",
    juegos: [
      "Monarcas",
      "Chivas",
      "Pumas",
      "Necaxa",
      "Atletico San Luis",
      "America",
      "Tigres",
      "Leon",
      "Tijuana",
      "Puebla",
      "Monterrey",
      "Club Santos Laguna",
      "Veracruz",
      "Cruz Azul",
      "Toluca",
      "Queretaro",
      "Pachuca",
      "Bravos"
    ]
  },
  {
    name: "Tijuana",
    logo:
      "https://upload.wikimedia.org/wikipedia/en/thumb/2/29/Club_Tijuana_logo.svg/200px-Club_Tijuana_logo.svg.png",
    liga: "LigaMX",
    juegos: [
      "Puebla",
      "Queretaro",
      "America",
      "Pumas",
      "Toluca",
      "Cruz Azul",
      "Necaxa",
      "Tigres",
      "Pachuca",
      "Monarcas",
      "Atletico San Luis",
      "Atlas",
      "Club Santos Laguna",
      "Veracruz",
      "Chvias",
      "Bravos",
      "Monterrey",
      "Leon"
    ]
  },
  {
    name: "Monarcas",
    logo:
      "https://cdn.freebiesupply.com/logos/large/2x/monarcas-morelia-logo-png-transparent.png",
    liga: "LigaMX",
    juegos: [
      "Tigres",
      "Atlas",
      "Pachuca",
      "Monterrey",
      "America",
      "Monarcas",
      "Atletico San Luis",
      "Veracruz",
      "Toluca",
      "Chivas",
      "Tijuana",
      "Necaxa",
      "Cruz Azul",
      "Club Santos Laguna",
      "Bravos",
      "Leon",
      "Puebla",
      "Queretaro"
    ]
  },
  {
    name: "Queretaro",
    logo:
      "https://cdn.freebiesupply.com/logos/large/2x/queretaro-logo-png-transparent.png",
    liga: "LigaMX",
    juegos: [
      "Toluca",
      "Tijuana",
      "Cruz Azul",
      "Pachuca",
      "Bravos",
      "Leon",
      "Veracruz",
      "Puebla",
      "America",
      "Necaxa",
      "Atlas",
      "Monterrey",
      "Atletico San Luis",
      "Pumas",
      "Club Santos Laguna",
      "Tigres",
      "Chivas",
      "Monarcas"
    ]
  },
  {
    name: "America",
    logo:
      "https://www.clubamerica.com.mx/portal/wp-content/themes/cfamerica/img/header/ClubAmericaLogo.png",
    liga: "LigaMX",
    juegos: [
      "Monterrey",
      "Leon",
      "Tijuana",
      "Toluca",
      "Monarcas",
      "Tigres",
      "Pachuca",
      "Atlas",
      "Pumas",
      "Queretaro",
      "Bravos",
      "Chivas",
      "Cruz Azul",
      "Necaxa",
      "Puebla",
      "Atletico San Luis",
      "Club Santos Laguna",
      "Veracruz"
    ]
  },
  {
    name: "Cruz Azul",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Escudo_Deportivo_Cruz_Azul.png",
    liga: "LigaMX",
    juegos: [
      "Necaxa",
      "Toluca",
      "Queretaro",
      "Bravos",
      "Atlas",
      "Puebla",
      "Tijuana",
      "Chivas",
      "Veracruz",
      "Pumas",
      "Monterrey",
      "Pachuca",
      "America",
      "Monarcas",
      "Tigres",
      "Leon",
      "Club Santos Laguna",
      "Atletico San Luis"
    ]
  },
  {
    name: "Toluca",
    logo:
      "https://upload.wikimedia.org/wikipedia/commons/0/0c/Toluca_Escudo_1982.png",
    liga: "LigaMX",
    juegos: [
      "Queretaro",
      "Cruz Azul",
      "Bravos",
      "America",
      "Veracruz",
      "Monterrey",
      "Tijuana",
      "Necaxa",
      "Pumas",
      "Monarcas",
      "Atlas",
      "Atletico San Luis",
      "Veracruz",
      "Puebla",
      "Pachuca",
      "Tigres",
      "Chivas",
      "Leon",
      "Club Santos Laguna"
    ]
  }
];
mongoose
  .connect("mongodb://localhost/backend", { useNewUrlParser: true })
  .then(async () => {
    const results = await Equipo.create(equipos);
    console.log(`${results.length}, equipos created`);
    mongoose.connection.close();
  })
  .catch(err => console.log(err));
