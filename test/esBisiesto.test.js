import App from "../src/main";

test("esBisiesto() igual a true", () => {
  let myApp = new App();
  let positiveTest = [1804, 1808, 1812, 1816, 1820, 1824, 1828, 1832, 1836, 1840];

  for(let i = 0; i<10; i++) {
    expect(myApp.esBisiesto(positiveTest[i])).toBe(true);
  }
});

  test("esBisiesto() igual a false", () => {
    let myApp = new App();
    let falseTest = [1805, 1806, 1807, 1809, 1810, 1811, 1813, 1814, 1815, 1817];
  
    for(let i = 0; i<10; i++) {
      expect(myApp.esBisiesto(falseTest[i])).toBe(false);
    }
  });



