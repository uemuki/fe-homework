var progressBar = document.querySelector('.counter-box .bar');
var btn = document.querySelector('.counter-box button');

var value = 0;
btn.innerHTML = value;
progressBar.style.width = value + '%';
btn.addEventListener('click',count);

function common(diff) {
    value = value + diff;
    progressBar.style.width = value + '%';
    btn.innerHTML = value;
}

function count() {
    if (value>=100){
        return;
    }
    common(1);
}

var a = setInterval(countDown,1000);

console.log(value);
if(value>=0) {
    setInterval(countDown,1000);
    //为什么第21行去掉，在这里创建变量a就不起作用了，var a = setInterval(countDown,1000);
}
console.log(value);
//为什么if可重复判断，但if前后的console.log都没有重复执行；

function countDown() {
    value = parseInt(btn.innerHTML,10);
    if (value<=0){
        clearInterval(a);
    }
    else common(-1);
}