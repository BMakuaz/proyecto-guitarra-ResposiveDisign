//Crear mediaQuery en javascript
var consulta = window.matchMedia('(max-width: 500px)');
consulta.addListener(mediaQuery);

var burguerButton = document.getElementById("burguer-button");//Obtener el elemento icon-menu
var menu  = document.getElementById("menu");//obtner el elemento del  menu

//lazy loading
var bLazy = new Blazy
({
    selector:'img'
});

function mostrarMenu()
{
	menu.classList.toggle('active');
}

function showMenu()
{
	menu.classList.add('active');
}
function hideMenu()
{
	menu.classList.remove('active');
}

function mediaQuery()
{
	if(consulta.matches)
	{
		burguerButton.addEventListener('touchstart', mostrarMenu);

	}else
	{
		burguerButton.removeEventListener('touchstart', mostrarMenu);
	}
}
mediaQuery();

//gestos de touch
var body = document.body;
var gestos = new Hammer(body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight',showMenu);
