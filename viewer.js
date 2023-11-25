let cur = 0;
const art = document.querySelectorAll('.art');
const gallery = document.querySelector('.gallery');
const page = document.querySelector('.page');
const artviewer = document.createElement('div');
artviewer.className = 'artviewer';
artviewer.style.display = 'none';
artviewer.style.justifyContent = 'center';

art.forEach(function(image, index) {
	const clonedImage = image.cloneNode(true);
	clonedImage.onclick = function() {view(index);};
	artviewer.appendChild(clonedImage);
	clonedImage.style.maxWidth = '500px';
	clonedImage.style.display = 'none';
});

page.appendChild(artviewer);
const viewer = artviewer.querySelectorAll('.art');

const backButton = document.createElement('button');
backButton.textContent = '<';
backButton.onclick = last;

const exitButton = document.createElement('button');
exitButton.textContent = 'Back';
exitButton.onclick = exit;
exitButton.style.display = 'none';

const forwardButton = document.createElement('button');
forwardButton.textContent = '>';
forwardButton.onclick = next;

const buttons = document.createElement('div');
const navButtons = document.createElement('nav');

buttons.style.display = 'none';
buttons.style.flexDirection = 'row';

buttons.appendChild(backButton);
buttons.appendChild(forwardButton);
navButtons.appendChild(buttons);
navButtons.appendChild(exitButton);
navButtons.style.flexDirection = 'column';
navButtons.style.alignItems = 'center';
navButtons.style.position = 'fixed';
navButtons.style.marginLeft = '750px';

page.appendChild(navButtons);


function view(index) {
	gallery.style.display = 'none';
	buttons.style.display = 'flex';
	exitButton.style.display = 'block';
	artviewer.style.display = 'flex';
	if (viewer.length === 0) {return;}
	if (index < 0) {cur = viewer.length - 1;} 
	else if (index >= viewer.length) {cur = 0;} 
	else {cur = index;}
	for (let i = 0; i < viewer.length; i++) {viewer[i].style.display = 'none';}
	viewer[cur].style.display = 'block';
}

function last() {view(cur - 1);}
function next() {view(cur + 1);}
function exit() {
	gallery.style.display = 'flex';
	buttons.style.display = 'none';
	exitButton.style.display = 'none';
	artviewer.style.display = 'none';
}