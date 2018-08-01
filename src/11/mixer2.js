var redInput = document.querySelector('.adjuster .red input');
var greenInput = document.querySelector('.adjuster .green input');
var blueInput = document.querySelector('.adjuster .blue input');

redInput.addEventListener('change',refresh);
greenInput.addEventListener('change',refresh);
blueInput.addEventListener('change',refresh);

var red = 0;
var green = 0;
var blue = 0;
var color = 'rgb('+red+','+green+','+blue+')';

var indicator = document.querySelector('.box .indicator');
var value = document.querySelector('.box .label');

indicator.style.backgroundColor = color;
value.innerHTML = color;

function refresh() {
    red = redInput.value;
    green = greenInput.value;
    blue = blueInput.value;
    
    color = 'rgb('+red+','+green+','+blue+')';
    
    indicator.style.backgroundColor = color;
    value.innerHTML = color;
}
