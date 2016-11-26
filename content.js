// alert("hello!");
// when double click on a word show it in a window
document.addEventListener('dblclick', function() {
  var selectedStr = window.getSelection().toString();


  div.textContent = selectedStr;
  div.style.display = 'block';
});

document.addEventListener('click', function() {
    div.style.display = 'none';
});


// window declearation
var div = document.createElement('div');
div.className = "def-popup";
div.rel = 'stylesheet';
div.type = 'text/css';
div.href = chrome.runtime.getURL('window.css');
document.body.appendChild(div);








// chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);
