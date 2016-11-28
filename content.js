// alert("hello!");

// when double clicking & holding alt on a word show def's in a window
document.addEventListener('dblclick', function(event) {
  if (event.altKey) {
    const selectedStr = window.getSelection().toString();
    // make an ajax request to get definition
    sendRequest(selectedStr);
    ul.style.display = 'block';
  }
});

// close window and remove li's when click
document.addEventListener('click', function() {
    ul.style.display = 'none';
    while (ul.hasChildNodes()) {
    ul.removeChild(ul.lastChild);
    }
});

// Inject un-order list to hold li's
const ul = document.createElement('ul');
ul.className = "def-popup";
ul.rel = 'stylesheet';
ul.type = 'text/css';
ul.href = chrome.runtime.getURL('window.css');
document.body.appendChild(ul);

//  Inject google font ref (Keep getting security issues)
// const fontRef = document.createElement('link');
// fontRef.rel = "stylesheet";
// fontRef.href = chrome.runtime.getURL('google_font.css');
// document.head.appendChild(fontRef);

function fetchDefinitions(data) {
  const definitions = data.list
  // set default def if not def found
  if (definitions.length == 0) {
    definitions.push({definition: "No Definitions"});
  };

  for (i in definitions) {
    const li = document.createElement('li');
    li.textContent = definitions[i].definition;
    ul.appendChild(li);
  };
}

function sendRequest(word) {
  return ($.ajax({
  url: 'https://mashape-community-urban-dictionary.p.mashape.com/define?term=' + word,
  type: 'GET',
  dataType: 'json',
  success: function(data) {fetchDefinitions(data)},
  beforeSend: function(xhr) {
  xhr.setRequestHeader("X-Mashape-Authorization", "Iydop0yt1fmsh8dxQPnzMxhzHNV9p1z0MgujsnHaI9c61cj6Cc")}
  }));
}
