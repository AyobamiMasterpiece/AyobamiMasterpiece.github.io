var svg = document.getElementById("my-svg");
var path;

svg.addEventListener("load", function() {
  var doc = svg.getSVGDocument();
  path = doc.querySelector("#path");
  
  path.addEventListener("click", function() {
    path.style.fill = "red";
  });
});
