const express = require("express");

//import routes
const router = require('./ROUTES/router')

const app = express();
const port = 3012;


//midleware para importar rutas
app.use('/', router);



/* app.get("/", (req, res) => res.send("Hello World"));
app.get("/about", (req, res) => res.send("About page"));
app.get("/contacto", (req, res) => res.send("Contactanos"));
 */

//enviando un json
/* app.get("/xd", (req, res) => res.json({message: "pimpimpim"}));
 */


//middleware--------------------------------------------------------------

/* app.use('/tiempo',(req, res, next) => {
    console.log('tiempo')
    const Auth = req.header('Authorization')
    Auth
        ? next()
        : res.send ('Usuario No Autorizado')
});
 */


/* app.get("/tiempo", validar, (req, res) => res.send("te felicito, que bien actuas"));
 */



//-------------------------------------------------



app.listen(port, () =>
  console.log(`🔥servidor corriendo🔥 en port http://localhost:${port}`)
);
