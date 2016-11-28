// alert("hello!");
const TEST_RESPONSE = [
  'a kind of fruit',
  'something you eat',
  "it's normally red",
  'a major food in the world']

// when double click on a word show it in a window
document.addEventListener('dblclick', function() {
  var selectedStr = window.getSelection().toString();
  // make an ajax request to get definition
  sendRequest(selectedStr);
  // console.log(definitionResponse);
  // console.log(definitionResponse);
  // div.textContent = definitionResponse;
  // div.style.display = 'block'; //
  ul.style.display = 'block';
});


document.addEventListener('click', function() {
    // div.style.display = 'none';
    ul.style.display = 'none';
    while (ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
    }
});

var ul = document.createElement('ul');
ul.className = "def-popup";
ul.rel = 'stylesheet';
ul.type = 'text/css';
ul.href = chrome.runtime.getURL('window.css');
document.body.appendChild(ul);


function fetchDefinitions(data) {
  const definitions = data.list;
  console.log(data.list);
  for (i in definitions) {
    var li = document.createElement('li');
    li.textContent = definitions[i].definition;
    ul.appendChild(li);
  }
}

function sendRequest(word, success) {
  return ($.ajax({
  url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + word,
  type: 'GET',
  dataType: 'json',
  success: function(data) {fetchDefinitions(data)},
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "Iydop0yt1fmsh8dxQPnzMxhzHNV9p1z0MgujsnHaI9c61cj6Cc")}
  }));
}
