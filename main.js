document.addEventListener('click', hideSafetyNotice);
setTimeout(hideSafetyNotice, 10000);

let keys = {};
document.addEventListener('keydown', handleKeys);
document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function hideSafetyNotice() {
    if (document.getElementById('safetyNotice')) document.getElementById('safetyNotice').remove();
    document.body.style.overflow = "initial";
}

function handleKeys(event) {
    keys[event.key] = true;
    if (event.code == 'Escape') {
	if (document.getElementById('cover').classList.contains('hidden'))
	    document.getElementById('cover').classList.remove('hidden');
	else document.getElementById('cover').classList.add('hidden');
    } else if (keys['Backspace'] && keys['Shift']) window.location = 'about:blank';
}

function hide() {
    document.getElementById('cover').classList.remove('hidden');
    setTimeout(() => {
	document.getElementById('cover').classList.add('hidden');
    }, 120000);
}

function newWindow() {
    window.open("https://google.com", "newWindow", "popup");
}
let windowCount = 0;
function newWindowUnique() {
    window.open("https://google.com", "window" + windowCount++, "popup");
}

function selectInput() {
    document.querySelector("#inputField").select();
}

function updateMailAddress() {
    document.querySelector("#mailLink").href = "mailto:" + document.querySelector("#mailAddress").value;
}

function updateTelNumber() {
    document.querySelector("#telLink").href = "tel:" + document.querySelector("#telNumber").value;
}

function updateSmsNumber() {
    document.querySelector("#smsLink").href = "sms:" + document.querySelector("#smsNumber").value;
}