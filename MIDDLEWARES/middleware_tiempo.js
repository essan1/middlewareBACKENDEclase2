const validar = (req, res, next) => {
    const Auth = req.header("Authorization");
    Auth ? next() : res.send("Usuario No Autorizado");
}

module.exports = validar