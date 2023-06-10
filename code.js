//GURU
var username = prompt("Enter your name", "Enter username");
if (name != null) {
  alert("YOUR GITHUB URL - https://github.com/"+ username);
  window.location.href=`https://heroku.com/deploy/?template=https://github.com/${username}/GURU-BOT` ;
}
