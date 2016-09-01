// Test polymere

// ---------- Chargement des bibliothèques -------------
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'front')));
// ---------- Définition des routes -------------

app.get('/history',function(req,res) {

	console.log("jessaie davoir lhistoire");
	res.json({test: success});
});
app.listen(80);


