// ******************************************* Variables *******************************************
var puntuacioHistoria = 0;
var puntuacioTecnologia = 0;
var puntuacioGeografia = 0;
var puntuacioArt = 0;
var puntuacioCiencia = 0;
var vides = 3;

var arrayCategories = ["Historia", "Tecnologia", "Geografia", "Art", "Ciencia"];
var categoriaJoc;

var comptadorHistoria = 0;
var comptadorTecnologia = 0;
var comptadorGeografia = 0;
var comptadorArt = 0;
var comptadorCiencia = 0;


var respostaSeleccionada;
var jocHTML;

var preguntaActual;
var respostesActuals;

//                                           ------------   PREGUNTES   ---------------

//************ HISTÒRIA ************

//arrayPregunta
var preguntesHistoria = ["Qui foren els fundadors de Barcelona?", "Tàrraco és l'antecessora de l'actual...?", "Qui és el patró de Catalunya des del S. XV?", "El primer tren que va circular per l'estat espanyol unia...?", "L'any 985 els musulmans van atacar i destruir Barcelona. El cabdill que els dirigia era..."];

//arrayRespostes
var respostesHistoria = [
    ["Vikings", "Musulmans", "Americans", "Romans"],
    ["Girona", "Terrassa", "Tarragona", "Lleida"],
    ["David", "Santi", "Jordi", "Joan"],
    ["Lleida i Andorra", "Madrid i Sevilla", "Madrid i Barcelona", "Barcelona i Mataró"],
    ["Ala", "Mohamed", "Ale", "Al-Mansur"],
];

//repostesCorrectes
var correctesHistoria = ["D. Romans", "C. Tarragona", "C. Jordi", "D. Barcelona i Mataró", "D. Al-Mansur"];

//************ TECNOLOGIA ************

//arrayPregunta
var preguntesTecnologia = ["Quin d’aquests formats de Disc Dur no és natiu en el sistema operatiu MAC OS X?", "Quin d’aquests formats de Disc Dur està limitat per arxius no majors de 4 GB?", "Amb quina d’aquestes xarxes tindré millor connexió a Internet?", "Quin disc ofereix més velocitat?", "Quin component gestiona la memòria del meu ordinador?"];

//arrayRespostes
var respostesTecnologia = [
    ["ExFAT", "MS-DOS (FAT32)", "OS X (amb registre)", "NTFS"],
    ["NTFS", "ExFAT", "FAT32", "OSX"],
    ["WiFi 802.11 b", "Ethernet", "WiFi 802.11 ac", "WiFi 802.11 n"],
    ["SSD", "HDD", "USB 2.0", "USB 3.0"],
    ["CPU", "GPU", "HDD", "RAM"],
];

//repostesCorrectes
var correctesTecnologia = ["D. NTFS", "C. FAT32", "B. Ethernet", "A. SSD", "C. HDD"];


//************ GEOGRAFIA ************

//arrayPregunta
var preguntesGeografia = ["Quina és la capital d'Espanya?", "A on es troba Sydney?", "Quina és la capital de la Val d'Aran?", "Quants continents hi ha al món?", "Quina és la ciutat més poblada del món?"];

//arrayRespostes
var respostesGeografia = [
    ["Madrid", "Barcelona", "Sevilla", "Lleida"],
    ["Amèrica", "Àsia", "Austràlia", "Europa"],
    ["Vielha", "El Pont de Suert", "Sort", "Val d'Aran"],
    ["1", "10", "5", "284"],
    ["Girona", "Beijing", "Tokio", "Nova York"],
];

//repostesCorrectes
var correctesGeografia = ["A. Madrid", "C. Austràlia", "A. Vielha", "C. 5", "C. Tokio"];


//************ ART ************

//arrayPregunta
var preguntesArt = ["Qui va pintar el quadre EL JARDÍN DE LAS DELICIAS?", "Qui va escriure EL VIEJO I EL MAR?", "Qui es va tallar una orella?", "En què està esculpida la verge de Milo?", "De quin material està fet un Saxòfon?"];

//arrayRespostes
var respostesArt = [
    ["El Bosco", "Carvaggio", "Velázquez", "Arcimboldo"],
    ["Norman Mailer", "Ernest Hemingway", "García Márquez", "Truman Capote"],
    ["Van Gogh", "Luis Fon", "Michel Phins", "Maria García"],
    ["Or", "Bronze", "Marbre", "Palta"],
    ["Coure", "Or", "Plata", "Llautó"],
];

//repostesCorrectes
var correctesArt = ["A. El Bosco", "B. Ernest Hemingway", "A. Van Gogh", "C. Marbre", "D. Llautó"];

//************ CIÈNCIA ************

//arrayPregunta
var preguntesCiencia = ["Què simbolitza una H a la taula periòdica?", "Com es diu el component mínim que forma als éssers vius?", "On es troba la informació genètica de les cèl·lules?", "Amb què respira una balena?", "La lluna és?"];

//arrayRespostes
var respostesCiencia = [
    ["Oxigen", "Hidrogen", "Aigua", "Coca-Cola"],
    ["Mitocòndria", "Cèl·lula", "Bacteri", "Cervell"],
    ["Mitocòndria", "Reticle", "Nucli", "Cos"],
    ["Brànquies", "Pulmons", "Nas", "No respira"],
    ["Un cos", "Un planeta", "Un satèl·lit", "L'amiga de la Terra"],
];

//repostesCorrectes
var correctesCiencia = ["B. Hidrogen", "B. Cèl·lula", "C. Nucli", "B. Pulmons", "C. Un satèl·lit"];


// **************************************** Navegació dels botons del joc ****************************************

// Botó de benvinguda a CRÈDITS
$('#boto_credits').click(function () {
    $("#benvinguda").fadeOut();
    $("#credits").delay(400).fadeIn();
})

// Botó TORNAR de crèdits a benvinguda
$('#boto_tornar').click(function () {
    $("#credits").fadeOut();
    $("#benvinguda").delay(400).fadeIn();
})

// Botó JUGAR de benvinguda a categories
$('#boto_jugar').click(function () {
    $("#benvinguda").fadeOut()
    $("#categories").fadeIn();
})

// Botó INICI splash gris sortir
$('#boto_inici').click(function () {
    $("#splash_sortir").fadeIn();
})

// Botó sortir SI splash gris a inici
$('#boto_si').click(function () {
    location.reload();
})

// Botó sortir NO splash gris
$('#boto_no').click(function () {
    $("#splash_sortir").fadeOut();
})

// Botó CONTINUAR de puntuacions a categories
$('#boto_continuar').click(function () {
    $("#puntuacions").fadeOut();
    $("#categories").fadeIn();
    $("#boto_girar").fadeIn();
})

// BOTO CONTINUAR A CATEGORIA

$('#boto_continuar').click(function () {
    $("#puntuacions").css("display", "none");
    $("#categories").css("display", "block");
})

// Botó tornar a jugar game over
$('#boto_si_final').click(function () {
    location.reload();
})

// Botó NO game over
$('#boto_no_final').click(function () {
    location.reload();
})

// Botó tornar a jugar guanyat
$('#boto_si_guanyat').click(function () {
    location.reload();
})

// Botó NO guanyat
$('#boto_no_guanyat').click(function () {
    location.reload();
})

// ******** Ruleta botó girar ********
$('#boto_girar').click(function () {
    $("#imatge_inici_ruleta").css("display", "none");
    $("#ruleta").css("display", "block");
    $("#boto_girar").css("display", "none");

    setTimeout(function () {
        joc();
        $("#categories").css("display", "none");
        $("#joc").fadeTo("slow", 1);
        $("#imatge_inici_ruleta").css("display", "block");
        $("#ruleta").css("display", "none");
    }, 3200);
})

// **************************************** Buidar vides **********************************************
function pintarVides() {
    if (vides == 3) {
        $('#vida_3').css("display", "inline-block");
        $('#vida_2').css("display", "inline-block");
        $('#vida_1').css("display", "inline-block");
    }

    if (vides == 2) {
        $('#vida_3').css("display", "none");
        $('#vida_2').css("display", "inline-block");
        $('#vida_1').css("display", "inline-block");
    }

    if (vides == 1) {
        $('#vida_3').css("display", "none");
        $('#vida_2').css("display", "none");
        $('#vida_1').css("display", "inline-block");
    }

    if (vides == 0) {
        $('#vida_3').css("display", "none");
        $('#vida_2').css("display", "none");
        $('#vida_1').css("display", "none");
    }
    console.log("Et queden " + vides + " vides.")
};


// **************************************** Categoria a jugar ****************************************

function triarCategoria() {

    categoriaJoc = arrayCategories[Math.floor(Math.random() * arrayCategories.length)];
    console.log(categoriaJoc);
    if (eval("comptador" + categoriaJoc) == 5) {
        triarCategoria();
    }

    if (categoriaJoc === "Historia") {
        $("#seccio_historia").css("display", "block");
    } else if (categoriaJoc === "Ciencia") {
        $("#seccio_ciencia").css("display", "block")
    } else if (categoriaJoc === "Art") {
        $("#seccio_art").css("display", "block");
    } else if (categoriaJoc === "Tecnologia") {
        $("#seccio_tecnologia").css("display", "block");
    } else if (categoriaJoc === "Geografia") {
        $("#seccio_geografia").css("display", "block");
    }
}

// **************************************** JOC ****************************************
function joc() {
    triarCategoria();
    generarHTML();
}

$("body").on("click", ".resposta", function (event) {
    respostaSeleccionada = $(this).text();
    console.log(respostaSeleccionada);
    if (respostaSeleccionada === eval("correctes" + categoriaJoc)[eval("comptador" + categoriaJoc)]) {
        $(this).addClass('correcta');
        console.log("Correcte");
        $("#splash_correcte").delay(200).fadeTo("slow", 1);

        setTimeout(function () {
            $("#joc").fadeOut("slow", 0);
            setTimeout(function () {
                $("#joc").css("display", "none");
            }, 400);
            $("#puntuacions").delay(250).fadeTo("slow", 1);
            $("#puntuacions").css("display", "block");
            guanyar();
        }, 2000);


        setTimeout(canviarPregunta, 2500);

        if (categoriaJoc === "Historia") {
            puntuacioHistoria++;
        } else if (categoriaJoc === "Ciencia") {
            puntuacioCiencia++;
        } else if (categoriaJoc === "Art") {
            puntuacioArt++;
        } else if (categoriaJoc === "Tecnologia") {
            puntuacioTecnologia++;
        } else if (categoriaJoc === "Geografia") {
            puntuacioGeografia++;
        }
        pintarmedalla();

        console.log("puntuacioHistoria: " + puntuacioHistoria);
        console.log("puntuacioTecnologia: " + puntuacioTecnologia);
        console.log("puntuacioGeografia: " + puntuacioGeografia);
        console.log("puntuacioArt: " + puntuacioArt);
        console.log("puntuacioCiencia: " + puntuacioCiencia);




    } else {
        $(this).addClass('incorrecta');
        console.log("Incorrecte");
        $("#boto_girar").css("display", "block")
        console.log("La resposta correcta era: " + eval("correctes" + categoriaJoc)[eval("comptador" + categoriaJoc)]);
        vides--;
        pintarVides();
        $("#splash_incorrecte").delay(200).fadeTo("slow", 1);
        if (vides <= 0) {
            setTimeout(function () {
                perdut();
            }, 2000);
        } else {

            setTimeout(canviarPregunta, 2500);

            setTimeout(function () {
                $("#joc").fadeTo("slow", 0);
                $("#categories").delay(150).fadeTo("slow", 1);
                $("#categories").css("display", "block");
                $("#joc").css("display", "none");
            }, 2000);
        }

    }
})

// **************************************** Pintar preguntes i respostes **********************************************

function generarHTML() {
    $("#joc").fadeIn();
    preguntaActual = eval("preguntes" + categoriaJoc);
    respostesActuals = eval("respostes" + categoriaJoc);
    jocHTML = "<h2 class='text_pregunta'>" + preguntaActual[eval("comptador" + categoriaJoc)] + "</h2><div id='respostes'><div class='resposta clicable'><h2 class='text_resposta'>A. " + respostesActuals[eval("comptador" + categoriaJoc)][0] + "</h2><img src='img/307_resposta.svg'></div><div class='resposta clicable'><h2 class='text_resposta'>B. " + respostesActuals[eval("comptador" + categoriaJoc)][1] + "</h2><img src='img/307_resposta.svg'></div><div class='resposta clicable'><h2 class='text_resposta'>C. " + respostesActuals[eval("comptador" + categoriaJoc)][2] + "</h2><img src='img/307_resposta.svg'></div><div class='resposta clicable'><h2 class='text_resposta'>D. " + respostesActuals[eval("comptador" + categoriaJoc)][3] + "</h2><img src='img/307_resposta.svg'></div></div>";
    $("#preguntesjs").html(jocHTML);
    pintarVides();
};

// **************************************** Canviar a una altra pregunta **********************************************
function canviarPregunta() {
    $("#splash_correcte").css("display", "none");
    $("#splash_incorrecte").css("display", "none");


    if (categoriaJoc === "Historia") {
        comptadorHistoria++;
    } else if (categoriaJoc === "Ciencia") {
        comptadorCiencia++;
    } else if (categoriaJoc === "Art") {
        comptadorArt++;
    } else if (categoriaJoc === "Tecnologia") {
        comptadorTecnologia++;
    } else if (categoriaJoc === "Geografia") {
        comptadorGeografia++;
    }

    $("#seccio_historia").css("display", "none");
    $("#seccio_ciencia").css("display", "none")
    $("#seccio_art").css("display", "none");
    $("#seccio_tecnologia").css("display", "none");
    $("#seccio_geografia").css("display", "none");

}

// **************************************** Game over **********************************************
function perdut() {
    $("#categories").fadeOut();
    $("#joc").fadeOut();
    $("#final").delay(400).fadeIn();
    console.log("S'ha acabat el joc!");
};


// **************************************** Guanyar **********************************************
function guanyar() {
    if (puntuacioHistoria >= 3 && puntuacioArt >= 3 && puntuacioCiencia >= 3 && puntuacioGeografia >= 3 && puntuacioTecnologia>= 3) {
        $("#boto_continuar").css("display", "none");
        $("#puntuacions").fadeIn();
        $("#joc").fadeOut();
        setTimeout(function () {
            $("#guanyat").fadeIn();
        }, 1200);
    }
}

// **************************************** Emplenar puntuació ****************************************
function pintarmedalla() {
    switch (puntuacioHistoria) {
        case 1:
            if (puntuacioHistoria == 1) {
                $('#medalla_historia_1').addClass('plena_historia');
            }
            break;

        case 2:
            if (puntuacioHistoria == 2) {
                $('#medalla_historia_1').addClass('plena_historia');
                $('#medalla_historia_2').addClass('plena_historia');
            }
            break;

        case 3:
            if (puntuacioHistoria == 3) {
                $('#medalla_historia_1').addClass('plena_historia');
                $('#medalla_historia_2').addClass('plena_historia');
                $('#medalla_historia_3').addClass('plena_historia');
            }
            break;
    }

    switch (puntuacioTecnologia) {
        case 1:
            if (puntuacioTecnologia == 1) {
                $('#medalla_tecnologia_1').addClass('plena_tecnologia');
            }
            break;

        case 2:
            if (puntuacioTecnologia == 2) {
                $('#medalla_tecnologia_1').addClass('plena_tecnologia');
                $('#medalla_tecnologia_2').addClass('plena_tecnologia');
            }
            break;

        case 3:
            if (puntuacioTecnologia == 3) {
                $('#medalla_tecnologia_1').addClass('plena_tecnologia');
                $('#medalla_tecnologia_2').addClass('plena_tecnologia');
                $('#medalla_tecnologia_3').addClass('plena_tecnologia');
            }
            break;
    }

    switch (puntuacioGeografia) {
        case 1:
            if (puntuacioGeografia == 1) {
                $('#medalla_geografia_1').addClass('plena_geografia');
            }
            break;

        case 2:
            if (puntuacioGeografia == 2) {
                $('#medalla_geografia_1').addClass('plena_geografia');
                $('#medalla_geografia_2').addClass('plena_geografia');
            }
            break;

        case 3:
            if (puntuacioGeografia == 3) {
                $('#medalla_geografia_1').addClass('plena_geografia');
                $('#medalla_geografia_2').addClass('plena_geografia');
                $('#medalla_geografia_3').addClass('plena_geografia');
            }
            break;

    }

    switch (puntuacioArt) {
        case 1:
            if (puntuacioArt == 1) {
                $('#medalla_art_1').addClass('plena_art');
            }
            break;

        case 2:
            if (puntuacioArt == 2) {
                $('#medalla_art_1').addClass('plena_art');
                $('#medalla_art_2').addClass('plena_art');
            }
            break;

        case 3:
            if (puntuacioArt == 3) {
                $('#medalla_art_1').addClass('plena_art');
                $('#medalla_art_2').addClass('plena_art');
                $('#medalla_art_3').addClass('plena_art');
            }
            break;

    }

    switch (puntuacioCiencia) {
        case 1:
            if (puntuacioCiencia == 1) {
                $('#medalla_ciencia_1').addClass('plena_ciencia');
            }
            break;

        case 2:
            if (puntuacioCiencia == 2) {
                $('#medalla_ciencia_1').addClass('plena_ciencia');
                $('#medalla_ciencia_2').addClass('plena_ciencia');
            }
            break;

        case 3:
            if (puntuacioCiencia == 3) {
                $('#medalla_ciencia_1').addClass('plena_ciencia');
                $('#medalla_ciencia_2').addClass('plena_ciencia');
                $('#medalla_ciencia_3').addClass('plena_ciencia');
            }
            break;
    };
}
