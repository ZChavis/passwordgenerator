"use strict";
$(document).ready(function() {
    var getRandomNumber = function(max) {
        var random;
        if (!isNaN(max)) {
            random = Math.random(); //value >= 0.0 and < 1.0
            random = Math.floor(random * max); //value is an integer between 0 and max - 1
            random = random + 1; //value is an integer between 1 and max
        }
        return random;
    };
	
    $("#generate").click(function() {
        $("#password").val( "" ); // clear previous entry
		//variable containing all potential characters that can be in the password
		var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_-+!@";
        //sets the user's input to a variable
		var charsEntered = parseInt($("#num").val());
		//checks to make sure that the user's entry is a valid number	
		if (charsEntered > 0) {
			//creates a variable to hold the password
			var pass = ""
			//creates a variable i for the "for" loop
			var i;
			//for loop with a limiter based on the user's entry and includes incrementation
			//for loop will end when "i" is incremented to the value of the user's entry
			for (i = 0; i < charsEntered; i++) {
				//sets a variable to hold the random number generated
				//max value of the random number set to the length of potential characters
				var randomChar = getRandomNumber(chars.length)
				//variable is appended to contain a character from the potential character list
				//that is located at the position equal to the value of the random number generated earlier
				pass += chars.charAt(randomChar);
				//sets the password input field to display the generated password
				$("#password").val(pass);			
			}
		}
		//a catch-all for any invalid entry such as non-numbers or other invalid entries
		else {
			//alerts the user that their entry was invalid
			alert("Your entry is invalid.");
		}	
    }); // end click()
	
	//function that clears the input fields and sets the focus to the first field
    $("#clear").click(function() {
        $("#num").val( "" );
        $("#password").val( "" );
        $("#num").focus();
    }); // end click()
    
    // set focus on initial load
    $("#num").focus();
}); // end ready()

