function draw() {
  let mapImage = document.getElementById('map');

  console.log(`--> Image left: ${mapImage.offsetLeft} || top: ${mapImage.offsetTop}`);

  console.log(`--> Image width: ${mapImage.offsetWidth} || height: ${mapImage.offsetHeight}`);

  let navigationCanvas = document.getElementById('navigationCanvas');

  navigationCanvas.style.position = 'absolute';
  navigationCanvas.style.left = mapImage.offsetLeft + 'px';
  navigationCanvas.style.top = mapImage.offsetTop + 'px';
  navigationCanvas.style.width = mapImage.offsetWidth + 'px';
  navigationCanvas.style.height = mapImage.offsetHeight + 'px';

  let canvasCtx = navigationCanvas.getContext('2d');
  canvasCtx.fillStyle = 'rgb(500, 200, 0)';
  canvasCtx.fillRect(0, 0, 5, 5);
}

draw();