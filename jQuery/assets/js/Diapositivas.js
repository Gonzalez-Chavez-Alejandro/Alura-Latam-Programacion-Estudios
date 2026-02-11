$(document).ready(function(){
 $("#flip").click(function(){
    $("#panel").slideDown("slow");
  });

  $("#flip").click(function(){
    $("#panel").slideUp("slow");
  });
//------------------------------------
   $("#flip2").click(function(){
    $("#panel2").slideToggle("slow");
  });
})
