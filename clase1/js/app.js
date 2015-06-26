$(document).ready(function(){

	$(".arrastrar").draggable({
		revert: true
	});

	$(".soltar").droppable({
		drop: function(e, el){
			var dragEl = el.draggable;
			var price = dragEl.data("price");
			var total_actual = $(this).data("total");
			var total = parseInt(  total_actual ) + parseInt(  price );

			$(this).data("total", total);
			$(this).html("$" + total);
		},
		activeClass: "activo",
		accept: ".arrastrar",
		hoverClass: "sobre",
	});
});
