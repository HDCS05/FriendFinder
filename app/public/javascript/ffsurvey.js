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
		//Send the values to the server
		$.post("/api/friends", newFriend, function(data) {
			if (data[0]) {
				var vmessag = $(".modal-title").text("Yay! Your Color Match is\n" + data[1]);
				vmessag.html(vmessag.html().replace(/\n/g,'<br/>'));
				//$(".modal-title").text("Yay! Your Color Match is " + data[1]);
				//$(".modal-title").css("background-color", "orange");
				//$(".modal-body").text("Coming soon " + data[2]);
				$('#myModal img').attr('src', data[2]);
				$("#myModal").modal("show");
			}

			//Clear the form
			$("#NameForm").val("");
			$("#URLForm").val("");
			$("#color1").slider("setValue", 3);
			$("#color2").slider("setValue", 3);
			$("#color3").slider("setValue", 3);
			$("#color4").slider("setValue", 3);
			$("#color5").slider("setValue", 3);
			$("#color6").slider("setValue", 3);
			$("#color7").slider("setValue", 3);
			$("#color8").slider("setValue", 3);
			$("#color9").slider("setValue", 3);
			$("#color10").slider("setValue", 3);
		});

	});

};
