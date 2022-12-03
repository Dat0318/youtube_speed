var storage = chrome.storage.local;
chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { urlPrefix: 'https://www.youtube.com/watch' },
            })],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});

chrome.extension.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        if (message.todo == "pikabooxx8097") {
            chrome.tabs.sendMessage(tabs[0].id, { m: { todo: "x6h8mm", key: tabs[0].id } }, function(response) {

            });
        }
    });
    setTimeout(function() {
        sendResponse({ status: true });
    }, 1);
    return true;
}

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.url) {
        var key = String(tabId);

        storage.get(key, function(result) {
            chrome.tabs.executeScript({
                code: `
                document.getElementsByTagName("video")[0].playbackRate = ${result[key]};
                document.getElementsByClassName("video-stream")[0].playbackRate = ${result[key]};
                `
            });
        })
    };
});

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
    var v1 = tabid;
    storage.remove([v1], function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    })
})

chrome.windows.onRemoved.addListener(function(windowid) {
    storage.clear(function() {
        var error = chrome.runtime.lastError;
        if (error) {
            console.error(error);
        }
    });
})