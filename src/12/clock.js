setInterval("getTime()",1000);

function getTime() {
    var date = new Date();
    var time = document.querySelector('.time');
    var second = document.querySelector('.second');
    var minute = document.querySelector('.minute');
    var hour = document.querySelector('.hour');

    second = date.getSeconds();
    minute = date.getMinutes();
    hour = date.getHours();
    
    var a = second.toString(10);
    newSecond = a.padStart(2,'0');
    var b = minute.toString(10);
    newMinute = b.padStart(2,'0');
    var c = hour.toString(10);
    newHour = c.padStart(2,'0');
    
    time.innerHTML = newHour +':'+ newMinute+':'+newSecond;
    
    document.querySelector('.second').style.transform = 'rotate(' +(-90+(360/60*second))+ 'deg)';
    document.querySelector('.minute').style.transform = 'rotate(' +(-90+(360/60*minute))+ 'deg)';
    document.querySelector('.hour').style.transform = 'rotate(' +(-90+(360/12*hour))+ 'deg)';
}