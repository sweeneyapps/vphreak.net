module.exports = (function() {
  // require jsdom-global/register so this can run for mocha test on ReactJS main.js
  global.document.body.innerHTML = "<div id='root'></div>"
})()
