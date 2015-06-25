$(document).ready(function(){

	$(".arrastrar").draggable({
		revert: true
	});

	$(".soltar").droppable({
		drop: function(){
			alert("Item registrado con exito");
		},
		activeClass: "activo",
		accept: ".arrastrar",
		hoverClass: "sobre",
	});
});