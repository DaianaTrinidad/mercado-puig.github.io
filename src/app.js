const express = require("express");
const path = require("path");
const methodOverride = require("method-override"); // Pasar poder usar los métodos PUT y DELETE

const mainRouter = require("./routes/main-router");

const app = express();

app.listen(3000, () => {
  console.log("Se prendió");
});
//un middleware q le diga a express q queremos setear ejs como nuestro temple engine
app.set("view engine", "ejs" );
//como no esta en la raíz views hay que setearlo (al igual que public)
app.set("views", "./src/views");
const viewUtils= require("./utils/view-utils");

app.use(express.static(path.join(__dirname, "../public")));
//esto hace que podemos acceder desde cualquier vista a viewUtils
app.locals= viewUtils;

app.use(mainRouter);
