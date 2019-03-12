var nombreUsuario = "Gabriel Dominguez";
var saldoCuenta = 100000;
var limiteExtraccion = 10000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;
var pass = 1234;//Declaración de variables
iniciarSesion(pass);


//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function validacion(monto){
  if(isNaN(monto) || monto===null || monto===""){
    return true;
    }
  else{
    	return false;
    }
}
function validacion(nuevoLimite){
  if(isNaN(nuevoLimite) || nuevoLimite===null || nuevoLimite===""){
    return true;
    }
  else{
    	return false;
    }
}

function sumarDinero(monto) {
	saldoCuenta = monto + saldoCuenta;

}
function restarDinero(monto){
	saldoCuenta = saldoCuenta - monto;
}

function billetesde100(monto){
  return (monto%100==0);
}

function cambiarLimiteDeExtraccion(nuevoLimite) {
	var nuevoLimite = parseInt(prompt("Nuevo límite de extracción"));
	if (validacion(nuevoLimite)){
		alert("Debe ingresar el nuevo límite en números.");
	}
	else{
	limiteExtraccion = nuevoLimite;
	actualizarLimiteEnPantalla();
	alert("El nuevo límite de extracción es " + limiteExtraccion);	
	}
}

function haySaldoDisponible(monto){
	if (saldoCuenta>=monto && saldoCuenta>=0){
	return true;
	}
	else{
		return false;
	}
}

function extraerDinero(monto) {
	var monto = parseInt(prompt("Monto a extraer"));
	if (validacion(monto)){
		alert("Debe ingresar la cantidad de dinero a extraer en números.");
	}
	else{
    var saldoAnterior = saldoCuenta;
		if (billetesde100(monto)){
    		if (saldoCuenta >= monto) {
    			if (monto > limiteExtraccion){
    			alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extracción.");
    			}
    		else{
			restarDinero(monto);
			actualizarSaldoEnPantalla();
			alert("Has extraído " + monto + "\n Saldo anterior " + saldoAnterior + "\n Saldo actual " + saldoCuenta);
				}
			}
		else {
		alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
			}
		}
		else{
			alert("Solo puedes extraer billetes de 100.");
			}
		}
}

function depositarDinero(monto) {
	var monto = parseInt(prompt("Monto a depositar"));
	if (validacion(monto)){
		alert("Debe ingresar la cantidad de dinero a depositar en números.");
	}
	else{
	var saldoAnterior = saldoCuenta;
	sumarDinero(monto);
	actualizarSaldoEnPantalla();
	alert("Has depositado " + monto + "\n Saldo anterior " + saldoAnterior + "\n Saldo actual " + saldoCuenta);
	}
}

function pagarServicio(valor) {
	var valor = prompt('Ingrese el número que corresponda al servicio que queres pagar' + "\n" +  "\n" + '1. Agua' + "\n" + '2. Luz' + "\n" + '3. Teléfono'+ "\n" + '4. Internet');
		switch (valor){
			case "1":
			if (saldoCuenta>agua && saldoCuenta>0){
				var saldoAnterior = saldoCuenta;
				restarDinero(agua);
				actualizarSaldoEnPantalla();
				alert("Has pagado el servicio: Agua " + "\n" + "\n" + "Saldo Anterior " + saldoAnterior + "\n" + "Dinero descontado " + agua + "\n" + "Saldo Actual " + saldoCuenta);
        		}
        	else {
          	alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        	}
			
			break;
			case "2":
			if (saldoCuenta>luz && saldoCuenta>0){
				var saldoAnterior = saldoCuenta;
				restarDinero(luz);
				actualizarSaldoEnPantalla();
				alert("Has pagado el servicio: Luz " + "\n" + "\n" + "Saldo Anterior " + saldoAnterior + "\n" + "Dinero descontado " + luz + "\n" + "Saldo Actual " + saldoCuenta);
        		}
        	else {
          	alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        	}
			
			break;
			case "3":
			if (saldoCuenta>telefono && saldoCuenta>0){
				var saldoAnterior = saldoCuenta;
				restarDinero(telefono);
				actualizarSaldoEnPantalla();
				alert("Has pagado el servicio: Telefono " + "\n" + "\n" + "Saldo Anterior " + saldoAnterior + "\n" + "Dinero descontado " + telefono + "\n" + "Saldo Actual " + saldoCuenta);
        		}
        	else {
          	alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        	}
			
			break;
			case "4":
			if (saldoCuenta>internet && saldoCuenta>0){
				var saldoAnterior = saldoCuenta;
				restarDinero(internet);
				actualizarSaldoEnPantalla();
				alert("Has pagado el servicio: Internet " + "\n" + "\n" + "Saldo Anterior " + saldoAnterior + "\n" + "Dinero descontado " + internet + "\n" + "Saldo Actual " + saldoCuenta);
        		}
        	else {
          	alert("No hay suficiente saldo en tu cuenta para pagar este servicio.");
        	}

        	break;
        	default:
        	alert("No existe el servicio seleccionado");
        	break;
      
		}
}

function transferirDinero(monto) {
	var cuenta = parseInt(prompt("Cuenta destino"));
	if (cuenta==cuentaAmiga1 || cuenta==cuentaAmiga2){
		var monto = parseInt(prompt("Monto a transferir"));
		if (validacion(monto)){
		alert("Debe ingresar la cantidad de dinero a transferir en números.");
		}
		else{
			if (monto<=saldoCuenta){
			restarDinero(monto);
			actualizarSaldoEnPantalla();
			alert("Se han transferido " + "$"+monto +"\n" + "Cuenta destino " + cuenta);
			}
			else{
			alert("No hay dinero suficiente para realizar la transferencia.");
				}
		}
	}
	else{
		alert("Solo se puede transferir a una cuenta amiga.");
		}

}

function iniciarSesion(sesion) {
	var sesion = prompt("Ingrese la contraseña.");
	if (sesion==pass){
		alert("Bienvenido " + nombreUsuario + " ya podes comenzar a realizar operaciones.");
	}
	else{
		alert("Código incorrecto. Tu dinero fue retenido por seguridad.");
		saldoCuenta = 0;
		actualizarSaldoEnPantalla();
	}
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

