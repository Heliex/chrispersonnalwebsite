// ---------- Chargement des bibliothèques -------------
var express = require("express");
var path = require("path");
var letsencrypt = require("letsencrypt-express");
var server = express();
var compression = require("compression");

server.use(compression());
// ---------- Définition des routes -------------
server.use(express.static(path.join(__dirname, 'dist')));
 
server.listen(80);