# Amigo Secreto

Este es un pequeño proyecto que hice para practicar JavaScript, HTML y CSS. La idea es que los usuarios puedan escribir nombres en una lista y luego hacer un sorteo para elegir a un "Amigo Secreto".

## ¿Cómo funciona?

1. Escribí un nombre en el campo de texto.
2. Hice clic en "Añadir" para agregarlo a la lista.
3. Repetí el proceso con varios nombres.
4. Cuando ya tenía suficientes nombres, hice clic en "Sortear Amigo".
5. Se eligió un nombre al azar, y la lista desapareció.
6. También hice que apareciera una imagen solo después de hacer el sorteo.

## ¿Qué tecnologías usé?

- **HTML**: Para la estructura de la página.
- **CSS**: Para darle estilo y que se vea bonito.
- **JavaScript**: Para hacer que todo funcione e interactúe con el usuario.

## ¿Qué aprendí?

- Cómo manipular el DOM con JavaScript (agregar y quitar elementos).
- Cómo usar `document.getElementById()` y `document.querySelector()` para seleccionar elementos.
- Cómo cambiar el estilo de un elemento con JavaScript (`style.display = "none"` para ocultarlo y `style.display = "block"` para mostrarlo).
- Cómo generar un número aleatorio con `Math.random()` para hacer el sorteo.
- La importancia de limpiar la lista después del sorteo para que no haya problemas.

## Problemas que tuve y cómo los solucioné

- **La imagen siempre se mostraba desde el inicio**: La oculté al cargar la página usando `document.addEventListener("DOMContentLoaded", () => { imagen.style.display = "none"; });`.
- **A veces salían nombres repetidos**: Agregué una validación para evitar que un mismo nombre se agregara dos veces.
- **Cuando hacía el sorteo, la imagen no aparecía bien**: Me di cuenta de que estaba tratando de obtenerla por `id`, pero cambié el código para buscarla por el nombre del archivo.

