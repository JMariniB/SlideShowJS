/*=============================================
OBJETO PROPIEDADES SLIDE
=============================================*/

var p = {

	paginacion: document.querySelectorAll("#paginacion li"),
	item: 0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSlide: "slide",
	imgSlide: document.querySelectorAll("#slide ul li"),
	avanzar: document.querySelector("#slide #avanzar"),
	retroceder: document.querySelector("#slide #retroceder")
}

/*=============================================
OBJETO METODOS SLIDE
=============================================*/


var m = {

	inicioSlide: function() {

		for (var i = 0; i < p.paginacion.length; i++) {
			p.paginacion[i].addEventListener("click", m.paginacionSlide);
		}

		p.avanzar.addEventListener("click", m.avanzar);
		p.retroceder.addEventListener("click", m.retroceder);

	},
	paginacionSlide: function(e) {

		p.item = e.target.parentNode.getAttribute("item");

		m.movimientoSlide(p.item);

	},

	avanzar: function(e) {

		if(p.item == p.imgSlide.length - 1){
			p.item = 0;
		}else{
			p.item++;
		}


		m.movimientoSlide(p.item);

	},

	retroceder: function(e) {

		if(p.item == 0){
			p.item = p.imgSlide.length - 1;
		}else{
			p.item--;
		}

		m.movimientoSlide(p.item);

	},

	movimientoSlide: function(item) {
		var pos = item * -100 + "%"
		p.cajaSlide.style.left = pos;

		for (var i = 0; i < p.paginacion.length; i++) {

			p.paginacion[i].style.opacity = .5;

		}

		p.paginacion[item].style.opacity = 1;

		if (p.animacionSlide == "slide") {
			p.cajaSlide.style.transition = ".7s left ease-in-out";
		}

		if (p.animacionSlide == "fade") {


			p.imgSlide[item].style.opacity = 0;
			p.imgSlide[item].style.transition = ".5s opacity ease-in-out";

			setTimeout(function() {

				p.imgSlide[item].style.opacity = 1;

			}, 500);

		}

	}

}


m.inicioSlide()