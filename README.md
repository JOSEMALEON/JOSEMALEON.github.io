# Portfolio de José Manuel León Carmona

Portfolio profesional estático, bilingüe y responsive orientado a candidaturas de **Junior Software Developer**.

## Qué incluye

- Presentación profesional con foto.
- Selector español / inglés.
- Tema oscuro / claro con persistencia local.
- Diseño responsive para móvil, tablet y escritorio.
- Sección de perfil y fortalezas.
- Stack técnico sin barras de nivel artificiales.
- Proyecto destacado **MagicInventory** con mockup y arquitectura funcional.
- Experiencia en Tier1 Technology y Hermes Delivery.
- Formación y certificaciones.
- Descarga automática del CV en español o inglés según el idioma seleccionado.
- Contacto por email y LinkedIn.
- Botón para copiar el email.
- Animaciones respetando `prefers-reduced-motion`.
- SEO básico, Open Graph, JSON-LD y página 404.
- Sin dependencias externas ni frameworks: HTML + CSS + JavaScript.

## Estructura

```text
Portfolio_Jose_Manuel_Leon_Base/
├── index.html
├── styles.css
├── script.js
├── favicon.svg
├── site.webmanifest
├── robots.txt
├── 404.html
├── README.md
└── assets/
    ├── images/
    │   └── jose-manuel-leon.png
    └── docs/
        ├── CV_Jose_Manuel_Leon_ES.pdf
        └── CV_Jose_Manuel_Leon_EN.pdf
```

## Abrirlo en local

La forma más sencilla es abrir `index.html` en Chrome o Edge. Para evitar limitaciones del navegador al probar algunas funciones, es mejor servir la carpeta con un servidor local.

### Con Python

Desde la carpeta del proyecto:

```bash
python -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

### Con VS Code

Puedes usar la extensión **Live Server** y abrir `index.html` con ella.

## Publicarlo en GitHub Pages

1. Crea un repositorio público llamado, por ejemplo, `portfolio`.
2. Sube **el contenido** de esta carpeta a la raíz del repositorio.
3. Abre `Settings` → `Pages`.
4. En `Build and deployment`, selecciona `Deploy from a branch`.
5. Selecciona la rama `main` y `/ (root)`.
6. Guarda y espera a que GitHub muestre la URL pública.

## Publicarlo en Vercel

1. Sube el proyecto a GitHub.
2. En Vercel, importa el repositorio.
3. No hace falta configurar framework ni comando de build.
4. Publica el proyecto.

## Antes de hacerlo público

Revisa:

- que la foto sea la que quieres mostrar;
- que LinkedIn y el email sean correctos;
- que los CV de `assets/docs` sean las versiones definitivas;
- que estés de acuerdo con el contenido de MagicInventory;
- que no quieras añadir o quitar Hermes Delivery del portfolio tecnológico.

## Próximas mejoras recomendadas

Cuando MagicInventory esté más avanzado:

- sustituir el mockup por capturas reales;
- publicar un repositorio limpio en GitHub;
- añadir botones `Ver código` y/o `Demo`;
- crear una segunda tarjeta de proyecto;
- conectar un dominio propio;
- añadir analítica solo si realmente la necesitas.


## Mejoras incluidas en esta versión

- Sección **Qué puedo aportar** con fortalezas vinculadas a experiencia real.
- Bloque **Actualmente** con el estado profesional y del proyecto.
- Barra de progreso de lectura fija y muy fina en el borde inferior de la ventana.
- Se mantiene la corrección responsive de la línea temporal de experiencia.

## Responsive / móvil (v3)

Esta versión incluye ajustes específicos para pantallas pequeñas: navegación desplegable flotante, botones táctiles, portada reescalada, tarjetas compactas, mockup de MagicInventory simplificado, timeline adaptada, contacto apilable y prevención de desbordamientos de texto. También sincroniza el color de la barra del navegador con el tema oscuro/claro cuando el navegador lo permite.


## v4 — Corrección móvil de experiencia

La línea temporal móvil separa fecha y contenido en filas distintas para evitar solapamientos.


## Cambios de la versión v6

- Indicador de sección activa en navegación de escritorio y móvil.
- Microinteracciones sutiles en tarjetas, etiquetas y botones.
- Entrada escalonada de tarjetas al hacer scroll.
- Botón flotante «volver arriba» que aparece tras avanzar por la página.
- Respeta `prefers-reduced-motion` para accesibilidad.
