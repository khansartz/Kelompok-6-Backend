const express = require("express");
const app = express();

const port = 3000;

app.set("view engine", "ejs");

//static
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.render("index.ejs", {title:"TravelPedia"} )
})

// app.get("/index", (req, res) => {
//     res.render("index.ejs")
// })

app.get("/support", (req, res) => {
    res.render("support.ejs", {title: "Travel Support"})
})

app.get("/gallery", (req, res) => {
    res.render("gallery.ejs", {title: "Travel Gallery"})
})

app.get("/team", (req, res) => {
    res.render("team.ejs", {title: "Travel Team"})
})

app.get("/blog", (req, res) => {
    res.render("blog.ejs", {title: "Travel Blog"})
})

app.listen(port, () => {
    console.log(`Webserver app listening on port ${port}`);
});