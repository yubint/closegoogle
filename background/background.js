
chrome.runtime.onMessage.addListener((request, sender) => {
    if (request.removetab == 'true') {
        chrome.tabs.remove(+(sender.tab.id));
    }
}
)
