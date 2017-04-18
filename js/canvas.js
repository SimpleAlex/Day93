function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var img = new Image();
img.src = 'https://s-media-cache-ak0.pinimg.com/736x/0e/67/b9/0e67b937cfdba5648e9d6142f3054ac6.jpg';
img.onload = function() {
  draw(this);
};

function draw(img) {
  var portrait = document.getElementById('portrait');
  var canvas = portrait.getContext('2d');
  portrait.setAttribute("width", img.width);
  portrait.setAttribute("height", img.height);
  var verticalSlices = Math.round(img.height / 20);
  var maxHorizOffset = 20;
  for (var i = 0; i < verticalSlices; i++)  {
    var horizOffset = getRandom(-Math.abs(maxHorizOffset), maxHorizOffset);
    canvas.drawImage(img, 0, i * verticalSlices, img.width, i * verticalSlices + verticalSlices, horizOffset, i * verticalSlices, img.width, i * verticalSlices + verticalSlices);
  }
}
