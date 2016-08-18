// Test polymere

// ---------- Chargement des bibliothèques -------------
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'front')));
// ---------- Définition des routes -------------

app.listen(3500);


