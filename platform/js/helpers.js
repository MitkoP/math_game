function getCurrentDateTime(){
	var now = new Date();
	var day = ("0" + now.getDate()).slice(-2);
	var month = ("0" + (now.getMonth() + 1)).slice(-2);
    var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	var today = now.getFullYear()+"/"+(month)+"/"+(day)+" "+time;

	return today;
}

function dateTimeStringToTimestamp(value){
	var dateString = value;
    var dateParts = dateString.split(' ');
    var timeParts = dateParts[1].split(':');
    

    dateParts = dateParts[0].split('/');

	var date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[2], timeParts[0], timeParts[1], timeParts[2]);

	return(date.getTime());
	
};

function showNotification(text, type){
		$.notify(text, {
  			className:type,
  			clickToHide: false,
  			autoHide: true,
  			globalPosition: 'top center'
		});
	}