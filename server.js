// Test polymere

// ---------- Chargement des bibliothèques -------------
var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'front')));
// ---------- Définition des routes -------------

app.get('src/my-history.html',function(req,res){
    
    console.log("test");
});
app.listen(80);


