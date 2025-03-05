<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - Sorteo Amigo Secreto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
            line-height: 1.6;
            background-color: #f4f4f4;
        }
        h1, h2, h3 {
            color: #333;
        }
        code {
            background: #eee;
            padding: 2px 5px;
            border-radius: 5px;
        }
        pre {
            background: #333;
            color: #fff;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        ul {
            margin: 10px 0;
        }
    </style>
</head>
<body>
    <h1>Sorteo Amigo Secreto</h1>
    
    <h2>Descripción</h2>
    <p>"Sorteo Amigo Secreto" es una aplicación web interactiva que permite ingresar nombres de amigos, mostrarlos en una lista y sortear uno al azar.</p>
    
    <h2>Características</h2>
    <ul>
        <li>Agregar nombres a la lista.</li>
        <li>Validación para evitar nombres repetidos o inválidos.</li>
        <li>Sorteo aleatorio de un amigo secreto.</li>
        <li>Diseño responsivo y atractivo.</li>
    </ul>
    
    <h2>Instalación y Uso</h2>
    
    <h3>Prerrequisitos</h3>
    <p>Asegúrate de tener un navegador actualizado como:</p>
    <ul>
        <li>Google Chrome</li>
        <li>Mozilla Firefox</li>
        <li>Microsoft Edge</li>
    </ul>
    
    <h3>Clonar el Repositorio</h3>
    <pre><code>git clone https://github.com/tuusuario/sorteo-amigo-secreto.git
cd sorteo-amigo-secreto</code></pre>
    
    <h3>Ejecución</h3>
    <ol>
        <li>Abre el archivo <code>index.html</code> en tu navegador.</li>
        <li>Ingresa los nombres en el campo de entrada.</li>
        <li>Presiona el botón "Añadir" para agregarlos a la lista.</li>
        <li>Haz clic en "Sortear amigo" para seleccionar un amigo secreto aleatoriamente.</li>
    </ol>
    
    <h2>Estructura del Proyecto</h2>
    <ul>
        <li><code>index.html</code>: Contiene la estructura del sitio.</li>
        <li><code>style.css</code>: Estilos de la página.</li>
        <li><code>app.js</code>: Lógica de validación, inserción y sorteo.</li>
        <li><code>assets</code>: Carpeta que contiene archivos necesarios para el CSS.</li>
    </ul>
    
    <h2>Problemas y Soluciones</h2>
    <h3>1. La página no carga correctamente</h3>
    <ul>
        <li>Verifica que todos los archivos (<code>index.html</code>, <code>style.css</code>, <code>app.js</code>) estén en la misma carpeta.</li>
        <li>Asegúrate de que las rutas a los archivos estén correctas en el <code>index.html</code>.</li>
    </ul>
    
    <h3>2. No se agregan nombres a la lista</h3>
    <ul>
        <li>Revisa la consola del navegador (<code>F12</code> -> Consola) para ver si hay errores.</li>
        <li>Verifica que el campo de entrada no esté vacío y que el nombre no se haya agregado previamente.</li>
    </ul>
    
    <h2>Contribución</h2>
    <p>Si deseas contribuir al proyecto:</p>
    <ol>
        <li>Haz un fork del repositorio.</li>
        <li>Crea una rama con tu funcionalidad (<code>git checkout -b feature/nueva-funcion</code>).</li>
        <li>Realiza un commit (<code>git commit -m 'Agregada nueva función'</code>).</li>
        <li>Envía un pull request.</li>
    </ol>
</body>
</html>
