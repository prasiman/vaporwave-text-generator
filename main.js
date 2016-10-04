chrome.browserAction.onClicked.addListener(function() {
	chrome.windows.create({'url': 'main.html', 'type': 'popup', 'height': 475, 'width': 550}, function(window) {

	});
});