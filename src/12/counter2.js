var progressBar = document.querySelector('.counter-box .bar');
var btn = document.querySelector('.counter-box button');

var value = 0;
btn.innerHTML = value;
progressBar.style.width = value + '%';
btn.addEventListener('click',count);

function count() {
    if (value>=100){return;}
	common(1);
}

setInterval("countdown()",1000);

function countdown() {
    if (value<=0){btn.innerHTML = 0;}
    else common(-1);
}

function common(diff) {
    value = value + diff;
    progressBar.style.width = value + '%';
	btn.innerHTML = value;
}