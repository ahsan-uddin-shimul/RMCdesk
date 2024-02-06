
// ------------- Common ----------------

function onLoadFunc() {
    document.getElementById("warning-message").style.display = "none";

    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "none";

    document.getElementById('rad-none').checked = "true";

    document.getElementById('rad-cem-pcc').checked = "true";

    //document.getElementById('button-re-cal-top').style.display = "none";

    document.getElementById('id-bypass').style.display = "none";

    onCallDefault();

}



function testExecute() {
    var_pass = document.getElementById("test").value;
    document.getElementById("top-con-cft").value = var_pass;
    
}


function myReset(){
    location.reload();
}

// ----------- On Top -------------------

function strengthFeed() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    psitompa_in = document.getElementById("strength-in").value;
    psitompa_fi = psitompa_in/145;
    document.getElementById("psi-mpa").value = "= " + thousands_separators(psitompa_fi.toFixed(0)) + " MPA";

    if(document.getElementById("rad-cem-pcc").checked == true) {

    switch(psitompa_in) {
        case psitompa_in="1450":   
                document.getElementById("top-st-req-1050").value = 1045;
                document.getElementById("top-sand-req-800").value = 903;
                document.getElementById("top-cem-req-400").value = 220;
                document.getElementById("top-wat-req-152").value = 170;
                document.getElementById("top-adm-wt-ratio-0.7").value = 0.90;
                functionChangeForecast();
                break;

            case psitompa_in="2000":
                document.getElementById("top-st-req-1050").value = 1050;
                document.getElementById("top-sand-req-800").value = 881;
                document.getElementById("top-cem-req-400").value = 250;
                document.getElementById("top-wat-req-152").value = 165;
                document.getElementById("top-adm-wt-ratio-0.7").value = 0.90;
                functionChangeForecast();
                break;

            case psitompa_in="2175":
                document.getElementById("top-st-req-1050").value = 1050;
                document.getElementById("top-sand-req-800").value = 888;
                document.getElementById("top-cem-req-400").value = 260;
                document.getElementById("top-wat-req-152").value = 159;
                document.getElementById("top-adm-wt-ratio-0.7").value = 0.90;
                functionChangeForecast();
                break;
                
            case psitompa_in="2500":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =877;
                document.getElementById("top-cem-req-400").value =280;
                document.getElementById("top-wat-req-152").value =157;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                    
            case psitompa_in="2900":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =853;
                document.getElementById("top-cem-req-400").value =310;
                document.getElementById("top-wat-req-152").value =155;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;

            case psitompa_in="3000":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =845;
                document.getElementById("top-cem-req-400").value =320;
                document.getElementById("top-wat-req-152").value =154;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                
            break;case psitompa_in="3200":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =839;
                document.getElementById("top-cem-req-400").value =335;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="3500":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =826;
                document.getElementById("top-cem-req-400").value =350;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="3625":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =815;
                document.getElementById("top-cem-req-400").value =360;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="3800":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =811;
                document.getElementById("top-cem-req-400").value =370;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
            
            case psitompa_in="4000":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =801;
                document.getElementById("top-cem-req-400").value =380;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                break;
                
            case psitompa_in="4200":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =782;
                document.getElementById("top-cem-req-400").value =400;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                break;
                
            case psitompa_in="4350":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =776;
                document.getElementById("top-cem-req-400").value =410;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                break;
                
            case psitompa_in="4500":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =766;
                document.getElementById("top-cem-req-400").value =420;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                break;
                
            case psitompa_in="4640":
                document.getElementById("top-st-req-1050").value =1053;
                document.getElementById("top-sand-req-800").value =759;
                document.getElementById("top-cem-req-400").value =430;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                break;
                
            case psitompa_in="4800":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =737;
                document.getElementById("top-cem-req-400").value =450;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5000":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =735;
                document.getElementById("top-cem-req-400").value =455;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5075":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =730;
                document.getElementById("top-cem-req-400").value =465;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5300":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =720;
                document.getElementById("top-cem-req-400").value =475;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
                
                
            case psitompa_in="5500":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =706;
                document.getElementById("top-cem-req-400").value =490;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5800":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =698;
                document.getElementById("top-cem-req-400").value =500;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="6000":
                document.getElementById("top-st-req-1050").value =1052;
                document.getElementById("top-sand-req-800").value =687;
                document.getElementById("top-cem-req-400").value =510;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="6300":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =676;
                document.getElementById("top-cem-req-400").value =520;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="6500":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =676;
                document.getElementById("top-cem-req-400").value =520;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;

        }
    }

        else if(document.getElementById("rad-cem-opc").checked == true)  {

        switch(psitompa_in) {

            case psitompa_in="1450":
                document.getElementById("top-st-req-1050").value =1045;
                document.getElementById("top-sand-req-800").value =929;
                document.getElementById("top-cem-req-400").value =220;
                document.getElementById("top-wat-req-152").value =165;
                document.getElementById("top-adm-wt-ratio-0.7").value =1;
                functionChangeForecast();
                break;
                
            case psitompa_in="2000":
                document.getElementById("top-st-req-1050").value =1045;
                document.getElementById("top-sand-req-800").value =910;
                document.getElementById("top-cem-req-400").value =240;
                document.getElementById("top-wat-req-152").value =165;
                document.getElementById("top-adm-wt-ratio-0.7").value =1;
                functionChangeForecast();
                break;
                
            case psitompa_in="2175":
                document.getElementById("top-st-req-1050").value =1049;
                document.getElementById("top-sand-req-800").value =899;
                document.getElementById("top-cem-req-400").value =250;
                document.getElementById("top-wat-req-152").value =165;
                document.getElementById("top-adm-wt-ratio-0.7").value =1;
                functionChangeForecast();
                break;
                
            case psitompa_in="2500":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =889;
                document.getElementById("top-cem-req-400").value =270;
                document.getElementById("top-wat-req-152").value =162;
                document.getElementById("top-adm-wt-ratio-0.7").value =1;
                functionChangeForecast();
                break;
                
            case psitompa_in="2900":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =875;
                document.getElementById("top-cem-req-400").value =290;
                document.getElementById("top-wat-req-152").value =160;
                document.getElementById("top-adm-wt-ratio-0.7").value =1;
                functionChangeForecast();
                break;
                
            case psitompa_in="3000":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =879;
                document.getElementById("top-cem-req-400").value =300;
                document.getElementById("top-wat-req-152").value =155;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="3200":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =869;
                document.getElementById("top-cem-req-400").value =310;
                document.getElementById("top-wat-req-152").value =155;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="3500":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =857;
                document.getElementById("top-cem-req-400").value =330;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="3625":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =849;
                document.getElementById("top-cem-req-400").value =340;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="3800":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =841;
                document.getElementById("top-cem-req-400").value =350;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="4000":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =834;
                document.getElementById("top-cem-req-400").value =360;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                break;
                
            case psitompa_in="4200":
                document.getElementById("top-st-req-1050").value =1053;
                document.getElementById("top-sand-req-800").value =826;
                document.getElementById("top-cem-req-400").value =370;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="4350":
                document.getElementById("top-st-req-1050").value =1052;
                document.getElementById("top-sand-req-800").value =819;
                document.getElementById("top-cem-req-400").value =380;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="4500":
                document.getElementById("top-st-req-1050").value =1052;
                document.getElementById("top-sand-req-800").value =812;
                document.getElementById("top-cem-req-400").value =390;
                document.getElementById("top-wat-req-152").value =152;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="4640":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =805;
                document.getElementById("top-cem-req-400").value =400;
                document.getElementById("top-wat-req-152").value =152;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="4800":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =798;
                document.getElementById("top-cem-req-400").value =410;
                document.getElementById("top-wat-req-152").value =152;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5000":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =791;
                document.getElementById("top-cem-req-400").value =420;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                break;
                
            case psitompa_in="5075":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =789;
                document.getElementById("top-cem-req-400").value =425;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="5300":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =785;
                document.getElementById("top-cem-req-400").value =430;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="5500":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =779;
                document.getElementById("top-cem-req-400").value =440;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="5800":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =761;
                document.getElementById("top-cem-req-400").value =460;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="6000":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =752;
                document.getElementById("top-cem-req-400").value =470;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="6300":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =736;
                document.getElementById("top-cem-req-400").value =480;
                document.getElementById("top-wat-req-152").value =153;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
                
            case psitompa_in="6500":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =736;
                document.getElementById("top-cem-req-400").value =490;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
                functionChangeForecast();
                break;
        }
    }

}

function switchPcc() {

    psitompa_in = document.getElementById("strength-in").value;

    switch(psitompa_in) {

        case psitompa_in="1450":   
                document.getElementById("top-st-req-1050").value = 1045;
                document.getElementById("top-sand-req-800").value = 903;
                document.getElementById("top-cem-req-400").value = 220;
                document.getElementById("top-wat-req-152").value = 170;
                document.getElementById("top-adm-wt-ratio-0.7").value = 0.90;
                document.getElementById("top-st-req-1050").style.color = black;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;

            case psitompa_in="2000":
                document.getElementById("top-st-req-1050").value = 1050;
                document.getElementById("top-sand-req-800").value = 881;
                document.getElementById("top-cem-req-400").value = 250;
                document.getElementById("top-wat-req-152").value = 165;
                document.getElementById("top-adm-wt-ratio-0.7").value = 0.90;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;

            case psitompa_in="2175":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =888;
                document.getElementById("top-cem-req-400").value =260;
                document.getElementById("top-wat-req-152").value =159;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="2500":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =877;
                document.getElementById("top-cem-req-400").value =280;
                document.getElementById("top-wat-req-152").value =157;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                    
            case psitompa_in="2900":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =853;
                document.getElementById("top-cem-req-400").value =310;
                document.getElementById("top-wat-req-152").value =155;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;

            case psitompa_in="3000":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =845;
                document.getElementById("top-cem-req-400").value =320;
                document.getElementById("top-wat-req-152").value =154;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            break;case psitompa_in="3200":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =839;
                document.getElementById("top-cem-req-400").value =335;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="3500":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =826;
                document.getElementById("top-cem-req-400").value =350;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="3625":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =815;
                document.getElementById("top-cem-req-400").value =360;
                document.getElementById("top-wat-req-152").value =151;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="3800":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =811;
                document.getElementById("top-cem-req-400").value =370;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
            
            case psitompa_in="4000":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =801;
                document.getElementById("top-cem-req-400").value =380;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="4200":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =782;
                document.getElementById("top-cem-req-400").value =400;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="4350":
                document.getElementById("top-st-req-1050").value =1055;
                document.getElementById("top-sand-req-800").value =776;
                document.getElementById("top-cem-req-400").value =410;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="4500":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =766;
                document.getElementById("top-cem-req-400").value =420;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="4640":
                document.getElementById("top-st-req-1050").value =1053;
                document.getElementById("top-sand-req-800").value =759;
                document.getElementById("top-cem-req-400").value =430;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.7;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="4800":
                document.getElementById("top-st-req-1050").value =1056;
                document.getElementById("top-sand-req-800").value =737;
                document.getElementById("top-cem-req-400").value =450;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="5000":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =735;
                document.getElementById("top-cem-req-400").value =455;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="5075":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =730;
                document.getElementById("top-cem-req-400").value =465;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="5300":
                document.getElementById("top-st-req-1050").value =1050;
                document.getElementById("top-sand-req-800").value =720;
                document.getElementById("top-cem-req-400").value =475;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
                
                
            case psitompa_in="5500":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =706;
                document.getElementById("top-cem-req-400").value =490;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="5800":
                document.getElementById("top-st-req-1050").value =1051;
                document.getElementById("top-sand-req-800").value =698;
                document.getElementById("top-cem-req-400").value =500;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="6000":
                document.getElementById("top-st-req-1050").value =1052;
                document.getElementById("top-sand-req-800").value =687;
                document.getElementById("top-cem-req-400").value =510;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="6300":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =676;
                document.getElementById("top-cem-req-400").value =520;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;
                
            case psitompa_in="6500":
                document.getElementById("top-st-req-1050").value =1054;
                document.getElementById("top-sand-req-800").value =676;
                document.getElementById("top-cem-req-400").value =520;
                document.getElementById("top-wat-req-152").value =150;
                document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
                functionChangeForecast();
                functionExecuteM3();
                indSand();
                indStone();
                indCement();
                indAdmix();
                indWater();
                break;

        }

        defaultHidde();
}

function switchOpc() {

    psitompa_in = document.getElementById("strength-in").value;

    switch(psitompa_in) {

        case psitompa_in="1450":
            document.getElementById("top-st-req-1050").value =1045;
            document.getElementById("top-sand-req-800").value =929;
            document.getElementById("top-cem-req-400").value =220;
            document.getElementById("top-wat-req-152").value =165;
            document.getElementById("top-adm-wt-ratio-0.7").value =1;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="2000":
            document.getElementById("top-st-req-1050").value =1045;
            document.getElementById("top-sand-req-800").value =910;
            document.getElementById("top-cem-req-400").value =240;
            document.getElementById("top-wat-req-152").value =165;
            document.getElementById("top-adm-wt-ratio-0.7").value =1;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="2175":
            document.getElementById("top-st-req-1050").value =1049;
            document.getElementById("top-sand-req-800").value =899;
            document.getElementById("top-cem-req-400").value =250;
            document.getElementById("top-wat-req-152").value =165;
            document.getElementById("top-adm-wt-ratio-0.7").value =1;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="2500":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =889;
            document.getElementById("top-cem-req-400").value =270;
            document.getElementById("top-wat-req-152").value =162;
            document.getElementById("top-adm-wt-ratio-0.7").value =1;
            functionChangeForecast();
            functionExecuteM3();
            indSand();indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="2900":
            document.getElementById("top-st-req-1050").value =1054;
            document.getElementById("top-sand-req-800").value =875;
            document.getElementById("top-cem-req-400").value =290;
            document.getElementById("top-wat-req-152").value =160;
            document.getElementById("top-adm-wt-ratio-0.7").value =1;
            functionChangeForecast();
            functionExecuteM3();
            indSand();indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="3000":
            document.getElementById("top-st-req-1050").value =1055;
            document.getElementById("top-sand-req-800").value =879;
            document.getElementById("top-cem-req-400").value =300;
            document.getElementById("top-wat-req-152").value =155;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="3200":
            document.getElementById("top-st-req-1050").value =1055;
            document.getElementById("top-sand-req-800").value =869;
            document.getElementById("top-cem-req-400").value =310;
            document.getElementById("top-wat-req-152").value =155;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="3500":
            document.getElementById("top-st-req-1050").value =1055;
            document.getElementById("top-sand-req-800").value =857;
            document.getElementById("top-cem-req-400").value =330;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="3625":
            document.getElementById("top-st-req-1050").value =1055;
            document.getElementById("top-sand-req-800").value =849;
            document.getElementById("top-cem-req-400").value =340;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="3800":
            document.getElementById("top-st-req-1050").value =1054;
            document.getElementById("top-sand-req-800").value =841;
            document.getElementById("top-cem-req-400").value =350;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in = "4000":
            document.getElementById("top-st-req-1050").value =1054;
            document.getElementById("top-sand-req-800").value =834;
            document.getElementById("top-cem-req-400").value =360;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.9;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="4200":
            document.getElementById("top-st-req-1050").value =1053;
            document.getElementById("top-sand-req-800").value =826;
            document.getElementById("top-cem-req-400").value =370;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="4350":
            document.getElementById("top-st-req-1050").value =1052;
            document.getElementById("top-sand-req-800").value =819;
            document.getElementById("top-cem-req-400").value =380;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="4500":
            document.getElementById("top-st-req-1050").value =1052;
            document.getElementById("top-sand-req-800").value =812;
            document.getElementById("top-cem-req-400").value =390;
            document.getElementById("top-wat-req-152").value =152;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="4640":
            document.getElementById("top-st-req-1050").value =1051;
            document.getElementById("top-sand-req-800").value =805;
            document.getElementById("top-cem-req-400").value =400;
            document.getElementById("top-wat-req-152").value =152;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="4800":
            document.getElementById("top-st-req-1050").value =1051;
            document.getElementById("top-sand-req-800").value =798;
            document.getElementById("top-cem-req-400").value =410;
            document.getElementById("top-wat-req-152").value =152;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="5000":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =791;
            document.getElementById("top-cem-req-400").value =420;
            document.getElementById("top-wat-req-152").value =151;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.8;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="5075":
            document.getElementById("top-st-req-1050").value =1051;
            document.getElementById("top-sand-req-800").value =789;
            document.getElementById("top-cem-req-400").value =425;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="5300":
            document.getElementById("top-st-req-1050").value =1051;
            document.getElementById("top-sand-req-800").value =785;
            document.getElementById("top-cem-req-400").value =430;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="5500":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =779;
            document.getElementById("top-cem-req-400").value =440;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="5800":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =761;
            document.getElementById("top-cem-req-400").value =460;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="6000":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =752;
            document.getElementById("top-cem-req-400").value =470;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="6300":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =736;
            document.getElementById("top-cem-req-400").value =480;
            document.getElementById("top-wat-req-152").value =153;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
            
        case psitompa_in="6500":
            document.getElementById("top-st-req-1050").value =1050;
            document.getElementById("top-sand-req-800").value =736;
            document.getElementById("top-cem-req-400").value =490;
            document.getElementById("top-wat-req-152").value =150;
            document.getElementById("top-adm-wt-ratio-0.7").value =0.85;
            functionChangeForecast();
            functionExecuteM3();
            indSand();
            indStone();
            indCement();
            indAdmix();
            indWater();
            break;
    }
    defaultHidde();
}

function defaultStrength() {
    
    var1 = document.getElementById("strength-in").value;
    var2 = document.getElementById("psi-mpa").value;

    var3 = document.getElementById('rad-cem-pcc').checked;

    if(var1 == 4000 && var2 == "= 28 MPA" && var3 == true) {
        alert("Parameters already in default status.")
    }

    else {

    document.getElementById("strength-in").value = 4000;
    document.getElementById("psi-mpa").value = "= 28 MPA";

    document.getElementById('rad-cem-pcc').checked = "true";

    document.getElementById("top-st-vol-23").value = "23";
    document.getElementById("top-cft-wt-44").value = "44";
    document.getElementById("top-cft-wt-38").value = "38";
    document.getElementById("top-st-req-1050").value = "1055";
    document.getElementById("top-sand-req-800").value = "801";
    document.getElementById("top-cem-req-400").value = "380";
    document.getElementById("top-wat-req-152").value = "150";
    document.getElementById("top-adm-wt-ratio-0.7").value = "0.70";
    document.getElementById("top-cft-m3-conv-35.315").value = "35.315";

    document.getElementById("top-st-vol-23").style.color = "black";
    document.getElementById("top-cft-wt-44").style.color = "black";
    document.getElementById("top-cft-wt-38").style.color = "black";
    document.getElementById("top-st-req-1050").style.color = "black";
    document.getElementById("top-sand-req-800").style.color = "black";
    document.getElementById("top-cem-req-400").style.color = "black";
    document.getElementById("top-wat-req-152").style.color = "black";
    document.getElementById("top-adm-wt-ratio-0.7").style.color = "black";
    document.getElementById("top-cft-m3-conv-35.315").style.color = "black";

    

    functionExecuteM3();
    indSand();
    indStone();
    indCement();
    indAdmix();
    indWater();
}
onCallDefault();



}



function functionExecuteM3() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;

    var_con_cft = document.getElementById("top-con-cft").value;
    var_det_cft = var_con_cft * 100000;
    document.getElementById("qty-in-det-top").value = " = " + thousands_separators(var_det_cft.toFixed(0)) + " CFT";
    var_m3_35 = var_det_cft / var_35;

    document.getElementById("top-con-m3").value = thousands_separators(var_m3_35.toFixed(0));

    document.getElementById("mt-calc").value = thousands_separators((var_m3_35/8).toFixed(0));

    document.getElementById("mt-trip").value = "Each " + thousands_separators(((var_m3_35/8)/95).toFixed(0)) + " trips";


    document.getElementById("cp-calc").value = thousands_separators(((var_m3_35/8)/4).toFixed(0));
    document.getElementById("cp-trip").value = "Each " + thousands_separators((((var_m3_35/8)/4)/30).toFixed(0)) + " trips";



    var_34_ontop = parseInt(document.getElementById("opt-34").value);
    var_12_ontop = parseInt(document.getElementById("opt-12").value);



    if (var_34_ontop + var_12_ontop != 100) {
    
    alert("Ratio must equals 100");

    document.getElementById("opt-34").value = 80;
    document.getElementById("opt-12").value = 20;
    }

    else {
    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;




    var_con_cft = document.getElementById("top-con-cft").value;

    var_det_cft = var_con_cft * 100000;

    document.getElementById("qty-in-det-top").value = " = " + thousands_separators(var_det_cft.toFixed(0)) + " CFT";

    var_m3_35 = var_det_cft / var_35;


    //document.getElementById("top-con-m3").value = thousands_separators(var_m3_35.toFixed(0));

    var_opt_34 = document.getElementById("opt-34").value;
    var_opt_12 = document.getElementById("opt-12").value;


    document.getElementById("top-st-req-tot").value = thousands_separators(((var_m3_35 * var_1050)/1000).toFixed(0)) + " (Total)";


    document.getElementById("top-st-req-34").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_34/100)).toFixed(0))   + " (3/4 inc)";
    document.getElementById("top-st-req-12").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_12/100)).toFixed(0)) + " (1/2 inc)";

    
    // Sand in CFT
    document.getElementById("top-sand-cft").value = thousands_separators(((var_m3_35 * var_800)/var_38).toFixed(0));

    // Cement in MT
    document.getElementById("top-cem-mt").value = thousands_separators(((var_m3_35*var_400)/1000).toFixed(0));
    
    // Admixture in MT
    document.getElementById("top-adm-mt").value = thousands_separators((((var_m3_35*var_400)*(var_70/100))/1000).toFixed(3));

    //----IBC
    document.getElementById("top-adm-ibc").value = "IBC Drum: " + thousands_separators((((var_m3_35*var_400)*(var_70/100))/1000).toFixed(0));
    //----200kg
    document.getElementById("top-adm-200d").value = "200kg Drum: " + thousands_separators(((((((var_m3_35*var_400)*(var_70/100))/1000))*1000)/200).toFixed(0));

    // Water in MT
    document.getElementById("top-wat-mt").value = thousands_separators(((var_m3_35*var_152)/1000).toFixed(0));
    }

}

/// =========================================================================
function changeExecute_12() {
    var_uni = document.getElementById("test_12").value;
    document.getElementById("top-con-cft").value = var_uni;

functionExecuteM3();
}

function changeExecute_14() {
    var_uni = document.getElementById("test_14").value;
    document.getElementById("top-con-cft").value = var_uni;

functionExecuteM3();
}

function clickPass_off(){
    document.getElementById("blur").value = 1;
}

function clickPass_down(){
    document.getElementById("blur").value = 2;
}

function changeExecuteFocus() {
    if(document.getElementById("blur").value == 1){
        var_uni = document.getElementById("test_focus").value;
        document.getElementById("top-con-cft").value = var_uni;

        functionExecuteM3();
    }

    else if(document.getElementById("blur").value == 2) {
        var_uni = document.getElementById("test_focus").value;
        document.getElementById("mon-prd").value = var_uni;

        forecastCalcAuto();
    }
    
    else {
        alert("Please select the field to transfer the value.");
    }
}

/// =========================================================================
/// =========================================================================


function clickPass_top() {
    
    document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
    document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
    document.getElementById("bypass").value = 1;
}
function clickPass_bot() {
    
    document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
    document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
    document.getElementById("bypass").value = 2;
}


function click0700() {

    

    
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-7.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-7.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click0750() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-7.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-7.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click0800() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-8.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-8.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click0850() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-8.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-8.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click0900() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-9.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-9.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click0950() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-9.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-9.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1000() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-10.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-10.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1050() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-10.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-10.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1100() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-11.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-11.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1150() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-11.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-11.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1200() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-12.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-12.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1250() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-12.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-12.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1300() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-13.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-13.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1350() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-13.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-13.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1400() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-14.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-14.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1450() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-14.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-14.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1500() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-15.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-15.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1550() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-15.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-15.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1600() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-16.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-16.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1650() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-16.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-16.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1700() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-17.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-17.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1750() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-17.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-17.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1800() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-18.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-18.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1850() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-18.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-18.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1900() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-19.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-19.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click1950() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-19.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-19.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click2000() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-20.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-20.0").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}

function click2050() {
    if(document.getElementById("bypass").value == 1){
        
        document.getElementById("top-con-cft").value = document.getElementById("b-20.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(251, 203, 30)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(196, 255, 255)";
        functionExecuteM3();
    }
    else if(document.getElementById("bypass").value == 2) {
        
        document.getElementById("mon-prd").value = document.getElementById("b-20.5").value;
        document.getElementById("top-con-cft").style.backgroundColor = "rgb(196, 255, 255)";
        document.getElementById("mon-prd").style.backgroundColor = "rgb(251, 203, 30)";
        forecastCalcAuto();
    }    
    else {
        alert("Please select the target field to transfer the value.");
    }
}




/// =========================================================================
/// =========================================================================

function functionOnTop() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    

    var_34_ontop = parseInt(document.getElementById("opt-34").value);
    var_12_ontop = parseInt(document.getElementById("opt-12").value);



    if (var_34_ontop + var_12_ontop != 100) {
    
    alert("Ratio must equals 100");

    document.getElementById("opt-34").value = 80;
    document.getElementById("opt-12").value = 20;
    }

    else {
    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;




    var_con_cft = document.getElementById("top-con-cft").value;

    var_det_cft = var_con_cft * 100000;

    document.getElementById("qty-in-det-top").value = " = " + thousands_separators(var_det_cft.toFixed(0)) + " CFT";

    var_m3_35 = var_det_cft / var_35;


    //document.getElementById("top-con-m3").value = thousands_separators(var_m3_35.toFixed(0));

    var_opt_34 = document.getElementById("opt-34").value;
    var_opt_12 = document.getElementById("opt-12").value;


    document.getElementById("top-st-req-tot").value = thousands_separators(((var_m3_35 * var_1050)/1000).toFixed(0)) + " (Total)";


    document.getElementById("top-st-req-34").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_34/100)).toFixed(0))   + " (3/4 inc)";
    document.getElementById("top-st-req-12").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_12/100)).toFixed(0)) + " (1/2 inc)";

    
    // Sand in CFT
    document.getElementById("top-sand-cft").value = thousands_separators(((var_m3_35 * var_800)/var_38).toFixed(0));

    // Cement in MT
    document.getElementById("top-cem-mt").value = thousands_separators(((var_m3_35*var_400)/1000).toFixed(0));
    
    // Admixture in MT
    document.getElementById("top-adm-mt").value = thousands_separators((((var_m3_35*var_400)*(var_70/100))/1000).toFixed(0));

    // Water in MT
    document.getElementById("top-wat-mt").value = thousands_separators(((var_m3_35*var_152)/1000).toFixed(0));
    }


    
}

function functionDefaultTop() {

    var_23_chk = document.getElementById("top-st-vol-23").value;
    var_44_chk = document.getElementById("top-cft-wt-44").value;
    var_38_chk = document.getElementById("top-cft-wt-38").value;
    var_1050_chk = document.getElementById("top-st-req-1050").value;
    var_800_chk = document.getElementById("top-sand-req-800").value;
    var_400_chk = document.getElementById("top-cem-req-400").value;
    var_152_chk = document.getElementById("top-wat-req-152").value;
    var_70_chk = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35_chk = document.getElementById("top-cft-m3-conv-35.315").value;

    document.getElementById("strength-in").value = 4000;
    document.getElementById("psi-mpa").value = "= 28 MPA";

    document.getElementById('rad-cem-pcc').checked = "true";

    


    if (var_23_chk==23 && var_44_chk==44 && var_38_chk==38 && var_1050_chk==1055 && var_800_chk==801 && var_400_chk==380 && var_152_chk==150 && var_70_chk=="0.70" && var_35_chk==35.315) {

        alert("All parameters already in default value.");
        
        document.getElementById("top-st-vol-23").style.color = "black";
        document.getElementById("top-cft-wt-44").style.color = "black";
        document.getElementById("top-cft-wt-38").style.color = "black";
        document.getElementById("top-st-req-1050").style.color = "black";
        document.getElementById("top-sand-req-800").style.color = "black";
        document.getElementById("top-cem-req-400").style.color = "black";
        document.getElementById("top-wat-req-152").style.color = "black";
        document.getElementById("top-adm-wt-ratio-0.7").style.color = "black";
        document.getElementById("top-cft-m3-conv-35.315").style.color = "black";

        

    }

    else {

    document.getElementById("top-st-vol-23").value = "23";
    document.getElementById("top-cft-wt-44").value = "44";
    document.getElementById("top-cft-wt-38").value = "38";
    document.getElementById("top-st-req-1050").value = "1055";
    document.getElementById("top-sand-req-800").value = "801";
    document.getElementById("top-cem-req-400").value = "380";
    document.getElementById("top-wat-req-152").value = "150";
    document.getElementById("top-adm-wt-ratio-0.7").value = "0.70";
    document.getElementById("top-cft-m3-conv-35.315").value = "35.315";

    document.getElementById("top-st-vol-23").style.color = "black";
    document.getElementById("top-cft-wt-44").style.color = "black";
    document.getElementById("top-cft-wt-38").style.color = "black";
    document.getElementById("top-st-req-1050").style.color = "black";
    document.getElementById("top-sand-req-800").style.color = "black";
    document.getElementById("top-cem-req-400").style.color = "black";
    document.getElementById("top-wat-req-152").style.color = "black";
    document.getElementById("top-adm-wt-ratio-0.7").style.color = "black";
    document.getElementById("top-cft-m3-conv-35.315").style.color = "black";

    

    onCallChange();
    functionChangeForecast();

    }
    onCallDefault();
}

function functionChange23() {

    document.getElementById("top-st-vol-23").style.color = "red";
    defaultHidde();
    onCallChange();
    functionChangeForecast();
    
    
}
function functionChange44() {
    document.getElementById("top-cft-wt-44").style.color = "red";   
    defaultHidde();
    onCallChange();
    functionChangeForecast();
    

}
function functionChange38() {
    document.getElementById("top-cft-wt-38").style.color = "red"; 
    defaultHidde();
    onCallChange();
    functionChangeForecast();
    
}
function functionChange1050() {
    document.getElementById("top-st-req-1050").style.color = "red"; 
    defaultHidde();   
    onCallChange();
    functionChangeForecast();
    
}
function functionChange800() {
    document.getElementById("top-sand-req-800").style.color = "red"; 
    defaultHidde();
    onCallChange();  
    functionChangeForecast();
    
}
function functionChange400() {
    document.getElementById("top-cem-req-400").style.color = "red"; 
    defaultHidde(); 
    onCallChange();    
    functionChangeForecast();
    
}
function functionChange152() {
    document.getElementById("top-wat-req-152").style.color = "red";   
    defaultHidde();
    onCallChange();
    functionChangeForecast();
    
}
function functionChange7() {
    document.getElementById("top-adm-wt-ratio-0.7").style.color = "red"; 
    defaultHidde();
    onCallChange(); 
    functionChangeForecast();
     
}
function functionChange35() {
    document.getElementById("top-cft-m3-conv-35.315").style.color = "red";   
    defaultHidde();
    onCallChange(); 
    functionChangeForecast();
    

}

function functionAdmix() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    
    var1 = document.getElementById("default-cement").value;
    varConv = document.getElementById("default-conv").value;
    varAdm = (document.getElementById("default-adm").value)/100;
    var2 = document.getElementById("con-cft-adm").value;

    var3 = var2*100000;

    document.getElementById("qty-in-det-admix").value = thousands_separators((var3).toFixed(0)) + " CFT";
    
    document.getElementById("con-m3-adm").value = thousands_separators((var3/varConv).toFixed(0));
    document.getElementById("result-admix-kg").value = thousands_separators((var1*varAdm*(var3/varConv)).toFixed(0));
    document.getElementById("result-admix-mt").value = thousands_separators(((var1*varAdm*(var3/varConv))/1000).toFixed(3));

}

function resetAdmix() {

    var1 = document.getElementById("default-cement").value;
    varConv = document.getElementById("default-conv").value;
    varAdm = (document.getElementById("default-adm").value)/100;
    
    if (var1 == 400 && varAdm == 0.70 && varConv == 35.315) {
        functionAlert();
    
    }
    
    else {
    
        document.getElementById("default-cement").value = 400;
        document.getElementById("default-conv").value = 35.315;
        document.getElementById("default-adm").value = "0.70";

        autoAdmix();

    }


}

function autoAdmix () {
    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    
    var1 = document.getElementById("default-cement").value;
    varConv = document.getElementById("default-conv").value;
    varAdm = (document.getElementById("default-adm").value)/100;
    var2 = document.getElementById("con-cft-adm").value;

    var3 = var2*100000;

    document.getElementById("qty-in-det-admix").value = thousands_separators((var3).toFixed(0)) + " CFT";
    
    document.getElementById("con-m3-adm").value = thousands_separators((var3/varConv).toFixed(0));
    document.getElementById("result-admix-kg").value = thousands_separators((var1*varAdm*(var3/varConv)).toFixed(0));
    document.getElementById("result-admix-mt").value = thousands_separators(((var1*varAdm*(var3/varConv))/1000).toFixed(0));
}


function functionCement() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    
    var1 = document.getElementById("default-cement_cement").value;
    var2 = document.getElementById("conv-fact").value;
    var3 = document.getElementById("con-cft-cement").value;

    var4 = var3*100000;
    
    document.getElementById("qty-in-det-cem").value = thousands_separators((var4).toFixed(0)) + " CFT";

    document.getElementById("con-m3-cement").value = thousands_separators((var4/var2).toFixed(0));
    document.getElementById("result-cement-kg").value = thousands_separators((var1*(var4/var2)).toFixed(0));
    document.getElementById("result-cement").value = thousands_separators(((var1*(var4/var2))/1000).toFixed(0));

}

function resetCement() {

    var_1 = document.getElementById("default-cement_cement").value;
    var_2 = document.getElementById("conv-fact").value;

    if (var_1 == 380 && var_2 == 35.315) {
        functionAlert();
    
    }
    
    else {
    
    document.getElementById("default-cement_cement").value = 380;
    document.getElementById("conv-fact").value = 35.315;

    autoCement();

}

}

function autoCement () {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    var1 = document.getElementById("default-cement_cement").value;
    var2 = document.getElementById("conv-fact").value;
    var3 = document.getElementById("con-cft-cement").value;

    var4 = var3*100000;
    
    document.getElementById("qty-in-det-cem").value = thousands_separators((var4).toFixed(0)) + " CFT";

    document.getElementById("con-m3-cement").value = thousands_separators((var4/var2).toFixed(0));
    document.getElementById("result-cement-kg").value = thousands_separators((var1*(var4/var2)).toFixed(0));
    document.getElementById("result-cement").value = thousands_separators(((var1*(var4/var2))/1000).toFixed(0));

}



function onChangeDropDown() {
    var_1 = document.getElementById("select-34ratio").value;
    var_2 = document.getElementById("select-12ratio").value;

    var_sum = parseInt(var_1) + parseInt(var_2);

    

    if(var_sum>100){
        
        document.getElementById("warning-message").style.display = "block";
        
    }
    else if(var_sum<100) {
        
        document.getElementById("warning-message").style.display = "block";
        
    }
    else {
        document.getElementById("warning-message").style.display = "none";

        functionStone();
    }
}   

function functionStone() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

        var1 = document.getElementById("fix-id1").value;
        var2 = document.getElementById("fix-id2").value;
        var3 = document.getElementById("fix-id3").value;
        var4 = document.getElementById("fix-id4").value;
        var5 = document.getElementById("select-34ratio").value;
        var6 = document.getElementById("select-12ratio").value;
        var7 = document.getElementById("con-cft-stone").value;
        var8 = document.getElementById("con-m3-stone").value;
        

        var9 = var7*100000;
        document.getElementById("qty-in-det-sto").value = thousands_separators(var9) + " CFT";


        document.getElementById("con-m3-stone").value = thousands_separators((var9/var4).toFixed(0));

        document.getElementById("st-mt").value = thousands_separators((((var9/var4)*var3)/1000).toFixed(0));
        document.getElementById("st-kg").value = thousands_separators(((var9/var4)*var3).toFixed(0));
        document.getElementById("st-cft").value = thousands_separators(((var9/var4)*var1).toFixed(0));

        document.getElementById("34-res").value = thousands_separators((((((var9/var4)*var3)/1000)*(var5/100)).toFixed(0)));
        document.getElementById("12-res").value = thousands_separators((((((var9/var4)*var3)/1000)*(var6/100)).toFixed(0)));

}

function resetStone() {

        var1 = document.getElementById("fix-id1").value;
        var2 = document.getElementById("fix-id2").value;
        var3 = document.getElementById("fix-id3").value;
        var4 = document.getElementById("fix-id4").value;
        
        if (var1 == 23 && var2 == 44 && var3 == 1055 && var4 == 35.315) {
            functionAlert();
        
        }
        
        else {
        
        document.getElementById("fix-id1").value = 23;
        document.getElementById("fix-id2").value = 44;
        document.getElementById("fix-id3").value = 1055;
        document.getElementById("fix-id4").value = 35.315;
        
            
        
            autoStone();
        }
        


}

function autoStone() {
    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

        var1 = document.getElementById("fix-id1").value;
        var2 = document.getElementById("fix-id2").value;
        var3 = document.getElementById("fix-id3").value;
        var4 = document.getElementById("fix-id4").value;
        var5 = document.getElementById("select-34ratio").value;
        var6 = document.getElementById("select-12ratio").value;
        var7 = document.getElementById("con-cft-stone").value;
        var8 = document.getElementById("con-m3-stone").value;
        

        var9 = var7*100000;
        document.getElementById("qty-in-det-sto").value = thousands_separators(var9) + " CFT";


        document.getElementById("con-m3-stone").value = thousands_separators((var9/var4).toFixed(0));

        document.getElementById("st-mt").value = thousands_separators((((var9/var4)*var3)/1000).toFixed(0));
        document.getElementById("st-kg").value = thousands_separators(((var9/var4)*var3).toFixed(0));
        document.getElementById("st-cft").value = thousands_separators(((var9/var4)*var1).toFixed(0));

        document.getElementById("34-res").value = thousands_separators((((((var9/var4)*var3)/1000)*(var5/100)).toFixed(0)));
        document.getElementById("12-res").value = thousands_separators((((((var9/var4)*var3)/1000)*(var6/100)).toFixed(0)));

}



function onFeed() {
    
    var_10 =  document.getElementById("select-34ratio").value;
    var_11 = document.getElementById("select-12ratio").value;


    if (var_10 == 80 && var_11 == 20) {
        alert("Ratio already in default status");
    }

    else {
    
    document.getElementById("select-34ratio").value = 80;
    document.getElementById("select-12ratio").value = 20;

    document.getElementById("warning-message").style.display = "none";

    functionStone();
    }
}

function onFeedTop() {
  
    var_34_ontop = document.getElementById("opt-34").value;
    var_12_ontop = document.getElementById("opt-12").value;

    if (var_34_ontop == "80" && var_12_ontop == "20") {

            
            alert("Ratio already in default status");

            

    }
    else {
    document.getElementById("opt-34").value = 80;
    document.getElementById("opt-12").value = 20;

    document.getElementById("opt-34").style.color = "black";
    document.getElementById("opt-12").style.color = "black";

    document.getElementById("error-inp").value = "";

    onCallChange();
}
    
}

function onChangeTop() {
    var_34_ontop = document.getElementById("opt-34").value;
    var_12_ontop = document.getElementById("opt-12").value;

    if (var_34_ontop + var_12_ontop != 100) {
    
    alert("Ratio must equals 100");

    document.getElementById("opt-34").value = 80;
    document.getElementById("opt-12").value = 20;
    }

    else {
        // Nothing;
    }



}


// -------------- SAND ----------------------------------------------------------------------------------------
function functionSand() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

        var1 = document.getElementById("fix-sand").value;
        var2 = document.getElementById("fix-conv").value;
        var3 = document.getElementById("fix-weight").value;
        
        var4 = document.getElementById("con-cft-sand").value;
        
        var5 = var4*100000;

        document.getElementById("qty-in-det-sand").value = thousands_separators((var5).toFixed(0)) + " CFT";

        document.getElementById("con-m3-sand").value = thousands_separators((var5/var2).toFixed(0));
        
        document.getElementById("result-cft-sand").value = thousands_separators((((var5/var2)*var1)/var3).toFixed(0));
        document.getElementById("result-mt-sand").value = thousands_separators((((var5/var2)*var1)/1000).toFixed(0));

        //document.getElementById("percentage").value = (((((var5/var2)*800)/var3)/var5)*100).toFixed(0) + "%" + " of Concrete";
        
}

function resetSand() {

    var1 = document.getElementById("fix-sand").value;
    var2 = document.getElementById("fix-conv").value;
    var3 = document.getElementById("fix-weight").value;

    if (var1 == 801 && var2 == 35.315 && var3 == 38) {
        functionAlert();
    
    }
    
    else {
    
    document.getElementById("fix-sand").value = 801;
    document.getElementById("fix-conv").value = 35.315;
    document.getElementById("fix-weight").value = 38;
    
    autoSand();
    }

}

function autoSand() {
    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

        var1 = document.getElementById("fix-sand").value;
        var2 = document.getElementById("fix-conv").value;
        var3 = document.getElementById("fix-weight").value;
        
        var4 = document.getElementById("con-cft-sand").value;
        
        var5 = var4*100000;

        document.getElementById("qty-in-det-sand").value = thousands_separators((var5).toFixed(0)) + " CFT";

        document.getElementById("con-m3-sand").value = thousands_separators((var5/var2).toFixed(0));
        
        document.getElementById("result-cft-sand").value = thousands_separators((((var5/var2)*800)/var3).toFixed(0));
        document.getElementById("result-mt-sand").value = thousands_separators((((var5/var2)*800)/1000).toFixed(0));

        document.getElementById("percentage").value = (((((var5/var2)*800)/var3)/var5)*100).toFixed(0) + "%" + " of Concrete";
}








// -------------- WATER ----------------------------------------------------------------------------------------
function autoWater() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    
    var1 = document.getElementById("wc-ratio").value;
    var2 = document.getElementById("con-fix-cem").value;
    var3 = document.getElementById("water-fix").value;
    var4 = document.getElementById("con-fix-fac").value;
        
    var5 = document.getElementById("con-cft-wat").value*100000;

    document.getElementById("qty-in-det-wat").value = thousands_separators((var5).toFixed(0)) + " CFT";

    

    document.getElementById("con-m3-wat").value = thousands_separators((var5/var4).toFixed(0));
    document.getElementById("req-w-kg").value = thousands_separators(((var5/var4)*var3).toFixed(0));
    document.getElementById("req-w-mt").value = thousands_separators((((var5/var4)*var3)/1000).toFixed(0));

    

}

function resetWater() {

    var_1 = document.getElementById("wc-ratio").value;
    var_2 = document.getElementById("con-fix-cem").value;
    var_3 = document.getElementById("water-fix").value;
    var_4 = document.getElementById("con-fix-fac").value;

if (var_1 == .40 && var_2 == 380 && var_3 == 150 && var_4 == 35.315) {
    functionAlert();

}

else {

    document.getElementById("wc-ratio").value = 0.40;
    document.getElementById("con-fix-cem").value = 380;
    document.getElementById("water-fix").value = 150;
    document.getElementById("con-fix-fac").value = 35.315;

    

    autoWater();
}
}


function onChange34Col() {
    var_34_ontop = parseInt(document.getElementById("opt-34").value);
    var_12_ontop = parseInt(document.getElementById("opt-12").value);

    //document.getElementById('button-re-cal-top').style.display = "inline-block";



    if (var_34_ontop + var_12_ontop != 100) {
        document.getElementById("opt-34").style.color = "red";
        document.getElementById("opt-12").style.color = "red";

        onCall();
        //document.getElementById("error-inp").value = "Error summing 100%"
        
        
        






    }

    else if ((var_34_ontop + var_12_ontop == 100)){
        document.getElementById("opt-34").style.color = "black";
        document.getElementById("opt-12").style.color = "black";

        document.getElementById("error-inp").value = "";

        onCallChange();

        // FLAG



    }

    else {
        // Nothing;

}
}

function onChange12Col() {
    var_34_ontop = parseInt(document.getElementById("opt-34").value);
    var_12_ontop = parseInt(document.getElementById("opt-12").value);

    //document.getElementById('button-re-cal-top').style.display = "inline-block";

    if (var_34_ontop + var_12_ontop != 100) {
        document.getElementById("opt-34").style.color = "red";
        document.getElementById("opt-12").style.color = "red";

        onCall();
        //document.getElementById("error-inp").value = "Error summing 100%"
    }

    else if ((var_34_ontop + var_12_ontop == 100)){
        document.getElementById("opt-34").style.color = "black";
        document.getElementById("opt-12").style.color = "black";

        document.getElementById("error-inp").value = "";

        onCallChange();
    }

    else {
        // Nothing;
    }

}

function functionChangeForecast() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }


    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;


    var_sel = document.getElementById("reverse-select").value;
    var_qty = document.getElementById("rev-qty").value;
    

    

    switch(var_sel) {

        case var_sel = "Stone - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_1050/1000)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_1050/1000))/var_35).toFixed(0) );
            break;

        case var_sel = "Stone - CFT":
            document.getElementById("reverse-result-cft").value = thousands_separators(((var_qty*var_35)/(var_1050/var_44)).toFixed(0));
            document.getElementById("reverse-result-m3").value = thousands_separators((((var_qty*var_35)/(var_1050/var_44)/var_35)).toFixed(0));
            break;

        case var_sel = "Sand - CFT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_800/var_38)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( ((var_qty*var_35)/(var_800/var_38)/var_35).toFixed(0) );
            break;

        case var_sel = "Cement - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_400/1000)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_400/1000))/var_35).toFixed(0) );
            break;
        

        case var_sel = "Admix - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_35*var_qty)/((var_70/100)*var_400)*1000).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_35*var_qty)/((var_70/100)*var_400)*1000)/var_35).toFixed(0) );
            break;

        case var_sel = "Water - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_152/1000)).toFixed(0));
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_152/1000))/var_35).toFixed(0) );
            break;         
    }

    forecastCalcAuto(); 

}

function forecastCalcAuto() {

    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }

    rev_23 = document.getElementById("top-st-vol-23").value;
    rev_44 = document.getElementById("top-cft-wt-44").value;
    rev_38 = document.getElementById("top-cft-wt-38").value;
    rev_1050 = document.getElementById("top-st-req-1050").value;
    rev_800 = document.getElementById("top-sand-req-800").value;
    rev_400 = document.getElementById("top-cem-req-400").value;
    rev_152 = document.getElementById("top-wat-req-152").value;
    rev_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    rev_35 = document.getElementById("top-cft-m3-conv-35.315").value;


    var_sel = document.getElementById("reverse-select").value;
    var_1 = document.getElementById("rev-qty").value;
    var_2 = document.getElementById("mon-prd").value;

    var_3 = var_2*100000;

    if(var_2 == 0)
    {document.getElementById("multiple").value = "Input monthly RMC volume-";}    
    else{
    document.getElementById("multiple").value = thousands_separators(var_3) + " CFT";
    }
    
switch(var_sel) {

    case var_sel = "Stone - MT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value = (var_1/(((rev_1050/1000)*var_3)/rev_35)).toFixed(1);
    }
    break;

    case var_sel = "Stone - CFT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value = (var_1/(((rev_1050/rev_44)*var_3)/rev_35)).toFixed(1);
    }
    break;

    case var_sel = "Sand - CFT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value = (var_1/(((var_3/rev_35)*rev_800)/rev_38)).toFixed(1);
    }
    break;

    case var_sel = "Admix - MT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value =  (var_1/((((rev_70/100)*rev_400*var_3)/rev_35)/1000)).toFixed(1);
    }
    break;

    case var_sel = "Water - MT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value =  (var_1/(((rev_152/1000)*var_3)/rev_35)).toFixed(1);
    }
    break;

    case var_sel = "Cement - MT":
    if(var_2 == 0)
    {document.getElementById("mon-con").value = "-"}    
    else{
    document.getElementById("mon-con").value = (var_1/(((rev_400/1000)*var_3)/rev_35)).toFixed(1);
    }
    break;


}



}

function functionRadio() {

    if(document.getElementById("rad-stone").checked){

    document.getElementById('container-stone').style.display = "block";
    
    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "none";
    
        
    }

    else if(document.getElementById("rad-sand").checked){

    document.getElementById('container-sand').style.display = "block";
    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "none";
        
            
    }

    else if(document.getElementById("rad-cement").checked){

    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-cement').style.display = "block";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "none";
            
                
    }

    else if(document.getElementById("rad-admix").checked){

    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "block";
    document.getElementById('container-water').style.display = "none";
                
                    
    }

    else if(document.getElementById("rad-water").checked){

    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "block";
                
                    
    }

    else if(document.getElementById("rad-none").checked){

    document.getElementById('container-sand').style.display = "none";
    document.getElementById('container-stone').style.display = "none";
    document.getElementById('container-cement').style.display = "none";
    document.getElementById('container-admix').style.display = "none";
    document.getElementById('container-water').style.display = "none";
                    
                        
        }



    


    

}

function onCall() {
    document.getElementById("error-inp").value = "Error summing 100%"
}

function onCallDefault() {
    document.getElementById("error-inp-default").value = "Info: Default parameters set for PCC cement at 4,000 PSI.";
}

function defaultHidde() {
    document.getElementById("error-inp-default").value = "Info: Press 'Default' to set default parameter(s).";
}

function onCallChange() {
    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }
    
    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;




    var_con_cft = document.getElementById("top-con-cft").value;

    var_det_cft = var_con_cft * 100000;

    document.getElementById("qty-in-det-top").value = " = " + thousands_separators(var_det_cft.toFixed(0)) + " CFT";

    var_m3_35 = var_det_cft / var_35;


    //document.getElementById("top-con-m3").value = thousands_separators(var_m3_35.toFixed(0));

    var_opt_34 = document.getElementById("opt-34").value;
    var_opt_12 = document.getElementById("opt-12").value;


    document.getElementById("top-st-req-tot").value = thousands_separators(((var_m3_35 * var_1050)/1000).toFixed(0)) + " (Total)";


    document.getElementById("top-st-req-34").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_34/100)).toFixed(0))   + " (3/4 inc)";
    document.getElementById("top-st-req-12").value = thousands_separators((((var_m3_35 * var_1050)/1000)*(var_opt_12/100)).toFixed(0)) + " (1/2 inc)";

    
    // Sand in CFT
    document.getElementById("top-sand-cft").value = thousands_separators(((var_m3_35 * var_800)/var_38).toFixed(0));

    // Cement in MT
    document.getElementById("top-cem-mt").value = thousands_separators(((var_m3_35*var_400)/1000).toFixed(0));
    
    // Admixture in MT
    document.getElementById("top-adm-mt").value = thousands_separators((((var_m3_35*var_400)*(var_70/100))/1000).toFixed(3));
    //----IBC
    document.getElementById("top-adm-ibc").value = "IBC Drum: " + thousands_separators((((var_m3_35*var_400)*(var_70/100))/1000).toFixed(0));
    //----200kg
    document.getElementById("top-adm-200d").value = "200kg Drum: " + thousands_separators(((((((var_m3_35*var_400)*(var_70/100))/1000))*1000)/200).toFixed(0));

    // Water in MT
    document.getElementById("top-wat-mt").value = thousands_separators(((var_m3_35*var_152)/1000).toFixed(0));

    defaultHidde();

    indStone();
    indSand();
    indCement();
    indAdmix();
    indWater();
}


function functionAlert() {
    alert("All parameters already in default value.");
}


//

function passSand() {
    var_pass = document.getElementById("top-sand-cft").value;

    console.log(var_pass);

    let output_num = parseFloat(var_pass.replace(/,/g, ''));

    console.log(output_num);


    document.getElementById("rev-qty").value = output_num;

    document.getElementById("reverse-select").value = "Sand - CFT";
    

}

function passChange() {
    function thousands_separators(num){
        var num_parts = num.toString().split(".");
        num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return num_parts.join(".");
    }


    var_23 = document.getElementById("top-st-vol-23").value;
    var_44 = document.getElementById("top-cft-wt-44").value;
    var_38 = document.getElementById("top-cft-wt-38").value;
    var_1050 = document.getElementById("top-st-req-1050").value;
    var_800 = document.getElementById("top-sand-req-800").value;
    var_400 = document.getElementById("top-cem-req-400").value;
    var_152 = document.getElementById("top-wat-req-152").value;
    var_70 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_35 = document.getElementById("top-cft-m3-conv-35.315").value;


    var_sel = document.getElementById("reverse-select").value;
    var_qty = document.getElementById("rev-qty").value;
    

    

    switch(var_sel) {

        case var_sel = "Stone - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_1050/1000)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_1050/1000))/var_35).toFixed(0) );
            break;

        case var_sel = "Stone - CFT":
            document.getElementById("reverse-result-cft").value = thousands_separators(((var_qty*var_35)/(var_1050/var_44)).toFixed(0));
            document.getElementById("reverse-result-m3").value = thousands_separators((((var_qty*var_35)/(var_1050/var_44)/var_35)).toFixed(0));
            break;

        case var_sel = "Sand - CFT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_800/var_38)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( ((var_qty*var_35)/(var_800/var_38)/var_35).toFixed(0) );
            break;

        case var_sel = "Cement - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_400/1000)).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_400/1000))/var_35).toFixed(0) );
            break;
        

        case var_sel = "Admix - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_35*var_qty)/((var_70/100)*var_400)*1000).toFixed(0) );
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_35*var_qty)/((var_70/100)*var_400)*1000)/var_35).toFixed(0) );
            break;

        case var_sel = "Water - MT":
            document.getElementById("reverse-result-cft").value = thousands_separators( ((var_qty*var_35)/(var_152/1000)).toFixed(0));
            document.getElementById("reverse-result-m3").value = thousands_separators( (((var_qty*var_35)/(var_152/1000))/var_35).toFixed(0) );
            break;
}
}

function changeColorUniversal() {
    document.getElementById("top-st-vol-23").style.color = "black";
    document.getElementById("top-cft-wt-44").style.color = "black";
    document.getElementById("top-cft-wt-38").style.color = "black";
    document.getElementById("top-st-req-1050").style.color = "black";
    document.getElementById("top-sand-req-800").style.color = "black";
    document.getElementById("top-cem-req-400").style.color = "black";
    document.getElementById("top-wat-req-152").style.color = "black";
    document.getElementById("top-adm-wt-ratio-0.7").style.color = "black";
    document.getElementById("top-cft-m3-conv-35.315").style.color = "black";
}


function indSand() {

    var_1 = document.getElementById("top-sand-req-800").value;
    var_2 = document.getElementById("top-cft-wt-38").value;
    var_3 = document.getElementById("top-cft-m3-conv-35.315").value;

    document.getElementById("fix-sand").value = var_1;
    document.getElementById("fix-weight").value = var_2;
    document.getElementById("fix-conv").value = var_3;

    functionSand();

}

function indCement() {

    var_1 = document.getElementById("top-cem-req-400").value;
    var_2 = document.getElementById("top-cft-m3-conv-35.315").value;

    document.getElementById("default-cement_cement").value = var_1;
    document.getElementById("conv-fact").value = var_2;
    

    functionCement();

}

function indAdmix() {

    var_1 = document.getElementById("top-cem-req-400").value;
    var_2 = document.getElementById("top-adm-wt-ratio-0.7").value;
    var_3 = document.getElementById("top-cft-m3-conv-35.315").value;


    document.getElementById("default-cement").value = var_1;
    document.getElementById("default-adm").value = var_2;
    document.getElementById("default-conv").value = var_3;
    

    functionAdmix();

}

function indWater() {

    var_1 = document.getElementById("top-cem-req-400").value;
    var_2 = document.getElementById("top-wat-req-152").value;
    var_3 = document.getElementById("top-cft-m3-conv-35.315").value;


    document.getElementById("con-fix-cem").value = var_1;
    document.getElementById("water-fix").value = var_2;
    document.getElementById("con-fix-fac").value = var_3;
    

    autoWater();

}

function indStone() {

    var_1 = document.getElementById("top-st-vol-23").value;
    var_2 = document.getElementById("top-cft-wt-44").value;
    var_3 = document.getElementById("top-st-req-1050").value;
    var_4 = document.getElementById("top-cft-m3-conv-35.315").value;


    document.getElementById("fix-id1").value = var_1;
    document.getElementById("fix-id2").value = var_2;
    document.getElementById("fix-id3").value = var_3;
    document.getElementById("fix-id4").value = var_4;
    

    autoStone();

}