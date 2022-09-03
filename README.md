
![Logo UCOL](img/ucol-logo.jpg)

![Portada](img/cover.jpg)

<span>Photo by <a href="https://unsplash.com/@leliejens?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jens Lelie</a> on <a href="https://unsplash.com/s/photos/decision?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## Título

Práctica: Condicionales

## Propósito

Ejercicio para practicar la forma en la se puede controlar el flujo del programa utilizando condicionales.

## Requerimientos funcionales

- (3 puntos) Un triángulo puede ser clasificado basándose en la longitud de  sus lados como:
  - Equilátero si tiene los 3 lados de longitudes iguales
  - Isósceles si tiene 2 lados de longitudes iguales
  - Escaleno si tiene los 3 lados de longitudes diferentes.
- Escribir una función que reciba como parámetro las longitudes de los 3 lados de un triángulo y regrese 3 si es equilátero, 2 si es isósceles o 1 si es escaleno
  - `obtenerTipoTriangulo(ladoA, ladoB, ladoC);`

- (3 puntos) El zodiaco chino asigna animales a los años en un ciclo de 12  años. Un ciclo de 12 años es mostrado en el siguiente listado.  El patrón se repite desde ahí, con 2016 siendo otro año del  dragón, y 2003 otro año de la liebre.
  - 2004: Dragón
  - 2005: Serpiente
  - 2006: Caballo
  - 2007: Oveja
  - 2008: Mono
  - 2009: Gallo
  - 2010: Perro
  - 2011: Cerdo
  - 2012: Rata
  - 2013: Buey
  - 2014: Tigre
  - 2015: Liebre

- Escribir una función que reciba como parámetro un año y regrese el nombre del animal que corresponde de acuerdo al zodiaco chino. La función debe ser capáz de evaluar correctamente cualquier  año mayor o igual a cero.
  - `obtenerNombre(year);`

- (4 puntos) La mayoría de años constan de 365 días. Sin embargo, el tiempo requerido  por la tierra para girar alrededor del sol es un poco más de eso. Pe esto,  un día extra, Febrero 29, es incluido en algunos años para corregir por  esta diferencia. A estos años se les conoce como años bisiestos.
- Escribir una función que reciba como parámetro un año y regrese `true` si el año es bisiesto o `false`si el año no es bisiesto. 
- Las reglas  para determinar si un año es o no es bisiesto son las siguientes:  
  - Cualquier año que es divisible entre 400 es un año bisiesto  
  - Del resto de años, cualquier año que es divisible entre 100 no es bisiesto  
  - Del resto de años, cualquier año que es divisible por 4 es un año bisiesto  
  - Todos los demás años no son bisiestos  

- `esBisiesto(year);`
  
## Requerimientos no funcionales

- Las funciones deberán tener el nómbre que se indica y el número y tipo de parámetros que se especifica.
- El programa deberá probar y mostrar el correcto funcionamiento de las funciones.
- El programa deberá funcionar en consola

## Entregable

- Código fuente en este repositorio
  
## Evaluación

- Para que el ejercicio sea considerado como válido, el repositorio deberá tener por lo menos 1 commit por cada método o función.
- Los repositorios que no tengan una historia de commits considerable NO serán considerados como válidos y tendrán calificación cero
