export default class App {
  
    obtenerTipoTriangulo(ladoA, ladoB, ladoC){
        let mensaje;

        if(ladoA == ladoB & ladoB == ladoC) {
            mensaje = 3;
        } else if (ladoA > ladoB && ladoA == ladoC || ladoB > ladoA && ladoB == ladoC || ladoC > ladoA && ladoC == ladoB || ladoA > ladoC && ladoC == ladoB || ladoB > ladoC && ladoB == ladoA || ladoC > ladoB && ladoC == ladoA || ladoB > ladoA && ladoA == ladoC || ladoC > ladoA && ladoA == ladoB) {
            mensaje = 2;
        } else if (ladoA, ladoB, ladoC) {
            mensaje = 1;
        }

        return mensaje;
    }

    obtenerNombre(year) {
        let resultado;

        if(year % 12 === 0) {
            resultado = "Dragón"
        } else if (year % 12 === 1) {
            resultado = "Serpiente"
        } else if (year % 12 === 2) {
            resultado = "Caballo"
        } else if (year % 12 === 3) {
            resultado = "Oveja"
        } else if (year % 12 === 4) {
            resultado = "Mono"
        } else if (year % 12 === 5) {
            resultado = "Gallo"
        } else if (year % 12 === 6) {
            resultado = "Perro"
        } else if (year % 12 === 7) {
            resultado = "Cerdo";
        } else if (year % 12 === 8) {
            resultado = "Rata"
        } else if (year % 12 === 9) {
            resultado = "Buey"
        } else if (year % 12 === 10) {
            resultado = "Tigre"
        } else if (year % 12 ===11) {
            resultado = "Liebre"
        } 

        return resultado;
    }


    esBisiesto(year) {
        let resultado; 

        if(year % 4 === 0) {
            resultado = true
        } else if (year % 100) {
            resultado = false
        } else if (year % 400 === 0) { 
            resultado = true
        } 

        return resultado;
    }
}

let app = new App();

console.log("Probando obtenerTipoTriangulo");
console.log(app.obtenerTipoTriangulo(3, 3, 3));
console.log(app.obtenerTipoTriangulo(3, 3, 1));
console.log(app.obtenerTipoTriangulo(1, 3, 1));
console.log(app.obtenerTipoTriangulo(1, 3, 3));
console.log(app.obtenerTipoTriangulo(1, 2, 3));
console.log(app.obtenerTipoTriangulo(3, 2, 1));
console.log(app.obtenerTipoTriangulo(3, 1, 2));

console.log("Probando obtenerNombre")
console.log(app.obtenerNombre(2004))
console.log(app.obtenerNombre(1648))
console.log(app.obtenerNombre(1))
console.log(app.obtenerNombre(1385))
console.log(app.obtenerNombre(956))
console.log(app.obtenerNombre(243))
console.log(app.obtenerNombre(754))
console.log(app.obtenerNombre(1379))
console.log(app.obtenerNombre(2054))
console.log(app.obtenerNombre(2025))
console.log(app.obtenerNombre(1950))
console.log(app.obtenerNombre(1987))

console.log("Probando esBisiesto")
console.log(app.esBisiesto(1600));
console.log(app.esBisiesto(2000));
console.log(app.esBisiesto(2010));
console.log(app.esBisiesto(2020));
console.log(app.esBisiesto(3042));







