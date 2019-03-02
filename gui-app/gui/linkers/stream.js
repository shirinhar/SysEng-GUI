console.log('enter stream.js successfully');

function stream() {

  document.getElementById("btn2").value = "Hang on..."
  var python = require("python-shell")
  var path = require("path")
  var ps = require("python-shell")

    var options = {
    scriptPath : path.join(__dirname, '/../../../engine/'),
    pythonPath : '/usr/local/bin/python3'
  }

  ps.PythonShell.run('clientApplication.py', options, function(err, results) {
    if (err) throw err;
    // document.getElementById("detect").value = "Detect faces";
  });

}
