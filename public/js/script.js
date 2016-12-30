//---------JQuery------------------------------------------------------------------------------------
$(function() {
	var jsonData; // json data for global
	var travelWhen; // data.info for pulldown
	var travelWhere; // data.zones for pulldown

	$.ajax({
		url:	 'js/fares.json',
		dataType:'json',
		type:	 'GET',
		cache: 	 'true',
		success: function(data){
			travelWhere = data.zones;
			travelWhen = data.info;

			$(travelWhere).each(function(index, value){
				//console.log("travelWhere[index].zone = " + travelWhere[index].zone);
				var option = $('<option />').val(travelWhere[index].zone).text("Zone " + travelWhere[index].zone);

	   			$("#whereGo").append(option);
			});

			$.each(travelWhen, function(key, value) {
			    console.log("Key = " + key + ": value = " + value);
				// set key as value and text:
				var option = $('<option />').val(key).text(key);

		    	$("#whenGo").append(option);
				if (key === "evening_weekend") { // limit display
            		return false;
        		}
		    });

			jsonData = processData(data); // pass to global object
		},
		error: function() {
    		$("#statusP").html('There was an error loading the data.');
  		}
	});

	//------------json data---------------------------
	processData = function(data) {
		console.log(data);
		return data;
	}; //----------------------------------------------


	//--------------display current selected info to user-----------------------
	$('#whereGo').change(function(event) {
        $('#zoneDisplay').html('You have selected Zone ' + $('#whereGo').val());
    });
	$('#whenGo').change(function(event) {
        $('#infoDisplay').html('Ticket info: ' + $('#whenGo').val());
    });
	//--------------------------------------------------------------------------

	$("#submitButton").click(function(event) {

		event.preventDefault();

		var whenInput = $("#whenGo").val();
		var whereInput = parseInt($("#whereGo").val(), 10);
		var ticketNumInput = parseInt($("#ticketNum").val(), 10) || 1; // if NaN, then 1
		var initialTicketPrice; // cost of ticket picked
		var result;
		var numberSelect = $("#exampleSelect1").val();


		initialTicketPrice = ticketPrice(whereInput, whenInput, jsonData, ticketNumInput);


		result = whereInput + ", " + whenInput + ", " + ticketNumInput;
		console.log(result);
		$("#resultP").html("$" + initialTicketPrice); // display result
	});



	ticketPrice = function(zone, info, jsonData, ticketNumInput){
		console.log('zone = ' + zone);
		console.log('info = ' + info);
		console.log('ticketNumInput = ' + ticketNumInput);
		var initialPrice = 0.0;
		var totalPrice = 0.0;

		if (zone === 1 && info === 'weekday') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[0].fares[0].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[0].fares[1].price);
			}
		} else if (zone === 1 && info === 'evening_weekend') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[0].fares[2].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[0].fares[3].price);
			}
		} else if (zone === 1 && info === 'anytime') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[0].fares[4].price);
			} else {
				alert("Anytime tickets need to be purchased in advance.");
			}
		}

		if (zone === 2 && info === 'weekday') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[1].fares[0].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[1].fares[1].price);
			}
		} else if (zone === 2 && info === 'evening_weekend') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[1].fares[2].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[1].fares[3].price);
			}
		} else if (zone === 2 && info === 'anytime') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[1].fares[4].price);
			} else {
				alert("Anytime tickets need to be purchased in advance.");
			}
		}

		if (zone === 3 && info === 'weekday') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[2].fares[0].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[2].fares[1].price);
			}
		} else if (zone === 3 && info === 'evening_weekend') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[2].fares[2].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[2].fares[3].price);
			}
		} else if (zone === 3 && info === 'anytime') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[2].fares[4].price);
			} else {
				alert("Anytime tickets need to be purchased in advance.");
			}
		}

		if (zone === 4 && info === 'weekday') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[3].fares[0].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[3].fares[1].price);
			}
		} else if (zone === 4 && info === 'evening_weekend') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[3].fares[2].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[3].fares[3].price);
			}
		} else if (zone === 4 && info === 'anytime') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[3].fares[4].price);
			} else {
				alert("Anytime tickets need to be purchased in advance.");
			}
		}

		if (zone === 5 && info === 'weekday') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[4].fares[0].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[4].fares[1].price);
			}
		} else if (zone === 5 && info === 'evening_weekend') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[4].fares[2].price);
			} else {
				initialPrice = parseFloat(jsonData.zones[4].fares[3].price);
			}
		} else if (zone === 5 && info === 'anytime') {
			if ($("#advancedFare").is(":checked")) {
				initialPrice = parseFloat(jsonData.zones[4].fares[4].price);
			} else {
				alert("Anytime tickets need to be purchased in advance.");
			}
		}
		totalPrice = initialPrice * ticketNumInput;
		console.log(totalPrice.toLocaleString('us-US', { style: 'currency', currency: 'USA' }));
		return totalPrice;
	};

});
//-------------------------------------------------------------------------------------------------------



//-----------------------------------------
console.log("javascript loaded!");
