
$(document).ready( function() {
	$('#paginas_range').on('input',function(){
		$('#paginas_number').val($(this).val());
	});

	$('#paginas_number').on('change',function(){
		$('#paginas_range').val($(this).val());
	});

	$('#paginas_number').on('keyup',function(){
		$('#paginas_range').val($(this).val());
	});


	$('#temas_range').on('input',function(){
		$('#temas_number').val($(this).val());
	});

	$('#temas_number').on('change',function(){
		$('#temas_range').val($(this).val());
	});

	$('#temas_number').on('keyup',function(){
		$('#temas_range').val($(this).val());
	});

var complejidad =
{
	personal:
	{
		descripcion:"pagina basica",
		monto: 1
	},
	standard:
	{
		descripcion:"Pagina Intermedia",
		monto: 1
	},
	avanzado:
	{
		descripcion:"Pagina Avanzada",
		monto: 1
	},	

};


	$('#complejidad').on('change',function()
	{
		$('#descripcion').html(complejidad[$(this).val()].descripcion);
	});

});