// alert("hello!");
// when double click on a word show it in a window
document.addEventListener('dblclick', function() {
  var selectedStr = window.getSelection().toString();
  // make an ajax request to get definition
  var definitionResponse = sendRequest(selectedStr);
  console.log(definitionResponse);
  div.textContent = definitionResponse;
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

// ajax request helper method
// function sendRequest(word) {
//   return ($.ajax({
//     url: `http://api.urbandictionary.com/v0/define?term=` + word,
//     dataType: 'json'
//   }));
// };

function sendRequest(word) {
  return ($.ajax({
  url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + word,
  type: 'GET',
  dataType: 'json',
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "Iydop0yt1fmsh8dxQPnzMxhzHNV9p1z0MgujsnHaI9c61cj6Cc")}
  }));
}





// chrome.runtime.sendMessage(document.getElementsByTagName('title')[0].innerText);
