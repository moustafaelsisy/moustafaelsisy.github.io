// Get a Handlebars instance
var hb = require("handlebars");

// Load a template
const fs = require('fs');
const template = fs.readFileSync('index.handlebars','utf8');

// Register Partials
hb.registerPartial('tech', fs.readFileSync('./assets/html/tech.handlebars', 'utf8'));

// Compile said template
var compiled = hb.compile(template);
var html = compiled({});

// Write HTML file
fs.writeFileSync('index.html', html);
console.log('Handlebars build complete.')