var currentPlayer = null;

var Player = function(playerData){
    this.playerID = playerData.PlayerID;
    this.username = playerData.Username;
    this.firstname = playerData.FirstName;
    this.lastName = playerData.LastName;
    this.class = playerData.Class;
    this.registrationDate = playerData.RegistrationDate;
}

function login(username, password){
    
    var encryptedps = $.sha256(password);
    return $.getJSON( "ServerAPI/playerQueries.php?action=login&username="+username+"&password="+encryptedps, 
		function( data ) {
		  $.each( data, function( key, val ) {
		    if (typeof val.data === 'undefined' || val.data === null) {
                //console.log(val);
                return val.responseText;
            }
            else{
                handleErrors(val);
            }
		  });
		});
}


function register(_username, _password, _firstname, _lastname, _class, _date){
    
    var encryptedps = $.sha256(_password);
    return $.post("ServerAPI/playerQueries.php?action=create",
			        {
			        	username:_username,
                        password:encryptedps,
                        firstname:_firstname,
                        lastname:_lastname,
                        class:_class,
                        date:_date
			       	},
			    function(data, status){
                    if(data !== "created"){
                       throw new Error(data);
                    }
                    else{
                        return true;
                    }
			    	
			    });
}

function handleErrors(response){
    if(response.data){
        throw response.data;
    }
}