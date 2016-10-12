function try_replace()
{
	var p = document.getElementById('loading_welcome_msg');

	if (p !== null) {
		p.innerHTML = 'Go fuck yourself';
	} else {
		setTimeout(try_replace, 50);
	}
}

try_replace();


