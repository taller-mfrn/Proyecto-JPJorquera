# Proyecto Taller MFRN*
Para correr el proyecto se necesita una base de datos MySql con usuario 'root' y sin password:

1. Importar base de datos de ejemplo de word.sql
2. Hacer `npm install`
3. Correr servidor con `npm start`
3. Se proveen tres rutas de ejemplos en json:
    * [localhost:3000/](http://localhost:3000/) - Con un "hola mundo" para comprobar que el servidor este corriendo adecuadamente.
    * [localhost:3000/city/](http://localhost:3000/city/) - Con una lista de las 20 primeras ciudade de la base de datos.
    * [localhost:3000/city/:id](http://localhost:3000/city/1) - Que muestra una ciudad en específico por `id`, en la base de datos se incluyen más de 4000 ciudades.