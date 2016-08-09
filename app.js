var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine","jade");

mongoose.connect(""); //direccion

var userJSON = {
	nombre:String,
	email:String,
	codigo:String
};

var userSchema = new Schema(userJSON);

var User = mongoose.model("User", userSchema);

app.get("/", function(req,res){
	res.render("index");
});

app.post("/", function(req,res){
	var data = {
		nombre: req.body.nombre,
		email: req.body.email,
		codigo: req.body.codigo
	};
	console.log(data);
	//var user = new User(data);
	//user.save(function(e){
		//console.log(user);
		//console.log(e);
//})
});

/*var server = app.listen(8080, "192.168.1.4", function(){
	//var host = server.adress().adress;
	//var port = server.adress().port;
	//console.log("running at htttp://"+host+":"+port);
});*/
app.listen(8080);
