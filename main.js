const input = document.querySelector('#file')
const fileList = document.querySelector('#fileList');

var files = input.files

if(files.length != 0)
{

	for(var i = 0; files.length > i; i++)
	{
		fileList.innerHTML += '<li>' + files[i]['name'] + '</li>'
	}
}
else
{
	fileList.innerHTML = '<li>Aucun fichier chargé pour le moment</li>'
}

input.addEventListener('change', () => {

	fileList.innerHTML = ''
	console.log(files)

	for(var i = 0; files.length > i; i++)
	{
		fileList.innerHTML += '<li>' + files[i]['name'] + '</li>'
	}

})