let money = 0;
let interns = 0;
let costumeDesigners = 0;
let scriptwriters = 0;
let cameraOperators = 0;
let specialEffectsArtists
let productionAssistants = 0;

let producers = 0; //Like angels in AdCap
function getMoney()
{
    money += 1;
    document.getElementById("moneyCount").innerHTML = 'Money: ' + money;
}
setInterval (function() {
    money = money + interns;

})