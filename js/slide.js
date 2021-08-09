/*=============================================
OBJETO PROPIEDADES SLIDE
=============================================*/

var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item:0,
	cajaSlide: document.querySelector("#slide ul")
}

/*=============================================
OBJETO METODOS SLIDE
=============================================*/


var m = {

	inicioSlide: function(){

		for(var i = 0; i < p.paginacion.length ; i++){
			p.paginacion[i].addEventListener("click", m.paginacionSlide)
		}

	},
	paginacionSlide:function(e){
		
		p.item = e.target.parentNode.getAttribute("item");

		m.movimientoSlide(p.item);

	},
	movimientoSlide:function(item){
		var pos = item*-100+"%"
		console.log("pos", pos);
		p.cajaSlide.style.left = pos ;

	}

}


m.inicioSlide()