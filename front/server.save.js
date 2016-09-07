// ---------- Chargement des bibliothèques -------------
var express = require("express");
var path = require("path");
var app = express();
var letsencrypt = require("letsencrypt-express");
var server = express();
var compression = require("compression");

app.use(compression());
app.use(express.static(path.join(__dirname, 'front')));
// ---------- Définition des routes -------------
server.use(express.static(path.join(__dirname, 'dist')));
 
letsencrypt.create({
	server : 'https://acme-v01.api.letsencrypt.org/directory',	email : 'christophe.gerard8@gmail.com',
	agreeTos : true,
	approveDomains : ['www.barbeasts.christophegerard.net'],
	app : server
}).listen(80,443); 