const submit = document.getElementById('login');
const loginError = document.querySelector('.login-message-error');


function validar()
{
	var usuario = document.getElementById("nombre").value;
	var Contraseña = document.getElementById("contraseña").value;	

	if(usuario == "alura@test.com" && Contraseña == "1234")
	{   
        window.location.href = './productos.html'
		
	}
	else
	{
		
        loginError.classList.add('invalid-login')
	}
}



	