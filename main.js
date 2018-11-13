$(function () {

    $("#btn").click(function () {
        $.ajax({
            url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
            success: function (result) {

                var developerData = "imie: " + result.imie + "<br>";
                developerData += "nazwisko: " + result.nazwisko + "<br>";
                developerData += "zawod: " + result.zawod + "<br>";
                developerData += "firma: " + result.firma + "<br>";

                $("#dane-programisty").html(developerData);

            },
            dataType: "json"


        });

    });



});