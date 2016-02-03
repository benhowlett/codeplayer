$(document).ready(function() {

    //Function to control style and behaviour when toggles are clicked
    $(".toggle").click(function() {

        //Change the style of the toggle
        $(this).toggleClass("pressed");

        //Get the toggle's id
        var id = $(this).attr("id");

        //Use toggle id to show/hide the appropriate panel and label
        switch (id) {
            case "toggleHTML":
                $("#htmlPanel").toggleClass("hide");
                $("#htmlLabel").toggleClass("hide");
                break;
            case "toggleCSS":
                $("#cssPanel").toggleClass("hide");
                $("#cssLabel").toggleClass("hide");
                break;
            case "toggleJS":
                $("#jsPanel").toggleClass("hide");
                $("#jsLabel").toggleClass("hide");
                break;
            case "toggleResult":
                $("#resultPanel").toggleClass("hide");
                $("#resultLabel").toggleClass("hide");
                break;
            default:

        }

    });


    //Display contents of HTML, CSS and JS in iFrame
    $("#run").click(function() {

        console.log($("#result").contents().find("html"));

        $("#result").contents().find("html").html("<style>" + $("#css").val() + "</style>" + $("#html").val());

        document.getElementById("result").contentWindow.eval($("#js").val());

    });

});
