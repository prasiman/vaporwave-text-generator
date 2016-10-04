function saveVal(ine, oute) {
	chrome.storage.local.set({'valueIn': ine});
	chrome.storage.local.set({'valueOut': oute});
}

function loadVal() {
    chrome.storage.local.get('valueIn', function(data) {
    	document.getElementById('in').value = data.valueIn;
    });

    chrome.storage.local.get('valueOut', function(data) {
    	document.getElementById("out").value = data.valueOut;
    });
}

function vaporwave() {
	var ine = document.getElementById('in');
	var oute = document.getElementById('out');
	oute.value = "";
	for (i=0; i<ine.value.length; i++) {
		if (ine.value.charCodeAt(i) >= 33 && ine.value.charCodeAt(i) <= 270) {
			oute.value += String.fromCharCode(ine.value.charCodeAt(i) + 65248);
		} else if (ine.value.charCodeAt(i) == 32) {
			oute.value += String.fromCharCode(ine.value.charCodeAt(i));
		}
	}
	saveVal(ine.value, oute.value);
}

document.addEventListener('DOMContentLoaded', function () {
	loadVal();
	document.querySelector('#in').addEventListener('input', vaporwave);
});