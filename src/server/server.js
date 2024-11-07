const express = require("express");
const path = require("path");

const startServer = (option) => {
  const { port, public_path = "public" } = option;
  const app = express()

    //para usar middleware se usa la palabra use
  app.use(express.static(public_path))

    //peticion para devolver la web
  app.get('*',(req,res) => {
    const indexPath = path.join(__dirname + `../../../${public-path}/index.html`)
    res.sendFile(indexPath)
  })
    //para poder escuchar al navegador atra vez de una url poder devolver la pagina
  app.listen(port,()=>{
    console.log(`escuchando desde el puerto ${port}`)
  })
};

module.exports = {
    startServer
}