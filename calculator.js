$(document).ready(function(){
    const kulmi = ["0-40 kvm2", "40-80 kvm2", "80+ kvm2"];
    const pjerrtesia = ["0-15 grad", "15-30 grad", "30+ grad"];
    const kahjet = ["Lindje", "Jug", "Perëndim"];
    const energjia = ["5-15 kWh", "15-25 kWh"];

    $("#kalkulo").click(function(){
        
    
        var kulmiZgjedhur = -1;
        if ($('#radio1').is(':checked')) {
            kulmiZgjedhur = 0;
        } else if ($('#radio2').is(':checked')) {
            kulmiZgjedhur = 1;
        } else if ($('#radio3').is(':checked')) {
            kulmiZgjedhur = 2;
        } else {
            kulmiZgjedhur = -1; // Reset to default value if none are selected
        }

        var pjerrtesiaZgjedhur = -1;
        if ($('#radio4').is(':checked')) {
            pjerrtesiaZgjedhur = 0;
        } else if ($('#radio5').is(':checked')) {
            pjerrtesiaZgjedhur = 1;
        } else if ($('#radio6').is(':checked')) {
            pjerrtesiaZgjedhur = 2;
        } else {
            pjerrtesiaZgjedhur = -1; // Reset to default value if none are selected
        }


        var kahjetZgjedhur = -1;
        if ($('#radio7').is(':checked')) {
            kahjetZgjedhur = 0;
        } else if ($('#radio8').is(':checked')) {
            kahjetZgjedhur = 1;
        }  else if ($('#radio9').is(':checked')) {
            kahjetZgjedhur = 2;
        }  else {
            kahjetZgjedhur = -1; // Reset to default value if none are selected
        }

        var energjiaZgjedhur = -1;
        if ($('#radio10').is(':checked')) {
            energjiaZgjedhur = 0;
        } else if ($('#radio11').is(':checked')) {
            energjiaZgjedhur = 1;
        }  else {
            energjiaZgjedhur = -1; // Reset to default value if none are selected
        }

        console.log("Kulmi: " + kulmi[kulmiZgjedhur]);
        console.log("Pjerrtesia: " + pjerrtesia[pjerrtesiaZgjedhur]);
        console.log("Kahjet: " + kahjet[kahjetZgjedhur]);
        console.log("Energjia: " + energjia[energjiaZgjedhur]);

        let fileName = kulmiZgjedhur + "_" + pjerrtesiaZgjedhur + "_" + kahjetZgjedhur + "_" + energjiaZgjedhur + ".pdf";

        window.open("./calculations/" + fileName);
    });

});