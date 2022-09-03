import App from "../src/main";

test("obtenerNombre()", () => {
  let myApp = new App();
  let nombres = ["Dragón", "Serpiente", "Caballo", "Oveja", "Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Liebre"];

  for(let i = 0; i < 25; i++) {
    expect(myApp.obtenerNombre(i).toLowerCase()).toBe(nombres[i%12].toLowerCase());
  }

  for(let i = 3600; i < 3625; i++) {
    expect(myApp.obtenerNombre(i).toLowerCase()).toBe(nombres[i%12].toLowerCase());
  }

});
