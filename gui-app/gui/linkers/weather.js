console.log('enter weather.js successfully');

function get_weather() {
  var python = require("python-shell")
  var path = require("path")
  var ps = require("python-shell")

  var city = document.getElementById("city").value
  document.getElementById("city").value = "";

  var options = {
    scriptPath : path.join(__dirname, '/../engine/'),
    args : [city]
  }

  // var weather = new python('weather_engine.py', options);
  ps.PythonShell.run('weather_engine.py', options, function (err, results) {
    if (err) throw err;
    swal(results[0]);
  });

  // weather.on('message', function(message) {
  //   swal(message);
  // })
}
