// Get a Handlebars instance
var hb = require("handlebars");

// Load a template
const fs = require('fs');
const template = fs.readFileSync('index.handlebars','utf8');

// Compile said template
var compiled = hb.compile(template);
var html = compiled({});

// Write HTML file
fs.writeFileSync('index.html', html);