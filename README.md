# Memory Match: Pokémon Edition!

## Definición del producto:

“Memory Match: Pokémon Edition!” es, en pocas palabras, un memorama en línea con temática de Pokémon. Un memorama es un juego de cartas en solitario, en el que se despliega cara abajo un set de cartas y se conmina al jugador a ir volteándolas cara arriba de a dos por turno, con el fin de emparejarlas por coincidencia de caras. El jugador deberá cliquear las cartas para voltearlas, y el juego dejará los pares cara arriba, o descubiertos, si sus caras son las mismas, o volverá a voltearlos cara abajo, o cubrirlos, si sus caras son distintas. El juego culmina una vez que el jugador ha emparejado todas las cartas, en cuyas caras, en el caso de “Memory Match: Pokémon Edition!”, figuran 9 pokémons distintos.

## Definición del perfil de usuario:

El usuario ideal de “Memory Match: Pokémon Edition!” está en rango etario millennial, es decir, tiene de 25 a 40 años aproximadamente. La temática del memorama le resulta a la vez evocativa y contemporánea, pues la recuerda de las animaciones televisivas y los videojuegos de su infancia, y a la vez la nota vigente como franquicia de medios de entretenimiento entre las generaciones actuales. Eso dicho, dada la sencillez del diseño y de las funcionalidades de la aplicación, su acceso no está en rigor vetado a usuarios más jóvenes.
La experiencia ideal de uso es, en esencia, recreativa: el usuario recurre a la aplicación en momentos de ocio, buscando distención y entretenimiento.

## Cómo funcionan el juego y la aplicación:

En la interfaz aparece desplegado un set de 18 cartas, todas ellas inicialmente cara abajo. Al cliquearlas, se las voltea cara arriba de a dos por vez o turno, y se evalúa si sus caras coinciden o no. Si las caras coinciden, el par de cartas permanece descubierto y el jugador gana puntaje; en cambio, si las caras no coinciden, el par de cartas vuelve a cubrirse y el puntaje no se altera. El jugador podrá cliquear las cartas no emparejadas tantas veces como le haga falta para emparejarlas, sin límite de turnos ni de tiempo, y habrá ganado la partida una vez que las 18 cartas se hallen descubiertas o, lo mismo, una vez que haya formado 9 pares. Podrá, asimismo, llevar el registro de su puntaje acumulado, que en la interfaz figura como “score” y cuyo tope es de 900 puntos (100 puntos por par de cartas con caras coincidentes). Finalmente, podrá cliquear el botón ubicado bajo el “score” si desea reiniciar la partida en curso o, al acabar esta, jugar una nueva. Reiniciar la partida en curso/iniciar una nueva partida implica que el set de cartas completo se vuelve a desplegar en pantalla re-barajado y cara abajo.

## Historias de usuario:

### H. U. 1.- “Como usuario, quiero acceder a una interfaz visualmente sencilla, esto es, comprensible en su totalidad a primera vista.”

#### Criterios de aceptación:

- Se diseña una interfaz sin exceso de adornos, con solo una pantalla de componenetes auto explicativos.
- Los componentes de la interfaz (título, grilla de cartas, puntaje, pie de página...) se bocetean correctamente jerarquizados.
- En los bocetos de baja y alta fidelidad, el tamaño y color de los componentes de la interfaz se ajustan en pos de optimizar su visualización.

#### Definición de terminado:

- Se realiza prototipo de baja fidelidad. En este se bocetea la estructura general de la aplicación.
- Se realiza el prototipo de alta fidelidad (en Figma). Este muestra más fielmente la apariencia “final” de la aplicación.

### H. U. 2.- “Como usuario, quiero jugar sin tener que registrarme.”

#### Criterios de aceptación:

- No hay elemento input ni otro similar mediante el cual se le pida al usuario que se identifique.

#### Definición de terminado:

- El set de cartas y el resto de los componentes de la aplicación son visibles y funcionales apenas carga la página web.

### H. U. 3.- “Como usuario, quiero que el set de cartas se despliegue en pantalla ya barajado y volteado cara abajo, y que cada carta se voltee cara arriba al ser cliqueada.”

#### Criterios de aceptación:

- El set de cartas aparece desde el primer momento ya barajado y volteado cara abajo.
- Las cartas se voltean cara arriba al ser cliqueadas.

#### Definición de terminado:

- Se crea la función shuffle para barajar las cartas cada vez que cargue la página web.
- Se da un evento click a las cartas, para que estas reaccionen al él voltéandose cara arriba.

### H. U. 4.- “Como usuario, quiero que el par de cartas cliqueadas permanezca descubierto si sus caras coinciden, y que vuelva a cubrirse si sus caras no coinciden.”

#### Criterios de aceptación:

- Las cartas que coinciden permaneces descubiertas.
- Las cartas que no coinciden vuelven a cubrirse.

#### Definición de terminado:

- Se crea la función checkMatch, que diferencia entre las cartas cuyos ids son iguales o distintos. 

### H. U. 5.- “Como usuario, quiero poder jugar más de una partida, o reiniciar la partida en curso en cualquier momento.”

#### Criterios de aceptación:

- El partida en curso puede reiniciarse.
- Luego de terminar la partida en curso, puede iniciarse una nueva partida.

#### Definición de terminado:

- Se crea un elemento botón con un evento click que recarga la página, volteando del revés todas cartas y re-bajarndo el set completo.

### H. U. 6.- “Como usuario, quiero llevar el registro visual del estado de la partida.”

#### Criterios de aceptación:

- Las cartas que hacen par permanecen cara arriba.
- Cada vez que las cartas hacen par, el usuario ve en la pantalla que su puntaje aumenta.

#### Definición de terminado:

- Se crea la función checkMatch, que reconoce la igualdad de los ids de las cartas cliqueadas.

- Dentro de la función checkMatch, un condicional aumenta el puntaje cada vez que se reconoce la igualdad de los ids de las cartas cliqueadas.

### H. U. 7.- “Como usuario, quiero poder jugar el memorama indistintamente en mi teléfono, en mi tablet y en mi notebook.”

#### Criterios de aceptación:

- El disiño de la aplicación es responsivo.

#### Definición de terminado:

- Se agrega al css las media queris que permiten visualizar y jugar el memorama en celulares y tablets, además de notebooks.

## Prototipo de baja fidelidad:

![](src/images/bajafidelidad1.png)

## Prototipo de alta fidelidad:

(LINK AL PROTOTIPO EN FIGMA)


# Memory Match Game

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Consideraciones técnicas](#7-consideraciones-técnicas)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)
* [9. Checklist](#9-checklist)

***

## 1. Preámbulo

El juego [_Memory Match_](https://en.wikipedia.org/wiki/Concentration_(card_game)),
también conocido como _Concentration_, _Match Match_, _Match Up_, _Memory_,
entre otros, es un juego de cartas en el que todas las cartas se ponen cara
abajo sobre una superficie y se le dan la vuelta a dos cartas en cada turno. El
objetivo del juego es destapar parejas de cartas que coincidan.

![Concentration (card game)](https://upload.wikimedia.org/wikipedia/commons/4/4d/WMCZ_Protected_Areas_Card_Game-7_%28cropped%29.jpg)

Ejemplos:

* [Santa Tracker de Google](https://santatracker.google.com/matching.html)
* [Match The Memory](https://matchthememory.com/play)

## 2. Resumen del proyecto

En este proyecto construirás una versión _web_ del juego _Memory Match_, en la
que una jugadora pueda jugar sola, en el navegador.

## 3. Objetivos de aprendizaje

El objetivo principal de este proyecto es que aprendas a diseñar y construir una
interfaz web basada en data e interacción con la usuaria.

### HTML y CSS

* [ ] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [ ] Uso de selectores de CSS.
* [ ] Construir tu aplicación respetando el diseño realizado (maquetación).
* [ ] [Uso de flexbox en CSS.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### DOM y Web APIs

* [ ] Uso de selectores del DOM.
* [ ] Manejo de eventos del DOM.
* [ ] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [ ] Uso de bucles (for | for..in | for..of | while)
* [ ] Uso de funciones (parámetros | argumentos | valor de retorno)
* [ ] Manipular arrays (filter | map | sort | reduce)
* [ ] Manipular objects (key | value)
* [ ] Uso ES modules ([`import`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
| [`export`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export))
* [ ] Diferenciar entre expression y statements.
* [ ] Diferenciar entre tipos de datos atómicos y estructurados.

### Testing

* [ ] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [ ] Organizar y dividir el código en módulos (Modularización)
* [ ] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [ ] Uso de linter (ESLINT)

### Git y GitHub

* [ ] Uso de comandos de git (add | commit | pull | status | push)
* [ ] Manejo de repositorios de GitHub (clone | fork | gh-pages)
* [ ] Colaboración en Github (branches | pull requests | |tags)

### UX

* [ ] Diseñar la aplicación pensando y entendiendo al usuario.
* [ ] Crear prototipos para obtener feedback e iterar.
* [ ] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)
* [ ] Planear y ejecutar tests de usabilidad.

## 4. Consideraciones generales

* Este proyecto se debe resolver en duplas.
* El proyecto será entregado subiendo tu código a GitHub (commit/push) y la
  interfaz será desplegada usando [GitHub Pages](https://pages.github.com/).

## 5. Criterios de aceptación mínimos del proyecto

Los criterios para considerar que has completado este proyecto son:

### Definición del producto

Documenta brevemente tu trabajo en el archivo `README.md` de tu repositorio,
contándonos cómo fue tu proceso de diseño y cómo crees que el producto resuelve
el problema (o problemas) que tiene tu usuario.

### Historias de usuario

Una vez que entiendas las necesidades de tus usuarios, escribe las [Historias
de Usuario](https://es.wikipedia.org/wiki/Historias_de_usuario) que representen
todo lo que el usuario necesita hacer/ver. Las **Historias de Usuario** deben
ser el resultado de tu proceso de investigación o _research_ de tus usuarios.

Asegúrate de incluir la definición de terminado (_definition of done_) y los
Criterios de Aceptación para cada una.

En la medida de lo posible, termina una historia de usuario antes de pasar
a la siguiente (Cumple con Definición de Terminado + Criterios de Aceptación).

### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Dado un set de cartas, barajar las cartas y mostrarlas en la interfaz.
2. Permitir al usuario _destapar_ las cartas de 2 en 2.
3. Dejar destapadas las cartas que coincidan al destaparlas.
4. Indicar al usuario que ganó cuando haya destapado todas las cartas.
5. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
6. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto incluye
[pruebas unitarias (_unit tests_) de un componente como ejemplo](./src/components/App.spec.js).
A medida que vayas agregando componentes tendrás que ir agregando pruebas para
mantener buena _cobertura_.

Tus _pruebas unitarias_ deben tener una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) de tus componentes.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregar nuevos sets de cartas.
* Calcular puntuación basado en número de turnos.
* Agregar timer y tener cuenta en puntuación.
* 100% Coverage

## 7. Consideraciones técnicas

La lógica del proyecto debe estar implementada completamente en JavaScript,
HTML y CSS. En este proyecto NO está permitido usar librerías o frameworks, solo
[vanilla JavaScript](https://medium.com/laboratoria-how-to/vanillajs-vs-jquery-31e623bbd46e).

No se debe utilizar la _pseudo-variable_ `this`.

Para iniciar un nuevo juego, siempre tendremos que _barajar_ las cartas antes de
pintarlas en la pantalla. Para eso, te invitamos a que explores algoritmos
existentes para este tipo de operación (llamada _shuffle_ en inglés), como por
ejemplo el [_algoritmo de Fisher-Yates (aka Knuth)_](https://es.wikipedia.org/wiki/Algoritmo_de_Fisher-Yates).

En este proyecto no se espera que _inventes_ o implementes tu propio algoritmo
para barajar las cartas, si no que _googlees_, veas opciones existentes,
consideres opciones y adaptes una a tu proyecto (agregando una función `shuffle`
que se pueda usar en tu aplicación).

El _boilerplate_ contiene una estructura de archivos como punto de partida así
como toda la configuración de dependencias:

```text
.
├── .babelrc
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
├── README.md
└── src
    ├── components
    │   ├── App.js
    │   └── App.spec.js
    ├── data
    │   ├── pokemon
    │   │   ├── pokemon.js
    │   │   └── pokemon.json
    │   ├── README.md
    │   └── webdev
    │       ├── webdev.js
    │       └── webdev.json
    ├── index.html
    ├── main.js
    └── style.css
```

### `src/index.html`

Como en el proyecto anterior, existe un archivo `index.html`. Como ya sabes,
acá va la página que se mostrará al usuario. También nos sirve para indicar
qué scripts se usarán y unir todo lo que hemos hecho.

### `src/main.js`

Recomendamos usar `src/main.js` como punto de entrada de tu aplicación. El
_boilerplate_ incluye este archivo para _conectar_ o _montar_ el _componente_
`App` en el DOM. De esta forma podremos hacer pruebas unitarias de nuestros
componentes sin necesidad de que estén conectados a un DOM global.

Esta no es la única forma de dividir tu código, puedes usar más archivos y
carpetas, siempre y cuando la estructura sea clara para tus compañeras.

### `src/components/App.js`

Este archivo contiene un _componente_ de ejemplo que muestra cómo podemos
representar un _componente_ como una función que retorna un `HTMLElement`. A la
hora de construir interfaces es útil pensar en términos de _componentes_ o
_vistas_ que podemos ir anidando unas dentro de otras. Te invitamos a que
pienses qué _componentes_ o _cajitas_ necesitas para construir tu aplicación y
que vayas agregando _componentes_ en el directorio `components` para implementar
cada uno de ellos. Aunque, otra vez, la forma de organizar tu archivos depende
al final de tí y de tu equipo. Hay muchas formas de hacerlo, y el _boilerplate_
es solo una sugerencia 🙊.

### `src/components/App.spec.js`

Este archivo muestra cómo podemos crear archivos con _especificaciones_
(expresadas como pruebas unitarias) de nuestros componentes.

### `src/data`

En esta carpeta hay data con sets de cartas de ejemplo que puedes usar en tu
aplicación, así como información sobre cómo agregar tus propios sets.
Encontrarás una carpeta por cada set, y dentro de cada carpeta dos archivos: uno
con la extensión `.js` y otro `.json`. Ambos archivos contienen la misma data;
la diferencia es que el `.js` lo usaremos a través de un `import`, mientras que
el `.json` está ahí para opcionalmente cargar la data de forma asíncrona con
[`fetch()`](https://developer.mozilla.org/es/docs/Web/API/Fetch_API).

## 8. Pistas, tips y lecturas complementarias

### Primeros pasos

Antes de empezar a escribir código, debes definir qué deberá hacer el producto
en base al conocimiento que puedas obtener de tu usuario. Estas preguntas te
pueden ayudar:

* ¿Quiénes son los principales usuarios de producto?
* ¿Cuáles son los objetivos de estos usuarios en relación con el producto?
* ¿Cuáles son los componentes principales de la interfaz y por qué?
* ¿Cuándo utilizan o utilizarían el producto?
* Toda tu investigación previa debe tener como resultado todas las Historias
  de Usuario de tu proyecto.
* No hagas los prototipos de alta fidelidad de todas tus Historias. Comienza
  solamente por los que se necesiten para tu Sprint 1 (semana 1 de trabajo). Más
  pistas en la guía de organización para el proyecto.

Cuando ya estés lista para codear, te sugerimos empezar de esta manera:

1. Una de las integrantes del equipo debe realizar un :fork_and_knife:
   [fork](https://help.github.com/articles/fork-a-repo/) del repo de tu cohort,
   tus _coaches_ te compartirán un _link_ a un repo y te darán acceso de lectura
   en ese repo. La otra integrante del equipo deber hacer un fork **del
   repositorio de su compañera** y
   [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote`
   hacia el mismo.
2. :arrow_down: [Clona](https://help.github.com/articles/cloning-a-repository/)
   tu *fork* a tu computadora (copia local).
3. 📦 Instala las dependencias del proyecto con el comando `npm install`. Esto
   asume que has instalado [Node.js](https://nodejs.org/) (que incluye [npm](https://docs.npmjs.com/)).
4. Si todo ha ido bien, deberías poder ejecutar las :traffic_light:
   pruebas unitarias (unit tests) con el comando `npm test`.
5. Para ver la interfaz de tu programa en el navegador, usa el comando
  `npm start` para arrancar el servidor web y dirígete a
  `http://localhost:5000` en tu navegador.
6. A codear se ha dicho! :rocket:

### Contenido de referencia

#### Diseño de experiencia de usuario (User Experience Design)

* Investigación con usuarios / entrevistas
* Principios de diseño visual

#### Desarrollo Front-end

* Unidad de testing en curso de JavaScript en LMS.
* Unidad de arreglos en curso de JavaScript en LMS.
* Unidad de objetos en curso de JavaScript en LMS.
* Unidad de funciones en curso de JavaScript en LMS.
* Unidad de DOM en curso de Browser JavaScript en LMS.
* [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
* [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
* [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
* [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
* [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
* [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
* [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
* [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
* [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
* [json.org](https://json.org/json-es.html)
* [expressions-vs-statements](https://2ality.com/2012/09/expressions-vs-statements.html)
* [expresión vs sentencia](https://openclassrooms.com/en/courses/4309531-descubre-las-funciones-en-javascript/5108986-diferencia-entre-expresion-y-sentencia)
* [datos atómicos vs datos estructurados](https://www.todojs.com/tipos-datos-javascript-es6/)
* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)

#### Herramientas

* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)
* [GitHub Pages](https://pages.github.com/)
* [Node.js](https://nodejs.org/)
* [Jest](https://jestjs.io/)

#### Organización del Trabajo

* [Historias de Usuario](https://www.youtube.com/watch?v=ky6wFiF5vMk&t=344s).
  Ojo que Cris no diferencia _Definición de terminado_ de _Criterios de
  Aceptación_ y nosotros sí lo haremos. Más detalles en la guía.
* [Cómo dividir H.U.](https://www.youtube.com/watch?v=Ueq786iZ30I&t=341s)
* [Guía para Memory Match](https://docs.google.com/presentation/d/e/2PACX-1vQhx9D36NjpH-Daea-ITPUDUzNL8ZiNAprq_7b5PSUrfutk45tEtaOLz2lmd8f54_5jX1hypDM8f8SM/pub?start=false&loop=false&delayms=60000)

## 9. Checklist

* [ ] Usa VanillaJS.
* [ ] No hace uso de `this`.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra cartas _barajadas_ correctamente.
* [ ] UI: Permite al usuario _destapar_ las cartas de 2 en 2.
* [ ] UI: Deja destapadas las cartas que coincidan al destaparlas.
* [ ] UI: Indica al usuario que ganó cuando sea relevante.
* [ ] UI: Es _responsive_.
* [ ] UI: La interfaz sigue los fundamentos de _visual design_.
