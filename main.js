$(document).ready(function() {
	$('button[name=add]').on('click', function(){
		$('#answer').val(`${Number($('#num_one').val()) + Number($('#num_two').val())}`)
	})

	$('button[name=subtract]').on('click', function(){
		$('#answer').val(`${Number($('#num_one').val()) - Number($('#num_two').val())}`)
	})

	$('button[name=multiply]').on('click', function(){
		$('#answer').val(`${Number($('#num_one').val()) * Number($('#num_two').val())}`)
	})

	$('button[name=divide]').on('click', function(){
		$('#answer').val(`${Number($('#num_one').val()) / Number($('#num_two').val())}`)
	})
})