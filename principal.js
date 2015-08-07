
function onClickBtnF1(){
	formulario1.style.display='none';
	formulario2.style.display='block';
}

function onClickNuevaSimulacion(){
	formularios.style.display='block';
	formulario1.style.display='block';
}


var tiempos = [];

function onClickAddT(){
	tiempos.push("procesito");
	cargarTiempos();
}


function cargarTiempos(){
	var ht = '' ;
	for(t in tiempos){
		ht += '<table border=1> '
			+' <tr> '
				+'<td> Tiempo '+ (t) +' </td> '
				+'<td>'
					+ 'Lista de procesos'
				+'</td> '
			+' </tr> '
			+' <tr> '
				+'<td> '
					+'<input type="submit" value="Agregar proceso" /> <br /> '
				+' </td> '
				+'<td>'
					+ tiempos[t] 
				+'</td> '
			+' </tr> '
		+' </table>' 
		+ '<br />';
	}
	divTiempos.innerHTML = ht;
}





