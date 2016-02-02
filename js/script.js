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
        /*
            //Find body tags in iFrame
            var frameBody = $("#result").contents().find("body");

            //Add style tags to head
            $("#result").contents().find("head").append('<style type="text/css"></style>');

            //Find style tags in iFrame
            var frameStyle = $("#result").contents().find("style");

            //If there is text in CSS, add it to the iFrame
            if ($("#css").val() != "") {
                frameStyle.text($("#css").val());
            }

            //If there is text in HTML, add it to the iFrame
            if ($("#html").val() != "") {
                frameBody.html($("#html").val());
            }


            //If there is text in JS, add it to the end of the body in the iFrame
            if ($("#js").val() != "") {

                frameBody.append('<script type="text/javascript" src="js/jquery.min.js"><\/script>')

                var scriptTag = '<script type="text/javascript">' + $("#js").val() +'<\/script>';

                frameBody.append(scriptTag);


                //body.find("script").text($("#js").val());

                //$("#result").attr("src", function ( i, val ) { return val; });
            }
        */
        $("#result").contents().find("html").html("<style>" + $("#css").val() + "</style>" + $("#html").val());

        document.getElementById("result").contentWindow.eval($("#js").val());

    });

});
