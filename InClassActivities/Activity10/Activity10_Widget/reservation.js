$(document).ready(function() {


	//tabs widget for the reservation form
	$("#tabs").tabs({
		collapsible: true,
		heightStyle: "content",
		active: 0
	});
	
	// Datepicker widget for arrival date
	$("#arrival_date").datepicker({
		dateFormat: "mm/dd/yy",
		minDate: 0,
		maxDate: "+90D",
		showOtherMonths: true,
		selectOtherMonths: true
	  });

	//If the user clicks on the cancellation button, the dialog box will appear
	$("#policies").click(function() {
		$("#dialog").dialog({
			modal: true
		});
	});
	var emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}\b/;
	
	// move the focus to the first text box
	$("#arrival_date").focus();
	
	// the handler for the submit event of the form
	// executed when the submit button is clicked
	$("#reservation_form").submit(
		function(event) {
			var isValid = true;
			
			// validate the requested arrival date
			var arrivalDate = $("#arrival_date").val().trim();
			if (arrivalDate == "") {
				$("#arrival_date").next().text("This field is required.");
				isValid = false;
			} else {
				$("#arrival_date").next().text("");				
			}
			$("#arrival_date").val(arrivalDate);
			
			// validate the number of nights
			var nights = $("#nights").val().trim();
			if (nights == "") {
				$("#nights").next().text("This field is required.");
				isValid = false;
			} else if (isNaN($("#nights").val())) {
				$("#nights").next().text("This field must be numeric.");
				isValid = false;
			} else {
				$("#nights").next().text("");
			}
			$("#nights").val(nights);		

			// validate the name entry
			var name = $("#name").val().trim();
			if (name == "") {
				$("#name").next().text("This field is required.");
				isValid = false;
			} 
			else {
				$("#name").val(name);
				$("#name").next().text("");
			}
			$("#name").val(name);
						
			// validate the email entry with a regular expression
			var email = $("#email").val();
			if (email == "") { 
				$("#email").next().text("This field is required.");
				isValid = false;
			} else if ( !emailPattern.test(email) ) {
				$("#email").next().text("Must be a valid email address.");
				isValid = false;
			} else {
				$("#email").next().text("");
			}
			$("#email").val(email); 
			
			// validate the phone number
			var phone = $("#phone").val().trim();
			if (phone == "") { 
				$("#phone").next().text("This field is required.");
				isValid = false; 
			} else {
				$("#phone").next().text("");
			}
			$("#phone").val(phone);
			
			// prevent the submission of the form if any entries are invalid 
			if (isValid == false) {
				event.preventDefault();				
			}
		} // end function
	);	// end submit
}); // end ready