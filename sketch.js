var ample = document.getElementById("input_number");
var alt= document.getElementById("input_number_alt");
var hue_color = document.getElementById("color_hue");
function setup() {
 var c=createCanvas(400, 400);
 c.parent("canvasWrapper");
}

function draw() {
  background(20,220,300);
  noStroke();
  colorMode(HSB);
  fill(hue_color.value,200,150);
  rect(width / 2,height / 2,ample.value, alt.value);
}