$(document).ready(function () {

    $("#btn_animate").click(function () {
        $("#div_animate").animate({ left: '250px' });
    });

    $("#btn_anite_left").click(function () {
        $("#div_animate_left").animate({
            left: '370px',
            opacity: '0.5',
            height: '10px',
            width: '10px'
        });
    });

    $("#btn_animate_mas").click(function () {
        $("#div_animate_mas").animate({
            left: '250px',     //avanzar left
            height: '+=150px',//largo
            width: '+=150px'  //ancho
        });
    });

    $("#btn_animation_valor_relativo").click(function () {
        $("#div_animation_valor_relativo").animate({
            height: 'toggle'
        })
    })

    $("#btn_animate_FCola").click(function () {
        var div = $("#div_animate_FCola")
        div.animate({ height: '300px', opacity: '0.4', }, "slow");
        div.animate({ width: '300px', opacity: '0.8', }, "slow");
        div.animate({ height: '100px', opacity: '0.4', }, "slow");
        div.animate({ width: '100px', opacity: '0.8', }, "slow");
    })

    $("#btn_aumentar_tamno").click(function () {
        var div = $("#div_aumentar_tamno");
        div.animate({ left: '100px' }, "slow");
        div.animate({ fontSize: '3em' }, "slow");
    });

    $("#flip3").click(function () {
        $("#panel3").slideDown(5000);
    });
    $("#stop").click(function () {
        $("#panel3").stop();
    });

})