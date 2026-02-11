//alert("Hola soy prueba ");


/*
$(document).ready(function () {
    //Selectores 
    let caja = $("#caja");
    caja.text("Nuevo contenido para mi caja");
    caja.css({
        "background-color": "red",
        "border": "2px solid black",
        "color": "white",
        "width": "250px",
        "height": "250px",
        "cursor": "pointer"
    })*/



$(function () {
    let caja = $("#caja");
    caja.text("Nuevo contenido para mi caja");
    caja.css({
        "background-color": "red",
        "border": "2px solid black",
        "color": "white",
        "width": "250px",
        "height": "250px",
        "cursor": "pointer"
    });

    //Eventos 
    caja.click(function () {
        alert("has dado clic a la caja!!")
        caja.append("<p>Has dado un click a la caja</p>")
    })

    $("#btn_hide").click(function () {
        //< Oculta la caja> caja.hide();
        //caja.fadeOut();//se va de manera difuminada
        //caja.toggle();//Oculta y muestran las cosas
        //caja.hide("slow");
        caja.fadeToggle();//Oculta y muestran las cosas de manera difuminada

    })
    //quedarán ocultos:<p></p>

    //oculta todas las p
    $("#btn_borrar_p").click(function () {
        $("p").hide();
    });



    let div_test = $("#test");
    div_test.text("Nuevo contenido para mi caja");
    div_test.css({
        "background-color": "blue",
        "border": "2px solid black",
        "color": "white",
        "width": "250px",
        "height": "250px",
        "cursor": "pointer"
    });


    $("#btn_test_oculto").click(function () {
        $("#test").hide();
        $("#btn_test_oculto").prop("disabled", true);
        $("#btn_test_visible").prop("disabled", false);
    });
    $("#btn_test_visible").prop("disabled", true);
    $("#btn_test_visible").click(function () {
        $("#test").show();
        $("#btn_test_visible").prop("disabled", true);
        $("#btn_test_oculto").prop("disabled", false);
    });

    $("#miInput").prop("readonly", true);



    $("p.prueba_this").click(function () {
        $(this).css("color", "red");
    });

    let primero = $("h2.p_first");
    primero.text("Nuevo contenido para mi caja");
    primero.css({
        "color": "blue",
        "cursor": "pointer"
    });

    $("h2.p_first").click(function () {
        $("h2.p_first").nextAll("p:first").toggle();
    });
    //-----------------------------------------------------------
    //Table
    //-----------------------------------------------------------
    //$("ul li:first").css("color", "brown"); 
    //$("ul li:eq(1)").css("color", "blue");
    $("li:even").hide();
    $("ul li:odd").css("color", "green");
    $("ul li:even").css("color", "red");
    $("ul li:last").css("color", "purple");

    //------------------
    $("#lista1 li:first-child").css("color", "black");
    //------------

    $("#btn_href_ejem").click(function () {
        $("[href]").toggle();
    });

    //--------------------
    $("#btn_dblclick").dblclick(function () {
        $(this).hide();
    });

    $("#miDiv").mouseenter(function () {
        // Código a ejecutar cuando el mouse entra en el elemento
        $(this).css("color", "yellow");
        $(this).hide();
    });

    /* $("#miDiv_mouseleave").mouseleave(function () {
         // Código a ejecutar cuando el mouse sale del elemento
         alert("You entered p1!");
     });*/




});

$(document).ready(function () {
    $("#btn_dblclick").dblclick(function () {
        $(this).hide();
    });

    $("#miDiv_hover").hover(
        function () {
            // Código a ejecutar cuando el mouse sale del elemento
            $(this).css("color", "red");
        },
        function () {
            $(this).css("color", "blue");
        });
        
    //--------------------------------------------------
    $(".input__f_y_b").focus(function () {
        $(this).css("background-color", "yellow");
    });
    $(".input__f_y_b").blur(function () {
        $(this).css("background-color", "green");
    });
    //****************** */
    $("#p_on").on({
    mouseenter: function(){
      $(this).css("background-color", "lightgray");
    },  
    mouseleave: function(){
      $(this).css("background-color", "lightblue");
    }, 
    click: function(){
      $(this).css("background-color", "yellow");
    }
    });  
})();































