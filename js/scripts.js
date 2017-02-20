
$(document).ready(function() {

	$("form#quiz").submit(function(event) {

		$("#stress-responses").show();
		$("input:checkbox[name=stress]:checked").each(function(){
			// alert($(this).val() + " checked in stress test ");
			$("#stress-responses").append($(this).val() + "<br>");
		});

		$("#fortune-responses").show();
		$("input:checkbox[name=fortune]:checked").each(function(){
			// alert($(this).val() + " checked in fortune test ");
			$("#fortune-responses").append($(this).val() + "<br>");
		});

		$("#quiz").hide();

		event.preventDefault();


	});
});
