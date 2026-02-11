$(document).ready(function () {
    $("#bt1").click(function () {
        alert("HTML:" + $("#test").text)
    });

    $("#btn_val").click(function () {
        alert("Value" + $("#input_test_val").val())
    });

    $("#btn_attr").click(function () {
        alert($("#w3s").attr("id"));
        // Cambiar imagen
        // $("#foto").attr("src", "fotoNueva.jpg");

        // Cambiar enlace
        //$("#link").attr("href", "https://openai.com");

        // Desactivar un input
        // $("#input").attr("disabled", true);
    });

    //-----------------------------
    $("#btn_1").click(function () {
        $("#test1").text("Hello world!");
    });

    $("#btn_2").click(function () {
        $("#test2").html("<b>Hello world!</b>");
    });

    $("#btn_3").click(function () {
        $("#test3").val("Dolly Duck");
    });


    /*$("#btn_attr_href").click(function () {
        $("#a_w3s_attr").attr("href", "https://www.w3schools.com/jquery/");
    });*/
    $("#btn_attr_href").click(function(){
    $("#a_w3s_attr").attr("href", function(i, origValue){
      return origValue + "/jquery/"; 
    });
  }); 



})