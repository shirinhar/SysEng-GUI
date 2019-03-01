console.log('enter face.js successfully');

function detect_faces() {

  document.getElementById("detect").value = "Hang on..."
  var python = require("python-shell")
  var path = require("path")

    var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    pythonPath : '/usr/local/bin/python3'
  }

  var face = new python("clientApplication.py", options);

  face.end(function(err, code, message) {
    document.getElementById("detect").value = "Detect faces";
    })

}
