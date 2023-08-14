const express = require("express");
const { Sequelize } = require("sequelize");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configuracion de Sequelize para conectarse a la base de datos
const sequelize = new Sequelize("postgres", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
});

// Definicion del modelo Post
const Post = sequelize.define("Post", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Ruta para obtener todos los posts
app.get("/posts", async (req, res) => {
  const posts = await Post.findAll();
  res.json(posts);
});

// Ruta para crear un post
app.post("/posts", async (req, res) => {
  const post = req.body;
  const result = await Post.create(post);
  res.json(result);
});

// Ruta para eliminar un post
app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  await Post.destroy({
    where: {
      id: id,
    },
  });
  res.json("Post deleted.");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
