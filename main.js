window.URL = window.URL || window.webkitURL;

const input = document.querySelector('#file')
const fileList = document.querySelector('#fileList');

var files = input.files


// si le formulaire est déjà rempli
if(files.length != 0)
{
	showList(files)
}
else
{
	fileList.innerHTML = '<li>Aucun fichier chargé pour le moment</li>'
}

// si il change
input.addEventListener('change', () => {

	fileList.innerHTML = ''
	console.log(files)

	showList(files)

})


// affiche la liste des fichiers
function showList(files)
{
	for(let i = 0; files.length > i; i++)
	{
		const li  = document.createElement('li');
		const img = document.createElement('img');
		const span = document.createElement('span');
		const info = document.createElement('div');
		
		// file name
		span.innerHTML = files[i]['name']

		// info
		info.innerHTML = octectToMo(files[i]['size']) + ' - ' + files[i]['type']

		// create img
	    img.src = window.URL.createObjectURL(files[i]);
	    img.height = 60;
	    img.onload = () => {
	    	window.URL.revokeObjectURL(this.src);
	    }

	    li.appendChild(img)
	    li.appendChild(span)
	    li.appendChild(info)
	    fileList.appendChild(li)
	}
}

function octectToMo(octect)
{
	return Math.ceil(octect / 1048576) + ' Mo'
}