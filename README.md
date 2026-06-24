# FCU Legal Web

Sitio web estático para FCU Legal, listo para publicarse con GitHub Pages. No requiere backend, base de datos ni frameworks.

## Estructura

```text
fcu-legal-web/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo-fcu-legal.svg
        ├── abogado-francisco-centeno.jpg
        └── fondo-legal.avif
```

## Publicar en GitHub Pages

1. Crear un repositorio en GitHub llamado `fcu-legal-web`.
2. Subir todos los archivos de esta carpeta al repositorio.
3. Ir a `Settings > Pages`.
4. En `Source`, seleccionar `Deploy from a branch`.
5. Seleccionar la rama `main` y la carpeta `/root`.
6. Guardar y esperar a que GitHub genere el enlace público.

## Actualizar contenido

- Textos principales: editar `index.html`.
- Colores, espaciados y estilos: editar `assets/css/styles.css`.
- Numero de WhatsApp: buscar `593969341483` en `index.html` y `assets/js/main.js`.
- Correo: buscar `fcenteno84@hotmail.com` en `index.html`.
- Dirección: buscar `Guido Urbina y S7` en `index.html`.
- Foto del abogado: reemplazar `assets/img/abogado-francisco-centeno.jpg` manteniendo el mismo nombre.
- Fondo del hero: reemplazar `assets/img/fondo-legal.avif` manteniendo el mismo nombre.
- Logo: reemplazar `assets/img/logo-fcu-legal.svg` y conservar la misma ruta.

## Verificacion local

Abrir `index.html` directamente en el navegador. El formulario de consulta abre WhatsApp con el mensaje construido a partir de los datos ingresados.
