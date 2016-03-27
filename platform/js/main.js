$(document).ready(function(){
    

$('.form').find('input, textarea').on('keyup blur focus', function (e) {
  
  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight'); 
			} else {
		    label.removeClass('highlight');   
			}   
    } else if (e.type === 'focus') {
      
      if( $this.val() === '' ) {
    		label.removeClass('highlight'); 
			} 
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {
  
  e.preventDefault();
  
  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');
  
  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();
  
  $(target).fadeIn(600);
  
});





$("#signin").submit(function(e){
    var username = $("#signin :input[name='username']").val();
    var password = $("#signin :input[name='password']").val();
    //showNotification("Грешно потребителско име/ парола", "error");
    var error = false;
    try{
        login(username, password)
            .then(function(result){
                currentPlayer = new Player(result[0]);
                alert("login");
            });
    }
    catch(err){
        error=true;
        
        console.log(err);
    }
    
    setInterval(function(){
        if(error === true){
            showNotification("Грешно потребителско име/ парола", "error");
            error = false;
        }
    },2000);
    
    return false;
});

$("#signup").submit(function(e){
    
    var _firstname = $("#signup :input[name='firstname']").val();
    var _lastname = $("#signup :input[name='lastname']").val();
    var _class = $("#signup :input[name='class']").val();
    var _username = $("#signup :input[name='username']").val();
    var _password = $("#signup :input[name='password']").val();
    
    today = getCurrentDateTime();
    
    try{
      register( _username, _password, _firstname, _lastname, _class, today)
             .then(function(result){
                 console.log(result);
             });
     }
     catch(err){
         console.log(err);
     }
    return false;
});

});