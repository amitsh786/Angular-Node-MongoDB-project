var mongoose = require('mongoose');
var express = require('express'),
mongoose.connect('mongodb://127.0.0.1/UserRegistration');
var db = mongoose.connection;
