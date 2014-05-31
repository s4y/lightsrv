var lifx = require('lifx');
var express = require('express');
var app = express();
var lx = lifx.init();

app.use(require('body-parser')());
app.use(express.static(__dirname + '/public'));

app.post('/off', function(req, res){
	lx.lightsOff();
	res.send(200);
});

app.post('/on', function(req, res){
	lx.lightsOn();
	res.send(200);
});

app.post('/color', function(req, res){
	var p = req.body;
	lx.lightsOn();
	lx.lightsColour(
		p.hue || 0, p.saturation || 0, p.luminance || 0,
		p.whiteColour || 0, p.fadeTime || 0
	)
	res.send(200);
});

app.listen(3000);
