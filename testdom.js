const fs = require('fs')
const path = require('path')
const file = fs.readFileSync("./src/index.html", "utf8") // main index.html document

module.exports = (function() {
    // require jsdom-global/register so this can run for mocha test on ReactJS main.js
    document.write(file);
})()
