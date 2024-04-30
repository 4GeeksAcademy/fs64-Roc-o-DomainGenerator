/* eslint-disable */
// import "bootstrap";
// import "./style.css";

// import "./assets/img/rigo-baby.jpg";
// import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  console.log("buenos días");

  const getFirst = () => {
    const firsts = [
      "caldo gallego",
      "ensalada tropical",
      "gazpacho",
      "arroz con setas"
    ];

    return firsts;
  };

  const getSecond = () => {
    const seconds = [
      "milanesa con patatas",
      "pollo a la cerveza",
      "lubina al horno",
      "pulpo á feira"
    ];

    return seconds;
  };

  const getDesserts = () => {
    const desserts = [
      "tarta de queso",
      "tarta de manzana",
      "tarta de frutos rojos",
      "tarta de chocolate"
    ];

    return desserts;
  };

  function getMenu(firsts, seconds, desserts) {
    const combinedArray = firsts.map((first, index) => {
      const combination = `${first} con ${seconds[index]} con ${desserts[index]}`;
      return combination;
    });

    const random = Math.floor(Math.random() * combinedArray.length);
    return combinedArray[random];
  }

  function main() {
    const Primero = getFirst();
    const Segundo = getSecond();
    const Postre = getDesserts();

    const combinedArray = getMenu(Primero, Segundo, Postre);

    console.log(combinedArray);
  }

  main();
};
