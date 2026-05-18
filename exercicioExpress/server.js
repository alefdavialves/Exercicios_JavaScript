const express = require("express");
const app = express();
const port = 3000;

//decodificar a url (enviado pelo cliente através de requisições)
app.use(express.urlencoded({ extended: true }));

//disponibilizar arquivos estáticos
app.use(express.static("public"));

//rotas
app.get("/", (req, res) => {
  //res.send('Hello World!');
  res.sendFile(__dirname + "/public/index.html");
});

const feedbacks = [];

app.post("/feedbacks/enviar", (req, res) => {
  const { nome, comentario } = req.body;

  feedbacks.push({ nome, comentario });
   res.redirect("/feedbacks/lista");
});

app.get("/feedbacks/lista", (req, res) => {
  res.sendFile(__dirname + "/public/listaFeedbacks.html");
});

app.get("/feedbacks/dados", (req, res) => {
  res.json(feedbacks);
});

app.post("/feedbacks/remover", (req, res) => {

  const { index } = req.body

  feedbacks.splice(index, 1);

  res.redirect("/feedbacks/lista");

});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
