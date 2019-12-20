///++++++++++++++++++++++++++++++
///Puerto de trabajo
///++++++++++++++++++++++++++++++
process.env.PORT = process.env.PORT || 3000;
///++++++++++++++++++++++++++++++
///Entorno
///++++++++++++++++++++++++++++++
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
///++++++++++++++++++++++++++++++
///Base de Datos
///++++++++++++++++++++++++++++++

let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://sa:Ale1365@pruebas-segura-awfhk.mongodb.net/cafe';
}
//urlDB = 'mongodb+srv://sa:Ale1365@pruebas-segura-awfhk.mongodb.net/cafe';
process.env.URLDB = urlDB;