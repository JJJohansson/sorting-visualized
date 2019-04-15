const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width;
const height = canvas.height;
const blockWidth = 10;

let values = [];

randomizeValues();

function start() {
  randomizeValues();
  const sortType = document.getElementById("select").value;
  console.log(sortType);

  if (sortType === 'bubble') bubbleSort();
  if (sortType === 'cocktail') cocktailSort();
}

function randomizeValues() {
  values = [];
  for (let i = 0; i < width; i += blockWidth) {
    const value = Math.floor(Math.random() * height) + 5;
    values.push(value);
  }
  resetCanvas();
  drawValues();
}

function resetCanvas() {
  ctx.fillStyle = "#D3D3D3";
  ctx.strokestyle = "black";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeRect(0, 0, width, height);
}

function drawValues() {
  let x = 0;
  for (let i = 0; i < values.length; i++) {
    ctx.fillStyle = "#00FA9A";
    ctx.strokestyle = "black";
    // (x,y,width,height)
    ctx.fillRect(x, height - values[i], blockWidth, values[i]);
    ctx.strokeRect(x, height - values[i], blockWidth, values[i]);
    x += blockWidth;
  }
}

function bubbleSort() {
  document.getElementById("title").innerHTML = `bubble sort with ${width / blockWidth} values`;
  let sorting = null;
  var swapped;
  do {
    sorting = setInterval(() => {
      swapped = false;
      for (let i = 0; i < values.length; i++) {
        if (values[i] > values[i + 1]) {
          //console.log('swapping')
          const temp = values[i];
          values[i] = values[i + 1];
          values[i + 1] = temp;
          swapped = true;
          resetCanvas();
          drawValues();
        }
        if (i === values.length - 1 && swapped === false) clearInterval(sorting);
      }
    }, 50);
  } while (swapped);
}

function cocktailSort() {
  document.getElementById("title").innerHTML = `cocktail shaker sort with ${width / blockWidth} values`;
  let sorting = null;
  var swapped;
  do {
    sorting = setInterval(() => {
      for (var i = 0; i < values.length - 1; i++) {
        if (values[i] > values[i + 1]) {
          var temp = values[i];
          values[i] = values[i + 1];
          values[i + 1] = temp;
          swapped = true;
          resetCanvas();
          drawValues();
        }
      }
      swapped = false;
      for (i = values.length - 1; i > 0; i--) {
        if (values[i] > values[i + 1]) {
          var temp1 = values[i];
          values[i] = values[i + 1];
          values[i + 1] = temp1;
          swapped = true;
          resetCanvas();
          drawValues();
        }
      }
      if (!swapped) clearInterval(sorting);
    }, 50);
  } while (swapped);
}
