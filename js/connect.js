var userpass = prompt("user:pass")

if(userpass = "veran:beta2561"){
  txt = "Correct!";
}
else if(userpass = null || userpass = ""){
  txt = "No userpass was written :(";
}
else{
  txt = "WRONG";
  window.open("https://www.youtube.com/watch?v=hiRacdl02w4", "target")
  window.close();
}
alert(txt);