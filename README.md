# Sorteo Amigo Secreto

## Descripción
"Sorteo Amigo Secreto" es una aplicación web interactiva que permite ingresar nombres de amigos, mostrarlos en una lista y sortear uno al azar.

## Características
- Agregar nombres a la lista.
- Validación para evitar nombres repetidos o inválidos.
- Sorteo aleatorio de un amigo secreto.
- Diseño responsivo y atractivo.

## Instalación y Uso

### Prerrequisitos
Asegúrate de tener un navegador actualizado como:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

### Clonar el Repositorio
```sh
git clone https://github.com/gapis730/challenge-vf-josegarcia.git
cd challenge-vf-josegarcia
```

### Ejecución
1. Abre el archivo `index.html` en tu navegador.
2. Ingresa los nombres en el campo de entrada.
3. Presiona el botón "Añadir" para agregarlos a la lista.
4. Haz clic en "Sortear amigo" para seleccionar un amigo secreto aleatoriamente.

## Estructura del Proyecto
- `index.html`: Contiene la estructura del sitio.
- `style.css`: Estilos de la página.
- `app.js`: Lógica de validación, inserción y sorteo.
- `assets`: Carpeta que contiene archivos necesarios para el CSS.

## Problemas y Soluciones
### 1. La página no carga correctamente
- Verifica que todos los archivos (`index.html`, `style.css`, `app.js`) estén en la misma carpeta.
- Asegúrate de que las rutas a los archivos estén correctas en el `index.html`.

### 2. No se agregan nombres a la lista
- Revisa la consola del navegador (`F12` -> Consola) para ver si hay errores.
- Verifica que el campo de entrada no esté vacío y que el nombre no se haya agregado previamente.

## Contribución
Si deseas contribuir al proyecto:
1. Haz un fork del repositorio.
2. Crea una rama con tu funcionalidad (`git checkout -b feature/nueva-funcion`).
3. Realiza un commit (`git commit -m 'Agregada nueva función'`).
4. Envía un pull request.
