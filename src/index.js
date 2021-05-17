const app = require("./app");
const db = require("./mongodb");
const http = require("http");

db.init();


//const port = process.env.PORT || 3000;

/*
app.listen(port, function () {
  console.log(`app listening on port ${port}`);
});
*/
const server = http.createServer(app);

//Inicia servidor
server.listen(process.env.PORT || 9898, () => {
  console.log("Servidor conectador na porta: " + server.address().port);
});
