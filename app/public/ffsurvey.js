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

      console.log(newFriend);
});


	//fsendform();

});

// function fsendform() {

//  // In this code below we create the Front-end JavaScript which "POSTS" our form data to our express server.
//     // In essence, when the user hits submit, jQuery grabs all of the fields then sends a post request to our api
//     // Our api recognizes the route (/api/tables)... and then runs the associated code (found in api-routes.js).
//     // In this case the associated code "saves" the data to the table-data.js file or waitinglist-data.js file

//     $("#SubmitA").on("click", function(event) {
//       event.preventDefault();

//       // Here we grab the form elements
//       var newFriend = {
//         name: $("#NameForm").val().trim(),
//         photo: $("#URLForm").val().trim(),
//         scores: [
//         	$("#color1").val(),
//         	$("#color2").val(),
//         	$("#color3").val(),
//         	$("#color4").val(),
//         	$("#color5").val(),
//         	$("#color6").val(),
//         	$("#color7").val(),
//         	$("#color8").val(),
//         	$("#color9").val(),
//         	$("#color10").val()
//         ]
//       };

//       console.log(newFriend);

//       // This line is the magic. It"s very similar to the standard ajax function we used.
//       // Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
//       // The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
//       // depending on if a tables is available or not.

//       //$.post("/api/friends", newFriend,
//       //  function(data) {

//           // If a table is available... tell user they are booked.
//       //     if (data) {
//       //       alert("Yay! You did it");
//       //     }
//    //        $(".modal-title").text("Yay! Your Color Match is ");
// 			// $(".modal-title").css("background-color", "orange");
// 			// vmessag = $(".modal-body").text("The right answer was\n \n" + vrandomquestion + "\n \n" + atext[varrpos]);
// 			// vmessag.html(vmessag.html().replace(/\n/g,'<br/>'));
//    //        $("#myModal").modal("show");

//           // Clear the form when submitting
//       //    $("#NameForm").val("");
//       //    $("#URLForm").val("");

//       //  });

    



// };
