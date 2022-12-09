function myFunction(msg,div_id) {
  // Get the snackbar DIV
  var x = document.getElementById(div_id);

  // Add the "show" class to DIV
  x.className = "show";

	//x.innerHTML = msg + "<br><input type='button' value='ok'>";

	x.innerHTML = msg;

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}