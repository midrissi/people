var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var restify = require('express-restify-mongoose');
var moment = require('moment');

mongoose.connect('mongodb://localhost/db');

var Person = new Schema({
	name: {
		first: String,
		last: String
	},
	dob: {
		type: Date,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	cell: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	}
});

Person.virtual('age').get(function() {
	return moment().diff(moment(this.birthdate), 'years');
});

var PersonModel = mongoose.model('Person', Person);

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static('public'));
app.use(methodOverride());

var router = express.Router();
restify.serve(router, PersonModel);
app.use(router);

app.listen(8080, function() {
	console.log("Express server listening on port 8080");
});