//punto 1. cambia el color del titulo y alterna 
function colorBlink(selector) {
	$(selector).animate({
		opacity: '1',
	}, {
		setp: function (){
			$(this).css('color','white');
		},
		queue: true
	})
	.animate({
		opacity: '1'
	}, {
		step: function (){
			$(this).css('color','yellow');
		},
		queue: true
	},6000)
	.delay(1000)
	.animate({
		opacity:'1'
	}, {
		step: function (){
			$(this).css('color','white');
		},
		queue: true
	})
	.animate({
		opacity:'1'
	}, {
		step: function (){
			$(this).css('color','yellow');
			colorBlink('h1.main-titulo');
		},
		queue: true
	});
}

