$(document).ready(function () {
    $("#btn1").click(function () {
        $("p").append(" <b>Appended text</b>.");
    });

    $("#btn2").click(function () {
        $("ol").append("<li>Appended item</li>");
    });

    $("#btn3").click(function () {
        $("#p_prepend").prepend("<b>Prepended text</b>. ");
    });
    $("#btn4").click(function () {
        $("#ol_prepend").prepend("<li>Prepended item</li>");
    });
    //-------------------------------------------
    $("#btn5").click(function () {
        $("img").before("<b>Before</b>");
    });

    $("#btn6").click(function () {
        $("img").after("<i>After</i>");
    });
})


function appendText() {
    var txt1 = "<p>Text.</p>";        // Create text with HTML
    var txt2 = $("<p></p>").text("Text.");  // Create text with jQuery
    var txt3 = document.createElement("p");
    txt3.innerHTML = "Text.";         // Create text with DOM
    $("body").append(txt1, txt2, txt3);   // Append new elements
}


//Remove
$(document).ready(function () {
    $("#btn_remove").click(function () {
        $("#h2_title_remove").remove();
    })

    $("#btn_empty_ol_de_prepend").click(function () {
        $("#ol_prepend").empty();
    })

})
//addClass()
$(document).ready(function () {
    $("#btn_addClass").click(function () {
        $("h1, h2, p").addClass("blue");
        $("div").addClass("important red");
    });

    $("#btn_toggleClass").click(function () {
        $("h1, h2, p").toggleClass("blue");
    });

    $("#btn_removeclass").click(function () {
        $("p").removeClass("blue");
    });
})