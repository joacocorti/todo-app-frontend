# ToDo App con MongoDB

Esta es una aplicación ToDo que utiliza una base de datos MongoDB para gestionar las tareas pendientes. La aplicación consta de un backend y un frontend, y utiliza Node.js y Express para el backend, y React para el frontend.

## Configuración de MongoDB

1. Crea una cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) si aún no tienes una.
2. Crea un nuevo clúster y configura las opciones según tus preferencias.
3. En el clúster creado, ve a la pestaña "Database Access" y crea un usuario con acceso a la base de datos.
4. Copia la URL de conexión proporcionada por MongoDB Atlas. Debe tener el siguiente formato:

``` mongodb+srv://<username>:<password>@<clusterName>.igoycpq.mongodb.net/<DBname>?retryWrites=true&w=majority ```


## Configuración del Backend

1. En la carpeta del backend, crea un archivo `.env`.
2. Dentro de `.env`, agrega la siguiente línea con la URL de conexión que copiaste anteriormente:

```MONGODB_URL=<tu_URL_de_MongoDB>```

3. Abre la terminal y navega a la carpeta del backend.
4. Ejecuta el siguiente comando para instalar las dependencias:

```npm install```

5. Inicia el servidor backend con el siguiente comando (utilizamos nodemon para reiniciar automáticamente el servidor):

```nodemon Server.js```

6. Si ves el mensaje "Connected to MongoDB" en la consola, la conexión fue exitosa.

## Inicio del Frontend

1. Navega a la carpeta del frontend en la terminal.
2. Ejecuta el siguiente comando para instalar las dependencias:

```npm install```

3. Inicia la aplicación frontend con el siguiente comando:

```npm start```

Asegúrate de reemplazar ```<username> , <password>, <clusterName>, <DBname> y <tu_URL_de_MongoDB>``` con los valores correspondientes de tu configuración en MongoDB Atlas.

¡Listo! Ahora deberías tener tu aplicación ToDo funcionando con una base de datos MongoDB. El backend estará conectado a la base de datos, y el frontend estará disponible en tu navegador.
