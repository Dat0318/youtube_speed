var storage = chrome.storage.local;

function reset() {
  chrome.extension.sendMessage({ todo: 'pikabooxx8097' });
}

chrome.extension.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  var key = String(message.m.key);

  if (message.m.todo == 'x6h8mm') {
    var v1 = key;
    var obj = {};
    obj[v1] = 3;
    storage.set(obj);
  }
  setTimeout(function () {
    sendResponse({ status: true });
  }, 1);
  return true;
}

if (window.performance) {
  console.info('window.performance works fine on this browser');

  var num = localStorage.getItem('youtube_speed') || 3;

  document.getElementsByTagName('video')[0].playbackRate = num;
  document.getElementsByClassName('video-stream')[0].playbackRate = num;
}
if (performance.navigation.type == 1) {
  reset();
} else {
  console.info('This page is not reloaded');
}
