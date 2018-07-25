
var addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click',submit);

function submit() {
    var selectorColor = document.querySelector('.selector .selector-color input');
    var selectorBgcolor = document.querySelector('.selector .selector-bgcolor input');
    var selectorFontsize = document.querySelector('.selector .selector-fontsize select');
    var selectorText = document.querySelector('.text input');

    var color = selectorColor.value;
    var bgcolor = selectorBgcolor.value;
    var fontsize = selectorFontsize.value;
    var text = selectorText.value;

    var output = document.querySelector('.output');
    output.innerHTML = output.innerHTML+
                        '<span style="color:'+color+
                        ';background-color:'+bgcolor+
                        ';font-size:'+fontsize+';">'+
                        text+'</span>';
}
