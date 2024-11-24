document.addEventListener('click', () => {
	if (document.getElementById('safetyNotice')) document.getElementById('safetyNotice').remove();
});
document.addEventListener('keydown', handleKeys);

function handleKeys(event) {
	if (event.code == 'Escape') {
		if (document.getElementById('cover').classList.contains('hidden'))
			document.getElementById('cover').classList.remove('hidden');
		else document.getElementById('cover').classList.add('hidden');
	} else if (event.key == 'Alt') window.location = 'about:blank';
}

function hide() {
	document.getElementById('cover').classList.remove('hidden');
	setTimeout(() => {
		document.getElementById('cover').classList.add('hidden');
	}, 120000);
}

function forceCrash(time) {
	let a = 'a';
	let current = Date.now();
	while (true) {
		a = a + 'a';
		if (time >= 0 && Date.now() - current >= time * 1000) break;
	}
}

let newWindow, startTime, elapsedTime;
function createTestWindow() {
	newWindow = window.open('testWindow.html', '_blank', 'popup, width=100, height=100');
	setInterval(step, 100);
}
function step() {
	newWindow.moveTo(400 * 0.001 * Math.cos(elapsedTime), 400 * 0.001 * Math.sin(elapsedTime));
	elapsedTime += 100;
}

let data = {};
function execute() {
	let result;
	let isError = false;
	let str = document.getElementById('execInput').children[0].children[0].value;
	let sanitizedStr = sanitizeConsoleInput(str);
	try {
		result = eval(sanitizedStr);
	} catch (error) {
		result = error;
		isError = true;
	} finally {
		updateConsole([] + result, isError);
	}
}
function updateConsole(value, isError) {
	let newElement = document.createElement('p');
	newElement.textContent = value;
	if (isError) newElement.style.color = 'red';
	else newElement.style.color = 'purple';
	document.getElementById('execOutput').appendChild(newElement);
	document.getElementById('execInput').children[0].children[0].value = '';
	document
		.getElementById('execOutput')
		.scrollTo(0, document.getElementById('execOutput').scrollHeight);
}

function sanitizeConsoleInput(str) {
	let out = str;
	return out;
}
