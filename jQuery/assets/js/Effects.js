$(document).ready(function () {
    $("#btn_hide").click(function () {
        $("p").hide(1000);
    });

    $("#btn_Toggle").click(function () {
        $("p").toggle();
    });

    $("#btn_fadeIn").click(function () {
        $("#div1").fadeIn();
        $("#div2").fadeIn("slow");
        $("#div3").fadeIn(3000);
    });

    $("#btn_fadeOut").click(function () {
        $("#div4").fadeOut();
        $("#div5").fadeOut("slow");
        $("#div6").fadeOut(3000);
    });

    $("#btn_fadeToggle").click(function () {
        $("#div7").fadeToggle();
        $("#div8").fadeToggle("slow");
        $("#div9").fadeToggle(3000);
    });

    $("#btn_fadeTo").click(function () {
        $("#div10").fadeTo("slow", 0.15);
        $("#div11").fadeTo("slow", 0.4);
        $("#div12").fadeTo("slow", 0.7);
    });

});