$(document).ready(function() {

  $("#block1").draggable().resizable();
  $("#block2").draggable().resizable();
  $("#block3").draggable().resizable();

  //setting cookie//

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

  var block1=$('#block1').prop('id');
  var block2=$('#block2').prop('id');
  var block3=$('#block3').prop('id');

  setCookie(block1,)


 });
