<!DOCTYPE html>
<html>
<head>
	<title>Math games</title>
	<meta charset="utf-8"/>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="js/sha256.jquery.debug.js"></script>
    <script src="js/notify.min.js"></script>
    <script type="text/javascript" src="js/helpers.js"></script>
    <script type="text/javascript" src="js/player.js"></script>
    <script type="text/javascript" src="js/main.js"></script>
</head>
<body>
<video autoplay loop muted="true">
  <source src="http://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  <source src="http://www.w3schools.com/html/mov_bbb.ogg" type="video/ogg">
</video>

<div id="main"> 
	<div class="form">
      <ul class="tab-group">
        <li class="tab active"><a href="#signin">Влез</a></li>
        <li class="tab "><a href="#signup">Регистрирай се</a></li>
      </ul>
      
      <div class="tab-content">
        
        <div id="login-panel">   
          <h1>Добре дошъл!</h1>
          
          <form  id="signin">
          
          <div class="field">
            <label>Потребителско име<span class="requre">*</span></label>
            <input type="text" name="username" required autocomplete="off"/>
          </div>
          
          <div class="field">
            <label>Парола<span class="requre">*</span></label>
            <input type="password" name="password" required autocomplete="off"/>
          </div>
          
          <button type="submit" class="button button-block"/>Влез</button>
          
          </form>

        </div>
        
        <div id="signup">   
          <h1>Регистрирай се!</h1>
          
          <form  id="signup">
          
          <div class="top-row">
            <div class="field">
              <label>Име<span class="require">*</span></label>
              <input type="text" name="firstname" required autocomplete="off" />
            </div>
        
            <div class="field">
              <label>Фамилия<span class="requre">*</span></label>
              <input type="text" name="lastname" required autocomplete="off"/>
            </div>
          </div>
          
          <div class="field">
              <label>Клас<span class="requre">*</span></label>
              <input type="number" name="class" min="1" max="5" required autocomplete="off"/>
           </div>

          <div class="field">
            <label>Потребителско име<span class="requre">*</span></label>
            <input type="text" name="username" minlength="6" required autocomplete="off"/>
          </div>
          
          <div class="field">
            <label>Парола<span class="requre">*</span></label>
            <input type="password" name="password" minlength="8" required autocomplete="off"/>
          </div>
          
          <button type="submit" class="button"/>Регистриране</button>
          
          </form>

        </div>
    </div>
</div>

</body>
</html>