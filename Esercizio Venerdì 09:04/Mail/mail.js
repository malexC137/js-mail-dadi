var mailList = ["info@boolean.it", "simo@boolean.it", "florian@boolean.it", "flavio@boolean.it", "francesco@boolean.it"];
var userMail = prompt("Inserisci qui la tua mail");
var mailExist = false

for (var i = 0; i < mailList.length; i++) {
    var selectedMail = mailList[i]

    if (selectedMail === userMail) {
        var mailExist = true
        document.getElementById("mailOutput").innerHTML = "Complimenti <p class='text-red'>" + userMail + "</p> è presente nel nostro elenco!";
    } 
}

if (!mailExist) {
    document.getElementById("mailOutput").innerHTML = "Spiacenti, ma l'email da te inserita <p class='text-red'>" + userMail + "</p> non risulta presente nel nostro elenco.";
}