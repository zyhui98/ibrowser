document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.getElementsByClassName('color-button');
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      var color = this.id;
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { color: color });
      });
    });
  }

  var buttons = document.getElementsByClassName('allow-copy-button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, {copy: true});
        });
      });
    }
});
