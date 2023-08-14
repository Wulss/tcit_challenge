# Configuración
### Prerrequisitos
Antes de comenzar, asegurarse de tener instalado:
* Node.js
* Servidor de base de datos PostgreSQL

### Configuración del Backend
1. Clonar el repositorio:
   
   ``` 
   git clone <url>
   cd tcit_challenge
    ```

2. Instalar dependencias:

    ```
    cd backend
    npm install
    ```

3. Configuración de la base de datos:

    ```
    const sequelize = new Sequelize("postgres", "admin", "admin", {
        host: "localhost",
        dialect: "postgres",
    });
    ```
    Reemplaza `"postgress"`, `"admin"` y `"admin"` con el nombre de tu base de datos, nombre de usuario y contraseña.
4. Para ejecutar el backend:

    ```
    npm start
    ```

### Configuración del Frontend
1. Instalar dependencias:

    ```
    cd frontend
    npm install
    ```

2. Ejecutar el frontend:

    ```
    npm start
    ```

### Uso de la aplicación

Teniendo  el backend y el frontend en funcionamiento, se puede acceder a la aplicacion a traves de http://localhost:3000
