$(function () {

	$('#color1').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color2').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color3').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color4').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color5').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color6').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color7').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color8').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color9').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	$('#color10').slider({
		formatter: function(value) {
			return 'Current value: ' + value;
		}
	});

	fsendform();

});

function fsendform() {

	$("#SubmitA").on("click", function(event) {
		event.preventDefault();
		// Here we grab the form elements
		var newFriend = {
			name: $("#NameForm").val().trim(),
			photo: $("#URLForm").val().trim(),
			scores: [
				$("#color1").val(),
				$("#color2").val(),
				$("#color3").val(),
				$("#color4").val(),
				$("#color5").val(),
				$("#color6").val(),
				$("#color7").val(),
				$("#color8").val(),
				$("#color9").val(),
				$("#color10").val()
			]
		};

		//console.log(newFriend);


		$.post("/api/friends", newFriend, function(data) {

			if (data) {
			// 	alert("Yay! You did it");
			// }

				$(".modal-title").text("Yay! Your Color Match is "); // + data[0] );
				$(".modal-title").css("background-color", "orange");
				$(".modal-body").text("Coming soon");
				//$('#myModal img').attr('src', data[1]);
				$("#myModal").modal("show");
			}
			//Clear the form when submitting
			$("#NameForm").val("");
			$("#URLForm").val("");

		});


	});

}