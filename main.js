document.addEventListener('click', hideSafetyNotice);
setTimeout(hideSafetyNotice, 10000);

let keys = {};
document.addEventListener('keydown', handleKeys);
document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
});

function hideSafetyNotice() {
    if (document.getElementById('safetyNotice')) {
	document.getElementById('safetyNotice').remove();
	document.body.style.overflow = "initial";
    }	
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

const aceEditor = ace.edit("aceEditor");
aceEditor.setTheme("ace/theme/monokai");
aceEditor.session.setMode("ace/mode/javascript");

function changeEditor() {
    const defaultEditor = document.querySelector("#defaultEditor")
    const aceEditorElement = document.querySelector("#aceEditor");
    if (document.querySelector("#enableEditor").checked) {
	aceEditorElement.style.display = "block";
	defaultEditor.style.display = "none";
	aceEditor.setValue(defaultEditor.value);
    } else {
	aceEditorElement.style.display = "none";
	defaultEditor.style.display = "block";
	defaultEditor.value = aceEditor.getValue();
    }
    aceEditor.clearSelection();
    if (displayingLog) toggleLog();
}

let consoleLog = [];
function evalCode() {
    consoleLog = [];
    let evalText;
    const outputElem = document.querySelector("#consoleOutput");
    if (document.querySelector("#enableEditor").checked) {
	evalText = aceEditor.getValue();
    } else {
	evalText = document.querySelector("#defaultEditor").value;
    }
    let output;
    try {
	outputElem.style.color = "initial";
	output = new Function(evalText)();
	
    } catch (e) {
	output = e;
	outputElem.style.color = "red";
    }
    outputElem.textContent = output;
    const logElem = document.querySelector("#consoleLog");
    logElem.innerHTML = '<h3>Evaluation log</h3>';
    consoleLog.forEach((i, idx) => {
	let entry = document.createElement("p");
	// Lazy ordered list
	entry.textContent = (idx + 1) + ". " + i;
	logElem.appendChild(entry);
    });
}

function log(text) {
    consoleLog.push(text);
}
let displayingLog = false;
function toggleLog() {
    const logElem = document.querySelector("#consoleLog");
    const editorContainer = document.querySelector("#editorContainer");
    if (displayingLog) {
	logElem.style.display = 'none';
	editorContainer.style.display = 'block';
	document.querySelector("#viewLogButton").textContent = "View log";
	displayingLog = false;
    } else {
	logElem.style.display = 'block';
	editorContainer.style.display = 'none';
	document.querySelector("#viewLogButton").textContent = "Hide log";
	displayingLog = true;
    }
}

function openConsole(){
    document.querySelector("#console").style.display = "flex";
    document.body.style.overflow = "hidden";
}
function closeConsole() {
    document.querySelector("#console").style.display = "none";
    document.body.style.overflow = "initial";
}

function showConsoleHelp() {
    document.querySelector("#consoleHelp").style.display = "block";
    document.body.style.overflow = "hidden";
}
function hideConsoleHelp() {
    document.getElementById('consoleHelp').style.display = "none";
    document.body.style.overflow = "initial";
}