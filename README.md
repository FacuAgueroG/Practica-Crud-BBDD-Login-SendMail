## RayBan (DEPLOY EN HEROKU, VER LINK) | Para ingresar usuario : admin, contraseña : admin

- Pagina web con CRUD para agregar, editar o borrar elementos de una BBDD
- BBDD => Mysql con workbench para la carga de los modelos 

- Login con una BBDD | Para ingresar usuario : admin, contraseña : admin
- BBDD => Mysql con workbench para el inicio de sesion, contraseña encriptada con md5

- SendMail, el sendMail en este proyecto actualmente esta deshabilitado, pero en el siguiente proyecto de la misma categoria esto esta activado. Revisar
El sendmail utilizado esta realizado con nodemailer y mailtrap

--

- Proyecto con JS, Node JS, express, Mysql => Workbench. Con modelo-vista-controlador y trabajo de DOM

- El trabajo hace uso de bancos de imagenes online (Cloudinary)

- La pagina consta de 7 endpoint, Index, inventario, login, store, edititem, additem y contact

- Dependencies

  "dependencies": 
  {
    "bootstrap-icons": "^1.8.3",
    "cloudinary": "^1.30.0",
    "cookie-session": "^2.0.0",
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-fileupload": "^1.4.0",
    "express-session": "^1.17.3",
    "express-validator": "^6.14.1",
    "hbs": "^4.2.0",
    "md5": "^2.3.0",
    "mysql": "^2.18.1",
    "nodemailer": "^6.7.5",
    "sweetalert2": "^11.4.17",
    "util": "^0.12.4"
  },
  "devDependencies": 
  {
    "nodemon": "^2.0.16"
  }
