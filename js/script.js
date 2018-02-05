$(document).ready(function() {
  $("#block1").draggable().resizable();
  $("#block2").draggable().resizable();
  $("#block3").draggable().resizable();

  //getting stored values///
  var w1 =localStorage.getItem("b1width");
  var h1 =localStorage.getItem("b1height");
  var l1 =localStorage.getItem("b1left");
  var t1 =localStorage.getItem("b1top");

  var w2 =localStorage.getItem("b2width");
  var h2 =localStorage.getItem("b2height");
  var l2 =localStorage.getItem("b2left");
  var t2 =localStorage.getItem("b2top");

  var w3 =localStorage.getItem("b3width");
  var h3 =localStorage.getItem("b3height");
  var l3 =localStorage.getItem("b3left");
  var t3 =localStorage.getItem("b3top");


  //setting the new positions and size//

    $('#block2').width(w2);
    $('#block2').height(h2);
    $('#block2').css('left', l2);
    $('#block2').css('top', t2);

    $('#block1').width(w1);
    $('#block1').height(h1);
    $('#block1').css('left', l1);
    $('#block1').css('top', t1);

    $('#block3').width(w3);
    $('#block3').height(h3);
    $('#block3').css('left', l3);
    $('#block3').css('top', t3);


  $("#block1").mouseup(function(){
    var width = $('#block1').css('width');
    var height = $('#block1').css('height');
    var left = $('#block1').css('left');
    var top = $('#block1').css('top');
    localStorage.setItem("b1width", width);
    localStorage.setItem("b1height", height);
    localStorage.setItem("b1left", left);
    localStorage.setItem("b1top", top);
  });

  $("#block2").mouseup(function(){
    var width = $('#block2').css('width');
    var height = $('#block2').css('height');
    var left = $('#block2').css('left');
    var top = $('#block2').css('top');
    localStorage.setItem("b2width", width);
    localStorage.setItem("b2height", height);
    localStorage.setItem("b2left", left);
    localStorage.setItem("b2top", top);
  });

  $("#block3").mouseup(function(){
    var width = $('#block3').css('width');
    var height = $('#block3').css('height');
    var left = $('#block3').css('left');
    var top = $('#block3').css('top');
    localStorage.setItem("b3width", width);
    localStorage.setItem("b3height", height);
    localStorage.setItem("b3left", left);
    localStorage.setItem("b3top", top);
  });


 });
