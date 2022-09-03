import App from "../src/main";

test("obtenerTipoTriangulo(3, 3, 3) igual a 3", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(3, 3, 3).toFixed(2)).toBe((3).toFixed(2));
});

test("obtenerTipoTriangulo(3, 3, 1) igual a 2", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(3, 3, 1).toFixed(2)).toBe((2).toFixed(2));
});

test("obtenerTipoTriangulo(1, 3, 1) igual a 2", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(1, 3, 1).toFixed(2)).toBe((2).toFixed(2));
});

test("obtenerTipoTriangulo(1, 3, 3) igual a 2", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(1, 3, 3).toFixed(2)).toBe((2).toFixed(2));
});

test("obtenerTipoTriangulo(1, 2, 3) igual a 1", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(1, 2, 3).toFixed(2)).toBe((1).toFixed(2));
});

test("obtenerTipoTriangulo(3, 2, 1) igual a 1", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(3, 2, 1).toFixed(2)).toBe((1).toFixed(2));
});

test("obtenerTipoTriangulo(3, 1, 2) igual a 1", () => {
  let myApp = new App();
  expect(myApp.obtenerTipoTriangulo(3, 1, 2).toFixed(2)).toBe((1).toFixed(2));
});
