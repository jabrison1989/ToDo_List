//Completion Code
$("ul").on("click", "li", function () {
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function () {
	$(this).parent().fadeOut(500, function (){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function() {
	if(event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		
		$("ul").append("<li><span class='delete'><i class='far fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$("#plus").click(function() {
	$("input[type='text']").fadeToggle();
});