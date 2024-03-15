import express from "express";

const app = express();
const PORT = 8080;
app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.listen(PORT, () => console.log(`Application running on ${PORT}`));
