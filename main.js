document.addEventListener('click', () => {
	if (document.getElementById('safetyNotice')) document.getElementById('safetyNotice').remove();
});
document.addEventListener('keydown', handleKeys);

function handleKeys(event) {
	if (event.code == 'Escape') {
		if (document.getElementById('cover').classList.contains('hidden'))
			document.getElementById('cover').classList.remove('hidden');
		else document.getElementById('cover').classList.add('hidden');
	} else if (event.code == 'Backspace') window.location = 'about:blank';
}

function hide() {
	document.getElementById('cover').classList.remove('hidden');
	setTimeout(() => {
		document.getElementById('cover').classList.add('hidden');
	}, 120000);
}
